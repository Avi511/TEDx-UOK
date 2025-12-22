import { Calendar, Clock, MapPin, Mic } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AgendaItemProps {
  id: number;
  time: string;
  title: string;
  speaker?: string;
  role?: string;
  description: string;
  type: string;
}

const agendaItems: AgendaItemProps[] = [
  {
    id: 1,
    time: "08:30 AM",
    title: "Registration & Breakfast",
    speaker: "Welcome Team",
    role: "Organizers",
    description:
      "Check-in, badge collection, and morning refreshments at the foyer.",
    type: "logistics",
  },
  {
    id: 2,
    time: "09:30 AM",
    title: "Opening Ceremony",
    speaker: "Sarah Connor",
    role: "Lead Organizer",
    description:
      'Official welcome note and introduction to the theme "Horizons".',
    type: "event",
  },
  {
    id: 3,
    time: "10:00 AM",
    title: "The Symphony of Silence",
    speaker: "Dr. James Wilson",
    role: "Neuroscientist",
    description:
      "Understanding the impact of noise pollution on modern human cognition.",
    type: "talk",
  },
  {
    id: 4,
    time: "11:00 AM",
    title: "Networking Break",
    description: "A chance to connect with fellow attendees over coffee.",
    type: "break",
  },
  {
    id: 5,
    time: "11:45 AM",
    title: "Coding the Future",
    speaker: "Elena Rodriguez",
    role: "AI Ethicist",
    description:
      "Navigating the moral landscape of artificial general intelligence.",
    type: "talk",
  },
  {
    id: 6,
    time: "01:00 PM",
    title: "Lunch Break",
    description: "Gourmet lunch buffet served at the garden area.",
    type: "break",
  },
  {
    id: 7,
    time: "02:30 PM",
    title: "Urban Jungles",
    speaker: "Mark Chen",
    role: "Architect",
    description: "Reimagining our cities with biophilic design principles.",
    type: "talk",
  },
  {
    id: 8,
    time: "04:00 PM",
    title: "Closing Remarks",
    speaker: "Organizing Committee",
    role: "Team",
    description: "Wrap up, thank you notes, and networking session.",
    type: "event",
  },
];

const Agenda = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen pt-24 pb-20 overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center select-none">
        <div className="relative opacity-[0.02] transform -rotate-12 scale-150 sm:scale-100">
          <div className="flex items-baseline leading-none font-bold">
            <span className="text-[40vw] text-white tracking-tighter">TED</span>
            <span className="text-[40vw] text-[#EB0028]">x</span>
          </div>
          <div className="text-[15vw] text-white font-bold text-right -mt-[5vw] mr-[4vw]">
            UoK
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-16 md:mb-20" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Agenda
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 text-gray-400 mt-8">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0E0E0E] border border-[#1F1F1F] hover:border-[#EB0028]/50 transition-all duration-300">
              <Calendar className="text-[#EB0028] w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">October 25, 2025</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0E0E0E] border border-[#1F1F1F] hover:border-[#EB0028]/50 transition-all duration-300">
              <MapPin className="text-[#EB0028] w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Main Auditorium, UoK</span>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line - Desktop - More Visible */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#EB0028]/40 via-[#EB0028]/30 to-[#EB0028]/20"></div>

          {/* Left Line - Mobile - More Visible */}
          <div className="md:hidden absolute left-4 sm:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#EB0028]/40 via-[#EB0028]/30 to-[#EB0028]/20"></div>

          <div className="space-y-8 sm:space-y-12">
            {agendaItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between w-full ${isLeft ? "" : "md:flex-row-reverse"
                    }`}
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[45%] pl-12 sm:pl-16 md:pl-0 ${isLeft
                      ? "md:pr-8 lg:pr-12 md:text-right"
                      : "md:pl-8 lg:pl-12 md:text-left"
                      }`}
                  >
                    <div className="group relative bg-[#0E0E0E] border border-[#1F1F1F] p-6 sm:p-8 rounded-xl transition-all duration-500 hover:border-[#EB0028]/40 hover:shadow-[0_4px_20px_-2px_rgba(235,0,40,0.1)]">
                      {/* Time Badge */}
                      <div
                        className={`inline-flex items-center gap-2 text-[#EB0028] text-xs sm:text-sm mb-4 bg-[#EB0028]/10 px-3 sm:px-4 py-1.5 rounded-full transition-all duration-300 group-hover:bg-[#EB0028]/15 ${isLeft ? "md:ml-auto" : ""
                          }`}
                      >
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        {item.time}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-5 transition-colors duration-300 group-hover:text-gray-100">
                        {item.title}
                      </h3>

                      {/* Content Area */}
                      <div className="space-y-3">
                        {/* Speaker Info - Icon and role in one line */}
                        {item.speaker && (
                          <div
                            className={`flex items-center gap-3 text-white font-medium text-base sm:text-lg transition-opacity duration-500 ${isLeft ? "md:flex-row-reverse" : ""
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-1.5 sm:p-2 rounded-full bg-[#EB0028]/10 transition-all duration-300 group-hover:bg-[#EB0028]/20">
                                <Mic className="w-3 h-3 sm:w-4 sm:h-4 text-[#EB0028]" />
                              </div>
                              <div className={`text-left ${isLeft ? "md:text-right" : ""}`}>
                                <div className="leading-tight">{item.speaker}</div>
                                {item.role && (
                                  <div className="text-gray-400 text-xs sm:text-sm mt-0.5 leading-tight">
                                    {item.role}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {!item.speaker && (
                          <div className="text-gray-400 italic text-sm sm:text-base transition-opacity duration-500 md:group-hover:opacity-0">
                            Event Logistics
                          </div>
                        )}

                        {/* Description - Hidden on mobile, shows on hover for desktop */}
                        <div className="hidden md:block opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Description - Always visible on mobile */}
                        <div className="md:hidden mt-4 pt-4 border-t border-[#1F1F1F]">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot - Made larger for better visibility */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-black border-2 md:border-[3px] border-[#EB0028] z-10 mt-8 sm:mt-6 md:mt-0 max-md:top-0 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(235,0,40,0.5)] shadow-[0_0_10px_rgba(235,0,40,0.3)]">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Spacer for Flex Layout */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Agenda;