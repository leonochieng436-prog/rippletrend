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
  { slug: "fresh-basket", title: "Fresh Basket", industry: "Retail concept", category: "Social Media", services: "Social media, content", note: "A sample content direction for a neighbourhood grocer.", overview: "A demonstration social campaign concept for a neighbourhood food market.", challenge: "Make everyday produce feel fresh, inviting, and worth discovering in a busy social feed.", approach: "Build a warm visual direction around ingredient colour, simple product stories, and practical seasonal content prompts.", image: "photo-1542838132-92c53300491e", gallery: ["photo-1542838132-92c53300491e", "photo-1540420773420-3366772f4999"] },
  { slug: "kijani-studio", title: "Kijani Studio", industry: "Wellness concept", category: "Branding", services: "Brand identity, campaign design", note: "A sample identity direction for a modern wellness brand.", overview: "A demonstration identity concept for a calm, contemporary wellness studio.", challenge: "Create a distinctive visual language that feels restorative without becoming generic.", approach: "Pair a grounded palette and clear typography with tactile imagery and flexible campaign layouts.", image: "photo-1540555700478-4be289fbecef", gallery: ["photo-1540555700478-4be289fbecef", "photo-1608248543803-ba4f8c70ae0b"] },
  { slug: "savanna-stays", title: "Savanna Stays", industry: "Hospitality concept", category: "Web Design", services: "Website, local search", note: "A sample booking-focused website direction for a guesthouse.", overview: "A demonstration website direction for a small hospitality destination.", challenge: "Help prospective guests quickly understand the stay, explore the setting, and find a clear booking path.", approach: "Use spacious photography, concise property information, and a straightforward page structure designed around trip planning.", image: "photo-1518509562904-e7ef99cdcc86", gallery: ["photo-1518509562904-e7ef99cdcc86", "photo-1530789253388-582c481c54b0"] },
  { slug: "tembo-market", title: "Tembo Market", industry: "Food concept", category: "Advertising", services: "Campaign creative, paid ads", note: "A sample campaign direction for a local food business.", overview: "A demonstration promotional campaign concept for a local food brand.", challenge: "Give a new menu or seasonal offer a clear visual hook across digital placements.", approach: "Develop a flexible campaign idea with close-up food imagery, focused copy, and layouts adaptable to social ads.", image: "photo-1556909114-f6e7ad7d3136", gallery: ["photo-1556909114-f6e7ad7d3136", "photo-1504674900247-0877df9cc836"] },
  { slug: "nia-studio", title: "Nia Studio", industry: "Creative concept", category: "Content Creation", services: "Creative direction, content", note: "A sample visual content direction for a creative business.", overview: "A demonstration content direction for an independent creative studio.", challenge: "Create a recognisable visual rhythm that can carry across launches, updates, and behind-the-scenes stories.", approach: "Use a consistent framing style, confident colour, and a mix of polished campaign imagery and process-led moments.", image: "photo-1492684223066-81342ee5ff30", gallery: ["photo-1492684223066-81342ee5ff30", "photo-1513364776144-60967b0f800f"] },
  { slug: "moyo-objects", title: "Moyo Objects", industry: "Homeware concept", category: "Photography & Video", services: "Product photography, art direction", note: "A sample product photography direction for a homeware label.", overview: "A demonstration product imagery concept for a small homeware collection.", challenge: "Show the material, form, and everyday character of objects in a clean, memorable way.", approach: "Combine considered natural light, tactile close-ups, and simple interior scenes to give each object room to read.", image: "photo-1494438639946-1ebd1d20bf85", gallery: ["photo-1494438639946-1ebd1d20bf85", "photo-1490312278390-ab64016e0aa9"] },
  { slug: "maji-botanics", title: "Maji Botanics", industry: "Beauty concept", category: "Branding", services: "Brand identity, packaging", note: "A sample identity direction for a botanical skincare range.", overview: "A demonstration brand and packaging direction for a botanical skincare concept.", challenge: "Balance a natural product story with a polished look that remains clear across packaging and digital use.", approach: "Keep the identity restrained, use botanical details as supporting cues, and prioritise readable product information.", image: "photo-1608248543803-ba4f8c70ae0b", gallery: ["photo-1608248543803-ba4f8c70ae0b", "photo-1611930022073-b7a4ba5fcccd"] },
  { slug: "tandaza-realty", title: "Tandaza Realty", industry: "Real estate concept", category: "Web Design", services: "Website, digital experience", note: "A sample property website direction for a real estate brand.", overview: "A demonstration digital experience concept for a property business.", challenge: "Make property discovery feel calm and useful, with key details easy to scan before arranging a viewing.", approach: "Organise property imagery, essential listing information, and enquiry actions into a clear, mobile-first browsing flow.", image: "photo-1600607687939-ce8a6c25118c", gallery: ["photo-1600607687939-ce8a6c25118c", "photo-1600607687920-4e2a09cf159d"] },
  { slug: "upepo-retreat", title: "Upepo Retreat", industry: "Travel concept", category: "Social Media", services: "Social media, campaign content", note: "A sample social campaign direction for a quiet travel retreat.", overview: "A demonstration social storytelling concept for a small travel retreat.", challenge: "Communicate a sense of place and the experience of a stay without relying on generic travel language.", approach: "Use location-led imagery, short editorial captions, and a repeatable content mix around spaces, details, and nearby experiences.", image: "photo-1530789253388-582c481c54b0", gallery: ["photo-1530789253388-582c481c54b0", "photo-1518509562904-e7ef99cdcc86"] },
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
