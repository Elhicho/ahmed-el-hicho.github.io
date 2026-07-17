const translations = {
  fr: {
    brandRole: "Aeronautics & Space",
    navAbout: "Profil", navProjects: "Projets", navJourney: "Parcours", navSkills: "Compétences", navContact: "Contact",
    heroEyebrow: "Élève ingénieur Arts et Métiers",
    heroLine1: "Je relie la mécanique,", heroLine2: "la donnée et l’IA", heroLine3: "aux réalités industrielles.",
    heroLead: "Orienté aéronautique et spatial, je conçois des solutions concrètes : modèles de calcul, applications métiers, systèmes MES et outils d’aide à la décision.",
    heroProjects: "Découvrir mes projets", heroCV: "Voir mon CV",
    availability: "Disponible pour un stage de fin d’études de février 2027 à août 2027",
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
    contactText: "Je recherche un stage de fin d’études de février 2027 à août 2027, en France ou à l’international.",
    footer: "Conçu comme un pont entre ingénierie, industrie et numérique."
  },
  en: {
    brandRole: "Aeronautics & Space",
    navAbout: "About", navProjects: "Projects", navJourney: "Journey", navSkills: "Skills", navContact: "Contact",
    heroEyebrow: "Arts et Métiers engineering student",
    heroLine1: "I connect mechanics,", heroLine2: "data and AI", heroLine3: "to industrial realities.",
    heroLead: "Focused on aerospace, I build practical solutions: engineering models, business applications, MES systems and decision-support tools.",
    heroProjects: "Explore my projects", heroCV: "View my résumé",
    availability: "Available for a final-year internship from February to August 2027",
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
    contactText: "I am seeking a final-year internship from February to August 2027, in France or internationally.",
    footer: "Designed as a bridge between engineering, industry and digital technology."
  }
};

