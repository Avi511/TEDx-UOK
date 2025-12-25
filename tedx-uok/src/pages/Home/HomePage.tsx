import About from "../../components/About";
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import Hero from "../../components/Hero";
import Highlights, { type Highlight } from "../../components/Highlights";
import Speakers, { type Speaker } from "../../components/Speakers";
// import { Footer } from "../../components/layout/Footer";
// import { Navbar } from "../../components/layout/Navbar";
import { Handshake, Lightbulb, Mic2, Users } from "lucide-react";
import { useEffect } from "react";

// Import ALL Hooks
import { useEvents } from "../../hooks/useEvents";
import { useSpeakers } from "../../hooks/useSpeakers";
import { usePartners } from "../../hooks/usePartners"; // <--- NEW

// Import Components
import About from "../../components/home/About";
import Countdown from "../../components/home/Countdown";
import CTASection from "../../components/home/CTASection";
import Hero from "../../components/home/Hero";
import Highlights from "../../components/home/Highlights";
import Speakers, { type Speaker } from "../../components/home/Speakers";
import { ThemePreview } from "../../components/home/ThemePreview";
import { Partners, type Partner } from "../../components/home/Partners"; // <--- Update Import

const SPEAKER_BUCKET = import.meta.env.VITE_SUPABASE_BUCKET_SPEAKER_PHOTOS;
const PARTNER_BUCKET = import.meta.env.VITE_SUPABASE_BUCKET_PARTNER_LOGOS;

const getImageUrl = (path: string | null, bucketName: string) => {
  if (!path)
    return "https://ui-avatars.com/api/?name=TEDx&background=EB0028&color=fff&size=400";

  if (path.startsWith("http")) return path;

  // Uses the specific bucket passed to the function
  const { data } = supabase.storage.from(bucketName).getPublicUrl(path);
  return data.publicUrl;
};

const HomePage = () => {
  // SEO: Set page title and meta description
  useEffect(() => {
    document.title = "TEDxUOK - Ideas Worth Spreading | University of Kelaniya";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "An independently organized TEDx event at the University of Kelaniya. Join us for inspiring talks, innovative ideas, and community impact."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative top-[-65px]">
      <Hero date={eventDate} venue={eventVenue} theme={theme} />
      <Countdown date={eventDate} />
      <About description={description} />
      <Highlights />
      <ThemePreview theme={theme} description={description} />
      <Speakers speakers={realSpeakers} />
      <Partners partners={realPartners} />
      <CTASection />
    </div>
  );
};

export default HomePage;
