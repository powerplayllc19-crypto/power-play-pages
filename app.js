/* Power Play Pages marketplace demo
   - Template listing + filters + sorting
   - Modal details
   - Stripe-ready purchase redirect stub
*/

const templates = [
  // Ecommerce
  mk("ppp-eco-ministore", "MiniStore Ecommerce", 29, ["ecommerce", "landing"], "Featured", "Perfect for a small product catalog with a clean checkout path."),
  mk("ppp-eco-boutique", "Boutique Brand Store", 79, ["ecommerce"], "Featured", "High-end product layout for fashion, beauty, and boutique brands."),
  mk("ppp-eco-digital", "Digital Downloads Shop", 49, ["ecommerce"], "New", "Sell PDFs, presets, courses, or templates with Stripe-ready flow."),
  mk("ppp-eco-grocery", "Local Grocery & Delivery", 120, ["ecommerce", "services"], "New", "Great for local delivery, curated boxes, and weekly drops."),
  mk("ppp-eco-tech", "Tech Product Launch Store", 99, ["ecommerce", "landing"], "Featured", "Launch-focused with comparison sections and FAQs."),

  // Services
  mk("ppp-svc-cleaning", "Cleaning Service Pro", 35, ["services", "booking"], "Featured", "Service cards, quote form, and trust sections."),
  mk("ppp-svc-barber", "Barber Shop Booking", 25, ["services", "booking"], "Featured", "Showcuts gallery, pricing, and booking CTA."),
  mk("ppp-svc-coaching", "Coaching & Consulting", 60, ["services", "landing"], "New", "Designed to convert calls: proof, offers, and FAQ."),
  mk("ppp-svc-contractor", "Contractor & Home Renovation", 55, ["services"], "Featured", "Project gallery, testimonials, and lead capture."),
  mk("ppp-svc-law", "Law Firm Classic", 150, ["services"], "New", "Professional layout with practice areas and intake form."),

  // Landing
  mk("ppp-lnd-app", "App Landing Page", 19, ["landing"], "Featured", "Hero, features, screenshots, pricing, and signup."),
  mk("ppp-lnd-event", "Event Promo Page", 15, ["landing"], "New", "Speakers, schedule, tickets CTA."),
  mk("ppp-lnd-restaurant", "Restaurant Menu & Reservations", 45, ["landing", "services", "booking"], "Featured", "Menu blocks + reservation CTA."),
  mk("ppp-lnd-music", "Artist / Music Release", 10, ["landing", "portfolio"], "New", "One-page vibe with embeds and merch CTA."),

  // Portfolio
  mk("ppp-prt-creative", "Creative Portfolio", 22, ["portfolio"], "Featured", "Minimal grid, case studies, and contact."),
  mk("ppp-prt-photo", "Photographer Portfolio", 40, ["portfolio"], "New", "Large image blocks and booking inquiry."),
  mk("ppp-prt-agency", "Agency Showcase", 110, ["portfolio", "services"], "Featured", "Case studies, process, and retainer offer."),

  // Booking
  mk("ppp-bkg-salon", "Salon Booking", 30, ["booking", "services"], "New", "Service menu + deposits and booking CTA."),
  mk("ppp-bkg-fitness", "Trainer & Classes", 33, ["booking", "services"], "Featured", "Classes schedule, packages, and intake form."),

  // Content / Blog
  mk("ppp-blg-personal", "Personal Blog", 5, ["content"], "Featured", "Simple, fast, readable blog layout."),
  mk("ppp-blg-business", "Business Blog + Newsletter", 18, ["content", "landing"], "New", "Lead magnet + email signup sections."),
];

function mk(id, name, price, categories, badge, description){
  return {
    id, name, price, categories, badge, description,
    createdAt: Date.now() - Math.floor(Math.random()*1000*60*60*24*60) // up to ~60 days old
  };
}

const grid = document.getElementById("templateGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const chips = Array.from(document.querySelectorAll(".chip"));
const dialog = document.getElementById("templateDialog");
const dialogContent = document.getElementById("dialogContent");
const dialogClose = document.getElementById("dialogClose");

let activeFilter = "all";

function money(n){
  // integer dollars for this demo
  return `$${n}`;
}

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
    // featured: badge priority then price
    const score = (t)=> (t.badge === "Featured" ? 0 : 1);
    copy.sort((a,b)=> (score(a)-score(b)) || (a.price-b.price));
  }
  return copy;
}

function render(){
  const q = searchInput.value || "";
  const filtered = templates.filter(t => passesFilter(t) && matches(t, q));
  const sorted = sortTemplates(filtered);

  grid.innerHTML = sorted.map(t => cardHTML(t)).join("") || emptyHTML(q);
  grid.querySelectorAll("[data-open]").forEach(btn=>{
    btn.addEventListener("click", ()=> openDialog(btn.dataset.open));
  });
  grid.querySelectorAll("[data-buy]").forEach(btn=>{
    btn.addEventListener("click", ()=> startCheckout(btn.dataset.buy));
  });
}

