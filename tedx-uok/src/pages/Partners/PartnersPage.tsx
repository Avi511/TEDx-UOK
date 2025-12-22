import React from "react";
import { Linkedin } from "lucide-react";
import { sharedStyles } from "../../utils/constants";
import { useSEO } from "../../hooks/useSEO";
import { seoConfig } from "../../config/seo";

interface Partner {
  id: string;
  name: string;
  tier: "Title" | "Gold" | "Silver" | "Bronze" | "In-kind";
  logo_url: string;
  linkedin_url?: string;
  isActive?: boolean;
}

interface PartnersPageProps {
  partners: Partner[];
}

const PartnersPage: React.FC<PartnersPageProps> = ({ partners }) => {
  // SEO: Set page title and meta description
  useSEO(seoConfig.partners);

  const activePartners = partners.filter((p) => p.isActive ?? true);

  const partnersByTier = {
    Title: activePartners.filter((p) => p.tier === "Title"),
    Gold: activePartners.filter((p) => p.tier === "Gold"),
    Silver: activePartners.filter((p) => p.tier === "Silver"),
    Bronze: activePartners.filter((p) => p.tier === "Bronze"),
    "In-kind": activePartners.filter((p) => p.tier === "In-kind"),
  };

  const renderPartnerTier = (tier: string, tierPartners: Partner[]) => {
    if (!tierPartners.length) return null;

    return (
      <section
        className="mb-20"
        aria-labelledby={`${tier.toLowerCase()}-partners`}
      >
        <div className="flex items-center justify-between mb-10">
          <h2
            id={`${tier.toLowerCase()}-partners`}
            className={sharedStyles.typography.sectionTitle}
          >
            {tier} Partners
          </h2>
        </div>
        <div className={sharedStyles.layout.partnerGrid}>
          {tierPartners.map((partner) => (
            <div key={partner.id} className={sharedStyles.card.base}>
              <div
                className={`${sharedStyles.card.imageContainer} flex items-center justify-center p-8`}
              >
                <img
                  src={partner.logo_url}
                  alt={partner.name}
                  className={`${sharedStyles.partner.logoMaxHeight} w-full h-full object-cover`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/200x100/e8e2dc/666666?text=No+Logo";
                  }}
                />
              </div>
              <div className={`${sharedStyles.card.content} space-y-1`}>
                <h3
                  className={`${sharedStyles.typography.cardTitle} flex items-center gap-2`}
                >
                  <span>{partner.name}</span>
                  {partner.linkedin_url && (
                    <a
                      href={partner.linkedin_url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open ${partner.name} LinkedIn page`}
                      className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </h3>
                <p className={`${sharedStyles.typography.cardAccent} mt-1`}>
                  {tier} Partner
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}

      <section className={sharedStyles.layout.heroSection}>
        <div className={sharedStyles.layout.heroContainer}>
          <div className={sharedStyles.layout.heroGrid}>
            <div>
              <h1 className={`${sharedStyles.typography.heroTitle} mb-4`}>
                <span className={sharedStyles.colors.tedxRed}>TEDx</span>
                <span className={sharedStyles.colors.black}>UOK</span>
              </h1>
              <h2
                className={`${sharedStyles.typography.heroTitle} ${sharedStyles.colors.black}`}
              >
                Partners
              </h2>
            </div>
            <div className="flex items-center justify-start lg:justify-end">
              <p
                className={`${sharedStyles.typography.description} max-w-md lg:text-right`}
              >
                Tiered showcases and equal spotlight for every collaborator.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={sharedStyles.layout.divider} />

      {/* Partners Grid */}
      <section className={sharedStyles.layout.contentSection}>
        <div className={sharedStyles.layout.pageStack}>
          {renderPartnerTier("Title", partnersByTier.Title)}
          {renderPartnerTier("Gold", partnersByTier.Gold)}
          {renderPartnerTier("Silver", partnersByTier.Silver)}
          {renderPartnerTier("Bronze", partnersByTier.Bronze)}
          {renderPartnerTier("In-kind", partnersByTier["In-kind"])}
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 px-60 ${sharedStyles.colors.bgCream}`}>
        <div className={`${sharedStyles.layout.pageContainer} text-center`}>
          <p
            className={`${sharedStyles.typography.trackLabel} text-gray-400 mb-4`}
          >
            More partners to be announced
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Join us at <span className={sharedStyles.colors.tedxRed}>TEDx</span>
            UOK 2026
          </h2>
          <button className="bg-black text-white px-10 py-4 font-medium hover:bg-gray-200 transition-colors duration-300">
            Register Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default PartnersPage;
