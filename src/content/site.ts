export const site = {
  name: "Breakthrough TMS",
  logo: "/images/logo.webp",
  logo2x: "/images/logo@2x.webp",
  logoFooter: "/images/logo-footer.webp",
  wallpaper: "/images/wallpaper-monogram.webp",
  /** Twilio tracking number — replace when assigned */
  phone: "(818) 793-5067",
  phoneHref: "tel:+18187935067",
  fax: "(818) 793-5094",
  address: "100 W Broadway #1050, Glendale, CA 91210",
  addressLines: ["100 W Broadway #1050", "Glendale, CA 91210"],
  hours: {
    days: "Monday – Friday",
    time: "7:00 AM – 7:00 PM",
    display: "Monday – Friday, 7:00 AM – 7:00 PM",
  },
  website: "https://www.breakthroughtms.com",
  email: "info@tmsbreakthrough.com",
  emailHref: "mailto:info@tmsbreakthrough.com",
  mapsUrl: "https://maps.google.com/maps?q=Breakthrough%20Tms&t=m&z=15",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=%20Breakthrough%20Tms&t=m&z=15&output=embed&iwloc=near",
  parkingNote: "Validated parking near Americana at Brand",
  serviceAreas: [
    "Glendale",
    "Burbank",
    "Pasadena",
    "North Hollywood",
    "Sherman Oaks",
    "San Fernando Valley",
  ],
  routes: {
    bookConsult: "/#book-consult",
    qualify: "/#qualify",
    inquiry: "/#qualify",
    patientStories: "/#patient-stories",
    meetDoctor: "/#meet-doctor",
  },
  images: {
    drSaakyan: "/images/dr-artur-saakyan.jpeg",
    faqOffice: "/images/breakthrough-tms-office.webp",
    patientInRoom: "/images/patient-in-room.webp",
    treatmentSession: "/images/treatment-session.webp",
    storyEmma: "/images/story-emma.webp",
    storyRonda: "/images/story-ronda.webp",
    storyCathy: "/images/story-cathy.webp",
    storyVictor: "/images/story-victor.webp",
  },
  /**
   * GHL embeds (Rise4 / go.4tms.com)
   * Form: l4pQcMVB9DBxWEQIPMn3
   * Calendar: 7x3H9r61IKrxp5Km4qts
   */
  ghl: {
    calendarName: "Book your Free Consultation",
    origin: "https://go.4tms.com",
    embedScriptSrc: "https://go.4tms.com/js/form_embed.js",
    calendar: {
      id: "7x3H9r61IKrxp5Km4qts",
      iframeId: "7x3H9r61IKrxp5Km4qts_1786551067265",
      src: "https://go.4tms.com/widget/booking/7x3H9r61IKrxp5Km4qts",
      title: "Book your Free Consultation",
    },
    inquiryForm: {
      id: "l4pQcMVB9DBxWEQIPMn3",
      iframeId: "inline-l4pQcMVB9DBxWEQIPMn3",
      name: "TMS: New Web Inquiry + Params",
      title: "TMS: New Web Inquiry + Params",
      src: "https://go.4tms.com/widget/form/l4pQcMVB9DBxWEQIPMn3",
      height: 2142,
    },
  },
} as const;
