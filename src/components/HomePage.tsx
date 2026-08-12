import { Header } from "./Header";
import { Hero } from "./Hero";
import { WhatIsTms } from "./WhatIsTms";
import { PatientStories } from "./PatientStories";
import { MeetDoctor } from "./MeetDoctor";
import { HowItWorks } from "./HowItWorks";
import { Conditions } from "./Conditions";
import { MedicationManagement } from "./MedicationManagement";
import { WhyChoose } from "./WhyChoose";
import { Insurance } from "./Insurance";
import { WhatToExpect } from "./WhatToExpect";
import { Location } from "./Location";
import { Faq } from "./Faq";
import { BookConsult } from "./BookConsult";
import { QualifyForm } from "./QualifyForm";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <WhatIsTms />
        <HowItWorks />
        <Conditions />
        <MedicationManagement />
        <WhyChoose />
        <PatientStories />
        <MeetDoctor />
        <Insurance />
        <WhatToExpect />
        <Location />
        <BookConsult />
        <FinalCta />
        <Faq />
        <QualifyForm />
      </main>
      <Footer />
    </>
  );
}
