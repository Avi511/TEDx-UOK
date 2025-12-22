import React, { useEffect } from "react";
import "./AboutPage.css";

export default function AboutPage() {
  // SEO: Set page title and meta description
  useEffect(() => {
    document.title = "About TEDxUOK | University of Kelaniya";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about TEDxUOK, an independently organized TEDx event at the University of Kelaniya. Discover our mission, vision, and commitment to spreading ideas worth sharing."
      );
    }
  }, []);

  return (
    <div className="about-page">
      <h1>About TEDxUOK</h1>
      <p>Content coming soon...</p>
    </div>
  );
}