Object.assign(translations.fr, {
  quickViewBtn: "👁️ Aperçu technique",
  standardsEyebrow: "Référentiels & Exigences industrielles",
  standardsTitle: "Standards de l'Aérospatiale & Méthodologies d'Ingénierie",
  pillar1Title: "Normes & Conformité Qualité",
  pillar2Title: "Industrialisation & Opérations (FAL)",
  pillar3Title: "Technologies & Procédés Avancés",
  copyEmailSuccess: "E-mail copié dans le presse-papiers !",
  vcardBtn: "📇 Exporter ma fiche (.vcf)",
  modalContextTitle: "Contexte & Problématique industrielle",
  modalMethodTitle: "Méthodologie & Déploiement technique",
  modalResultsTitle: "Résultats clés & Apports opérationnels",
  modalToolsTitle: "Environnement & Outils",
  modalCloseBtn: "Fermer",
  searchPlaceholder: "Rechercher par outil, norme ou mot-clé (ex : Abaqus, Tulip, Python, QRQC...)",
    navMedia: "Médias & Conférences",
  mediaEyebrow: "Médias & Actualités LinkedIn",
  mediaTitle: "Conférences, Pilotage d'Événements Industriels et Engagements Institutionnels.",
  mediaTagEvent: "Événement / Institutionnel",
  mediaTagPilot: "Chef de Projet / Pilote d'Événement",
  mediaTagPanel: "Speaker / Table Ronde Industrielle",
  mediaTagVision: "Leadership & Vision Ingénierie",
  mediaBtnText: "Voir la publication sur LinkedIn ↗",
  mediaTagHult: "Campus Director — Hult Prize",
  mediaHultTitle: "Hult Prize à Arts et Métiers Rabat : Un événement marquant pour l'innovation et l'entrepreneuriat",
  mediaHultText: "Photo collective de la grande finale et des participants à l'auditorium de l'École Arts et Métiers Campus de Rabat. Organisation et accompagnement des élèves ingénieurs sur des problématiques à fort impact technologique et social.",
  mediaJobTeamTitle: "Présentation de l'Équipe d'Organisation & Dossier de Partenariat Job Dating",
  mediaJobTeamText: "Affiche officielle de l'équipe organisatrice du Job Dating 2e Édition (en tant que Pilote général de l'événement). Déploiement du dossier de partenariat pour rapprocher les grands acteurs industriels et les élèves ingénieurs.",
  mediaRoundTitle: "Table Ronde : Renforcer le Continuum Formation - Recherche - Innovation au Maroc",
  mediaRoundText: "Affiche officielle des intervenants à la Soirée Annuelle Evolutive Learning Factories. Prise de parole en tant que Président de l'Union des Élèves aux côtés de Pr. Wafa Skalli (Fondatrice Institut Charpak), Faouzi Annajah (CEO NamX) et des directeurs de recherche.",
  mediaStageAhTitle: "Échanges et Vision d'Ingénierie sur Scène lors de la Soirée SEBN_MA",
  mediaStageAhText: "Intervention en direct sur scène aux côtés des professeurs et directeurs industriels pour débattre des exigences de l'excellence opérationnelle, de l'industrialisation avancée et du rôle des élèves ingénieurs Arts et Métiers.",
  mediaEamrTitle: "Soirée Annuelle Evolutive Learning Factories & Partenariats Industriels",
  mediaEamrText: "Vue d'ensemble de la soirée annuelle et des tables rondes à l'auditorium d'Arts et Métiers Rabat. Un événement d'exception renforçant les ponts entre l'excellence académique et les leaders de l'industrie aéronautique et automobile.",
  media1Title: "Forum Job Dating EAMR 2e Édition : Remerciements aux Partenaires & Sponsors",
  media1Text: "Retour officiel de l'École Arts et Métiers Campus de Rabat sur le succès de la 2e édition du Job Dating. Une journée d'échanges fructueux entre plus de 40 partenaires industriels (aéronautique, automobile, tech) et les élèves ingénieurs.",
  media2Title: "Présentation de l'Équipe d'Organisation & Dossier de Partenariat Job Dating",
  media2Text: "En tant que Pilote général du Job Dating, présentation officielle du dossier de partenariat, de la vision stratégique de l'événement et de l'équipe de coordination (15 responsables de pôles logistique, communication et partenariats).",
  media3Title: "Table Ronde : Renforcer le Continuum Formation - Recherche - Innovation au Maroc",
  media3Text: "Intervention en tant qu'élève ingénieur et Président de l'Union des Élèves lors de la Soirée Annuelle Evolutive Learning Factories aux côtés de Pr. Wafa Skalli (Fondatrice Institut de Biomécanique), Faouzi Annajah (CEO NamX), Rachid El Bouazzaoui et directeurs industriels.",
  media4Title: "Vision d'Ingénierie & Engagement à l'École des Arts et Métiers",
  media4Text: "Échanges sur les grands enjeux de l'industrialisation, de la transition numérique et de l'excellence opérationnelle, portant la voix des élèves ingénieurs Arts et Métiers vers les défis et exigences de l'aéronautique de demain.",
  jobDatingTeamLabel: "Équipe Pilote Job Dating 2026",
  jobDatingGroupLabel: "40+ Partenaires & Élèves EAMR",
  roundTableLabel: "Speaker Table Ronde — Pr. Wafa Skalli & NamX CEO",
  sebnStageLabel: "Soirée Annuelle Evolutive Learning Factories",
  jobDatingTitle: "Chef de Projet / Pilote — Forum Job Dating (2e Édition)",
  jobDatingText: "Pilotage général de la 2e édition du Job Dating à Arts et Métiers campus de Rabat : coordination d'un forum entreprises de 40+ partenaires industriels, management de 15 responsables de pôles et pilotage budgétaire."
});

