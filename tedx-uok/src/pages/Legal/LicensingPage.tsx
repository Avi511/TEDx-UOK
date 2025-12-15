// src/pages/Legal/LicensingPage.tsx
export default function LicensingPage() {
  return (
    <main className="bg-black w-full">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-sm uppercase text-[#EB0028]">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Licensing Statement
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-8 text-white/80 leading-relaxed text-center">
            <p className="text-lg text-white/90">
              TEDx UOK is an independently organized TEDx event operating under a license from TED Conferences LLC.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">About Our License</h2>
              <p>
                TEDx is a program of local, self-organized events that bring people together to share 
                a TED-like experience. At TEDx UOK, our event is organized by the University of 
                Kelaniya community under a license granted by TED.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Independent Organization</h2>
              <p>
                While we operate under TED's brand and format guidelines, TEDx UOK is independently 
                organized and operated. TED Conferences LLC does not control or endorse the specific 
                content of our event, speakers, or presentations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Content Guidelines</h2>
              <ul className="space-y-2 text-center list-none">
                <li>Scientific claims must be factual and backed by research</li>
                <li>No promotion of commercial products or services</li>
                <li>No pseudo-science, conspiracy theories, or zealotry</li>
                <li>Content aims to educate and enlighten, not divide</li>
                <li>Proper permissions obtained for copyrighted material</li>
              </ul>
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
