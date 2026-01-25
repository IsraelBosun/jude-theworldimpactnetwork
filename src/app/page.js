import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AudienceSection from "@/components/AudienceSection";
import OutcomesSection from "@/components/OutcomesSection";
import SpeakersSection from "@/components/SpeakersSection";
// import ScheduleSection from "@/components/ScheduleSection";
import RegistrationSection from "@/components/RegistrationSection";
// import SponsorsStrip from "@/components/SponsorsStrip";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      {/* <SponsorsStrip /> */}
      <div className="relative z-10 bg-white">
        <AboutSection />
        <AudienceSection />
        <OutcomesSection />
        <SpeakersSection />
        {/* <ScheduleSection /> */}
        <RegistrationSection />
      </div>
    </main>
  );
}