import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ActivitiesSection } from "./components/ActivitiesSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-primary/[0.02] to-secondary/[0.03]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
      </main>
      <Footer />
    </div>
  );
}