const translations = {
  fr: {
    brandRole: "Aeronautics & Space",
    navAbout: "Profil", navProjects: "Projets", navJourney: "Parcours", navSkills: "Compétences", navContact: "Contact",
    heroEyebrow: "Élève ingénieur Arts et Métiers",
    heroLine1: "Je relie la mécanique,", heroLine2: "la donnée et l’IA", heroLine3: "aux réalités industrielles.",
    heroLead: "Orienté aéronautique et spatial, je conçois des solutions concrètes : modèles de calcul, applications métiers, systèmes MES et outils d’aide à la décision.",
    heroProjects: "Découvrir mes projets", heroCV: "Voir mon CV",
    availability: "Disponible pour un stage de fin d’études à partir de janvier 2027",
    heroCard1Label: "Spécialisation", heroCard2Label: "Mobilité", heroCard2Value: "France & international",
    metric1: "tables interconnectées dans le MES", metric2: "sous-opérations digitalisées", metric3: "champs métier extraits par IA", metric4: "KPI industriels structurés",
    aboutEyebrow: "Profil", aboutTitle: "Un ingénieur qui comprend le terrain avant de proposer une solution.",
    aboutP1: "Mon parcours associe mécanique, simulation numérique, méthodes industrielles et développement logiciel. J’aime partir d’un problème réel, clarifier les contraintes, construire un prototype, mesurer les résultats puis documenter une solution utilisable par les équipes.",
    aboutP2: "Je travaille avec méthode, confiance et sens des responsabilités. Mon objectif est de contribuer à l’industrialisation de systèmes aéronautiques plus sûrs, plus performants et mieux pilotés par la donnée.",
    quote: "Comprendre vite, proposer avec discernement et transformer une idée technique en résultat mesurable.",
    projectsEyebrow: "Projets phares", projectsTitle: "Des réalisations à l’interface entre atelier, mécanique, données et intelligence artificielle.",
    filterAll: "Tous", filterIndustry: "Industrie 4.0", filterAI: "IA & données", filterMechanics: "Mécanique", filterEco: "Éco-conception",
    caseStudy: "Voir l’étude de cas",
    p1Title: "MES sur Tulip — Evolutive Lean Factory",
    p1Text: "Conception d’un MES de niveau 3 pour digitaliser l’assemblage de vérins : traçabilité par ordre de fabrication, horodatage à chaque opération, module qualité et supervision en temps réel.",
    p1R1: "opérations", p1R2: "sous-opérations", p1R3: "tables de données",
    p1Details: "Architecture pensée pour identifier les goulots d’étranglement opération par opération. Le projet couvre six fonctions MESA et transpose les principes de traçabilité unitaire attendus sur une FAL.",
    p2Title: "Système ANDON digital",
    p2Text: "Application web temps réel avec API REST, cycle OPEN–ACK–ARRIVED–CLOSED, priorisation des alertes, suivi MTTA/MTTR, contrôle des SLA et capitalisation 5M.",
    p2Impact: "Production • Qualité • Logistique • Maintenance",
    p2Details: "La clôture d’une alerte exige une cause racine et une action corrective. Le système alimente une logique QRQC et améliore la réactivité collective sur la ligne Karakuri A1.",
    p3Title: "Reporting terrain par audio et IA",
    p3Text: "Pipeline transformant un compte rendu vocal en données techniques structurées et en rapport métier directement exploitable par les équipes industrielles.",
    p3R1: "formats audio", p3R2: "champs métier",
    p3Details: "La solution combine transcription, extraction NLP et génération de livrable pour réduire les tâches administratives et mieux capitaliser les observations réalisées sur le terrain.",
    p4Title: "Analyse modale de structures",
    p4Text: "Modélisation par éléments finis, convergence de maillage, extraction des fréquences propres et interprétation des modes de flexion, torsion et couplage.",
    p4Impact: "Résonance • Fatigue vibratoire • Flottement aéroélastique",
    p4Details: "La démarche vise à prévenir la coïncidence entre fréquences propres et excitations aérodynamiques ou moteurs, enjeu critique pour les structures aéronautiques.",
    p5Title: "Optimisation d’un SVM par Uzawa",
    p5Text: "Implémentation from scratch d’un algorithme primal-dual sous contraintes, avec vérification de la convergence et visualisation automatique des vecteurs supports.",
    p5Impact: "Classification de cordons de soudure WAAM",
    p5Details: "Application à la fabrication additive arc-fil, procédé pertinent pour produire des structures aéronautiques de grande dimension en aluminium ou en titane.",
    p6Title: "Éco-conception et analyse de cycle de vie",
    p6Text: "Analyse complète d’une trottinette électrique, sélection des matériaux, quantification des impacts et recommandations de Design for Disassembly.",
    p6Details: "L’étude identifie la fabrication et les matières premières comme principaux postes d’impact et quantifie le potentiel de récupération associé au recyclage.",
    journeyEyebrow: "Parcours", journeyTitle: "Expérience industrielle, formation scientifique et responsabilités collectives.",
    experience: "Expérience", education: "Formation",
    dogaTitle: "Stage ingénieur — DOGA FZ, Tanger Free Zone",
    dogaText: "Digitalisation de la performance industrielle : application Flask/SQLAlchemy pour cinq départements, exports Excel, plus de 15 KPI et recommandations Odoo/Power BI.",
    amText: "Cycle ingénieur, expertise Aeronautics & Space. Campus de Rabat puis campus de Bordeaux-Talence.",
    cpgeTitle: "Classes préparatoires — filière MP",
    cpgeText: "CPGE Tétouan : mathématiques, physique, sciences de l’ingénieur et résolution de problèmes complexes.",
    hostTitle: "Hôte Airbnb & Booking.com",
    hostText: "Gestion des réservations, relation voyageurs, coordination opérationnelle et amélioration continue de l’expérience client.",
    leadership: "Leadership",
    presidentTitle: "Président de l’Association des Élèves",
    presidentText: "Représentation étudiante, gestion budgétaire, animation d’une équipe de bénévoles, événements de plus de 200 personnes et partenariats.",
    since2025: "Depuis 2025",
    hultText: "Supervision d’un concours international d’entrepreneuriat social et accompagnement des équipes participantes à Arts et Métiers Rabat / UM6P Rabat.",
    skillsEyebrow: "Compétences", skillsTitle: "Une double culture mécanique et numérique, pensée pour l’industrie aéronautique.",
    cluster1: "Conception & calcul", cluster2: "Digital manufacturing", cluster3: "Développement & données", cluster4: "Qualité & méthodes",
    aeroKeywords: "Mots-clés aéronautiques",
    visionEyebrow: "Recherche & veille", visionTitle: "L’employabilité responsable de l’IA dans l’aéronautique et le spatial.",
    visionText: "Je m’intéresse aux copilotes métiers, à l’inspection assistée, à la maintenance prédictive, à l’analyse documentaire et à l’aide à la décision. Ma ligne directrice : une IA explicable, intégrée aux processus qualité et réellement utile aux ingénieurs comme aux opérateurs.",
    contactEyebrow: "Parlons de votre prochain défi",
    contactTitle: "Industrialisation, méthodes, structures ou IA appliquée : échangeons.",
    contactText: "Je recherche un stage de fin d’études à partir de janvier 2027, en France ou à l’international.",
    footer: "Conçu comme un pont entre ingénierie, industrie et numérique."
  },
  en: {
    brandRole: "Aeronautics & Space",
    navAbout: "About", navProjects: "Projects", navJourney: "Journey", navSkills: "Skills", navContact: "Contact",
    heroEyebrow: "Arts et Métiers engineering student",
    heroLine1: "I connect mechanics,", heroLine2: "data and AI", heroLine3: "to industrial realities.",
    heroLead: "Focused on aerospace, I build practical solutions: engineering models, business applications, MES systems and decision-support tools.",
    heroProjects: "Explore my projects", heroCV: "View my résumé",
    availability: "Available for a final-year internship from January 2027",
    heroCard1Label: "Specialization", heroCard2Label: "Mobility", heroCard2Value: "France & international",
    metric1: "interconnected MES tables", metric2: "digitized sub-operations", metric3: "business fields extracted by AI", metric4: "structured industrial KPIs",
    aboutEyebrow: "About", aboutTitle: "An engineer who understands the shop floor before proposing a solution.",
    aboutP1: "My background combines mechanics, numerical simulation, industrial methods and software development. I like to start from a real problem, clarify constraints, build a prototype, measure results and document a solution that teams can actually use.",
    aboutP2: "I work methodically, confidently and responsibly. My goal is to support the industrialization of safer, higher-performing aerospace systems that are better driven by data.",
    quote: "Understand quickly, propose thoughtfully and turn a technical idea into a measurable result.",
    projectsEyebrow: "Selected projects", projectsTitle: "Work at the intersection of the shop floor, mechanics, data and artificial intelligence.",
    filterAll: "All", filterIndustry: "Industry 4.0", filterAI: "AI & data", filterMechanics: "Mechanics", filterEco: "Eco-design",
    caseStudy: "View case study",
    p1Title: "Tulip MES — Evolutive Lean Factory",
    p1Text: "Designed a level-3 MES to digitize pneumatic cylinder assembly, including work-order traceability, operation-level timestamps, quality reporting and real-time supervision.",
    p1R1: "operations", p1R2: "sub-operations", p1R3: "data tables",
    p1Details: "The architecture identifies bottlenecks at operation level. It covers six MESA functions and transfers unit-traceability principles to the context of an aerospace final assembly line.",
    p2Title: "Digital ANDON system",
    p2Text: "Real-time web application with REST API, OPEN–ACK–ARRIVED–CLOSED workflow, automated alert prioritization, MTTA/MTTR tracking, SLA control and 5M knowledge capture.",
    p2Impact: "Production • Quality • Logistics • Maintenance",
    p2Details: "An alert cannot be closed without a root cause and corrective action. The system supports QRQC routines and improves collective responsiveness on the Karakuri A1 line.",
    p3Title: "Voice-to-report AI pipeline",
    p3Text: "Pipeline converting an engineer’s voice note into structured technical data and a ready-to-use business report for industrial teams.",
    p3R1: "audio formats", p3R2: "business fields",
    p3Details: "The solution combines transcription, NLP extraction and document generation to reduce administrative work and improve the capture of field knowledge.",
    p4Title: "Structural modal analysis",
    p4Text: "Finite-element modeling, mesh convergence study, natural-frequency extraction and interpretation of bending, torsional and coupled modes.",
    p4Impact: "Resonance • Vibration fatigue • Aeroelastic flutter",
    p4Details: "The approach aims to prevent natural frequencies from coinciding with aerodynamic or engine excitation frequencies, a critical issue in aerospace structures.",
    p5Title: "SVM optimization using Uzawa",
    p5Text: "From-scratch implementation of a constrained primal-dual algorithm, including convergence verification and automatic support-vector visualization.",
    p5Impact: "WAAM weld-bead classification",
    p5Details: "Applied to wire-arc additive manufacturing, a relevant process for producing large aerospace structures in aluminum or titanium.",
    p6Title: "Eco-design and life-cycle assessment",
    p6Text: "Full life-cycle assessment of an electric scooter, including material selection, impact quantification and Design for Disassembly recommendations.",
    p6Details: "The study identifies manufacturing and raw materials as the main impact sources and quantifies the potential recovery enabled by recycling.",
    journeyEyebrow: "Journey", journeyTitle: "Industrial experience, scientific education and collective responsibility.",
    experience: "Experience", education: "Education",
    dogaTitle: "Engineering internship — DOGA FZ, Tanger Free Zone",
    dogaText: "Industrial performance digitalization: Flask/SQLAlchemy application for five departments, Excel exports, 15+ KPIs and Odoo/Power BI integration recommendations.",
    amText: "Engineering degree, Aeronautics & Space specialization. Rabat campus followed by Bordeaux-Talence campus.",
    cpgeTitle: "Preparatory classes — Mathematics & Physics",
    cpgeText: "CPGE Tétouan: mathematics, physics, engineering science and complex problem solving.",
    hostTitle: "Airbnb & Booking.com host",
    hostText: "Booking management, guest relations, operational coordination and continuous improvement of the customer experience.",
    leadership: "Leadership",
    presidentTitle: "President of the Student Association",
    presidentText: "Student representation, budget management, volunteer-team leadership, 200+ attendee events and partnership development.",
    since2025: "Since 2025",
    hultText: "Leading an international social-entrepreneurship competition and coaching participating teams at Arts et Métiers Rabat / UM6P Rabat.",
    skillsEyebrow: "Skills", skillsTitle: "A dual mechanical and digital culture designed for the aerospace industry.",
    cluster1: "Design & simulation", cluster2: "Digital manufacturing", cluster3: "Software & data", cluster4: "Quality & methods",
    aeroKeywords: "Aerospace keywords",
    visionEyebrow: "Research & technology watch", visionTitle: "Responsible and employable AI for aeronautics and space.",
    visionText: "I am interested in engineering copilots, assisted inspection, predictive maintenance, document analysis and decision support. My guiding principle is explainable AI, embedded in quality processes and genuinely useful to engineers and operators.",
    contactEyebrow: "Let’s discuss your next challenge",
    contactTitle: "Industrialization, methods, structures or applied AI: let’s talk.",
    contactText: "I am seeking a final-year internship from January 2027, in France or internationally.",
    footer: "Designed as a bridge between engineering, industry and digital technology."
  }
};

const langToggle = document.querySelector(".lang-toggle");
const langActive = document.querySelector(".lang-active");

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) node.textContent = translations[lang][key];
  });
  langActive.textContent = lang.toUpperCase();
  const inactive = lang === "fr" ? "EN" : "FR";
  langToggle.lastElementChild.textContent = inactive;
  localStorage.setItem("portfolio-language", lang);
}

langToggle.addEventListener("click", () => {
  const next = document.documentElement.lang === "fr" ? "en" : "fr";
  setLanguage(next);
});

const savedLanguage = localStorage.getItem("portfolio-language");
if (savedLanguage === "en") setLanguage("en");

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const filters = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".project-card");
filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    cards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.hidden = filter !== "all" && !categories.includes(filter);
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

const progress = document.querySelector(".scroll-progress span");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });

document.getElementById("year").textContent = new Date().getFullYear();