function cardHTML(t){
  const cats = t.categories.map(c => `<span class="tag">${labelCategory(c)}</span>`).join("");
  return `
    <article class="card">
      <div class="thumb" aria-hidden="true"></div>
      <div class="card-body">
        <div class="card-title">${escapeHTML(t.name)}</div>
        <div class="tags">${cats}</div>
        <div class="card-foot">
          <div>
            <div class="price">${money(t.price)}</div>
            <div class="small">${escapeHTML(t.badge)} • 100% customizable</div>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-secondary btn-sm" data-open="${t.id}">Preview</button>
          <button class="btn btn-primary btn-sm" data-buy="${t.id}">Buy</button>
        </div>
      </div>
    </article>
  `;
}

function emptyHTML(q){
  return `
    <div class="note">
      <strong>No results</strong>
      <div class="muted">Try a different keyword${q ? ` than “${escapeHTML(q)}”` : ""} or choose another category.</div>
    </div>
  `;
}

function labelCategory(c){
  const map = {
    ecommerce: "Ecommerce",
    services: "Services",
    landing: "Landing",
    portfolio: "Portfolio",
    booking: "Booking",
    content: "Blog"
  };
  return map[c] || c;
}

function openDialog(id){
  const t = templates.find(x => x.id === id);
  if(!t) return;

  dialogContent.innerHTML = `
    <div class="dialog-grid">
      <div class="dialog-preview" aria-hidden="true"></div>
      <div>
        <h2 style="margin:0 0 8px;">${escapeHTML(t.name)}</h2>
        <p class="muted" style="margin:0 0 12px;">${escapeHTML(t.description)}</p>

        <div class="tags" style="margin:0 0 10px;">
          ${t.categories.map(c => `<span class="tag">${labelCategory(c)}</span>`).join("")}
        </div>

        <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
          <div>
            <div class="price" style="font-size:22px;">${money(t.price)}</div>
            <div class="small">Includes setup guide • Responsive • Drag-and-drop ready</div>
          </div>
          <button class="btn btn-primary" id="dialogBuy">Buy with Stripe</button>
        </div>

        <div class="note" style="margin-top:12px;">
          <strong>Need help customizing?</strong>
          <div class="muted">Email <a href="mailto:ppresource1@outlook.com">ppresource1@outlook.com</a> or call <a href="tel:+15055957861">+1 505-595-7861</a>.</div>
        </div>
      </div>
    </div>
  `;

  const buyBtn = document.getElementById("dialogBuy");
  buyBtn.addEventListener("click", ()=> startCheckout(t.id));

  dialog.showModal();
}

function startCheckout(templateId){
  // Stripe-ready flow:
  // In production you create a backend endpoint that calls Stripe to create a Checkout Session,
  // then redirect to the session URL.
  const t = templates.find(x => x.id === templateId);
  if(!t) return;

  // Demo behavior: open mailto as a fallback.
  // Replace with real redirect once you have backend: window.location.href = session.url
  const subject = encodeURIComponent(`Template Purchase: ${t.name} (${t.id})`);
  const body = encodeURIComponent(
    `Hi Power Play Pages,\n\nI would like to purchase this template:\n- Template: ${t.name}\n- ID: ${t.id}\n- Price: ${money(t.price)}\n\nPlease send next steps / Stripe checkout link.\n\nThanks,`
  );
  window.location.href = `mailto:ppresource1@outlook.com?subject=${subject}&body=${body}`;
}

function escapeHTML(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

// Events
chips.forEach(chip=>{
  chip.addEventListener("click", ()=>{
    chips.forEach(c=>c.classList.remove("is-active"));
    chip.classList.add("is-active");
    activeFilter = chip.dataset.filter;
    render();
  });
});

searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);

dialogClose.addEventListener("click", ()=> dialog.close());
dialog.addEventListener("click", (e)=>{
  const rect = dialog.querySelector(".dialog-inner").getBoundingClientRect();
  const inDialog = (
    e.clientX >= rect.left && e.clientX <= rect.right &&
    e.clientY >= rect.top && e.clientY <= rect.bottom
  );
  if(!inDialog) dialog.close();
});

// Mobile nav
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
navToggle.addEventListener("click", ()=>{
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  mobileNav.hidden = expanded;
});

// Contact form: open mail client
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Power Play Pages: ${topic} (${name})`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}\n`
  );
  window.location.href = `mailto:ppresource1@outlook.com?subject=${subject}&body=${body}`;
});

document.getElementById("year").textContent = String(new Date().getFullYear());

// Initial render
render();
