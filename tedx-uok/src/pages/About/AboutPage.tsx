import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Handshake, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-foreground">About</span>
            <span className="text-primary ml-4">TED<sup className="text-[1.2em]">x</sup>UOK</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
            Discover the mission, history, and ideas behind TED, TEDx, and our journey at University of Kelaniya.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* TED Card */}
          <Link
            to="/about/ted"
            className="group bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300"
          >
            <div className="mb-6">
              <span className="text-primary font-bold text-5xl">TED</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">About TED</h2>
            <p className="text-muted-foreground mb-6">
              Mission, history, and global initiatives of the world's leading ideas platform.
            </p>
            <div className="flex items-center text-foreground font-medium group-hover:text-primary transition-colors">
              Learn more
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </Link>

          {/* TEDx Card */}
          <Link
            to="/about/tedx"
            className="group bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300"
          >
            <div className="mb-6">
              <span className="text-primary font-bold text-5xl">TED</span>
              <span className="text-primary font-bold text-5xl">x</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">About TEDx</h2>
            <p className="text-muted-foreground mb-6">
              Learn about the TEDx program, licensing, and how it differs from TED conferences.
            </p>
            <div className="flex items-center text-foreground font-medium group-hover:text-primary transition-colors">
              Learn more
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </Link>

          {/* TEDxUOK Card */}
          <Link
            to="/about/tedx-uok"
            className="group bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300"
          >
            <div className="mb-6 flex items-start">
              <span className="text-primary font-bold text-5xl">TED</span>
              <span className="text-primary font-bold text-3xl mt-[-5px]">x</span>
              <span className="text-foreground font-bold text-5xl">UOK</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">About TED<sup className="text-[1.2em]">x</sup>UOK</h2>
            <p className="text-muted-foreground mb-6">
              Our story, mission, and commitment to spreading ideas at University of Kelaniya.
            </p>
            <div className="flex items-center text-foreground font-medium group-hover:text-primary transition-colors">
              Learn more
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </Link>
        </div>

        {/* Why Ideas Matter */}
        <div className="bg-card border border-border rounded-lg p-10 mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Why Ideas Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">Ideas drive progress and innovation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Global Impact</h3>
              <p className="text-muted-foreground">Local ideas with worldwide influence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Community</h3>
              <p className="text-muted-foreground">Building connections through shared ideas</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Return Home
            </Link>
            <Link
              to="/events"
              className="px-8 py-3 bg-[#EB0028] text-white rounded-full font-bold hover:bg-red-700 transition-colors duration-300"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}