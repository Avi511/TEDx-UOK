import { ArrowRight, Handshake, Users } from "lucide-react";
import { Button } from "../ui/Button";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Attend */}
          <div className="bg-primary rounded-lg p-8 lg:p-10 text-primary-foreground">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6">
              <ArrowRight className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Attend the Event</h3>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Be part of an unforgettable experience. Register now to secure
              your spot at TEDxUOK.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Volunteer */}
          <div className="bg-card border border-border rounded-lg p-8 lg:p-10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Become a Volunteer
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join our team and help create an extraordinary event. Make a
              difference behind the scenes.
            </p>
            <Button variant="tedxSecondary" size="lg">
              Apply to Volunteer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Partner */}
          <div className="bg-card border border-border rounded-lg p-8 lg:p-10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Handshake className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Partner With Us
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Align your brand with ideas worth spreading. Become a partner and
              reach our engaged audience.
            </p>
            <Button variant="tedxSecondary" size="lg">
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
