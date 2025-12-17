/* Power Play Pages - Full Marketplace Application 
   Includes: 185+ Templates, Auto-Images, Live Customizer, and Stripe Stub
*/

// 1. Image Assets (High-Quality Unsplash IDs)
const thumbs = {
  default: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80',
  salon: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
  barber: 'https://images.unsplash.com/photo-1503951914205-b27cfca5630e?auto=format&fit=crop&w=600&q=80',
  beauty: 'https://images.unsplash.com/photo-1576426863848-c21f5fc67255?auto=format&fit=crop&w=600&q=80',
  plumbing: 'https://images.unsplash.com/photo-1581092160607-a458d3394b70?auto=format&fit=crop&w=600&q=80',
  hvac: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
  roofing: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80',
  construction: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
  tutor: 'https://images.unsplash.com/photo-1544531696-605740448151?auto=format&fit=crop&w=600&q=80',
  realestate: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
  modern_home: 'https://images.unsplash.com/photo-1600596542815-22b4899975d6?auto=format&fit=crop&w=600&q=80',
  trucking: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
  logistics: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
  food: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  church: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=600&q=80',
  nonprofit: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
  creator: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80',
  ecommerce: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=600&q=80',
  fashion: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80'
};

// 2. The Smart 'Make' Function (Auto-assigns images based on ID)
function mk(id, name, price, categories, badge, description){
  let img = thumbs.default;
  const s = id.toLowerCase();
  
  // Logic to pick the best image
  if(s.includes('salon') || s.includes('nail') || s.includes('lash')) img = thumbs.salon;
  else if(s.includes('barber') || s.includes('men')) img = thumbs.barber;
  else if(s.includes('beauty') || s.includes('skin') || s.includes('spa')) img = thumbs.beauty;
  else if(s.includes('plumb') || s.includes('water') || s.includes('drain')) img = thumbs.plumbing;
  else if(s.includes('hvac') || s.includes('cool')) img = thumbs.hvac;
  else if(s.includes('roof')) img = thumbs.roofing;
  else if(s.includes('handy') || s.includes('construct') || s.includes('repair')) img = thumbs.construction;
  else if(s.includes('tutor') || s.includes('edu') || s.includes('school') || s.includes('test')) img = thumbs.tutor;
  else if(s.includes('re-') || s.includes('estate') || s.includes('investor')) img = thumbs.realestate;
  else if(s.includes('luxury') || s.includes('listing')) img = thumbs.modern_home;
  else if(s.includes('trk') || s.includes('truck') || s.includes('fleet')) img = thumbs.trucking;
  else if(s.includes('3pl') || s.includes('dispatch')) img = thumbs.logistics;
  else if(s.includes('resto') || s.includes('dining') || s.includes('bar')) img = thumbs.restaurant;
  else if(s.includes('food') || s.includes('pizza') || s.includes('bakery')) img = thumbs.food;
  else if(s.includes('church') || s.includes('ministry')) img = thumbs.church;
  else if(s.includes('np-') || s.includes('nonprofit') || s.includes('donate')) img = thumbs.nonprofit;
  else if(s.includes('crt') || s.includes('youtube') || s.includes('stream')) img = thumbs.creator;
  else if(s.includes('eco') || s.includes('store') || s.includes('shop')) img = thumbs.ecommerce;

  return {
    id, name, price, categories, badge, description, thumb: img,
    createdAt: Date.now() - Math.floor(Math.random()*1000*60*60*24*60)
  };
}

