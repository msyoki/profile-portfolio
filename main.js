// Project data. Tags drive the filters; shots are screenshots in assets/shots.
const projects = [
  {
    id: "kodibox", name: "Kodibox", tags: ["payments"], status: "In development",
    pitch: "Rent and property management for Kenyan landlords, paid straight into their own M-Pesa paybill or bank account.",
    points: [
      "Tenants pay into the landlord's own paybill, till or bank account through M-Pesa C2B and STK Push. Kodibox never holds the money.",
      "Payments are matched to the right unit and invoice automatically. Ones with a wrong account number go to a review queue with suggested matches.",
      "Every shilling goes through a double-entry ledger, and mistakes are corrected with reversals, never deleted.",
      "Built for Kenya's Data Protection Act 2019: consent records, encrypted ID and KRA PIN numbers, audit logs, and each landlord's data isolated with PostgreSQL row-level security.",
    ],
    stack: "Next.js 15, React 19, TypeScript, PostgreSQL 16, Drizzle ORM, Turborepo, Docker, GitHub Actions with CodeQL",
    shots: [
      ["kodibox-tenant-home", "Tenant app: amount due this month and a Pay with M-Pesa button"],
      ["kodibox-pay", "Tenant app: paying rent with an M-Pesa prompt"],
      ["kodibox-reconcile", "Landlord dashboard: matching an M-Pesa payment to the right unit"],
    ],
  },
  {
    id: "dss", name: "Digital Signing System", tags: ["enterprise"], status: "Techedge Africa",
    pitch: "A multi-tenant e-signature platform that replaced paper approvals for client organizations.",
    points: [
      "Upload a document, place signature fields by drag and drop, set the signing order and send it to internal and external signers, or sign it yourself.",
      "Signers confirm with an SMS one-time code. Every view, signature, comment and void is recorded in an audit trail, with the signer's IP address.",
      "Each company gets its own plan, branding, users, reusable workflows and email settings for notifications and reminders.",
      "Deployed with Docker and Nginx, and shares single sign-on with the document management system.",
    ],
    stack: "React, Vite, Material UI, pdf-lib, PDF.js, Django REST Framework, PostgreSQL, Twilio, Docker, Nginx",
    shots: [
      ["dss-draw", "Drawing a signature, with optional email, date and time stamps"],
      ["dss-placed", "The signature placed on the document"],
      ["dss-otp", "Document locked until the signer enters the SMS one-time code"],
      ["dss-outbox", "Outbox of documents sent for signing"],
      ["dss-signed", "Signing complete"],
    ],
  },
  {
    id: "uon", name: "University of Nairobi Procurement Portal", tags: ["enterprise"], status: "Techedge Africa",
    pitch: "A procurement file portal where staff create requisitions, attach documents and send them for signature.",
    points: [
      "Staff create and search requisitions, attach documents and see each one's metadata and an in-browser preview.",
      "Staff sign in with their university accounts through LDAP, handled by a Django REST service that issues JWTs.",
      "A Sign now button sends a document straight to the Digital Signing System.",
    ],
    stack: "React, Material UI, Chakra UI, Django REST Framework, LDAP (ldap3), JWT",
    shots: [
      ["uon-preview", "Requisitions created by the user, with a document preview and a Sign now button"],
    ],
  },
  {
    id: "igad", name: "IGAD E-Library", tags: ["enterprise"], status: "Techedge Africa",
    pitch: "A public library of IGAD documents and publications, searchable by collection.",
    points: [
      "Search documents and publications, and narrow results by collection, such as annual reports or a specialized institution.",
      "Preview documents in the browser or download them, with pages of results.",
    ],
    stack: "React, Material UI, React Doc Viewer, REST APIs",
    shots: [
      ["igad-home", "E-Library home page with document search"],
      ["igad-search", "Search results narrowed by collection"],
    ],
  },
  {
    id: "shuleplan", name: "ShulePlan", tags: ["mobile"], status: "Android, pilot stage",
    pitch: "A school organizer for Kenyan parents: each child's homework, exams, events and fees in one place.",
    points: [
      "Shared between both parents, and works offline: the app reads from the phone's own database and syncs when it's online.",
      "Paste an M-Pesa SMS to record a school fee payment and keep balances right.",
      "Term reports, the Ministry of Education term dates, back-to-school lists and reminders on the phone.",
    ],
    stack: "React Native (Expo), TypeScript, SQLite, Supabase (Postgres with row-level security, Auth, Realtime)",
    shots: [
      ["shuleplan-home", "Home screen with today's date and school fees due"],
      ["shuleplan-calendar", "Calendar with a coloured dot for each type of item"],
      ["shuleplan-reports", "Term report with a homework summary and school events"],
      ["shuleplan-fees", "School fees in dark mode with the balance and M-Pesa paybill"],
    ],
  },
  {
    id: "edms", name: "Enterprise Document Management", tags: ["enterprise"], status: "Techedge Africa",
    pitch: "A web client and services that extend an established document management platform for many organizations.",
    points: [
      "A responsive web app for documents and metadata: search, workflows, file handling and in-browser preview.",
      "Dynamic metadata forms, lookup controls and reusable components shared across client deployments.",
      "A central JWT sign-in service in Django that gives users one login and role-based permissions across this system and the signing platform.",
    ],
    stack: "React, Vite, Django, JWT, REST APIs",
  },
  {
    id: "f8", name: "F8", tags: ["mobile", "payments"], status: "Fintech prototype, co-developer",
    pitch: "A business card and spend-management app for Kenyan companies.",
    points: [
      "Lead contributor, with 129 of 236 commits: onboarding, KYB and KYC requirements, phone and email verification, dashboard, card, payments and transactions screens.",
      "A design-token theme and shared UI component library built from the Figma design system.",
      "Typed forms with react-hook-form and Zod, state with Zustand, and CI checks on every pull request.",
    ],
    stack: "React Native (Expo), React 19, TypeScript, Expo Router, Zustand, Zod, Figma, GitHub Actions",
    shots: [
      ["f8-intro", "Onboarding: a business card with a limit that grows"],
      ["f8-requirements", "The documents a business needs to apply"],
      ["f8-card-live", "Card approved, with the credit limit"],
    ],
  },
  {
    id: "chama", name: "Chama MGS", tags: ["payments"], status: "Personal project",
    pitch: "Contribution management for savings groups, with M-Pesa payments matched to members automatically.",
    points: [
      "Member contributions confirmed through Safaricom Daraja C2B, with duplicate payment notifications ignored.",
      "Payments go to the oldest unpaid month first, with partial payments, late fees and audited reversals.",
      "65 automated tests cover the money calculations, reconciliation and access control.",
    ],
    stack: "Django REST Framework, React, Vite, TypeScript, Daraja API, Docker",
  },
  {
    id: "ebola", name: "Kenya Ebola Live Tracker", tags: [], status: "Personal project",
    pitch: "A near-real-time public health tracker that only publishes what a person has checked.",
    points: [
      "Checks Ministry of Health, WHO and Africa CDC sources every 30 minutes and queues new reports for review.",
      "Strict, tested rules decide which official statements may appear automatically on the county map.",
    ],
    stack: "Python, GitHub Actions, GitHub Pages",
    shots: [
      ["ebola-map", "Tracker with case counts and a map tracing the route from DR Congo to Nairobi"],
    ],
  },
  {
    id: "daybook", name: "Daybook", tags: ["mobile"], status: "Personal project",
    pitch: "An offline bookkeeping app for a second-hand clothing shop.",
    points: [
      "Records sales, spending and bales in seconds, and helps the owner count the cash drawer.",
      "Answers three questions: am I making money, which bales are worth buying again, and where is my money going.",
    ],
    stack: "React Native (Expo), TypeScript, SQLite",
    shots: [
      ["daybook-home", "Home screen with money in, out and left today"],
      ["daybook-sale", "Recording a sale"],
      ["daybook-reports", "Reports with a chart of the shop's takings"],
    ],
  },
  {
    id: "moirai", name: "Moirai", tags: ["payments", "websites"], status: "Client website",
    pitch: "A nonprofit website that takes donations through M-Pesa and PayPal.",
    points: [
      "Donation flow with preset and custom amounts, with payment credentials kept server-side in Netlify Functions.",
      "Accessible, responsive and fast, with lazy-loaded images and code splitting.",
    ],
    stack: "React, TypeScript, Vite, Tailwind CSS, Framer Motion, Netlify Functions",
  },
  {
    id: "steve", name: "Steve Kenyan Safaris & Treks", tags: ["websites"], status: "Client website",
    url: "https://stevekenyansafarisandtreks.tours/",
    pitch: "A booking website for a Kenyan tour company running Mount Kenya, Kilimanjaro and safari trips.",
    points: [
      "Designed and built the site from scratch, with pages for each trek, safari and destination.",
      "Visitors can reach the team straight from any page through WhatsApp, phone or email.",
      "Fast and search-friendly: hand-written HTML and CSS, a sitemap, a web app manifest and Netlify hosting.",
    ],
    stack: "HTML, CSS, JavaScript, Netlify",
    shots: [["steve-home", "Steve Kenyan Safaris home page"]],
  },
  {
    id: "techedge", name: "Techedge Africa website", tags: ["websites"], status: "Maintained",
    url: "https://techedge.co.ke/",
    pitch: "The company website for Techedge Africa's document management, digitization and e-signature services.",
    points: [
      "Keep the site, theme and plugins up to date, secure and backed up.",
      "Update pages and content as the company's solutions change.",
    ],
    stack: "WordPress, Divi",
    shots: [["techedge-home", "Techedge Africa home page"]],
  },
  {
    id: "designmotives", name: "Design Motives website", tags: ["websites"], status: "Maintained",
    url: "https://designmotives.co.ke/",
    pitch: "The website of Design Motives, an interior design studio in Kenya.",
    points: [
      "Keep the site, theme and plugins up to date, secure and backed up.",
      "Update pages and project galleries as the studio's work grows.",
    ],
    stack: "WordPress, Astra, Elementor",
    shots: [["designmotives-home", "Design Motives home page"]],
  },
];