Object.assign(translations.en, {
  quickViewBtn: "👁️ Technical overview",
  standardsEyebrow: "Industrial Standards & Requirements",
  standardsTitle: "Aerospace Standards & Engineering Methodologies",
  pillar1Title: "Quality Standards & Compliance",
  pillar2Title: "Industrialization & Operations (FAL)",
  pillar3Title: "Advanced Technologies & Processes",
  copyEmailSuccess: "Email copied to clipboard!",
  vcardBtn: "📇 Export contact card (.vcf)",
  modalContextTitle: "Context & Industrial Challenge",
  modalMethodTitle: "Methodology & Technical Deployment",
  modalResultsTitle: "Key Results & Operational Value",
  modalToolsTitle: "Environment & Tools",
  modalCloseBtn: "Close",
  searchPlaceholder: "Search by tool, standard or keyword (e.g. Abaqus, Tulip, Python, QRQC...)",
    navMedia: "Media & Talks",
  mediaEyebrow: "Media & LinkedIn News",
  mediaTitle: "Conferences, Industrial Event Leadership & Institutional Talks.",
  mediaTagEvent: "Institutional Event",
  mediaTagPilot: "General Pilot / Event Lead",
  mediaTagPanel: "Speaker / Industrial Panel",
  mediaTagVision: "Leadership & Engineering Vision",
  mediaBtnText: "View post on LinkedIn ↗",
  mediaTagHult: "Campus Director — Hult Prize",
  mediaHultTitle: "Hult Prize at Arts et Métiers Rabat: A Landmark Event for Innovation and Entrepreneurship",
  mediaHultText: "Collective group photo of the grand finale and participants inside the Arts et Métiers Rabat auditorium. Organizing and mentoring engineering students on high-impact technological and social challenges.",
  mediaJobTeamTitle: "Organizing Committee & Corporate Partnership Deck for Job Dating 2nd Edition",
  mediaJobTeamText: "Official poster of the 2nd Edition Job Dating organizing team (as General Pilot and Event Lead). Deploying the corporate partnership deck to bridge top industrial leaders and engineering students.",
  mediaRoundTitle: "Roundtable: Strengthening the Education - Research - Innovation Continuum in Morocco",
  mediaRoundText: "Official speaker poster for the Evolutive Learning Factories Annual Gala. Speaking as Student Union President alongside Pr. Wafa Skalli (Charpak Institute Founder), Faouzi Annajah (NamX CEO), and research directors.",
  mediaStageAhTitle: "On-Stage Engineering Vision & Discussions at the SEBN_MA Annual Gala",
  mediaStageAhText: "Direct on-stage panel participation alongside professors and industrial directors, discussing operational excellence requirements, advanced industrialization, and the role of Arts et Métiers engineers.",
  mediaEamrTitle: "Evolutive Learning Factories Annual Gala & Industrial Partnerships",
  mediaEamrText: "Wide stage overview of the annual gala and panel discussions at the Arts et Métiers Rabat auditorium. An exceptional event building bridges between academic excellence and aerospace/automotive leaders.",
  media1Title: "EAMR Job Dating 2nd Edition: Corporate Partners & Sponsors Recognition",
  media1Text: "Official recap from Arts et Métiers Rabat Campus celebrating the success of the 2nd Job Dating forum. A fruitful day connecting over 40 corporate partners (aerospace, automotive, tech) with engineering students.",
  media2Title: "Organizing Committee & Corporate Partnership Deck for Job Dating",
  media2Text: "As the General Lead of the Job Dating event, presenting the official partnership brochure, strategic vision, and the organizing committee of 15 team leads (logistics, communication, corporate relations).",
  media3Title: "Roundtable: Strengthening the Education - Research - Innovation Continuum in Morocco",
  media3Text: "Panel speaker as engineering student and Student Union President at the Annual Evolutive Learning Factories Gala, alongside Pr. Wafa Skalli (Charpak Biomechanics Institute Founder), Faouzi Annajah (NamX CEO), and industrial directors.",
  media4Title: "Engineering Vision & Leadership at Arts et Métiers School",
  media4Text: "Discussions on key industrialization challenges, digital transformation, and operational excellence, carrying the voice of Arts et Métiers engineering students toward tomorrow's aerospace requirements.",
  jobDatingTeamLabel: "Job Dating 2026 Organizing Lead",
  jobDatingGroupLabel: "40+ Corporate Partners & EAMR Students",
  roundTableLabel: "Panel Speaker — Pr. Wafa Skalli & NamX CEO",
  sebnStageLabel: "Annual Evolutive Learning Factories Gala",
  jobDatingTitle: "Project Manager / Pilot — Job Dating Forum (2nd Edition)",
  jobDatingText: "General pilot and coordinator for the 2nd Job Dating forum at Arts et Métiers Rabat campus: managed 40+ industrial corporate partners, led 15 team leads, and oversaw overall budgeting and operations."
});

const langToggle = document.querySelector(".lang-toggle");
const langActive = document.querySelector(".lang-active");

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang] && translations[lang][key]) node.textContent = translations[lang][key];
  });
  const sInput = document.getElementById("projectSearchInput");
  if (sInput && translations[lang] && translations[lang].searchPlaceholder) {
    sInput.placeholder = translations[lang].searchPlaceholder;
  }
  langActive.textContent = lang.toUpperCase();
  const inactive = lang === "fr" ? "EN" : "FR";
  if (langToggle && langToggle.lastElementChild) langToggle.lastElementChild.textContent = inactive;
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
let currentCategoryFilter = "all";
const searchInput = document.getElementById("projectSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");

