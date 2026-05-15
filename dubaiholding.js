// Dubai Holding — Real Estate brand config
// Loaded by index.html when URL contains ?demo=DUBAIHOLDING (or legacy ?demo=REAL_ESTATE_DUBAIHOLDING)
// URL TO TEST: https://real-estate-audience.onrender.com?demo=DUBAIHOLDING
window.BRAND_CONFIG = {
  demoKey: "REAL_ESTATE_DUBAIHOLDING",
  relayUrl: "wss://real-estate-live-demo.onrender.com/ws",
  brand: {
    name: "Dubai Holding",
    tagline: "One ecosystem. Every address.",
    headline: "Find your place in Dubai.",
    logo: "./versions/dubaiholding/brand/dubaiholding-logo.svg",
    hero: "./versions/dubaiholding/brand/dubaiholding-hero.jpg"
  },
  theme: {
    bg:        "#FFFFFF",
    surface:   "#F4F0EE",
    accent:    "#C9B5AC",
    text:      "#000000",
    textMuted: "#807268",
    border:    "#DFD3CD"
  },
  stepLabels: {
    welcome:      { description: "Tell us what you're looking for. We'll match you across the Dubai Holding portfolio.", consent: "I agree to Dubai Holding using my information to tailor my recommendations.", cta: "Begin" },
    location:     { title: "Where would you like to live?",  prompt: "Choose a community" },
    budget:       { title: "What's your budget?",             prompt: "Slide to set the figure", caption: "total budget" },
    bedrooms:     { title: "How many bedrooms?",              prompt: "Pick a size" },
    propertyType: { title: "What kind of home?",              prompt: "Pick a property type" },
    register:     { title: "Your details",                    prompt: "We'll tailor your shortlist to you", submit: "Complete" }
  },
  locations: [
    { value: "Palm Jumeirah",            sublabel: "Iconic waterfront",      image: "./versions/dubaiholding/locations/palm-jumeirah.jpg" },
    { value: "Madinat Jumeirah Living",  sublabel: "Branded residences",     image: "./versions/dubaiholding/locations/madinat-jumeirah-living.jpg" },
    { value: "Bluewaters",               sublabel: "Lifestyle district",     image: "./versions/dubaiholding/locations/bluewaters.jpg" },
    { value: "Port de La Mer",           sublabel: "Marina-side luxury",     image: "./versions/dubaiholding/locations/port-de-la-mer.jpg" },
    { value: "Jumeirah Village Circle",  sublabel: "Connected community",    image: "./versions/dubaiholding/locations/jumeirah-village-circle.jpg" },
    { value: "Business Bay",             sublabel: "Downtown investment",    image: "./versions/dubaiholding/locations/business-bay.jpg" }
  ],
  budget: {
    min: 1000000, max: 50000000, step: 250000, initial: 8000000, currency: "AED",
    minLabel: "AED 1m", maxLabel: "AED 50m",
    tiers: [
      { max: 2500000,  name: "Entry" },
      { max: 6000000,  name: "Premium" },
      { max: 15000000, name: "Signature" },
      { max: 30000000, name: "Trophy" },
      { max: Infinity, name: "Iconic" }
    ]
  },
  bedrooms: [
    { value: "Studio", label: "Studio", description: "" },
    { value: "1",      label: "1",      description: "bedroom" },
    { value: "2",      label: "2",      description: "bedrooms" },
    { value: "3",      label: "3",      description: "bedrooms" },
    { value: "4+",     label: "4+",     description: "bedrooms" }
  ],
  propertyTypes: [
    { value: "Apartment", sublabel: "Skyline living",        image: "./versions/dubaiholding/types/apartment.jpg" },
    { value: "Villa",     sublabel: "Private grounds",       image: "./versions/dubaiholding/types/villa.jpg" },
    { value: "Townhouse", sublabel: "Community feel",        image: "./versions/dubaiholding/types/townhouse.jpg" },
    { value: "Penthouse", sublabel: "Top of the address",    image: "./versions/dubaiholding/types/penthouse.jpg" }
  ]
};
