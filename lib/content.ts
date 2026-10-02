export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254769510723";
export const business = {
  email: "rippletrendinfo@gmail.com",
  phones: ["0769 510 723", "0798 914 505"],
  address: "Kenya",
  hours: "Monday to Saturday, 24 hours; Sunday closed",
  social: [] as const,
} as const;

export const waLink = (msg = "Hi Ripple Trend, I'd like to talk about growing my business.", number = WHATSAPP) =>
  `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

export const services = [
  { icon: "Megaphone", title: "Digital marketing", benefit: "One plan that connects every channel to your sales goals." },
  { icon: "Share2", title: "Social media marketing", benefit: "Grow an audience that follows, engages and buys." },
  { icon: "Palette", title: "Branding and graphic design", benefit: "A look and voice customers remember and trust." },
  { icon: "PenTool", title: "Content creation", benefit: "Posts, video and copy made to earn attention." },
  { icon: "Search", title: "SEO and Google Business", benefit: "Show up when customers nearby search for you." },
  { icon: "Target", title: "Paid advertising", benefit: "Spend on ads that reach the right people and track the return." },
  { icon: "Monitor", title: "Website design and development", benefit: "Fast, mobile-ready sites that turn visits into enquiries." },
  { icon: "Sparkles", title: "AI marketing solutions", benefit: "Automate the routine work so your team can focus on strategy." },
] as const;

export const projects = [
  { title: "Fresh Basket", industry: "Retail concept", category: "Social Media", services: "Social media, content", note: "A sample content direction for a neighbourhood grocer.", image: "photo-1542838132-92c53300491e" },
  { title: "Kijani Studio", industry: "Wellness concept", category: "Branding", services: "Brand identity, campaign design", note: "A sample identity direction for a modern wellness brand.", image: "photo-1540555700478-4be289fbecef" },
  { title: "Savanna Stays", industry: "Hospitality concept", category: "Web Design", services: "Website, local search", note: "A sample booking-focused website direction for a guesthouse.", image: "photo-1518509562904-e7ef99cdcc86" },
  { title: "Tembo Market", industry: "Food concept", category: "Advertising", services: "Campaign creative, paid ads", note: "A sample campaign direction for a local food business.", image: "photo-1556909114-f6e7ad7d3136" },
  { title: "Nia Studio", industry: "Creative concept", category: "Content Creation", services: "Photography, short-form video", note: "A sample visual content direction for a creative business.", image: "photo-1492684223066-81342ee5ff30" },
] as const;

export const packages = [
  { name: "Starter", price: "Request a quote", tagline: "Build Your Presence", points: ["Social profile setup and optimization", "Monthly content plan and social designs", "Caption writing and content direction", "Monthly performance report"] },
  { name: "Growth", price: "Request a quote", tagline: "Grow Your Audience", featured: true, points: ["Social media management and content creation", "Graphics and short-form video", "Community engagement and content calendar", "Ad support, local search and analytics"] },
  { name: "Premium", price: "Request a quote", tagline: "Strengthen Your Digital Space", points: ["Full social media management", "Photo, video and short-form content", "Paid campaigns and local SEO", "Website support and strategy reviews"] },
  { name: "Custom", price: "Let's talk", tagline: "Your Business. Your Strategy.", points: ["Services selected around your goals", "Platforms and scope tailored to you", "Flexible campaign length and support"] },
] as const;

export const processSteps = [
  { title: "Discover", text: "We learn your business, market, audience and objectives." },
  { title: "Strategize", text: "We build a marketing direction tailored to you." },
  { title: "Create and execute", text: "We produce content and launch campaigns." },
  { title: "Analyze and optimize", text: "We track performance and keep improving the plan." },
] as const;

export const articles = [
  { category: "Social media", title: "Posting is not a strategy: plan content that sells", summary: "Why consistent posting alone stalls, and what to plan before you publish.", image: "photo-1611162616305-c69b3fa7fbe0" },
  { category: "SEO", title: "Get found on Google Maps: a local search checklist", summary: "The profile details that help nearby customers choose your business.", image: "photo-1573804633927-bfcbcd909acd" },
  { category: "Digital growth", title: "Turn online attention into business opportunities", summary: "A practical path from reaching the right people to earning their enquiry.", image: "photo-1553877522-43269d4ea984" },
] as const;
