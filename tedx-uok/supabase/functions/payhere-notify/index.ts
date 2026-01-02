import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { createHash } from "node:crypto";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const formData = await req.formData();
    const entries = Object.fromEntries(formData.entries());
    console.log("PayHere Notify Received:", JSON.stringify(entries));

    const merchant_id = formData.get("merchant_id")?.toString();
    const order_id = formData.get("order_id")?.toString();
    const payment_id = formData.get("payment_id")?.toString();
    const payhere_amount = formData.get("payhere_amount")?.toString();
    const payhere_currency = formData.get("payhere_currency")?.toString();
    const status_code = formData.get("status_code")?.toString();
    const md5sig = formData.get("md5sig")?.toString();

    const merchantSecret = Deno.env.get("PAYHERE_MERCHANT_SECRET");
    const envMerchantId = Deno.env.get("PAYHERE_MERCHANT_ID");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    // Updated: Use service role to bypass RLS
    const supabaseServiceRoleKey =
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ||
      Deno.env.get("SERVICE_ROLE_KEY");

    if (
      !merchantSecret ||
      !envMerchantId ||
      !supabaseUrl ||
      !supabaseServiceRoleKey
    ) {
      throw new Error("Server Configuration Error: Missing Secrets");
    }

    if (merchant_id !== envMerchantId) {
      throw new Error("Invalid Merchant ID Mismatch");
    }

    const md5 = (content: string) =>
      createHash("md5").update(content).digest("hex").toUpperCase();
    const hashedSecret = md5(merchantSecret);
    const hashString = `${merchant_id}${order_id}${payhere_amount}${payhere_currency}${status_code}${hashedSecret}`;
    const calculatedSig = md5(hashString);

    if (calculatedSig !== md5sig) {
      console.error("Signature Mismatch", {
        expected: calculatedSig,
        received: md5sig,
      });
      throw new Error("Invalid Signature");
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

    let paymentStatus = "";
    let registrationStatus = "";

    if (status_code === "2") {
      paymentStatus = "paid";
      registrationStatus = "Confirmed";
    } else if (status_code === "-1") {
      paymentStatus = "cancelled";
      registrationStatus = "Cancelled";
    } else if (status_code === "-2") {
      paymentStatus = "failed";
      registrationStatus = "Failed";
    }

    if (paymentStatus) {
      const { data: paymentData, error: paymentError } = await supabaseAdmin
        .from("payments")
        .update({
          payment_status: paymentStatus,
          payment_reference: payment_id,
          paid_at: new Date().toISOString(),
        })
        .eq("payment_id", order_id)
        .select("registration_id")
        .single();

      if (!paymentError && paymentData) {
        await supabaseAdmin
          .from("registrations")
          .update({ status: registrationStatus })
          .eq("registration_id", paymentData.registration_id);
      }
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("PayHere Notify Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
});
