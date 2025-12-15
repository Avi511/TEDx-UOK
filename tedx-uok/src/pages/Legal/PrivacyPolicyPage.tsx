// src/pages/Legal/PrivacyPolicyPage.tsx
export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black w-full">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-sm uppercase text-[#EB0028]">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Privacy & Data Policy
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-8 text-white/80 leading-relaxed text-center">
            <p className="text-lg text-white/90">
              TEDx UOK is committed to protecting your privacy. This policy explains how we collect, 
              use, and safeguard your personal information.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
              <ul className="space-y-2 text-center list-none">
                <li>Name, email address, and phone number</li>
                <li>University affiliation and student ID (if applicable)</li>
                <li>Volunteer application information</li>
                <li>Contact form submissions</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">How We Use Your Information</h2>
              <ul className="space-y-2 text-center list-none">
                <li>Process event registrations and ticket purchases</li>
                <li>Communicate event details and updates</li>
                <li>Manage volunteer applications</li>
                <li>Respond to inquiries and provide support</li>
                <li>Improve our website and event experience</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
              <ul className="space-y-2 text-center list-none">
                <li>Access your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
              <p>
                For privacy-related questions, contact us at{' '}
                <a href="mailto:privacy@tedxuok.com" className="text-[#EB0028] hover:text-red-500 underline">
                  privacy@tedxuok.com
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