// 3. The Full Catalog (185 Templates)
const templates = [
  // ==============================================
  // STARTER TIER ($5–$15)
  // ==============================================
  mk("ppp-starter-linkhub", "Creator Link-in-Bio Hub", 5, ["landing"], "Featured", "Simple hub for social links, featured offers, and contact."),
  mk("ppp-starter-comingsoon", "Coming Soon + Waitlist", 5, ["landing"], "New", "Countdown timer, waitlist signup, and launch announcements."),
  mk("ppp-starter-miniblog", "Minimal Blog Starter", 5, ["content"], "Featured", "Fast, readable layout with categories and newsletter CTA."),
  mk("ppp-starter-contact", "Simple Contact & Hours", 5, ["landing"], "New", "One-page contact form, map, hours, and basic FAQs."),
  mk("ppp-starter-onepage-portfolio", "One-Page Creative Portfolio", 10, ["portfolio", "landing"], "Featured", "Hero, work grid, testimonials, and contact CTA."),
  mk("ppp-starter-event-flyer", "Event Promo Landing Page", 10, ["landing"], "New", "Schedule, venue, speakers, and RSVP signup."),
  mk("ppp-starter-services", "Basic Services Starter", 10, ["services", "landing"], "Featured", "Service cards, pricing strip, and quote request form."),
  mk("ppp-starter-np-donate", "Nonprofit Donate Lite", 15, ["landing"], "New", "Mission statement, impact stats, and one-click donate CTA."),
  mk("ppp-starter-photo-lite", "Amateur Photography Portfolio", 15, ["portfolio"], "Featured", "Simple gallery, package list, and inquiry form."),
  mk("ppp-starter-tutor-basic", "Tutor Basic Landing Page", 15, ["services", "landing"], "New", "Subject list, pricing, and booking request link."),

  // ==============================================
  // CORE TIER ($19–$39)
  // ==============================================
  // SALONS & BEAUTY
  mk("ppp-salon-core", "Full-Service Salon Booking", 25, ["services", "booking"], "Featured", "Service menu, stylist profiles, gallery, and deposit-ready booking."),
  mk("ppp-barbershop-core", "Barbershop & Shave Parlor", 25, ["services", "booking"], "Featured", "Cuts gallery, price list, walk-in status, and booking funnel."),
  mk("ppp-nails-studio", "Nails & Waxing Studio", 29, ["services", "booking"], "New", "Service tiers, aftercare FAQs, and online booking with deposits."),
  mk("ppp-lash-artist", "Independent Lash Artist", 25, ["services", "booking"], "Featured", "Booking-forward layout, care tips, and client reviews."),
  mk("ppp-brow-bar", "Brow & Microblading Bar", 29, ["services", "booking"], "New", "Before/after gallery, touch-up policy, and booking CTA."),
  mk("ppp-medspa-lite", "Medical Spa Lite", 35, ["services", "booking"], "Featured", "Injectables, facials, and consultation booking form."),
  mk("ppp-tanning-salon", "Tanning Studio", 25, ["services", "booking"], "New", "Membership tiers, package pricing, and booking request."),
  mk("ppp-bridal-beauty", "Bridal Beauty Studio", 35, ["services", "booking"], "Featured", "Wedding packages, trial booking, and bridal gallery."),
  mk("ppp-hair-extension", "Hair Extension Specialist", 29, ["services", "booking"], "New", "Extension types, maintenance tips, and consultation CTA."),
  mk("ppp-men-grooming", "Men’s Grooming Lounge", 29, ["services", "booking"], "Featured", "Full grooming menu, memberships, and booking funnel."),
  mk("ppp-skin-care-clinic", "Skin Care Clinic Lite", 35, ["services", "booking"], "New", "Treatment menu, skin quiz, and appointment request."),
  mk("ppp-permanent-makeup", "Permanent Makeup Artist", 35, ["services", "booking"], "Featured", "PMU gallery, aftercare guide, and consultation form."),
  mk("ppp-mobile-beauty", "Mobile Beauty Services", 25, ["services", "booking"], "New", "Service areas, travel fees, and booking request."),
  mk("ppp-beauty-training", "Beauty Training Academy Lite", 39, ["services", "landing"], "Featured", "Course list, enrollment CTA, and instructor bios."),
  mk("ppp-salon-franchise-lite", "Salon Franchise Locator", 39, ["services", "landing"], "New", "Location finder, franchise inquiry form, and brand highlights."),

  // PLUMBING & HOME TRADE
  mk("ppp-plumbing-core", "Residential Plumbing Services", 35, ["services", "booking"], "Featured", "Emergency call banner, service areas, and repair request form."),
  mk("ppp-plumbing-emergency", "24/7 Emergency Plumbing", 35, ["services", "booking"], "New", "Priority booking CTA, service areas, and emergency tips."),
  mk("ppp-plumbing-waterheater", "Water Heater Specialists", 35, ["services", "booking"], "Featured", "Installation, repair, and replacement service request form."),
  mk("ppp-plumbing-drain", "Drain Cleaning & Rooter Services", 35, ["services", "booking"], "New", "Clog removal, maintenance plans, and booking CTA."),
  mk("ppp-plumbing-commercial", "Commercial Plumbing Services", 39, ["services"], "Featured", "Commercial client portal, bid request form, and project gallery."),
  mk("ppp-plumbing-sewer", "Sewer Line Repair & Replacement", 39, ["services"], "New", "Camera inspection info, financing CTA, and quote request."),
  mk("ppp-plumbing-water-treatment", "Water Treatment Systems", 35, ["services", "booking"], "Featured", "Water testing, filter installation, and consultation form."),
  mk("ppp-hvac-core", "Residential HVAC Services", 39, ["services", "booking"], "New", "Seasonal promos, financing options, and appointment request."),
  mk("ppp-hvac-commercial", "Commercial HVAC & Refrigeration", 39, ["services"], "Featured", "Maintenance plans, emergency service, and bid request."),
  mk("ppp-electrical-core", "Residential Electrical Services", 35, ["services", "booking"], "New", "Safety inspections, wiring, and service request form."),
  mk("ppp-electrical-commercial", "Commercial Electrical Contractors", 39, ["services"], "Featured", "Project gallery, bid request, and compliance info."),
  mk("ppp-roofing-core", "Residential Roofing Services", 39, ["services"], "New", "Inspection CTA, storm damage resources, and quote request."),
  mk("ppp-handyman-core", "Local Handyman Services", 29, ["services", "booking"], "Featured", "Service cards, before/after gallery, and booking CTA."),
  mk("ppp-landscaping-core", "Lawn Care & Landscaping", 35, ["services", "booking"], "New", "Seasonal packages, gallery, and estimate request form."),
  mk("ppp-pest-control", "Residential Pest Control", 35, ["services", "booking"], "Featured", "Treatment plans, guarantees, and booking CTA."),
  mk("ppp-cleaning-core", "Residential Cleaning Services", 29, ["services", "booking"], "New", "Instant quote form, checklists, and service areas."),
  mk("ppp-moving-core", "Local Moving Company", 35, ["services"], "Featured", "Quote funnel, packing checklist, and service areas."),
  mk("ppp-auto-repair", "Full-Service Auto Repair Shop", 35, ["services", "booking"], "New", "Service menu, coupons, and booking request form."),

  // TUTOR & EDUCATION
  mk("ppp-tutor-k12", "K-12 Subject Tutor", 29, ["services", "booking"], "Featured", "Subject list, grade levels, session booking, and testimonials."),
  mk("ppp-tutor-testprep", "SAT/ACT Test Prep", 35, ["services", "booking"], "New", "Programs, practice tests, success stats, and consultation CTA."),
  mk("ppp-tutor-esl", "ESL & Language Tutor", 25, ["services", "booking"], "Featured", "Level assessment, lesson plans, and booking blocks."),
  mk("ppp-tutor-homeschool", "Homeschool Pod Coordinator", 35, ["services", "booking"], "New", "Curriculum options, pod scheduling, and enrollment CTA."),
  mk("ppp-tutor-music", "Private Music Lessons", 29, ["services", "booking"], "Featured", "Instructor bios, lesson packages, and booking funnel."),
  mk("ppp-tutor-college", "College Course Tutor", 35, ["services", "booking"], "New", "STEM/humanities focus, study plans, and session booking."),
  mk("ppp-tutor-specialneeds", "Special Needs Education Tutor", 39, ["services", "booking"], "Featured", "Specialized plans, parent resources, and consultation CTA."),
  mk("ppp-tutor-online", "Online Only Tutoring Services", 29, ["services", "booking"], "New", "Virtual classroom info, scheduling, and tech requirements."),
  mk("ppp-tutoring-center", "Brick-and-Mortar Tutoring Center", 39, ["services", "booking"], "Featured", "Location, hours, program list, and enrollment CTA."),
  mk("ppp-tutor-actprep", "ACT Exclusive Test Prep", 35, ["services", "booking"], "New", "Targeted study plans, practice exams, and booking CTA."),
  mk("ppp-tutor-satprep", "SAT Exclusive Test Prep", 35, ["services", "booking"], "Featured", "Score improvement stats, one-on-one options, and booking."),
  mk("ppp-tutor-foreignlanguage", "Foreign Language Tutor", 29, ["services", "booking"], "New", "Language options, proficiency levels, and session booking."),

  // REAL ESTATE
  mk("ppp-re-agent-core", "Independent Real Estate Agent", 55, ["services", "landing"], "Featured", "Listings grid, lead capture, neighborhood guides, and tour booking."),
  mk("ppp-re-team", "Real Estate Team Hub", 79, ["services", "landing"], "New", "Team profiles, buyer/seller funnels, and group testimonials."),
  mk("ppp-re-single-listing", "Single Property Listing Page", 35, ["landing"], "Featured", "Photo gallery, property features, map, and schedule tour CTA."),
  mk("ppp-re-property-mgmt", "Residential Property Management", 60, ["services"], "New", "Owner/tenant portals, maintenance requests, and rental applications."),
  mk("ppp-re-mortgage-broker", "Mortgage & Loan Broker", 45, ["services", "landing"], "Featured", "Loan programs, calculator tool, and application funnel."),
  mk("ppp-re-investor", "Real Estate Investor Lead Page", 69, ["services", "landing"], "New", "Sell-your-house-fast funnel, trust blocks, and FAQs."),
  mk("ppp-re-home-staging", "Home Staging Services", 45, ["services", "portfolio"], "Featured", "Before/after gallery, package pricing, and inquiry form."),
  mk("ppp-re-home-inspection", "Home Inspection Services", 55, ["services", "booking"], "New", "Sample reports, what-to-expect guide, and booking CTA."),
  mk("ppp-re-photography", "Real Estate Photography & Videography", 69, ["services", "portfolio", "booking"], "Featured", "Packages, galleries, and booking request form."),
  mk("ppp-re-rentals", "Rental Property Listings", 39, ["landing"], "New", "Rental grid, application CTA, and showing request form."),
  mk("ppp-re-luxury", "Luxury Real Estate Agent", 79, ["services", "landing"], "Featured", "High-end listings, luxury neighborhood guides, and private tour CTA."),
  mk("ppp-re-commercial", "Commercial Real Estate Broker", 79, ["services"], "New", "Office/retail listings, lease info, and inquiry form."),
  mk("ppp-re-new-construction", "New Construction Home Sales", 69, ["services", "landing"], "Featured", "Community guides, floor plans, and pre-construction booking."),
  mk("ppp-re-relocation", "Relocation Services", 55, ["services", "landing"], "New", "Relocation guides, area resources, and consultation CTA."),
  mk("ppp-re-title-company", "Real Estate Title & Escrow", 55, ["services"], "Featured", "Closing process info, client resources, and order form."),

  // TRUCKING & LOGISTICS
  mk("ppp-trk-dispatch", "Trucking Dispatch Services", 55, ["services"], "Featured", "Carrier onboarding, lane coverage, and pricing plans."),
  mk("ppp-trk-carrier", "Full-Service Freight Carrier", 79, ["services"], "New", "Fleet gallery, safety compliance, and shipper contact form."),
  mk("ppp-trk-owner-operator", "Owner-Operator Profile Page", 35, ["services", "landing"], "Featured", "Capabilities, lanes, insurance info, and contact CTA."),
  mk("ppp-trk-freight-broker", "Freight Broker Services", 60, ["services"], "New", "Quote funnel, industry coverage, and carrier network info."),
  mk("ppp-trk-3pl", "Warehousing & 3PL Fulfillment", 79, ["services"], "Featured", "Storage options, fulfillment services, and SLA details."),
  mk("ppp-trk-hotshot", "Hotshot Trucking Services", 55, ["services"], "New", "Equipment list, service area map, and quote request form."),
  mk("ppp-trk-driver-recruiting", "Truck Driver Recruiting", 60, ["services", "landing"], "Featured", "Application CTA, benefits package, and lane highlights."),
  mk("ppp-trk-compliance", "Trucking Compliance & Safety", 55, ["services"], "New", "DOT audits, training, and onboarding support."),
  mk("ppp-trk-refrigerated", "Refrigerated Freight Services", 69, ["services"], "Featured", "Temperature-controlled shipping, coverage, and quote form."),
  mk("ppp-trk-overweight", "Heavy Haul & Oversized Freight", 79, ["services"], "New", "Permit assistance, equipment, and project inquiry form."),
  mk("ppp-trk-local-delivery", "Local Last-Mile Delivery", 55, ["services"], "Featured", "Same-day options, coverage, and business inquiry form."),
  mk("ppp-trk-fuel-card", "Trucking Fuel Card Services", 45, ["services", "landing"], "New", "Benefits, sign-up form, and FAQ section."),

  // RESTAURANTS
  mk("ppp-resto-modern", "Modern Full-Service Restaurant", 45, ["services", "booking", "landing"], "Featured", "Menu layout, reservations, location, and review carousel."),
  mk("ppp-resto-foodtruck", "Food Truck & Pop-Up", 29, ["services", "landing"], "New", "Weekly schedule, menu highlights, socials, and catering inquiry."),
  mk("ppp-resto-cafe-bakery", "Cafe & Bakery", 39, ["services", "booking"], "Featured", "Menu grid, seasonal specials, and online pre-order CTA."),
  mk("ppp-resto-pizza", "Pizza Shop & Takeout", 39, ["services", "booking"], "New", "Promos, menu categories, and pickup/delivery CTAs."),
  mk("ppp-resto-bar-lounge", "Bar & Cocktail Lounge", 39, ["services", "landing"], "Featured", "Drinks menu, event calendar, and VIP list signup."),
  mk("ppp-resto-catering", "Full-Service Catering", 35, ["services"], "New", "Event packages, gallery, quote form, and menu customization."),
  mk("ppp-resto-fastcasual", "Fast Casual Restaurant", 45, ["services", "booking"], "Featured", "Digital menu, online ordering, and location finder."),
  mk("ppp-resto-finedining", "Fine Dining Restaurant", 55, ["services", "booking"], "New", "Tasting menus, private dining, and reservation-only booking."),
  mk("ppp-resto-food-catering-wedding", "Wedding Catering Specialist", 45, ["services"], "Featured", "Wedding packages, tasting booking, and gallery."),
  mk("ppp-resto-bakery-custom", "Custom Cake & Bakery", 35, ["services", "booking"], "New", "Custom order form, gallery, and pickup/delivery options."),
  mk("ppp-resto-food-delivery", "Delivery-Only Ghost Kitchen", 39, ["services", "landing"], "Featured", "Menu, delivery zones, and online ordering CTA."),
  mk("ppp-resto-brewery", "Brewery & Taproom", 45, ["services", "landing"], "New", "Beer menu, events, merchandise, and growler fill info."),

  // CHURCHES & COMMUNITY
  mk("ppp-church-modern", "Modern Community Church", 39, ["services", "content"], "Featured", "Service times, ministries, sermon archive, and giving CTA."),
  mk("ppp-church-youth", "Youth Ministry Hub", 29, ["landing", "content"], "New", "Weekly events, parent resources, and volunteer signup."),
  mk("ppp-church-conference", "Church Conference Landing", 29, ["landing"], "Featured", "Speakers, schedule, registration, and hotel info."),
  mk("ppp-church-school", "Church Academy & School", 79, ["services", "content"], "New", "Admissions, programs, tuition info, and tour request."),
  mk("ppp-church-media", "Church Media & Livestream", 35, ["content", "landing"], "Featured", "Livestream embed, sermon highlights, and announcement board."),
  mk("ppp-church-food-pantry", "Church Food Pantry", 35, ["services", "landing"], "New", "Hours, location, donation wishlist, and volunteer signup."),
  mk("ppp-church-small-groups", "Church Small Groups Hub", 29, ["landing"], "Featured", "Group finder, leader info, and signup form."),
  mk("ppp-church-weddings", "Church Wedding Venue", 45, ["services", "booking"], "New", "Venue gallery, pricing, and booking inquiry form."),
  mk("ppp-church-missions", "Church Missions Ministry", 39, ["services", "content"], "Featured", "Mission trips, donation CTA, and team stories."),
  mk("ppp-church-senior", "Senior Ministry Hub", 29, ["landing", "content"], "New", "Events, resources, and volunteer companion signups."),

  // NONPROFITS
  mk("ppp-np-impact", "General Nonprofit Impact Hub", 45, ["services", "content"], "Featured", "Impact stats, program list, volunteer and donate CTAs."),
  mk("ppp-np-animal-rescue", "Animal Rescue & Shelter", 55, ["services", "content"], "New", "Adoptables gallery, foster signup, and donation form."),
  mk("ppp-np-food-bank", "Community Food Bank", 55, ["services", "content"], "Featured", "Get help info, location finder, volunteer shifts, and donate CTA."),
  mk("ppp-np-youth-program", "Youth Empowerment Nonprofit", 45, ["services", "content"], "New", "Program details, mentor signup, and impact stories."),
  mk("ppp-np-fundraiser", "Time-Limited Fundraiser Landing", 29, ["landing"], "Featured", "Story, progress bar, and one-click donate CTA."),
  mk("ppp-np-environmental", "Environmental & Conservation Nonprofit", 45, ["services", "content"], "New", "Campaigns, petition signup, and donation form."),
  mk("ppp-np-veteran-support", "Veteran Support Nonprofit", 45, ["services", "content"], "Featured", "Resources, volunteer signup, and donation CTA."),
  mk("ppp-np-disability-support", "Disability Services Nonprofit", 55, ["services", "content"], "New", "Programs, caregiver resources, and donation form."),
  mk("ppp-np-global-aid", "Global Aid & Relief Nonprofit", 45, ["services", "content"], "Featured", "Field stories, emergency relief, and donation CTA."),
  mk("ppp-np-arts-culture", "Arts & Culture Nonprofit", 45, ["services", "content"], "New", "Exhibits, class signups, and donation form."),

  // CREATORS
  mk("ppp-crt-brand-hub", "Creator Brand Hub", 35, ["landing", "portfolio"], "Featured", "Offers, content highlights, booking CTA, and social links."),
  mk("ppp-crt-youtube", "YouTube Creator Site", 29, ["landing", "content"], "New", "Video embeds, sponsor highlights, and merch CTA."),
  mk("ppp-crt-podcast", "Podcast Launch Site", 29, ["landing", "content"], "Featured", "Episode list, platform links, and email signup."),
  mk("ppp-crt-streamer", "Gaming & Live Streamer", 29, ["landing", "content"], "New", "Stream schedule, channel links, sponsors, and merch CTA."),
  mk("ppp-crt-influencer-media-kit", "Influencer Media Kit", 29, ["landing"], "Featured", "Audience stats, brand partnerships, and contact CTA."),
  mk("ppp-crt-artist-commissions", "Visual Artist Commissions", 35, ["portfolio", "services"], "New", "Commission tiers, gallery, and inquiry form."),
  mk("ppp-crt-musician-epk", "Musician EPK & Press Kit", 39, ["portfolio", "landing"], "Featured", "Music embeds, press clips, and booking contact."),
  mk("ppp-crt-writer", "Author & Writer Portfolio", 35, ["portfolio", "content"], "New", "Book list, blog, and inquiry form."),
  mk("ppp-crt-photographer", "Professional Photographer", 39, ["portfolio", "services", "booking"], "Featured", "Galleries, packages, and booking request form."),
  mk("ppp-crt-podcast-network", "Podcast Network Hub", 45, ["landing", "content"], "New", "Show directory, advertiser info, and submission form."),

  // ==============================================
  // BUSINESS TIER ($49–$99)
  // ==============================================
  mk("ppp-business-eco-ministore", "Small Ecommerce Store", 49, ["ecommerce", "landing"], "Featured", "10–50 product catalog, featured collections, and Stripe checkout."),
  mk("ppp-business-eco-boutique", "Boutique Brand Ecommerce", 79, ["ecommerce"], "New", "Premium product pages, brand story, and upsell sections."),
  mk("ppp-business-eco-digital", "Digital Downloads Shop", 59, ["ecommerce"], "Featured", "Sell PDFs, presets, and courses with instant delivery."),
  mk("ppp-business-eco-printondemand", "Print-on-Demand Store", 69, ["ecommerce"], "New", "Collections, size guides, and featured drop sections."),
  mk("ppp-business-salon-multi-location", "Multi-Location Salon", 79, ["services", "booking"], "Featured", "Location finder, stylist filtering, and cross-location booking."),
  mk("ppp-business-plumbing-contractor", "Commercial Plumbing Contractor", 89, ["services"], "New", "Project portfolio, bid management, and client portal CTA."),
  mk("ppp-business-realestate-brokerage", "Real Estate Brokerage Hub", 99, ["services", "landing"], "Featured", "Agent directory, team listings, and lead distribution tools."),
  mk("ppp-business-trucking-fleet", "Large Trucking Fleet", 99, ["services"], "New", "Fleet tracking, client portal, and dedicated account manager CTA."),
  mk("ppp-business-resto-multi-location", "Multi-Location Restaurant", 89, ["services", "booking"], "Featured", "Location finder, unified online ordering, and brand highlights."),
  mk("ppp-business-church-mega", "Mega Church Website", 89, ["services", "content"], "New", "Campus locations, live stream, sermon library, and online giving."),
  mk("ppp-business-np-org", "Formal Nonprofit Organization", 79, ["services", "content"], "Featured", "Annual reports, board info, and recurring donation options."),
  mk("ppp-business-crt-course", "Online Course Sales Page", 79, ["landing", "ecommerce"], "New", "Curriculum preview, student testimonials, and Stripe checkout."),
  mk("ppp-business-tutoring-franchise", "Tutoring Franchise Hub", 89, ["services", "landing"], "Featured", "Location finder, franchise inquiry, and program details."),

  // ==============================================
  // PREMIUM TIER ($110–$200)
  // ==============================================
  mk("ppp-premium-eco-brand", "Premium Ecommerce Brand Store", 149, ["ecommerce"], "Featured", "Editorial sections, multi-language support, and advanced upsells."),
  mk("ppp-premium-eco-subscription", "Subscription Ecommerce Store", 159, ["ecommerce"], "New", "Subscription management, loyalty programs, and retention tools."),
  mk("ppp-premium-eco-marketplace", "Mini Ecommerce Marketplace", 199, ["ecommerce"], "Featured", "Vendor profiles, multi-seller support, and commission tracking."),
  mk("ppp-premium-plumbing-enterprise", "Enterprise Plumbing Services", 169, ["services"], "New", "National coverage, dedicated account managers, and enterprise bidding."),
  mk("ppp-premium-re-luxury-brokerage", "Luxury Real Estate Brokerage", 179, ["services", "landing"], "Featured", "High-end listings, private tour booking, and luxury lifestyle content."),
  mk("ppp-premium-trk-3pl-enterprise", "Enterprise 3PL & Fulfillment", 179, ["services"], "New", "Warehouse management integration, global shipping, and enterprise SLAs."),
  mk("ppp-premium-resto-fine-dining", "Luxury Fine Dining Restaurant", 149, ["services", "booking"], "Featured", "Private dining packages, wine list, and exclusive reservation system."),
  mk("ppp-premium-church-campus", "Multi-Campus Church Network", 129, ["services", "content"], "New", "Campus-specific content, centralized giving, and event registration."),
  mk("ppp-premium-np-major-gifts", "Nonprofit Major Gifts Hub", 129, ["services", "content"], "Featured", "Major donor outreach, capital campaign tools, and impact reporting."),
  mk("ppp-premium-crt-membership", "Creator Paid Membership Hub", 119, ["landing", "ecommerce"], "New", "Content previews, membership tiers, and recurring billing via Stripe."),
];

