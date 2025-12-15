// src/pages/Legal/AccessibilityPage.tsx
export default function AccessibilityPage() {
  return (
    <main className="bg-black w-full">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-sm uppercase text-[#EB0028]">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Accessibility Statement
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-8 text-white/80 leading-relaxed text-center">
            <p className="text-lg text-white/90">
              TEDx UOK is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant 
              accessibility standards.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Our Commitment</h2>
              <p>
                We strive to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                Our website is designed to be compatible with assistive technologies such as screen readers, 
                keyboard navigation, and voice recognition software.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Accessibility Features</h2>
              <ul className="space-y-2 text-center list-none">
                <li>Alternative text for images</li>
                <li>Keyboard navigation support</li>
                <li>Clear and consistent navigation structure</li>
                <li>Sufficient color contrast ratios</li>
                <li>Resizable text without loss of functionality</li>
                <li>Descriptive link text</li>
                <li>Proper heading hierarchy</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Event Accessibility</h2>
              <p>
                Our physical event at the University of Kelaniya is committed to being accessible to all attendees:
              </p>
              <ul className="space-y-2 text-center list-none">
                <li>Wheelchair accessible venue with ramps and elevators</li>
                <li>Reserved seating for individuals with mobility needs</li>
                <li>Sign language interpretation available upon request</li>
                <li>Assistance animals welcome</li>
                <li>Accessible parking facilities</li>
                <li>Gender-neutral and accessible restrooms</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Requesting Accommodations</h2>
              <p>
                If you require specific accommodations to attend TEDx UOK, please contact us at least 
                two weeks before the event at{' '}
                <a href="mailto:accessibility@tedxuok.com" className="text-[#EB0028] hover:text-red-500 underline">
                  accessibility@tedxuok.com
                </a>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Feedback</h2>
              <p>
                We welcome feedback on the accessibility of TEDx UOK. If you encounter any barriers 
                or have suggestions for improvement, please contact us at{' '}
                <a href="mailto:info@tedxuok.com" className="text-[#EB0028] hover:text-red-500 underline">
                  info@tedxuok.com
                </a>
              </p>
            </div>

            <p className="text-sm text-white/50 pt-8 border-t border-[#1F1F1F]">
              Last updated: December 15, 2025
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
