import React from 'react';
import { sharedStyles } from '../../utils/constants';

// Placeholder data for speakers since the real data source isn't connected yet
const speakers = [
    {
        id: 1,
        name: "Speaker Name",
        title: "Topic / Designation",
        image: "https://via.placeholder.com/400x500/e8e2dc/666666?text=Speaker+1"
    },
    {
        id: 2,
        name: "Speaker Name",
        title: "Topic / Designation",
        image: "https://via.placeholder.com/400x500/e8e2dc/666666?text=Speaker+2"
    },
    {
        id: 3,
        name: "Speaker Name",
        title: "Topic / Designation",
        image: "https://via.placeholder.com/400x500/e8e2dc/666666?text=Speaker+3"
    }
];

export const SpeakersListPage: React.FC = () => {
    return (
        <main className="bg-black text-white min-h-screen">
            {/* Hero */}
            <section className={sharedStyles.layout.heroSection}>
                <div className={`${sharedStyles.layout.heroContainer} ${sharedStyles.layout.heroFlex}`}>
                    <div>
                        <h1 className={sharedStyles.typography.brandTitle}>
                            <span className={sharedStyles.colors.tedxRed}>TED<sup>x</sup></span>
                            <span className="text-white"> UoK</span>
                        </h1>
                        <h2 className={`${sharedStyles.typography.heroTitle} text-white mt-5`}>Speakers</h2>
                        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#EB0028] to-transparent"></div>
                    </div>

                    <div className={sharedStyles.layout.heroAside}>
                        <p className={sharedStyles.typography.heroDescriptionDark}>
                            Discover the voices that will ignite your imagination and challenge your perspectives.
                        </p>
                    </div>
                </div>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent max-w-7xl mx-auto" />

            {/* Speakers Grid */}
            <section className={sharedStyles.layout.contentSection}>
                <div className={sharedStyles.layout.pageContainer}>
                    <div className={sharedStyles.layout.gridThreeCol}>
                        {speakers.map((speaker) => (
                            <div key={speaker.id} className={sharedStyles.card.base}>
                                <div className={sharedStyles.card.imageContainer}>
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <span className="text-[#EB0028] font-medium">View Profile &rarr;</span>
                                    </div>
                                </div>
                                <div className={sharedStyles.card.content}>
                                    <h3 className={sharedStyles.typography.cardTitle}>{speaker.name}</h3>
                                    <p className={sharedStyles.typography.cardSubtitle}>{speaker.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State / Coming Soon if no speakers */}
                    {speakers.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-bold text-white/50">Speaker lineup coming soon...</h3>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default SpeakersListPage;
