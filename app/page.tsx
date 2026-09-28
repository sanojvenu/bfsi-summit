import { HeroSection } from "@/components/sections/hero";
import { StatStrip } from "@/components/sections/stat-strip";
import { WhyAttendSection } from "@/components/sections/why-attend";
import { ThemesSection } from "@/components/sections/themes";
import { SpeakersSection } from "@/components/sections/speakers";
import { AgendaSection } from "@/components/sections/agenda";
import { AwardsSection } from "@/components/sections/awards";
import { VenueSection } from "@/components/sections/venue";
import { InvitationModal } from "@/components/ui/invitation-modal";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Mumbai Sea Link Skyline */}
      <HeroSection />

      {/* 2. Stat Strip: Clean White Bar */}
      <StatStrip />

      {/* 3. Why Attend: "The industry is at an inflection point" + Auditorium Photo */}
      <WhyAttendSection />

      {/* 4. Strategic Themes: "Six themes. Deeper conversations." (3x2 dark grid) */}
      <ThemesSection />

      {/* 5. Speakers: "The people behind the change." (4 portrait cards) */}
      <SpeakersSection />

      {/* 6. Agenda: "One day. Six themes. Zero filler." (Horizontal timeline) */}
      <AgendaSection />

      {/* 7. Awards: BFSI Innovation Awards 2027 (Black & Gold luxury) */}
      <AwardsSection />

      {/* 8. Venue: "Mumbai. Where the future meets." + Jio Convention Centre photo */}
      <VenueSection />

      {/* Request Invitation Modal Dialog */}
      <InvitationModal />
    </>
  );
}
