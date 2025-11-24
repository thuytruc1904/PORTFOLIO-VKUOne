import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { OverviewSection } from "./components/OverviewSection";
import { ProblemsSection } from "./components/ProblemsSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { PersonasSection } from "./components/PersonasSection";
import { UserJourneySection } from "./components/UserJourneySection";
import { CoreFeaturesSection } from "./components/CoreFeaturesSection";
import { AppScreensGallery } from "./components/AppScreensGallery";
import { DesignSystemSection } from "./components/DesignSystemSection";
import { DesignProcessTimeline } from "./components/DesignProcessTimeline";
import { PrototypeCTASection } from "./components/PrototypeCTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <OverviewSection />
      <div id="problems">
        <ProblemsSection />
      </div>
      <div id="solutions">
        <SolutionsSection />
      </div>
      <PersonasSection />
      <UserJourneySection />
      <div id="features">
        <CoreFeaturesSection />
      </div>
      <div id="screens">
        <AppScreensGallery />
      </div>
      <div id="design">
        <DesignSystemSection />
        <DesignProcessTimeline />
      </div>
      <PrototypeCTASection />
      <Footer />
    </div>
  );
}