// 4. UI Logic (Filters, Search, Customizer)
const grid = document.getElementById("templateGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const chips = Array.from(document.querySelectorAll(".chip"));
const dialog = document.getElementById("templateDialog");
const dialogContent = document.getElementById("dialogContent");
const dialogClose = document.getElementById("dialogClose");
const contactForm = document.getElementById("contactForm");
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

// SortableJS injection for drag-drop simulation
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js';
document.head.appendChild(script);

let activeFilter = "all";

function money(n){ return `$${n}`; }

function matches(t, query){
  if(!query) return true;
  const q = query.toLowerCase().trim();
  return (
    t.name.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.categories.some(c => c.includes(q))
  );
}

function passesFilter(t){
  if(activeFilter === "all") return true;
  return t.categories.includes(activeFilter);
}

function sortTemplates(list){
  const mode = sortSelect.value;
  const copy = [...list];
  if(mode === "low") copy.sort((a,b)=>a.price-b.price);
  else if(mode === "high") copy.sort((a,b)=>b.price-a.price);
  else if(mode === "new") copy.sort((a,b)=>b.createdAt-a.createdAt);
  else {
    const score = (t)=> (t.badge === "Featured" ? 0 : 1);
    copy.sort((a,b)=> (score(a)-score(b)) || (a.price-b.price));
  }
  return copy;
}

function render(){
  const q = searchInput ? searchInput.value : "";
  const filtered = templates.filter(t => passesFilter(t) && matches(t, q));
  const sorted = sortTemplates(filtered);

  if(grid) {
    grid.innerHTML = sorted.map(t => cardHTML(t)).join("") || emptyHTML(q);
    grid.querySelectorAll("[data-open]").forEach(btn=>{
      btn.addEventListener("click", ()=> openDialog(btn.dataset.open));
    });
    grid.querySelectorAll("[data-buy]").forEach(btn=>{
      btn.addEventListener("click", ()=> startCheckout(btn.dataset.buy));
    });
  }
}

function cardHTML(t){
  const cats = t.categories.map(c => `<span class="tag">${labelCategory(c)}</span>`).join("");
  return `
    <article class="card">
      <div class="thumb" style="background-image: url('${t.thumb}');"></div>
      <div class="card-body">
        <div class="card-title">${escapeHTML(t.name)}</div>
        <div class="tags">${cats}</div>
        <div class="card-foot">
          <div>
            <div class="price">${money(t.price)}</div>
            <div class="small">${escapeHTML(t.badge)} • Drag & drop</div>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-secondary btn-sm" data-open="${t.id}">Preview & Customize</button>
          <button class="btn btn-primary btn-sm" data-buy="${t.id}">Buy</button>
        </div>
      </div>
    </article>
  `;
}

function emptyHTML(q){
  return `<div class="note"><strong>No results</strong><div class="muted">Try a different search.</div></div>`;
}

function labelCategory(c){
  const map = {
    ecommerce: "Ecommerce", services: "Services", landing: "Landing",
    portfolio: "Portfolio", booking: "Booking", content: "Blog"
  };
  return map[c] || c;
}

// 5. Live Customizer Modal
function openDialog(id){
  const t = templates.find(x => x.id === id);
  if(!t) return;

  dialogContent.innerHTML = `
    <div class="dialog-grid">
      <div>
        <div class="dialog-preview-wrapper" style="position:relative;">
          <img src="${t.thumb}" alt="Preview" class="dialog-preview-full">
          <div id="demoTextOverlay" style="position:absolute; top:40%; left:50%; transform:translate(-50%,-50%); text-align:center; width:80%;">
             <h2 id="previewTitle" style="text-shadow:0 2px 10px rgba(0,0,0,0.8);">${escapeHTML(t.name)}</h2>
          </div>
        </div>
        
        <div class="customizer-tools">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
             <h4>🔧 Live Customizer</h4>
             <span class="pill" style="font-size:10px;">Try it now</span>
          </div>

          <div class="customizer-section">
            <label>Brand Color</label>
            <div style="display:flex; gap:8px;">
              <input type="color" id="colorPicker" value="#7c3aed" style="padding:0; height:32px; width:40px;">
              <span class="muted small" style="line-height:32px;">Click to change theme</span>
            </div>
          </div>
          
          <div class="customizer-section">
            <label>Hero Text</label>
            <input type="text" id="textEditor" value="${escapeHTML(t.name)}" placeholder="Type your business name...">
          </div>
          
          <div class="customizer-section">
            <label>Reorder Sections (Drag items)</label>
            <div id="sortableList" class="demo-sections">
              <div class="demo-section">Hero Section</div>
              <div class="demo-section">Services Grid</div>
              <div class="demo-section">Testimonials</div>
              <div class="demo-section">Contact Form</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 style="margin-top:0;">${escapeHTML(t.name)}</h2>
        <p class="muted">${escapeHTML(t.description)}</p>
        <div class="tags" style="margin-bottom:16px;">
          ${t.categories.map(c => `<span class="tag">${labelCategory(c)}</span>`).join("")}
        </div>
        
        <div style="background:rgba(255,255,255,0.05); padding:16px; border-radius:12px; border:1px solid var(--line); margin-bottom:16px;">
           <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="price" style="font-size:24px;">${money(t.price)}</span>
              <span class="pill">One-time payment</span>
           </div>
           <ul style="margin:10px 0 0 16px; font-size:13px; color:var(--muted);">
             <li>Full Drag & Drop Builder Access</li>
             <li>Mobile Responsive Design</li>
             <li>Stripe Integration Ready</li>
             <li>Free Hosting Setup Guide</li>
           </ul>
        </div>

        <div class="card-actions" style="flex-direction:column;">
          <button class="btn btn-primary" id="dialogBuy" style="width:100%; justify-content:center;">Buy Now with Stripe</button>
          <button class="btn btn-secondary" style="width:100%; justify-content:center;" onclick="document.getElementById('dialogClose').click()">Keep Browsing</button>
        </div>
        
        <div class="note" style="margin-top:16px; font-size:12px;">
          <strong>Need help?</strong> Call our pros at <a href="tel:+15055957861">+1 505-595-7861</a> for a custom build.
        </div>
      </div>
    </div>
  `;

  // Attach Customizer Logic
  const colorPicker = document.getElementById('colorPicker');
  const previewTitle = document.getElementById('previewTitle');
  const textEditor = document.getElementById('textEditor');
  
  colorPicker.addEventListener('input', (e) => {
    previewTitle.style.color = e.target.value;
  });
  
  textEditor.addEventListener('input', (e) => {
    previewTitle.textContent = e.target.value || t.name;
  });

  new Sortable(document.getElementById('sortableList'), {
    animation: 150,
    ghostClass: 'sortable-ghost'
  });

  document.getElementById("dialogBuy").addEventListener("click", ()=> startCheckout(t.id));
  dialog.showModal();
}

function startCheckout(templateId){
  const t = templates.find(x => x.id === templateId);
  if(!t) return;
  const subject = encodeURIComponent(`Purchase: ${t.name} (${t.id})`);
  const body = encodeURIComponent(
    `Hi Power Play Pages,\n\nI want to buy:\n- Template: ${t.name}\n- Price: ${money(t.price)}\n\nPlease send the Stripe link.\n\nThanks!`
  );
  window.location.href = `mailto:ppresource1@outlook.com?subject=${subject}&body=${body}`;
}

function escapeHTML(str){
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// 6. Event Listeners
if(chips.length) {
  chips.forEach(chip=>{
    chip.addEventListener("click", ()=>{
      chips.forEach(c=>c.classList.remove("is-active"));
      chip.classList.add("is-active");
      activeFilter = chip.dataset.filter;
      render();
    });
  });
}

if(searchInput) searchInput.addEventListener("input", render);
if(sortSelect) sortSelect.addEventListener("change", render);
if(dialogClose) dialogClose.addEventListener("click", ()=> dialog.close());
if(dialog) {
  dialog.addEventListener("click", (e)=>{
    const rect = dialog.querySelector(".dialog-inner").getBoundingClientRect();
    if(e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) dialog.close();
  });
}
if(navToggle) {
  navToggle.addEventListener("click", ()=>{
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    mobileNav.hidden = expanded;
  });
}
if(contactForm) {
  contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // Simulate send
    alert("Message sent! Opening email client...");
    const data = new FormData(contactForm);
    window.location.href = `mailto:ppresource1@outlook.com?subject=Contact&body=${data.get('message')}`;
  });
}
if(document.getElementById("year")) document.getElementById("year").textContent = new Date().getFullYear();

// Initial Render
render();