function applyFilters() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  if (clearSearchBtn) clearSearchBtn.style.display = query.length > 0 ? "block" : "none";

  cards.forEach((card) => {
    const categories = (card.dataset.category || "").split(" ");
    const matchesCategory = currentCategoryFilter === "all" || categories.includes(currentCategoryFilter);
    const textContent = card.textContent.toLowerCase();
    const matchesQuery = query === "" || textContent.includes(query);
    card.hidden = !(matchesCategory && matchesQuery);
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    currentCategoryFilter = button.dataset.filter;
    applyFilters();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", applyFilters);
}
if (clearSearchBtn) {
  clearSearchBtn.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    applyFilters();
    if (searchInput) searchInput.focus();
  });
}

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


/* ==================== PROJECT QUICK VIEW DATA ==================== */
const projectQuickViewData = {
  p1: {
    categoryFr: "Industrie 4.0 / MES",
    categoryEn: "Industry 4.0 / MES",
    titleFr: "MES sur Tulip — Evolutive Lean Factory",
    titleEn: "Tulip MES — Evolutive Lean Factory",
    contextFr: "Assemblage de vérins pneumatiques en 10 opérations, avec fortes exigences de traçabilité unitaire, d'horodatage par poste et de maîtrise du TRG en temps réel.",
    contextEn: "Assembly line for pneumatic cylinders across 10 operations, requiring strict unit traceability, timestamping and real-time OEE tracking.",
    methodFr: "Conception d'un système MES de niveau 3 selon ISA-95 et MESA, interconnectant 11 tables relationnelles dans Tulip. Intégration d'un module qualité Poka-Yoke et d'un tableau de bord superviseur.",
    methodEn: "Level 3 MES design based on ISA-95 and MESA, linking 11 relational tables in Tulip. Implemented Poka-Yoke quality modules and a live supervisor dashboard.",
    resultsFr: "Digitalisation complète de 21 sous-opérations, suppression du support papier et visibilité directe sur l'encours (WIP) transposable sur ligne d'assemblage aéronautique (FAL).",
    resultsEn: "Digitized 21 sub-operations, eliminated paper reporting and enabled real-time WIP visibility transposable to aerospace Final Assembly Lines.",
    tags: ["Tulip", "MES", "ISA-95", "MESA", "Poka-Yoke", "Lean"],
    reportPdf: "assets/reports/P01_Rapport_MES_Tulip.pdf"
  },
  p2: {
    categoryFr: "Industrie 4.0 / Lean",
    categoryEn: "Industry 4.0 / Lean",
    titleFr: "Système ANDON digital — Ligne Karakuri A1",
    titleEn: "Digital ANDON System — Karakuri Line A1",
    contextFr: "Ligne d'assemblage Karakuri nécessitant une alerte immédiate en cas d'aléa (qualité, matière, maintenance) et une mesure objective des temps d'arrêt pour alimenter le QRQC.",
    contextEn: "Karakuri assembly line requiring instant alerting for shop-floor issues and precise downtime tracking to feed QRQC continuous improvement loops.",
    methodFr: "Développement d'une application web temps réel (Flask/SQLite) gérant une machine à états (OPEN, ACK, ARRIVED, CLOSED). Priorisation automatique, calcul des SLA et clôture conditionnée à une cause 5M.",
    methodEn: "Developed a real-time web app (Flask/SQLite) driving a state machine (OPEN-ACK-ARRIVED-CLOSED). Automated alerting priorities and SLA enforcement linked to 5M root cause analyses.",
    resultsFr: "Réactivité de la maintenance fiabilisée, mesure précise des indicateurs MTTA et MTTR et capitalisation rigoureuse des causes d'aléa.",
    resultsEn: "Streamlined maintenance response, exact MTTA/MTTR measurement and structured tracking of root causes.",
    tags: ["Flask", "SQLite", "API REST", "ANDON", "QRQC", "5M / Ishikawa"],
    reportPdf: "assets/reports/P02_Rapport_Andon_Digital.pdf"
  },
  p3: {
    categoryFr: "IA appliquée & Données",
    categoryEn: "Applied AI & Data",
    titleFr: "Reporting terrain par audio et IA — Whisper & NLP",
    titleEn: "Voice-to-Data Industrial Reporting — Whisper & NLP",
    contextFr: "Perte d'informations techniques après intervention en atelier et temps de saisie administrative excessif pour la rédaction des rapports d'ingénierie.",
    contextEn: "Loss of technical details post-intervention and excessive administrative burden formatting engineering field reports.",
    methodFr: "Pipeline d'analyse vocale par OpenAI Whisper, extraction structurée de 17 champs métiers par traitement automatique du langage (NLP) et génération automatisée d'un rapport JSON/Excel exploitable.",
    methodEn: "Audio pipeline utilizing OpenAI Whisper, structured extraction of 17 engineering fields via NLP and automated JSON/Excel report generation.",
    resultsFr: "Réduction drastique du temps d'administration, fiabilisation des remontées techniques terrain et documentation structurée intégrable dans un PLM.",
    resultsEn: "Dramatic reduction in administrative time, accurate field data capture and structured documentation ready for PLM integration.",
    tags: ["OpenAI Whisper", "Python", "NLP", "JSON", "Audit et Qualité"],
    reportPdf: "assets/reports/P03_Rapport_Reporting_Audio_IA.pdf"
  },
  p4: {
    categoryFr: "Mécanique & Simulation",
    categoryEn: "Mechanics & Simulation",
    titleFr: "Analyse modale de structures — Abaqus FEA",
    titleEn: "Modal Analysis of Structures — Abaqus FEA",
    contextFr: "Caractérisation dynamique et prévention des risques vibratoires sur structures mécaniques, enjeu critique pour éviter la résonance, la fatigue et le flottement aéroélastique.",
    contextEn: "Dynamic structural characterization to prevent vibration risks, critical in aerospace to avoid resonance, structural fatigue and aeroelastic flutter.",
    methodFr: "Modélisation par éléments finis sous Abaqus, étude de convergence spatiale du maillage, extraction et interprétation physique des modes propres (flexion, torsion, couplage).",
    methodEn: "Finite element modeling in Abaqus, mesh convergence study, and physical interpretation of natural eigenmodes (bending, torsion, coupled modes).",
    resultsFr: "Identification précise des fréquences critiques et des zones nodales, validation de la marge de sécurité dynamique par rapport au spectre d'excitation.",
    resultsEn: "Precise identification of critical frequencies and nodal zones, validating dynamic safety margins against excitation frequency spectra.",
    tags: ["Abaqus FEA", "Éléments finis", "Vibrations", "Dynamique des structures"],
    reportPdf: "assets/reports/P04_Rapport_Analyse_Modale_Abaqus.pdf"
  },
  p5: {
    categoryFr: "IA, Données & Procédés",
    categoryEn: "AI, Data & Processes",
    titleFr: "Optimisation numérique d'un SVM par Uzawa — WAAM",
    titleEn: "Numerical SVM Optimization via Uzawa — WAAM",
    contextFr: "Contrôle non destructif (CND) et classification automatisée des cordons de soudure issus de fabrication additive arc-fil (WAAM) sur pièces structurales.",
    contextEn: "Non-destructive testing (NDT) and automated classification of Wire Arc Additive Manufacturing (WAAM) weld beads on structural parts.",
    methodFr: "Implémentation from scratch en Python/NumPy de l'algorithme primal-dual d'Uzawa pour résoudre le problème d'optimisation sous contraintes d'un séparateur à vaste marge (SVM).",
    methodEn: "From-scratch implementation in Python/NumPy of the Uzawa primal-dual algorithm to solve constrained optimization for Support Vector Machine (SVM) classification.",
    resultsFr: "Vérification mathématique de convergence de l'algorithme, identification fine des vecteurs supports et classification robuste des anomalies de soudure.",
    resultsEn: "Mathematical convergence verification, precise support vector isolation and robust classification of weld bead anomalies.",
    tags: ["Python", "NumPy", "Algorithme d'Uzawa", "SVM", "WAAM"],
    reportPdf: "assets/reports/P05_Rapport_Optimisation_SVM_Uzawa.pdf"
  },
  p6: {
    categoryFr: "Éco-conception & Matériaux",
    categoryEn: "Eco-design & Materials",
    titleFr: "Éco-conception & ACV d'un système électromécanique",
    titleEn: "Eco-design & LCA of an Electromechanical System",
    contextFr: "Quantification rigoureuse de l'empreinte carbone et énergétique sur le cycle de vie complet d'un véhicule urbain léger (trottinette électrique).",
    contextEn: "Rigorous carbon and primary energy footprint quantification across the lifecycle of an urban electromechanical system (e-scooter).",
    methodFr: "Modélisation ACV sous Ansys Granta EduPack sur un cycle de 4 ans (production, usage, fin de vie). Sélection multicritère d'alliages et principes de Design for Disassembly.",
    methodEn: "LCA modeling in Ansys Granta EduPack over a 4-year cycle (production, use, end-of-life). Multi-criteria material selection and Design for Disassembly.",
    resultsFr: "Impact global quantifié à 2 950 MJ et 209 kg CO2-eq. Stratégie de recyclage des métaux et batteries permettant une réduction significative du bilan net.",
    resultsEn: "Total footprint quantified at 2,950 MJ and 209 kg CO2-eq. Formulated metal/battery recycling strategies yielding significant net impact reductions.",
    tags: ["Ansys Granta", "Analyse de cycle de vie (ACV)", "Éco-conception", "Matériaux"],
    reportPdf: "assets/reports/P06_Rapport_Ecoconception_ACV.pdf"
  },
  p7: {
    categoryFr: "Mécanique & Vibrations",
    categoryEn: "Mechanics & Vibrations",
    titleFr: "Équilibrage dynamique et réduction des vibrations sur rotor",
    titleEn: "Dynamic Rotor Balancing & Vibration Reduction",
    contextFr: "Vibrations et balourd dynamique sur arbre tournant à haute vitesse, induisant fatigue des paliers et usure prématurée (problématique centrale sur turbomachines).",
    contextEn: "High-speed rotating shaft vibrations and dynamic unbalance leading to bearing fatigue and premature wear (core challenge in turbomachinery).",
    methodFr: "Mesure expérimentale de phase et d'amplitude vibratoire, calcul matriciel des masses d'équilibrage dans deux plans et validation expérimentale sur banc d'essai mécanique.",
    methodEn: "Experimental phase/amplitude vibration measurements, dual-plane correction mass matrix calculations and test-bench experimental validation.",
    resultsFr: "Réduction de l'amplitude vibratoire sous le seuil d'admissibilité ISO 10816 et allongement de la durée de vie théorique des roulements.",
    resultsEn: "Vibration amplitude reduced below ISO 10816 thresholds, significantly extending theoretical bearing operational lifespan.",
    tags: ["Mécanique des vibrations", "Équilibrage dynamique", "Banc d'essai", "ISO 10816"],
    reportPdf: "assets/reports/P07_Rapport_Equilibrage_Dynamique.pdf"
  },
  p8: {
    categoryFr: "Conception & CAO",
    categoryEn: "Design & CAD",
    titleFr: "Conception mécanique et dimensionnement d'un VAE",
    titleEn: "Mechanical Design & Sizing of an E-Bike (VAE)",
    contextFr: "Conception complète d'un Vélo à Assistance Électrique (VAE) optimisé en masse, rigidité et ergonomie.",
    contextEn: "Full mechanical design of an Electric Assist Bicycle optimized for structural weight, stiffness and rider ergonomics.",
    methodFr: "Modélisation 3D sous SolidWorks/CATIA, dimensionnement analytique et par éléments finis du cadre sollicité au pédalage, freinage et chocs. Sélection des profils tubulaires.",
    methodEn: "3D CAD modeling in SolidWorks/CATIA, analytical and FEA structural sizing of the frame under pedaling, braking and shock loads.",
    resultsFr: "Validation de la tenue mécanique sous charge extrême (coefficient de sécurité > 2,5) tout en minimisant la masse globale du châssis.",
    resultsEn: "Validated structural integrity under ultimate load cases (safety factor > 2.5) while minimizing overall chassis weight.",
    tags: ["SolidWorks", "CATIA", "Conception mécanique", "RDM", "Éléments finis"],
    reportPdf: "assets/reports/P08_Rapport_Conception_VAE.pdf"
  },
  p9: {
    categoryFr: "Électrotechnique & Propulsion",
    categoryEn: "Electrotechnics & Propulsion",
    titleFr: "Modélisation d'une MSAP pour propulsion électrique",
    titleEn: "PMSM Modeling for Electric Propulsion",
    contextFr: "Motorisation électrique de puissance par Machine Synchrone à Aimants Permanents (MSAP), brique technologique clé pour les architectures de propulsion hybrides ou drones électriques (UAV/eVTOL).",
    contextEn: "Permanent Magnet Synchronous Machine (PMSM) electrical drive modeling, a foundational technology for hybrid propulsion architectures or electric drones (UAV/eVTOL).",
    methodFr: "Modélisation sous MATLAB/Simulink des équations de Park (d-q), simulation du couplage électromagnétique et analyse du couple transitoire et permanent.",
    methodEn: "MATLAB/Simulink modeling of Park (d-q) equations, electromagnetic field coupling simulations, and transient/steady-state torque response analysis.",
    resultsFr: "Cartographie de rendement du moteur et validation de la stratégie de commande vectorielle pour minimiser les ondulations de couple.",
    resultsEn: "Generated motor efficiency maps and validated vector control strategies to minimize torque ripple and maximize propulsion stability.",
    tags: ["MATLAB", "Simulink", "MSAP / PMSM", "Propulsion électrique", "Commande vectorielle"],
    reportPdf: "assets/reports/P09_Rapport_MSAP_Electrotechnique.pdf"
  },
  p10: {
    categoryFr: "Énergétique & Systèmes",
    categoryEn: "Energy & Systems",
    titleFr: "Chaîne de traction électrique et simulation énergétique de VE",
    titleEn: "EV Powertrain & Longitudinal Energy Simulation",
    contextFr: "Évaluation de la consommation énergétique, de l'autonomie et du comportement dynamique d'un véhicule électrique sur cycles de conduite standard (WLTP/NEDC).",
    contextEn: "Evaluating energy consumption, range and dynamic vehicle response across standard regulatory driving cycles (WLTP/NEDC).",
    methodFr: "Modélisation dynamique longitudinale sous MATLAB/Simulink (batterie, onduleur, moteur, réducteur, aérodynamique et résistance au roulement).",
    methodEn: "Complete longitudinal powertrain model in MATLAB/Simulink covering battery pack, inverter, e-motor, gear reduction, aerodynamics and rolling resistance.",
    resultsFr: "Simulation précise des flux d'énergie en accélération et régénération au freinage, dimensionnement optimal de la capacité batterie.",
    resultsEn: "Accurate simulation of energy flows during acceleration and regenerative braking, sizing battery capacity for targeted range limits.",
    tags: ["MATLAB", "Simulink", "Chaîne de traction", "Véhicule électrique", "Cycle WLTP"],
    reportPdf: "assets/reports/P10_Rapport_Chaine_Traction_VE.pdf"
  },
  p11: {
    categoryFr: "Qualité & Plans d'expériences",
    categoryEn: "Quality & DoE",
    titleFr: "Optimisation robuste de coupe par Taguchi & ANOVA",
    titleEn: "Robust Machining Optimization via Taguchi & ANOVA",
    contextFr: "Usinage de pièces mécaniques à hautes exigences géométriques et d'état de surface (rugosité Ra), avec nécessité de réduire l'usure outil.",
    contextEn: "Precision machining of mechanical parts requiring strict surface roughness (Ra) tolerances while minimizing tool wear and cycle times.",
    methodFr: "Plan d'expériences (Plan de Taguchi L9/L18), mesure de la rugosité en atelier et analyse de variance (ANOVA) pour isoler les facteurs influents (vitesse de coupe, avance, profondeur).",
    methodEn: "Design of Experiments (Taguchi L9/L18 array), shop-floor roughness measurements, and ANOVA variance analysis isolating primary parameter influences (cutting speed, feed rate, depth of cut).",
    resultsFr: "Détermination de la combinaison paramétrique optimale, réduction de la dispersion de rugosité de 35 % et gain en durée de vie outil.",
    resultsEn: "Identified optimal cutting parameters, reduced surface roughness variance by 35% and improved cutting tool longevity.",
    tags: ["Plan d'expériences (DoE)", "Méthode de Taguchi", "ANOVA", "Qualité usinage", "Rugosité"],
    reportPdf: "assets/reports/P11_Rapport_Optimisation_Taguchi_ANOVA.pdf"
  },
  p12: {
    categoryFr: "Données & Architecture SQL",
    categoryEn: "Data & SQL Architecture",
    titleFr: "Conception de base de données SQL & Application — OREXA",
    titleEn: "SQL Database & Operations Management — OREXA",
    contextFr: "Gestion informatisée des flux logistiques, des stocks de pièces détachées et de la traçabilité des interventions sur un événement d'envergure (CAN 2025).",
    contextEn: "Computerized logistics workflows, spare parts inventory tracking and intervention traceability for a major operational event (CAN 2025).",
    methodFr: "Modélisation conceptuelle (MCD/MERISE), implémentation d'une base de données relationnelle sous SQL et requêtes d'agrégation d'indicateurs opérationnels.",
    methodEn: "MERISE conceptual data modeling (MCD), relational SQL database implementation and aggregation queries for operational KPIs.",
    resultsFr: "Intégrité référentielle garantie, temps d'accès aux historiques divisé par 4 et tableau de bord de pilotage logistique opérationnel.",
    resultsEn: "Guaranteed relational integrity, 4x faster query response for maintenance histories and an operational logistics tracking dashboard.",
    tags: ["SQL", "MERISE / MCD", "Base de données relationnelle", "Gestion logistique", "Traçabilité"],
    reportPdf: "assets/reports/P12_Rapport_BDD_OREXA_SQL.pdf"
  }
};

