import React from 'react';
import { Link } from 'react-router-dom';
import { sharedStyles } from '../../utils/constants';

// Placeholder data would normally be fetched based on ID
const speakerData = {
    id: 1,
    name: "Speaker Name",
    title: "Topic / Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/400x500/e8e2dc/666666?text=Speaker+Detail"
};

export const SpeakerDetailPage: React.FC = () => {
    // const { id } = useParams(); // ID would be used for data fetching

    return (
        <main className={sharedStyles.layout.main}>
            <section className={`${sharedStyles.layout.heroSection} max-w-7xl mx-auto`}>
                <Link to="/speakers" className="inline-flex items-center text-gray-400 hover:text-[#EB0028] mb-8 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Speakers
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Image Side */}
                    <div className="relative group rounded-xl overflow-hidden border border-[#1F1F1F]">
                        <img
                            src={speakerData.image}
                            alt={speakerData.name}
                            className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                                {speakerData.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-[#EB0028] font-medium">
                                {speakerData.title}
                            </p>
                        </div>

                        <div className="h-1 w-20 bg-white/20 rounded-full"></div>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-gray-300 leading-relaxed">
                                {speakerData.bio}
                            </p>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <div className="pt-8 flex gap-4">
                            <button className="bg-[#EB0028] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#c7001f] transition-all">
                                Share Profile
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SpeakerDetailPage;
