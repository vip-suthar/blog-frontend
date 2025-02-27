import React from "react";

import IntroSection from "@/components/pages/Home/IntroSection";
import AboutSection from "@/components/pages/Home/AboutSection";
import HighlightsSection from "@/components/pages/Home/HighlightsSection";
import CharkhaSection from "@/components/pages/Home/CharkhaSection";
import IntentSection from "@/components/pages/Home/IntentSection";
import ReviewsSection from "@/components/pages/Home/ReviewsSection";
// import ArticlesSection from "@/components/pages/Home/ArticlesSection";
import FaqSection from "@/components/pages/Home/FaqSection";
import ContactFormSection from "@/components/pages/Home/ContactFormSection";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <IntroSection />
      <AboutSection />
      <HighlightsSection />
      <CharkhaSection />
      <IntentSection />
      <ReviewsSection />
      {/* <ArticlesSection /> */}
      <FaqSection />
      <ContactFormSection />
    </div>
  );
};

export default Home;
