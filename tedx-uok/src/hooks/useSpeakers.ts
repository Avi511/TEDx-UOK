import { useState, useEffect } from "react";
import { supabase } from "../api/supabaseClient";

export interface Speaker {
  id: number;
  full_name: string;
  title: string;
  talk_title: string;
  photo_url: string;
  bio_short?: string;
}

export const useSpeakers = (limit?: number) => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        setLoading(true);
        let query = supabase.from("speakers").select("*");

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) throw error;
        setSpeakers(data || []);
      } catch (err: any) {
        console.error("Error fetching speakers:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, [limit]);

  return { speakers, loading };
};
