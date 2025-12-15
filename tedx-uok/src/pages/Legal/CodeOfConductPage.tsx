// src/pages/Legal/CodeOfConductPage.tsx
export default function CodeOfConductPage() {
  return (
    <main className="bg-black w-full">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-sm uppercase text-[#EB0028]">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Code of Conduct
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-8 text-white/80 leading-relaxed text-center">
            <p className="text-lg text-white/90">
              We invite you to join TEDx UOK in a spirit of curiosity, friendliness, open-mindedness, 
              and respect. We will not tolerate harassment, in any form, at a TEDx UOK event.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">At TEDx UOK, You Agree To:</h2>
              <ul className="space-y-2 text-center list-none">
                <li>Respect the boundaries of other attendees</li>
                <li>Avoid aggressively pushing your own services, products, or causes</li>
                <li>Respect confidentiality requests by speakers and other attendees</li>
                <li>Look out for one another</li>
                <li>Contribute to an inclusive event experience through respectful interactions</li>
                <li>Follow health and safety guidelines provided by event organizers</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Unacceptable Behavior</h2>
              <p>These behaviors don't belong at TEDx UOK:</p>
              <ul className="space-y-2 text-center list-none">
                <li>Invasion of privacy or taking photos without permission</li>
                <li>Posting personal details about someone else without permission</li>
                <li>Disruptive behavior, excessive drinking, stalking, or threatening anyone</li>
                <li>Abuse of power related to position, wealth, race, or gender</li>
                <li>Ignoring health or safety guidelines</li>
                <li>Discrimination or harassment of any kind</li>
                <li>Sexual harassment or inappropriate physical contact</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Reporting Violations</h2>
              <p>
                If you experience or witness behavior that violates this Code of Conduct, please report it 
                immediately to a TEDx UOK organizer or email{' '}
                <a href="mailto:conduct@tedxuok.com" className="text-[#EB0028] hover:text-red-500 underline">
                  conduct@tedxuok.com
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