/* ==================== THEME TOGGLE LOGIC ==================== */
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = document.getElementById("themeIcon");
const savedTheme = localStorage.getItem("aeh_theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  if (themeIcon) themeIcon.textContent = "☀️";
}
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    if (themeIcon) themeIcon.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("aeh_theme", isDark ? "dark" : "light");
  });
}

/* ==================== COPY EMAIL & VCARD EXPORT ==================== */
const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyToast = document.getElementById("copyToast");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("elhichoahmed8@gmail.com").then(() => {
      if (copyToast) {
        copyToast.classList.add("show");
        setTimeout(() => copyToast.classList.remove("show"), 2500);
      }
    }).catch(() => {});
  });
}

const vcardExportBtn = document.getElementById("vcardExportBtn");
if (vcardExportBtn) {
  vcardExportBtn.addEventListener("click", () => {
    const vcfData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Ahmed El Hicho",
      "N:El Hicho;Ahmed;;;",
      "TITLE:Élève ingénieur Arts et Métiers - Aeronautics & Space",
      "EMAIL;TYPE=INTERNET;TYPE=WORK:elhichoahmed8@gmail.com",
      "TEL;TYPE=CELL:+33759480725",
      "ADR;TYPE=HOME:;;Talence;Nouvelle-Aquitaine;;France",
      "URL:https://elhicho.github.io/ahmed-el-hicho.github.io/",
      "NOTE:Stage de fin d'études de février à août 2027 • Industrialisation • IA & Digital Manufacturing • Structures",
      "END:VCARD"
    ].join("\r\n");
    const blob = new Blob([vcfData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ahmed_El_Hicho_Contact.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

/* ==================== QUICK VIEW MODAL CONTROLLERS ==================== */
const modalOverlay = document.getElementById("quickViewModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalCloseActionBtn = document.getElementById("modalCloseActionBtn");

function openQuickViewModal(projectId) {
  const data = projectQuickViewData[projectId];
  if (!data || !modalOverlay) return;
  const currentLang = localStorage.getItem("portfolio-language") || "fr";

  document.getElementById("modalCategory").textContent = currentLang === "en" ? data.categoryEn : data.categoryFr;
  document.getElementById("modalTitle").textContent = currentLang === "en" ? data.titleEn : data.titleFr;
  document.getElementById("modalContext").textContent = currentLang === "en" ? data.contextEn : data.contextFr;
  document.getElementById("modalMethod").textContent = currentLang === "en" ? data.methodEn : data.methodFr;
  document.getElementById("modalResults").textContent = currentLang === "en" ? data.resultsEn : data.resultsFr;

  const tagsContainer = document.getElementById("modalTags");
  if (tagsContainer) {
    tagsContainer.innerHTML = "";
    data.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });
  }

  const reportLink = document.getElementById("modalReportLink");
  if (reportLink) reportLink.href = data.reportPdf;

  modalOverlay.classList.add("open");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeQuickViewModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove("open");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".quick-view-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const pid = btn.getAttribute("data-project");
    if (pid) openQuickViewModal(pid);
  });
});

if (closeModalBtn) closeModalBtn.addEventListener("click", closeQuickViewModal);
if (modalCloseActionBtn) modalCloseActionBtn.addEventListener("click", closeQuickViewModal);
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeQuickViewModal();
  });
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("open")) {
    closeQuickViewModal();
  }
});