const list = document.getElementById("project-list");
const dialog = document.getElementById("detail");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let lastRow = null;

function withTransition(update) {
  if (!document.startViewTransition || reduceMotion) { update(); return Promise.resolve(); }
  return document.startViewTransition(update).finished;
}

function render(filter) {
  list.innerHTML = "";
  for (const p of projects) {
    if (filter !== "all" && !p.tags.includes(filter)) continue;
    const li = document.createElement("li");
    li.className = "project";
    // Each row keeps its own name so filtering animates rows into their new places
    li.style.viewTransitionName = "row-" + p.id;
    li.innerHTML = `
      <button type="button" aria-haspopup="dialog" data-id="${p.id}">
        <span class="project-name">${p.name}</span>
        <span class="project-pitch">${p.pitch}</span>
        <span class="project-status">${p.status}</span>
      </button>`;
    list.appendChild(li);
  }
}

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    withTransition(() => render(btn.dataset.filter));
  });
});

list.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-id]");
  if (btn) openProject(btn);
});

function fill(p) {
  document.getElementById("detail-status").textContent = p.status;
  document.getElementById("detail-title").textContent = p.name;
  document.getElementById("detail-pitch").textContent = p.pitch;
  document.getElementById("detail-stack").textContent = p.stack;
  const visit = document.getElementById("detail-visit");
  visit.hidden = !p.url;
  if (p.url) { visit.href = p.url; visit.textContent = "Visit " + new URL(p.url).hostname; }
  const gallery = document.getElementById("detail-gallery");
  gallery.innerHTML = "";
  gallery.hidden = !p.shots;
  for (const [file, alt] of p.shots || []) {
    const img = document.createElement("img");
    img.src = `assets/shots/${file}.jpg`;
    img.alt = alt;
    img.loading = "lazy";
    img.style.setProperty("--i", gallery.children.length);
    gallery.appendChild(img);
  }
  const ul = document.getElementById("detail-points");
  ul.innerHTML = "";
  for (const pt of p.points) {
    const li = document.createElement("li");
    li.textContent = pt;
    li.style.setProperty("--i", (p.shots ? p.shots.length : 0) + ul.children.length);
    ul.appendChild(li);
  }
}

