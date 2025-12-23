import { Play, Users, Image as ImageIcon, Calendar } from 'lucide-react';

export default function PastEventsPage() {
    const pastEvents = [
        {
            year: "2023",
            theme: "Uncharted Territories",
            speakerCount: 8,
            talksCount: 8,
            hasGallery: true,
            playlistUrl: "#"
        },
        {
            year: "2022",
            theme: "Beyond Barriers",
            speakerCount: 6,
            talksCount: 6,
            hasGallery: true,
            playlistUrl: "#"
        },
        {
            year: "2021",
            theme: "Resilience",
            speakerCount: 5,
            talksCount: 5,
            hasGallery: false,
            playlistUrl: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground pt-20">
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Past Events</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore our history of spreading ideas.
                    </p>
                </div>

                <div className="space-y-16">
                    {pastEvents.map((event, index) => (
                        <div key={index} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300">
                            <div className="p-8 md:p-10">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                    <div>
                                        <div className="flex items-center text-primary font-bold text-xl mb-2">
                                            <Calendar className="w-5 h-5 mr-2" />
                                            {event.year}
                                        </div>
                                        <h2 className="text-3xl font-bold text-foreground">Theme: {event.theme}</h2>
                                    </div>
                                    <a
                                        href={event.playlistUrl}
                                        className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium text-sm"
                                    >
                                        <Play className="w-4 h-4 mr-2" />
                                        Watch Talks
                                    </a>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Stats Placeholder */}
                                    <div className="bg-background/50 rounded-lg p-6 flex items-center space-x-8 border border-border/50">
                                        <div className="flex items-center text-muted-foreground">
                                            <Users className="w-5 h-5 mr-3" />
                                            <span>{event.speakerCount} Speakers</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Play className="w-5 h-5 mr-3" />
                                            <span>{event.talksCount} Talks</span>
                                        </div>
                                    </div>

                                    {/* Gallery Placeholder */}
                                    <div className="bg-background/50 rounded-lg p-6 flex items-center justify-center border border-border/50 min-h-[120px]">
                                        {event.hasGallery ? (
                                            <div className="flex items-center text-muted-foreground/50">
                                                <ImageIcon className="w-8 h-8 mr-3" />
                                                <span>Event Gallery Placeholder</span>
                                            </div>
                                        ) : (
                                            <span className="text-muted-foreground/30 italic">No gallery available</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center border-t border-border pt-10">
                    <p className="text-muted-foreground italic">
                        * This archive is currently being updated. More events and details will be added soon.
                    </p>
                </div>
            </section>
        </div>
    );
}
