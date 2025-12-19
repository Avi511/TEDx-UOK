import React, { useEffect } from "react";

interface VenueProps {
  event: string;
  name: string;
  addressLine1: string;
  city: string;
  googleMapsUrl: string;
  googleMapsDirUrl: string;
  transportInfo: string;
  parkingInfo: string;
  accessibilityInfo: string;
}

const VenuePage: React.FC<VenueProps> = ({
  event,
  name,
  addressLine1,
  city,
  googleMapsUrl,
  googleMapsDirUrl,
  transportInfo,
  parkingInfo,
  accessibilityInfo,
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Inner container */}
      <div className="max-w-[1280px] mx-auto px-4 py-16">
        {/* Header */}
        <header className="mb-12 text-center animate-on-scroll opacity-0">
          <h1 className="text-4xl font-bold tracking-tight mb-2 uppercase text-[#EB0028]">
            {name}
          </h1>
          <h3 className="text-4xl font-bold tracking-tight mb-2 uppercase">
            {city}
          </h3>
          <p className="text-xl text-gray-300 font-light">
            Venue of{" "}
            <span className="text-xl font-bold text-white">{event}</span>
          </p>
        </header>

        {/* Map Section */}
        <section className="mb-12 w-full animate-on-scroll opacity-0">
          <div className="w-full rounded-xl overflow-hidden border border-[#1F1F1F] shadow-xl">
            <div className="h-[450px] w-full">
              <iframe
                src={googleMapsUrl}
                title={`Map of ${name}`}
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Address and Directions */}
          <div className="flex justify-between items-center flex-wrap gap-4 mt-4">
            <div>
              <span className="font-bold">Address: </span>
              <span className="text-gray-300 font-light">{addressLine1}</span>
            </div>
            <button
              onClick={() =>
                window.open(
                  googleMapsDirUrl.replace("embed?", ""),
                  "_blank"
                )
              }
              className="px-6 py-3 rounded-full bg-[#EB0028] text-white border border-[#EB0028] hover:bg-black hover:text-[#EB0028] transition-colors duration-300 cursor-pointer"
            >
              Get Directions
            </button>
          </div>
        </section>

        {/* Venue Information */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-white animate-on-scroll opacity-0">
            Venue Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Transport Info */}
            <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-xl p-8 shadow-lg hover:border-[#EB0028] transition-colors duration-300 animate-on-scroll opacity-0">
              <h3 className="text-xl font-bold mb-4 text-[#EB0028]">
                Transport Info
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                {transportInfo}
              </p>
            </div>

            {/* Parking Info */}
            <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-xl p-8 shadow-lg hover:border-[#EB0028] transition-colors duration-300 animate-on-scroll opacity-0" style={{ animationDelay: "100ms" }}>
              <h3 className="text-xl font-bold mb-4 text-[#EB0028]">
                Parking
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                {parkingInfo}
              </p>
            </div>

            {/* Accessibility Info */}
            <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-xl p-8 shadow-lg hover:border-[#EB0028] transition-colors duration-300 animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-bold mb-4 text-[#EB0028]">
                Accessibility
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                {accessibilityInfo}
              </p>
            </div>

            {/* Entry Guidelines */}
            <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-xl p-8 shadow-lg hover:border-[#EB0028] transition-colors duration-300 animate-on-scroll opacity-0" style={{ animationDelay: "300ms" }}>
              <h3 className="text-xl font-bold mb-4 text-[#EB0028]">
                Entry Guidelines
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Please arrive 45 minutes prior to the start time. Ensure you
                have your digital or printed ticket ready for scanning.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VenuePage;
