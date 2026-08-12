export const copy = {
  header: {
    nav: {
      tms: "About TMS",
      conditions: "Conditions",
      stories: "Patient Stories",
      doctor: "Our Doctor",
      medication: "Medication",
      insurance: "Insurance",
      location: "Location",
      faq: "FAQ",
    },
    cta: "Book Free Consultation",
  },
  hero: {
    tagline: "Feel Better. Think Clearer. Live Brighter.",
    headlineLine1: "A Better Way Forward",
    headlineLine2: "For",
    headlineAccent: "Depression",
    subheadline:
      "FDA-Cleared BrainsWay® Deep TMS, a noninvasive, medication-free treatment for depression and more.",
    primaryCta: "Book Your Free Consultation",
    callCta: "Call Now",
    chips: [
      { label: "FDA-Cleared", icon: "shield" as const },
      { label: "Noninvasive", icon: "brain" as const },
      { label: "~20 Minute Sessions", icon: "clock" as const },
    ],
  },
  trustBar: {
    items: [
      {
        title: "TMS-Only Clinic",
        subtitle: "Focused on results",
        icon: "zap" as const,
      },
      {
        title: "~20 Minute Sessions",
        subtitle: "Get back to life sooner",
        icon: "clock" as const,
      },
      {
        title: "Drive Yourself Home",
        subtitle: "No anesthesia",
        icon: "car" as const,
      },
      {
        title: "Major Insurance Accepted",
        subtitle: "More access to care",
        icon: "heart" as const,
      },
    ],
  },
  whatIsTms: {
    eyebrow: "What Is TMS",
    headline: "What Is Deep TMS & How Does It Work?",
    body: "Transcranial Magnetic Stimulation (TMS) uses focused magnetic pulses to stimulate brain networks involved in mood and behavior. With BrainsWay Deep TMS, a specialized helmet delivers treatment while you sit comfortably, awake, alert, and able to resume your day afterward.",
    points: [
      {
        title: "Noninvasive & drug-free",
        body: "No surgery, no sedation, and no systemic medication side effects.",
      },
      {
        title: "Brief outpatient sessions",
        body: "Most visits take about 20 minutes or less, fitting into a normal weekly routine.",
      },
      {
        title: "Personalized calibration",
        body: "Your provider maps the right location and intensity before and during your course.",
      },
    ],
    cta: "Book your Free Consultation",
  },
  howItWorks: {
    eyebrow: "How It Works",
    headline: "A Clear Path From Consultation to Treatment",
    steps: [
      {
        step: "01",
        title: "Free consultation",
        body: "We review your symptoms, history, and goals to determine whether Deep TMS may be appropriate.",
      },
      {
        step: "02",
        title: "Motor threshold mapping",
        body: "A brief calibration sets the right coil position and intensity, recalibrated as needed during your course.",
      },
      {
        step: "03",
        title: "Daily sessions",
        body: "You sit comfortably while magnetic pulses stimulate targeted brain networks. Many describe a tapping sensation.",
      },
      {
        step: "04",
        title: "Return to your day",
        body: "No recovery time needed. Most patients drive themselves home and resume normal activities immediately.",
      },
    ],
  },
  conditions: {
    eyebrow: "Conditions Treated",
    headline: "FDA-Cleared Deep TMS for Adults in Glendale",
    subheadline:
      "Breakthrough TMS uses the BrainsWay 104 System to treat a range of conditions with structured, evidence-based protocols.",
    items: [
      {
        title: "Major Depressive Disorder",
        body: "For adults whose depression has not improved enough with medication or therapy alone.",
        tag: "MDD",
      },
      {
        title: "Anxious Depression",
        body: "FDA-cleared to reduce anxiety symptoms that occur alongside depression in adults.",
        tag: "Anxiety + MDD",
      },
      {
        title: "Late-Life Depression",
        body: "FDA-cleared labeling includes older adults, including patients ages 68–86.",
        tag: "Ages 68–86",
      },
      {
        title: "Obsessive-Compulsive Disorder",
        body: "A specialized coil and protocol targets the brain circuits involved in OCD.",
        tag: "OCD",
      },
      {
        title: "Smoking Cessation",
        body: "FDA-cleared as an aid for short-term smoking cessation in adults.",
        tag: "Smoking",
      },
    ],
    accelerated: {
      title: "Accelerated Deep TMS",
      body: "Prefer a faster schedule? We offer an FDA-cleared accelerated protocol that condenses the core depression course into six treatment days.",
    },
  },
  medication: {
    eyebrow: "Medication Management",
    headline: "Integrated Psychiatric Care That Complements TMS",
    body: "In addition to Deep TMS, Breakthrough TMS offers medication management for adults navigating depression, anxious depression, and related conditions. Whether you're starting treatment, adjusting medications, or combining care with TMS, our team provides thoughtful, coordinated psychiatric support.",
    points: [
      "Medication evaluation and ongoing management",
      "Coordinated care alongside your TMS protocol",
      "Support for treatment-resistant and anxious depression",
    ],
    cta: "Find out if you Qualify",
  },
  patientStories: {
    eyebrow: "Patient Stories",
    headline: "Video Stories",
    intro:
      "Patient stories from BrainsWay, maker of our Deep TMS system. The people in these videos were treated at other clinics using the same BrainsWay Deep TMS technology we use at Breakthrough TMS.",
    disclaimer:
      "Videos published by BrainsWay, the maker of the Deep TMS system used at Breakthrough TMS. Playback loads from YouTube's privacy-enhanced player only after you press play.",
    stories: [
      {
        name: "Emma's Story",
        condition: "Depression",
        body: "Emma describes her experience with Deep TMS treatment for depression.",
        videoId: "MErfYybeFy4",
        thumbnail: "storyEmma" as const,
      },
      {
        name: "Ronda's Story",
        condition: "Depression",
        body: "Ronda shares what changed for her after a course of Deep TMS.",
        videoId: "6P8W18uvjD0",
        thumbnail: "storyRonda" as const,
      },
      {
        name: "Cathy's Story",
        condition: "OCD",
        body: "Cathy talks about treating her OCD with Deep TMS.",
        videoId: "31sJqVWt0EQ",
        thumbnail: "storyCathy" as const,
      },
      {
        name: "Victor's Story",
        condition: "Smoking Cessation",
        body: "Victor describes quitting smoking with the help of Deep TMS.",
        videoId: "IG4qowrwoVs",
        thumbnail: "storyVictor" as const,
      },
    ],
  },
  meetDoctor: {
    eyebrow: "About Us",
    headline: "Meet Dr. Artur Saakyan, MD",
    intro:
      "Psychiatrist and founder of Breakthrough TMS. Dr. Saakyan leads our TMS-only clinic in Glendale, focused on clear answers, thoughtful care, and whether Deep TMS is right for you.",
    highlight:
      "Your first visit is a conversation, not a rushed intake. We review your history, explain the process, and answer your questions before any decision.",
    languages: "English & Armenian",
    credentials: ["USC · Neuroscience", "Ross University School of Medicine", "UCLA-Kern Psychiatry Residency"],
  },
  whyChoose: {
    eyebrow: "Why Breakthrough TMS",
    headline: "A TMS-Only Clinic Built for Focus & Consistency",
    body: "We specialize exclusively in Deep TMS, not a general clinic that offers TMS on the side. That focus means structured protocols, consistent care, and a team that knows this treatment inside and out.",
    cards: [
      {
        title: "TMS-only focus",
        body: "Dedicated exclusively to Deep TMS, with structured protocols from consultation through your full course.",
      },
      {
        title: "BrainsWay Deep TMS",
        body: "FDA-cleared BrainsWay technology with deep, broad magnetic field stimulation.",
      },
      {
        title: "20-minute sessions",
        body: "Short, manageable visits designed to fit your schedule. Open Mon–Fri, 7 AM to 7 PM.",
      },
      {
        title: "Noninvasive care",
        body: "Stay awake throughout. No anesthesia, no sedation, no hospital stay.",
      },
      {
        title: "Accelerated option",
        body: "FDA-cleared accelerated protocol condenses the core depression course into six days.",
      },
      {
        title: "Local & accessible",
        body: "Downtown Glendale with validated parking near Americana at Brand.",
      },
    ],
  },
  insurance: {
    eyebrow: "Insurance",
    headline: "We Work With Major Insurance Plans",
    body: "Breakthrough TMS accepts many commercial plans, Medicare, Medi-Cal, and TriWest. Coverage varies by plan. Our team will help verify your benefits.",
    payers: [
      { src: "/payers/uhc.svg", alt: "UnitedHealthcare", width: 174, height: 38, size: "base" as const },
      { src: "/payers/optum.svg", alt: "Optum", width: 122, height: 38, size: "base" as const },
      { src: "/payers/aetna.svg", alt: "Aetna", width: 181, height: 38, size: "base" as const },
      { src: "/payers/blue-shield-ca.webp", alt: "Blue Shield of California", width: 95, height: 38, size: "base" as const },
      { src: "/payers/cigna.svg", alt: "Cigna", width: 70, height: 38, size: "base" as const },
      { src: "/payers/anthem-blue-cross.webp", alt: "Anthem Blue Cross", width: 124, height: 38, size: "base" as const },
      { src: "/payers/medicare.webp", alt: "Medicare", width: 72, height: 54, size: "boost" as const },
      { src: "/payers/medi-cal.webp", alt: "Medi-Cal", width: 61, height: 54, size: "boost" as const },
      { src: "/payers/triwest.svg", alt: "TriWest Healthcare Alliance", width: 139, height: 38, size: "base" as const },
    ],
    disclaimer:
      "Coverage is plan-specific and cannot be guaranteed in advance. Treatment eligibility is determined after in-person evaluation and safety screening.",
    cta: "Find out if you Qualify",
  },
  whatToExpect: {
    eyebrow: "What to Expect",
    headline: "Your Journey at Breakthrough TMS",
    steps: [
      {
        title: "Consultation & evaluation",
        body: "We review your symptoms, history, and goals to confirm whether Deep TMS is a good fit for you.",
      },
      {
        title: "Personalized treatment plan",
        body: "Your provider selects an FDA-cleared protocol and maps the right coil position and intensity.",
      },
      {
        title: "Start sessions",
        body: "Short in-office sessions on a schedule designed to support progress. Most take about 20 minutes or less.",
      },
    ],
  },
  location: {
    eyebrow: "Location & Hours",
    headline: "Deep TMS Therapy in Downtown Glendale",
    body: "Our office is in the heart of Glendale, easily reached from the SR-134, SR-2, and I-5 freeways, with validated parking near Americana at Brand.",
    serving: "Serving Glendale, Burbank, Pasadena, North Hollywood, Sherman Oaks, and the wider San Fernando Valley.",
    parking: "Plenty of unreserved parking spots available. Parking will be validated.",
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common Questions About Deep TMS",
    items: [
      {
        q: "How long is a session?",
        a: "Most sessions are about 20 minutes or less, depending on the protocol.",
      },
      {
        q: "Will I be awake? Do I need anesthesia?",
        a: "You stay awake the entire time. Treatment does not require anesthesia or sedation.",
      },
      {
        q: "Can I drive after treatment?",
        a: "Many patients drive themselves to and from sessions and return to normal activities afterward.",
      },
      {
        q: "What does treatment feel like?",
        a: "Many people describe a tapping or knocking sensation on the scalp during stimulation.",
      },
      {
        q: "How long does a full course take?",
        a: "Treatment length varies by condition and protocol. A common structure involves daily sessions over about 4 to 6 weeks. Accelerated options may take significantly less time.",
      },
      {
        q: "Does OCD treatment include anything different?",
        a: "Yes. OCD protocols include a brief provocation step prior to stimulation.",
      },
      {
        q: "Who determines if I'm eligible?",
        a: "Treatment eligibility is determined after an in-person evaluation and safety screening. Individual results vary.",
      },
    ],
  },
  bookConsult: {
    eyebrow: "Schedule",
    headline: "Book your Free Consultation",
    body: "Choose a time that works for you. We'll review your symptoms, answer your questions about Deep TMS, and discuss next steps with no obligation.",
    callPrompt: "Prefer to talk first?",
    inquiryLink: "Submit an inquiry instead",
  },
  qualify: {
    eyebrow: "Get Started",
    headline: "Find out if you Qualify",
    body: "Share a few details and our team will follow up to discuss candidacy, insurance verification, and whether Deep TMS may be right for you.",
    formTitle: "Qualification Inquiry",
    formSubtitle: "Confidential. Our team typically responds within one business day.",
    bookLink: "Ready to pick a time? Book a consultation",
    trustLine: "Treatment eligibility is determined after an in-person evaluation. Individual results vary.",
  },
  finalCta: {
    headline: "Ready to Take the Next Step?",
    body: "Schedule a free consultation at Breakthrough TMS in Glendale to review candidacy, timelines, and which FDA-cleared Deep TMS protocol best matches your symptoms and goals.",
    primaryCta: "Book your Free Consultation",
    secondaryCta: "Find out if you Qualify",
  },
  floatingCta: {
    book: "Book Consultation",
    call: "Call",
  },
  footer: {
    tagline: "FDA-cleared BrainsWay Deep TMS in Glendale, CA, serving the San Fernando Valley.",
    disclaimer:
      "This website provides educational information only and is not medical advice. Breakthrough TMS does not provide emergency services. If you are in crisis, call 911 or dial 988 for the Suicide & Crisis Lifeline.",
    eligibility:
      "Treatment eligibility is determined after in-person evaluation and safety screening. Individual results vary. No outcome guarantees are made.",
    rights: "All rights reserved.",
  },
} as const;
