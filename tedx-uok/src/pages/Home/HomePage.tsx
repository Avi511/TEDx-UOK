import About from "../../components/About";
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import Hero from "../../components/Hero";
import Highlights, { type Highlight } from "../../components/Highlights";
import Speakers, { type Speaker } from "../../components/Speakers";
// import { Footer } from "../../components/layout/Footer";
// import { Navbar } from "../../components/layout/Navbar";
import { Handshake, Lightbulb, Mic2, Users } from "lucide-react";

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "AI Research Scientist",
    talkTitle: "The Future of Human-AI Collaboration",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Marcus Williams",
    title: "Social Entrepreneur",
    talkTitle: "Building Communities Through Innovation",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Prof. Amara Okafor",
    title: "Climate Scientist",
    talkTitle: "Climate Action: Beyond the Headlines",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
];

const highlights: Highlight[] = [
  {
    icon: Mic2,
    title: "Inspiring Talks",
    description:
      "Hear from thought leaders sharing groundbreaking ideas across diverse fields.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Theme",
    description:
      "Explore this year's theme through multiple perspectives and disciplines.",
  },
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with like-minded individuals passionate about ideas and change.",
  },
  {
    icon: Handshake,
    title: "Community Impact",
    description:
      "Be part of a movement that creates lasting positive change in our community.",
  },
];

const HomePage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <Hero />
      <Countdown date="2026-03-15T08:00:00" />
      <About />
      <Highlights highlights={highlights} />
      <Speakers speakers={speakers} />
      <CTASection />
      {/* <Footer /> */}
    </main>
  );
};

export default HomePage;