// The clicked row's title morphs into the dialog heading
function setShared(row, on) {
  const li = row.closest(".project");
  li.style.viewTransitionName = on ? "project-card" : "row-" + row.dataset.id;
  row.querySelector(".project-name").style.viewTransitionName = on ? "project-title" : "";
}

async function openProject(row) {
  const p = projects.find((x) => x.id === row.dataset.id);
  lastRow = row;
  fill(p);
  setShared(row, true);
  const title = document.getElementById("detail-title");
  await withTransition(() => {
    setShared(row, false);
    row.closest(".project").style.viewTransitionName = "none";
    dialog.style.viewTransitionName = "project-card";
    title.style.viewTransitionName = "project-title";
    dialog.showModal();
  });
}

async function closeProject() {
  const title = document.getElementById("detail-title");
  const row = lastRow;
  await withTransition(() => {
    dialog.style.viewTransitionName = "";
    title.style.viewTransitionName = "";
    dialog.close();
    if (row && row.isConnected) setShared(row, true);
  });
  if (row && row.isConnected) { setShared(row, false); row.focus(); }
}

document.getElementById("detail-close").addEventListener("click", closeProject);
dialog.addEventListener("cancel", (e) => { e.preventDefault(); closeProject(); });
dialog.addEventListener("click", (e) => { if (e.target === dialog) closeProject(); });

// Mobile apps section: whichever story sits in the middle of the screen drives the pinned phone
const steps = document.querySelectorAll(".app-step");
const screens = document.querySelectorAll(".phone-screen");
const bars = document.querySelectorAll(".phone-progress span");

function showStep(n) {
  steps.forEach((s, i) => s.classList.toggle("is-active", i === n));
  screens.forEach((s, i) => { s.classList.toggle("is-active", i === n); s.classList.toggle("is-past", i < n); });
  bars.forEach((b, i) => b.classList.toggle("is-active", i === n));
}

// Pick the story whose centre is closest to the middle of the screen, once per frame
let current = -1, ticking = false;
function pickStep() {
  ticking = false;
  const mid = innerHeight / 2;
  let best = 0, bestDist = Infinity;
  steps.forEach((s, i) => {
    const r = s.getBoundingClientRect();
    const d = Math.abs(r.top + r.height / 2 - mid);
    if (d < bestDist) { bestDist = d; best = i; }
  });
  if (best !== current) { current = best; showStep(best); }
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(pickStep); } }, { passive: true });
addEventListener("resize", pickStep);

// "Open project" in a story opens the same panel as the list (no morph: the row is far away)
document.querySelectorAll("[data-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    fill(projects.find((x) => x.id === btn.dataset.open));
    lastRow = null;
    dialog.showModal();
  });
});

render("all");
pickStep();
