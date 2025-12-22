import React, { useEffect } from "react";
import "./SpeakersPage.css";

export default function SpeakersPage() {
  // SEO: Set page title and meta description
  useEffect(() => {
    document.title = "Our Speakers - Inspiring Voices | TEDxUOK";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Meet the inspiring speakers at TEDxgitUOK. Thought leaders, innovators, and visionaries sharing ideas worth spreading at the University of Kelaniya."
      );
    }
  }, []);

  return (
    <div className="speakers-page">
      <div className="speakers-container">
        <h1>Our Speakers</h1>
        <p>Meet the inspiring speakers at TEDx UOK.</p>
        {/* Add your speakers content here */}
      </div>
    </div>
  );
}
