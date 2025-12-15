// src/pages/FAQ/FAQPage.tsx
import { useState } from "react";
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQGroup = {
  title: string;
  items: FAQItem[];
};

const faqGroups: FAQGroup[] = [
  {
    title: "Registration & Tickets",
    items: [
      {
        question: "How do I register for TEDxUoK?",
        answer:
          "Registration details will be published on the official TEDxUoK website and social media channels. Registration is mandatory as seating is limited."
      },
      {
        question: "Are tickets refundable?",
        answer:
          "Tickets are non-refundable and non-transferable unless the event is cancelled by the organizers."
      },
      {
        question: "What ticket types are available?",
        answer:
          "We typically offer Student tickets, General Admission tickets, and VIP passes. Pricing and benefits for each tier will be announced during registration."
      },
      {
        question: "How much do tickets cost?",
        answer:
          "Ticket prices vary by type. Student tickets are usually offered at a discounted rate. Final pricing will be announced with registration details."
      }
    ]
  },
  {
    title: "Event Day Information",
    items: [
      {
        question: "When should attendees arrive?",
        answer:
          "Attendees are advised to arrive at least 30 minutes before the scheduled start time to allow for check-in and seating."
      },
      {
        question: "What items are allowed inside the venue?",
        answer:
          "Small personal items are allowed. Large bags, professional cameras, and recording equipment may be restricted."
      },
      {
        question: "What should I bring to the event?",
        answer:
          "Bring your ticket confirmation (digital or printed), a valid ID, and an open mind! Light refreshments may be provided."
      },
      {
        question: "What is the dress code?",
        answer:
          "Smart casual attire is recommended. Feel comfortable, but dress respectfully for the occasion."
      }
    ]
  },
  {
    title: "Speakers & Content",
    items: [
      {
        question: "How are speakers selected?",
        answer:
          "Speakers are carefully selected based on their expertise, story, and alignment with our event theme. We prioritize diverse voices and ideas worth spreading."
      },
      {
        question: "Can I nominate someone to be a speaker?",
        answer:
          "Yes! Speaker nominations and applications are typically accepted during our call for speakers period. Details will be shared on our website."
      },
      {
        question: "Will there be Q&A sessions with speakers?",
        answer:
          "While time may not permit individual Q&A sessions, there will be networking opportunities during breaks where you may interact with speakers."
      },
      {
        question: "Will the talks be recorded?",
        answer:
          "Yes, talks will be professionally recorded and may be published on the TEDx YouTube channel after the event, subject to speaker approval."
      }
    ]
  },
  {
    title: "Media & Accessibility",
    items: [
      {
        question: "Can I take photos or videos?",
        answer:
          "Personal photography is permitted. Professional recording requires prior approval from the TEDxUoK organizing team."
      },
      {
        question: "Is the venue wheelchair accessible?",
        answer:
          "Yes. The venue provides wheelchair access and designated seating areas for accessibility needs."
      },
      {
        question: "What accessibility accommodations are available?",
        answer:
          "We provide wheelchair access, reserved seating, sign language interpretation (upon request), and assistance for attendees with disabilities."
      },
      {
        question: "Are service animals allowed?",
        answer:
          "Yes, service animals are welcome at TEDx UOK."
      }
    ]
  },
  {
    title: "Partnerships & Volunteering",
    items: [
      {
        question: "How can I become a sponsor or partner?",
        answer:
          "Partnership opportunities are available at various levels. Please download our sponsorship prospectus or contact us at partnerships@tedxuok.com."
      },
      {
        question: "How can I volunteer at TEDx UOK?",
        answer:
          "Volunteer applications are accepted through our website. Fill out the volunteer form and our team will contact you with available roles."
      },
      {
        question: "What volunteer roles are available?",
        answer:
          "Roles include registration desk, ushering, technical support, photography, social media, hospitality, and logistics."
      },
      {
        question: "Do volunteers get free entry to the event?",
        answer:
          "Yes, volunteers typically receive complimentary access to the event, a certificate of participation, and refreshments during their shifts."
      }
    ]
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="bg-black w-full">
      <section className="mx-auto max-w-6xl px-6 py-32 space-y-24">
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-wide text-[#EB0028]">
            FAQ
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-white/70">
            Answers to common questions about attending TEDxUoK.
          </p>
        </div>

        {/* FAQ Groups */}
        {faqGroups.map((group, gIndex) => (
          <div key={gIndex} className="space-y-10">
            <h2 className="text-2xl font-semibold text-white text-center">
              {group.title}
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {group.items.map((item, iIndex) => {
                const id = `${gIndex}-${iIndex}`;
                const isOpen = openId === id;

                return (
                  <div
                    key={id}
                    className="rounded-xl border border-[#1F1F1F] bg-[#0E0E0E] px-6 py-6 hover:border-[#EB0028]/50 transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : id)}
                      aria-expanded={isOpen}
                      className="w-full text-left font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EB0028] rounded flex items-start justify-between gap-3"
                    >
                      <span className="flex-1">{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#EB0028] flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <p className="mt-4 text-white/75 leading-relaxed text-left">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
