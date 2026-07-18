const translations = {
  fr: {
    brandRole: "Élève ingénieur · Aeronautics & Space",
    navAbout: "Profil", navProjects: "Projets", navJourney: "Parcours", navSkills: "Compétences", navContact: "Contact",
    heroEyebrow: "Élève ingénieur Arts et Métiers",
    heroLine1: "Je transforme", heroLine2: "des besoins industriels", heroLine3: "en outils testables.",
    heroLead: "Mes projets récents vont d’un prototype MES sous Tulip à une analyse modale sous Abaqus, en passant par une application ANDON sous Flask. Je documente aussi les limites et les résultats de chaque travail.",
    heroProjects: "Découvrir mes projets", heroCV: "Voir mon CV",
    availability: "Disponible pour un stage de fin d’études de février 2027 à août 2027",
    heroCard1Label: "Parcours", heroCard2Label: "Mobilité", heroCard2Value: "France & international",
    metric1: "tables interconnectées dans le MES", metric2: "sous-opérations digitalisées", metric3: "champs métier extraits par IA", metric4: "partenaires coordonnés pour le Job Dating",
    aboutEyebrow: "Profil", aboutTitle: "J’apprends surtout en construisant, en testant et en corrigeant.",
    aboutP1: "Sur le projet MES, notre équipe de trois a construit une architecture de onze tables et une interface pour dix opérations d’assemblage. Les essais ont révélé deux ruptures de traçabilité que nous avons corrigées.",
    aboutP2: "Cette expérience m’a appris à distinguer un prototype prometteur d’un système réellement validé : je présente donc ici les résultats obtenus, mais aussi les hypothèses et les limites qui restent à traiter.",
    quote: "Un prototype crédible n’est pas celui qui promet le plus, mais celui dont on peut expliquer les choix, les tests et les limites.",
    projectsEyebrow: "Projets phares", projectsTitle: "Trois projets résument ma façon de travailler ; neuf autres complètent le parcours.",
    filterAll: "Tous", filterIndustry: "Industrie 4.0", filterAI: "IA & données", filterMechanics: "Mécanique", filterEco: "Éco-conception",
    caseStudy: "Voir l’étude de cas",
    p1Title: "Prototype MES sous Tulip — X-Manufacturing",
    p1Text: "Notre équipe a construit une architecture de onze tables, une interface opérateur pour dix opérations d’assemblage et un tableau de bord superviseur. Le prototype a été testé sur la plateforme pédagogique ELF.",
    p1R1: "opérations", p1R2: "sous-opérations", p1R3: "tables de données",
    p1Details: "Les essais ont révélé deux ruptures de traçabilité liées aux triggers ; elles ont été corrigées. Le rapport signale encore des dysfonctionnements résiduels et l’absence de tests automatisés sur Tulip.",
    p2Title: "Prototype de système ANDON digital",
    p2Text: "Application Flask/SQLite avec cycle OPEN–ACK–ARRIVED–CLOSED, priorisation des alertes et clôture conditionnée à la saisie d’une cause 5M et d’une action corrective.",
    p2Impact: "5 catégories d’alerte • 4 états • scénarios simulés",
    p2Details: "Les gains observés proviennent de scénarios simulés, pas d’un déploiement industriel long terme. La suite proposée dans le rapport est d’ajouter boutons, voyants et écran dédiés, puis de consolider les KPI.",
    p3Title: "Prototype de reporting terrain par audio",
    p3Text: "Pendant mon stage, j’ai prototypé une chaîne qui transcrit un compte rendu vocal puis remplit dix-sept champs dans un modèle de visite. Le rapport documente cinq formats audio pris en charge.",
    p3R1: "formats audio", p3R2: "champs métier",
    p3Details: "Le prototype nécessite une connexion aux services OpenAI et une validation humaine des termes métier. Aucune mesure d’exactitude ni étude utilisateurs n’est publiée à ce stade.",
    p4Title: "Analyse modale sous Abaqus, confrontée aux mesures",
    p4Text: "Modélisation d’une demi-lame encastrée, étude de convergence et comparaison de quatre fréquences propres avec les mesures obtenues au stroboscope sur le même montage.",
    p4Impact: "4 modes comparés • écarts relatifs de 1,1 à 7,2 %",
    p4Details: "L’écart le plus élevé concerne le quatrième mode. Le rapport l’explique notamment par les incertitudes sur le module d’Young, l’épaisseur réelle et la qualité de l’encastrement.",
    p5Title: "Implémentation d’un SVM par l’algorithme d’Uzawa",
    p5Text: "Implémentation from scratch d’un algorithme primal-dual sous contraintes, avec vérification de la convergence et visualisation automatique des vecteurs supports.",
    p5Impact: "Séparation parfaite sur le jeu de données du TP",
    p5Details: "Le résultat valide l’implémentation sur les données fournies, mais ne mesure pas encore la capacité de généralisation sur d’autres cordons ou d’autres conditions de fabrication.",
    p6Title: "Éco-audit et scénarios d’amélioration d’une trottinette",
    p6Text: "Démontage, évaluation de la réparabilité et de la recyclabilité, puis comparaison de scénarios portant sur la batterie, l’aluminium recyclé et la durée de vie du produit.",
    p6Details: "L’éco-audit estime 376 kg CO₂-eq par produit. Le scénario combiné atteint une réduction calculée de 58 %, sous les hypothèses décrites dans le rapport ; il ne s’agit pas d’une ACV certifiée.",
    journeyEyebrow: "Parcours", journeyTitle: "Des expériences techniques, mais aussi des responsabilités très concrètes.",
    experience: "Expérience", education: "Formation",
    dogaTitle: "Stage ingénieur — DOGA FZ, Tanger Free Zone",
    dogaText: "Développement d’une application Flask/SQLAlchemy pour cinq départements et d’un prototype de reporting audio. Odoo et Power BI ont été étudiés comme pistes d’intégration, sans déploiement.",
    amText: "Cycle ingénieur, parcours Aeronautics & Space. Campus de Rabat puis campus de Bordeaux-Talence.",
    cpgeTitle: "Classes préparatoires — filière MP",
    cpgeText: "CPGE Tétouan : mathématiques, physique, sciences de l’ingénieur et résolution de problèmes complexes.",
    hostTitle: "Hôte Airbnb & Booking.com",
    hostText: "Gestion du planning et des réservations, relation voyageurs et résolution rapide des aléas pour maintenir la continuité des séjours.",
    leadership: "Leadership",
    presidentTitle: "Président de l’Association des Élèves",
    presidentText: "Représentation étudiante, gestion budgétaire et coordination d’équipes bénévoles sur les projets du campus.",
    since2025: "Depuis 2025",
    hultText: "Supervision d’un concours international d’entrepreneuriat social et accompagnement des équipes participantes à Arts et Métiers Rabat / UM6P Rabat.",
    skillsEyebrow: "Compétences", skillsTitle: "Je distingue les outils utilisés, les méthodes appliquées et les notions encore en apprentissage.",
    cluster1: "Outils de mécanique utilisés", cluster2: "Outils numériques utilisés", cluster3: "Méthodes mises en pratique", cluster4: "Langues",
    aeroKeywords: "Mots-clés aéronautiques",
    visionEyebrow: "Recherche & veille", visionTitle: "Des usages responsables et vérifiables de l’IA dans l’industrie.",
    visionText: "Je m’intéresse surtout à la synthèse de comptes rendus terrain, à l’inspection assistée et à la recherche documentaire. Mon critère est simple : le résultat doit rester vérifiable par l’ingénieur et s’intégrer au processus qualité.",
    contactEyebrow: "Disponibilité",
    contactTitle: "Vous recherchez un stagiaire en industrialisation, méthodes ou calcul ? Échangeons.",
    contactText: "Je recherche un stage de fin d’études de février 2027 à août 2027, en France ou à l’international.",
    footer: "Portfolio conçu et documenté par Ahmed El Hicho."
  },
  en: {
    brandRole: "Engineering student · Aeronautics & Space",
    navAbout: "About", navProjects: "Projects", navJourney: "Journey", navSkills: "Skills", navContact: "Contact",
    heroEyebrow: "Arts et Métiers engineering student",
    heroLine1: "I turn", heroLine2: "industrial needs", heroLine3: "into testable tools.",
    heroLead: "My recent projects range from a Tulip MES prototype to modal analysis in Abaqus, with a Flask ANDON application in between. I also document the limitations and results of each piece of work.",
    heroProjects: "Explore my projects", heroCV: "View my résumé",
    availability: "Available for a final-year internship from February to August 2027",
    heroCard1Label: "Program", heroCard2Label: "Mobility", heroCard2Value: "France & international",
    metric1: "interconnected MES tables", metric2: "digitized sub-operations", metric3: "business fields extracted by AI", metric4: "partners coordinated for the Job Dating forum",
    aboutEyebrow: "About", aboutTitle: "I learn most by building, testing and correcting.",
    aboutP1: "For the MES project, our three-person team built an eleven-table architecture and an interface covering ten assembly operations. Testing revealed two traceability breaks, which we corrected.",
    aboutP2: "That experience taught me to distinguish a promising prototype from a genuinely validated system. I therefore present the results obtained here, together with the assumptions and limitations that still need attention.",
    quote: "A credible prototype is not the one that promises the most, but the one whose choices, tests and limitations can be explained.",
    projectsEyebrow: "Selected projects", projectsTitle: "Three projects summarize how I work; nine more complete the picture.",
    filterAll: "All", filterIndustry: "Industry 4.0", filterAI: "AI & data", filterMechanics: "Mechanics", filterEco: "Eco-design",
    caseStudy: "View case study",
    p1Title: "Tulip MES prototype — X-Manufacturing",
    p1Text: "Our team built an eleven-table architecture, an operator interface for ten assembly operations and a supervisor dashboard. The prototype was tested on the ELF learning platform.",
    p1R1: "operations", p1R2: "sub-operations", p1R3: "data tables",
    p1Details: "Testing revealed two trigger-related traceability breaks, which were corrected. The report still notes residual issues and the lack of automated tests in Tulip.",
    p2Title: "Digital ANDON system prototype",
    p2Text: "Flask/SQLite application with an OPEN–ACK–ARRIVED–CLOSED workflow, alert prioritization, and closure conditional on entering a 5M cause and corrective action.",
    p2Impact: "5 alert categories • 4 states • simulated scenarios",
    p2Details: "The observed gains come from simulated scenarios, not a long-term industrial deployment. The report proposes adding dedicated buttons, lights and a screen, then consolidating the KPIs.",
    p3Title: "Voice-based field reporting prototype",
    p3Text: "During my internship, I prototyped a pipeline that transcribes a spoken report and fills seventeen fields in a visit template. The report documents support for five audio formats.",
    p3R1: "audio formats", p3R2: "business fields",
    p3Details: "The prototype requires access to OpenAI services and human validation of technical terms. No accuracy measurement or user study has been published at this stage.",
    p4Title: "Abaqus modal analysis compared with measurements",
    p4Text: "Modeling of a clamped half-blade, a convergence study and comparison of four natural frequencies with stroboscope measurements on the same setup.",
    p4Impact: "4 modes compared • relative differences from 1.1% to 7.2%",
    p4Details: "The largest difference occurs for the fourth mode. The report links it in particular to uncertainty in Young’s modulus, actual thickness and clamp quality.",
    p5Title: "SVM implementation using the Uzawa algorithm",
    p5Text: "From-scratch implementation of a constrained primal-dual algorithm, with convergence checks and automatic support-vector visualization.",
    p5Impact: "Perfect separation on the course dataset",
    p5Details: "The result validates the implementation on the supplied data, but does not yet measure its ability to generalize to other beads or manufacturing conditions.",
    p6Title: "Electric-scooter eco-audit and improvement scenarios",
    p6Text: "Disassembly, repairability and recyclability assessment, followed by comparison of scenarios involving the battery, recycled aluminum and product life.",
    p6Details: "The eco-audit estimates 376 kg CO₂-eq per product. The combined scenario reaches a calculated 58% reduction under the report’s assumptions; this is not a certified LCA.",
    journeyEyebrow: "Journey", journeyTitle: "Technical experience alongside very practical responsibilities.",
    experience: "Experience", education: "Education",
    dogaTitle: "Engineering internship — DOGA FZ, Tanger Free Zone",
    dogaText: "Developed a Flask/SQLAlchemy application for five departments and a voice-reporting prototype. Odoo and Power BI were studied as possible integrations but were not deployed.",
    amText: "Engineering program, Aeronautics & Space track. Rabat campus followed by Bordeaux-Talence campus.",
    cpgeTitle: "Preparatory classes — Mathematics & Physics",
    cpgeText: "CPGE Tétouan: mathematics, physics, engineering science and complex problem solving.",
    hostTitle: "Airbnb & Booking.com host",
    hostText: "Managed schedules and bookings, handled guest relations and resolved issues quickly to keep stays running smoothly.",
    leadership: "Leadership",
    presidentTitle: "President of the Student Association",
    presidentText: "Student representation, budget management and coordination of volunteer teams on campus projects.",
    since2025: "Since 2025",
    hultText: "Leading an international social-entrepreneurship competition and coaching participating teams at Arts et Métiers Rabat / UM6P Rabat.",
    skillsEyebrow: "Skills", skillsTitle: "I separate tools I have used, methods I have applied and concepts I am still learning.",
    cluster1: "Mechanical tools used", cluster2: "Digital tools used", cluster3: "Methods applied", cluster4: "Languages",
    aeroKeywords: "Aerospace keywords",
    visionEyebrow: "Research & technology watch", visionTitle: "Responsible, verifiable uses of AI in industry.",
    visionText: "I am particularly interested in summarizing field reports, assisted inspection and document search. My criterion is simple: engineers must be able to verify the output, and it must fit into the quality process.",
    contactEyebrow: "Availability",
    contactTitle: "Looking for an intern in industrialization, methods or simulation? Let’s talk.",
    contactText: "I am seeking a final-year internship from February to August 2027, in France or internationally.",
    footer: "Portfolio designed and documented by Ahmed El Hicho."
  }
};

Object.assign(translations.fr, {
  quickViewBtn: "👁️ Aperçu technique",
  skipLink: "Aller au contenu",
  homeAria: "Accueil Ahmed El Hicho",
  menuText: "Menu",
  mainNavAria: "Navigation principale",
  metricsAria: "Quelques chiffres",
  filterProjectsAria: "Filtrer les projets",
  reportLink: "Consulter le rapport PDF ↗",
  modalReportLink: "Consulter le rapport complet (PDF) ↗",
  moreProjectsButton: "Voir les 9 autres projets",
  lessProjectsButton: "Masquer les 9 autres projets",
  moreProjectsSummary: "Voir les 9 autres projets académiques",
  standardsEyebrow: "Notions & veille",
  standardsTitle: "Référentiels étudiés — il ne s’agit pas de certifications.",
  pillar1Title: "Qualité aéronautique",
  pillar2Title: "Industrialisation aéronautique",
  pillar3Title: "Sujets de veille",
  langArabic: "Arabe · langue maternelle",
  langFrench: "Français · courant",
  langEnglish: "Anglais · B2",
  copyEmailSuccess: "E-mail copié dans le presse-papiers !",
  vcardBtn: "📇 Exporter ma fiche (.vcf)",
  modalContextTitle: "Contexte et objectif",
  modalMethodTitle: "Méthode et réalisation",
  modalResultsTitle: "Résultats et limites",
  modalToolsTitle: "Outils utilisés",
  modalCloseBtn: "Fermer",
  searchPlaceholder: "Rechercher par outil, méthode ou mot-clé (ex. : Abaqus, Tulip, Python)",
  searchAria: "Rechercher dans les projets",
  clearSearchAria: "Effacer la recherche",
  themeAria: "Changer de thème",
  themeTitle: "Changer de thème",
  langAria: "Afficher le site en anglais",
  menuAria: "Ouvrir ou fermer le menu de navigation",
  copyEmailAria: "Copier l’adresse e-mail",
  copyEmailTitle: "Copier l’adresse e-mail",
  modalCloseAria: "Fermer l’aperçu du projet",
  p1Context: "Projet académique · équipe de 3 · environnement semi-industriel",
  p2Context: "Projet académique · prototype et scénarios simulés",
  p3Context: "Stage DOGA FZ · prototype fonctionnel non évalué quantitativement",
  p4Context: "TP académique · modèle comparé à l’essai",
  p5Context: "Mini-projet académique · jeu de données WAAM",
  p6Context: "Projet académique · éco-audit Granta",
  p6R1: "réparabilité",
  p6R2: "recyclabilité",
  p7Context: "TP académique · équilibrage sur banc",
  p8Context: "Projet académique · étude énergétique et optimisation",
  p9Context: "TP académique · simulation FEMM",
  p10Context: "Projet académique · modèle causal simplifié",
  p11Context: "Projet académique · plan Taguchi L8",
  p12Context: "Projet académique · base Access pour la CAN 2025",
  p7Title: "Équilibrage d’un rotor sur un puis deux plans",
  p7Text: "Diagnostic vibratoire, équilibrage statique sur 1 plan et dynamique sur 2 plans par la méthode des coefficients d’influence et relevés piézoélectriques sur banc d’essai.",
  p7Impact: "Après correction : 4 mV sur P1 • 0,07 mV sur P2",
  p7Details: "Le travail montre aussi les influences croisées entre les deux plans : corriger P1 modifie la réponse de P2. La méthode graphique reste volontairement simple afin de comprendre la physique avant l’automatisation.",
  p8Title: "Étude énergétique et optimisation d’un disque de frein de VAE",
  p8Text: "Bilan de puissance du véhicule, calcul du freinage dimensionnant puis optimisation topologique du disque sous contraintes de déplacement, de contrainte et de dimension minimale.",
  p8R1: "km/h de référence",
  p8R2: "N·m au disque",
  p8Details: "Le projet relie les hypothèses énergétiques à une chaîne CAO–HyperMesh–OptiStruct. Les résultats restent ceux d’un modèle académique et dépendent du cas de charge retenu.",
  p9Title: "Champ statorique et couple d’une MSAP sous FEMM",
  p9Text: "Simulation des champs créés par les phases, transformation de Concordia et calcul du couple en fonction de l’orientation du champ statorique.",
  p9R1: "N·m/A mesuré",
  p9R2: "simulation 2D",
  p9Details: "Le rapport obtient une constante de couple voisine de 0,15 N·m/A dans le modèle étudié. Cette valeur caractérise la simulation réalisée ; elle ne constitue pas un rendement machine.",
  p10Title: "Modèle causal d’une chaîne de traction électrique",
  p10Text: "Modélisation d’une batterie idéale, d’un hacheur, d’un moteur à courant continu, d’un réducteur, d’une roue et de la dynamique longitudinale du véhicule.",
  p10Impact: "Couple moteur • vitesse véhicule • force aérodynamique",
  p10Details: "Le modèle rend les relations causales explicites, mais repose sur des hypothèses fortes : tension de batterie constante, convertisseur et réducteur sans pertes, et résistance véhicule linéarisée.",
  p11Title: "Optimisation Taguchi L8 des conditions de coupe",
  p11Text: "Huit essais de tournage sur aluminium 2017 pour étudier la vitesse de coupe, l’avance et la profondeur de passe, avec ratio Signal/Bruit et analyse ANOVA.",
  p11Impact: "Avance : 78,05 % de contribution • optimum A1B1C1",
  p11Details: "Sur ce jeu d’essais, l’avance est le facteur dominant. Les conditions retenues sont 250 m/min, 0,15 mm/tr et 0,5 mm ; elles restent liées au matériau, à la machine et au protocole du TP.",
  p12Title: "Base de données relationnelle pour la CAN 2025",
  p12Text: "Modélisation MCD/MLD selon MERISE puis implémentation sous Microsoft Access pour gérer équipes, joueurs, stades, matchs et participations, avec requêtes, formulaires et états imprimables.",
  p12R1: "MCD et MLD",
  p12R2: "requêtes et formulaires",
  p12Details: "Le rapport démontre l’intégrité référentielle et la génération d’états. L’export vers Excel ou Power BI est présenté comme une évolution possible, pas comme une fonctionnalité déjà déployée.",
  navMedia: "Sur le terrain",
  mediaEyebrow: "Sur le terrain",
  mediaTitle: "Trois traces publiques de mon rôle dans les projets collectifs.",
  mediaTagEvent: "Rencontre école–entreprises",
  mediaTagPilot: "Coordination d’événement",
  mediaTagPanel: "Participation à une table ronde",
  mediaBtnText: "Voir la publication sur LinkedIn ↗",
  portraitAlt: "Portrait d’Ahmed El Hicho devant un hélicoptère",
  media1Alt: "Participants et partenaires du Job Dating à Arts et Métiers Rabat",
  media2Alt: "Équipe d’organisation du Job Dating à Arts et Métiers Rabat",
  media3Alt: "Ahmed El Hicho intervenant lors d’une table ronde à Arts et Métiers Rabat",
  media1Title: "Job Dating : plus de 40 partenaires et 250 élèves ingénieurs",
  media1Text: "J’ai coordonné l’organisation générale avec 15 responsables de pôles. Cette publication du campus permet de vérifier l’événement et les partenaires présents.",
  media2Title: "Préparation du dossier de partenariat et répartition des pôles",
  media2Text: "Mon rôle a consisté à coordonner les pôles partenariats, logistique et communication, puis à suivre l’avancement et le budget avec leurs responsables.",
  media3Title: "Table ronde sur le continuum formation–recherche–innovation",
  media3Text: "En tant que président de l’Association des Élèves, j’ai représenté le point de vue des étudiants lors d’un échange avec enseignants, chercheurs et industriels.",
  jobDatingTeamLabel: "Équipe d’organisation · 15 responsables",
  jobDatingGroupLabel: "Forum entreprises · coordination générale",
  roundTableLabel: "Intervenant · représentation étudiante",
  jobDatingTitle: "Chef de projet — Forum Job Dating, 2e édition",
  jobDatingText: "Coordination du forum avec plus de 40 partenaires et 250 élèves ingénieurs, animation de 15 responsables de pôles et suivi du budget de l’événement."
});

Object.assign(translations.en, {
  quickViewBtn: "👁️ Technical overview",
  skipLink: "Skip to content",
  homeAria: "Ahmed El Hicho home",
  menuText: "Menu",
  mainNavAria: "Main navigation",
  metricsAria: "Key figures",
  filterProjectsAria: "Filter projects",
  reportLink: "Read the report (PDF) ↗",
  modalReportLink: "Read the full report (PDF) ↗",
  moreProjectsButton: "View 9 more projects",
  lessProjectsButton: "Hide the 9 additional projects",
  moreProjectsSummary: "View 9 more academic projects",
  standardsEyebrow: "Concepts & technology watch",
  standardsTitle: "Standards studied — these are not certifications.",
  pillar1Title: "Aerospace quality",
  pillar2Title: "Aerospace industrialization",
  pillar3Title: "Topics I follow",
  langArabic: "Arabic · native language",
  langFrench: "French · fluent",
  langEnglish: "English · B2",
  copyEmailSuccess: "Email copied to clipboard!",
  vcardBtn: "📇 Export contact card (.vcf)",
  modalContextTitle: "Context and objective",
  modalMethodTitle: "Method and implementation",
  modalResultsTitle: "Results and limitations",
  modalToolsTitle: "Tools used",
  modalCloseBtn: "Close",
  searchPlaceholder: "Search by tool, method or keyword (e.g. Abaqus, Tulip, Python)",
  searchAria: "Search projects",
  clearSearchAria: "Clear the search",
  themeAria: "Change theme",
  themeTitle: "Change theme",
  langAria: "Display the website in French",
  menuAria: "Open or close the navigation menu",
  copyEmailAria: "Copy the email address",
  copyEmailTitle: "Copy the email address",
  modalCloseAria: "Close the project overview",
  p1Context: "Academic project · three-person team · semi-industrial setting",
  p2Context: "Academic project · prototype and simulated scenarios",
  p3Context: "DOGA FZ internship · functional prototype without quantitative evaluation",
  p4Context: "Academic lab · model compared with test data",
  p5Context: "Academic mini-project · WAAM dataset",
  p6Context: "Academic project · Granta eco-audit",
  p6R1: "repairability",
  p6R2: "recyclability",
  p7Context: "Academic lab · test-bench balancing",
  p8Context: "Academic project · energy study and optimization",
  p9Context: "Academic lab · FEMM simulation",
  p10Context: "Academic project · simplified causal model",
  p11Context: "Academic project · Taguchi L8 design",
  p12Context: "Academic project · Access database for CAN 2025",
  p7Title: "One- and two-plane rotor balancing",
  p7Text: "Vibration diagnosis, static balancing in one plane and dynamic balancing in two planes using the influence-coefficient method and piezoelectric test-bench measurements.",
  p7Impact: "After correction: 4 mV on P1 • 0.07 mV on P2",
  p7Details: "The work also shows cross-influences between the two planes: correcting P1 changes the response at P2. The intentionally simple graphical method helps explain the physics before automation.",
  p8Title: "E-bike energy study and brake-disc optimization",
  p8Text: "Vehicle power balance, calculation of the governing braking load, then topological optimization of the disc under displacement, stress and minimum-dimension constraints.",
  p8R1: "km/h reference speed",
  p8R2: "N·m at the disc",
  p8Details: "The project links energy assumptions to a CAD–HyperMesh–OptiStruct workflow. Results remain those of an academic model and depend on the selected load case.",
  p9Title: "PMSM stator field and torque in FEMM",
  p9Text: "Simulation of the fields created by each phase, Concordia transformation and torque calculation as a function of stator-field orientation.",
  p9R1: "N·m/A measured",
  p9R2: "2D simulation",
  p9Details: "The report obtains a torque constant close to 0.15 N·m/A in the studied model. This value characterizes the simulation; it is not a machine-efficiency figure.",
  p10Title: "Causal model of an electric powertrain",
  p10Text: "Modeling of an ideal battery, chopper, DC motor, gearbox, wheel and the vehicle’s longitudinal dynamics.",
  p10Impact: "Motor torque • vehicle speed • aerodynamic force",
  p10Details: "The model makes causal relationships explicit but relies on strong assumptions: constant battery voltage, lossless converter and gearbox, and linearized vehicle resistance.",
  p11Title: "Taguchi L8 optimization of cutting conditions",
  p11Text: "Eight turning tests on 2017 aluminum to study cutting speed, feed rate and depth of cut, using a signal-to-noise ratio and ANOVA.",
  p11Impact: "Feed rate: 78.05% contribution • optimum A1B1C1",
  p11Details: "For this test set, feed rate is the dominant factor. The selected conditions are 250 m/min, 0.15 mm/rev and 0.5 mm; they remain specific to the material, machine and lab protocol.",
  p12Title: "Relational database for CAN 2025",
  p12Text: "MERISE conceptual and logical modeling followed by a Microsoft Access implementation for teams, players, stadiums, matches and participation records, with queries, forms and printable reports.",
  p12R1: "conceptual and logical models",
  p12R2: "queries and forms",
  p12Details: "The report demonstrates referential integrity and report generation. Export to Excel or Power BI is presented as a possible next step, not as a deployed feature.",
  navMedia: "Field involvement",
  mediaEyebrow: "Field involvement",
  mediaTitle: "Three public records of my role in team projects.",
  mediaTagEvent: "School–industry meeting",
  mediaTagPilot: "Event coordination",
  mediaTagPanel: "Roundtable participant",
  mediaBtnText: "View post on LinkedIn ↗",
  portraitAlt: "Portrait of Ahmed El Hicho in front of a helicopter",
  media1Alt: "Participants and partners at the Job Dating forum at Arts et Métiers Rabat",
  media2Alt: "Job Dating organizing team at Arts et Métiers Rabat",
  media3Alt: "Ahmed El Hicho speaking at a roundtable at Arts et Métiers Rabat",
  media1Title: "Job Dating: over 40 partners and 250 engineering students",
  media1Text: "I coordinated the overall organization with 15 area leads. This campus post provides a public record of the event and the partners involved.",
  media2Title: "Preparing the partnership pack and assigning team areas",
  media2Text: "My role was to coordinate the partnerships, logistics and communication teams, then track progress and the budget with their leads.",
  media3Title: "Roundtable on the education–research–innovation continuum",
  media3Text: "As President of the Student Association, I represented the student perspective in a discussion with lecturers, researchers and industry representatives.",
  jobDatingTeamLabel: "Organizing team · 15 area leads",
  jobDatingGroupLabel: "Company forum · overall coordination",
  roundTableLabel: "Speaker · student representation",
  jobDatingTitle: "Project lead — Job Dating Forum, 2nd edition",
  jobDatingText: "Coordinated the forum with more than 40 partners and 250 engineering students, led 15 area coordinators and tracked the event budget."
});

const langToggle = document.querySelector(".lang-toggle");
const langActive = document.querySelector(".lang-active");

function setLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  [
    ["data-i18n-placeholder", "placeholder"],
    ["data-i18n-aria-label", "aria-label"],
    ["data-i18n-title", "title"],
    ["data-i18n-alt", "alt"]
  ].forEach(([keyAttribute, translatedAttribute]) => {
    document.querySelectorAll(`[${keyAttribute}]`).forEach((node) => {
      const key = node.getAttribute(keyAttribute);
      if (key && dictionary[key]) node.setAttribute(translatedAttribute, dictionary[key]);
    });
  });

  const sInput = document.getElementById("projectSearchInput");
  if (sInput && dictionary.searchPlaceholder) {
    sInput.placeholder = dictionary.searchPlaceholder;
  }
  if (langActive) langActive.textContent = lang.toUpperCase();
  const inactive = lang === "fr" ? "EN" : "FR";
  if (langToggle && langToggle.lastElementChild) langToggle.lastElementChild.textContent = inactive;

  const secondaryToggle = document.getElementById("toggleSecondaryProjects");
  if (secondaryToggle) {
    const labelKey = secondaryToggle.getAttribute("aria-expanded") === "true"
      ? "lessProjectsButton"
      : "moreProjectsButton";
    secondaryToggle.dataset.i18n = labelKey;
    secondaryToggle.textContent = dictionary[labelKey];
  }

  localStorage.setItem("portfolio-language", lang);
  document.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: { lang } }));
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const next = document.documentElement.lang === "fr" ? "en" : "fr";
    setLanguage(next);
  });
}

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
let secondaryProjectsExpanded = false;
const searchInput = document.getElementById("projectSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const toggleSecondaryProjectsBtn = document.getElementById("toggleSecondaryProjects");

function updateSecondaryProjectsButton() {
  if (!toggleSecondaryProjectsBtn) return;
  const lang = document.documentElement.lang === "en" ? "en" : "fr";
  const labelKey = secondaryProjectsExpanded ? "lessProjectsButton" : "moreProjectsButton";
  toggleSecondaryProjectsBtn.setAttribute("aria-expanded", String(secondaryProjectsExpanded));
  toggleSecondaryProjectsBtn.dataset.i18n = labelKey;
  toggleSecondaryProjectsBtn.textContent = translations[lang][labelKey];
}

function applyFilters() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const hasActiveCriteria = query !== "" || currentCategoryFilter !== "all";
  if (clearSearchBtn) clearSearchBtn.style.display = query.length > 0 ? "block" : "none";
  if (toggleSecondaryProjectsBtn) toggleSecondaryProjectsBtn.hidden = hasActiveCriteria;

  cards.forEach((card) => {
    const categories = (card.dataset.category || "").split(" ");
    const matchesCategory = currentCategoryFilter === "all" || categories.includes(currentCategoryFilter);
    const textContent = card.textContent.toLowerCase();
    const matchesQuery = query === "" || textContent.includes(query);
    const canShowSecondary = card.dataset.secondary !== "true"
      || secondaryProjectsExpanded
      || hasActiveCriteria;
    card.hidden = !(matchesCategory && matchesQuery && canShowSecondary);
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
if (toggleSecondaryProjectsBtn) {
  toggleSecondaryProjectsBtn.addEventListener("click", () => {
    secondaryProjectsExpanded = !secondaryProjectsExpanded;
    updateSecondaryProjectsButton();
    applyFilters();
  });
}

updateSecondaryProjectsButton();
applyFilters();

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
    contextFr: "Projet académique mené à trois dans un environnement semi-industriel d'assemblage de vérins pneumatiques comportant 10 opérations.",
    contextEn: "Three-person academic project in a semi-industrial environment for pneumatic-cylinder assembly across 10 operations.",
    methodFr: "Conception dans Tulip d'une architecture de 11 tables, d'interfaces opérateur et superviseur, d'un suivi par ordre de fabrication et d'un module qualité.",
    methodEn: "Designed 11 linked Tulip tables, operator and supervisor interfaces, work-order tracking and a quality module.",
    resultsFr: "Le prototype structure le suivi des opérations et de l'encours. Les essais ont révélé deux ruptures de traçabilité, corrigées par l'équipe ; des limites restent à traiter avant un usage continu.",
    resultsEn: "The prototype structures operation and work-in-progress tracking. Testing revealed two traceability breaks, which the team corrected; further limitations remain before continuous use.",
    tags: ["Tulip", "MES", "ISA-95", "MESA", "Poka-Yoke", "Lean"],
    tagsEn: ["Tulip", "MES", "ISA-95", "MESA", "Poka-Yoke", "Lean"],
    reportPdf: "assets/reports/P01_Rapport_MES_Tulip.pdf"
  },
  p2: {
    categoryFr: "Industrie 4.0 / Lean",
    categoryEn: "Industry 4.0 / Lean",
    titleFr: "Système ANDON digital — Ligne Karakuri A1",
    titleEn: "Digital ANDON System — Karakuri Line A1",
    contextFr: "Prototype académique destiné à représenter le traitement d'une alerte qualité, matière ou maintenance sur une ligne Karakuri.",
    contextEn: "Academic prototype representing the handling of quality, material or maintenance alerts on a Karakuri line.",
    methodFr: "Développement d'une application Flask/SQLite avec API REST et cycle OPEN–ACK–ARRIVED–CLOSED. Calcul de MTTA, MTTR et SLA, puis saisie d'une cause 5M et d'une action corrective.",
    methodEn: "Built a Flask/SQLite application with a REST API and an OPEN–ACK–ARRIVED–CLOSED workflow. It calculates MTTA, MTTR and SLA data, then records a 5M cause and corrective action.",
    resultsFr: "Le parcours et les calculs ont été vérifiés sur des scénarios simulés. Aucun gain de réactivité ou de disponibilité n'a été mesuré sur une ligne en production.",
    resultsEn: "The workflow and calculations were checked through simulated scenarios. No response-time or availability improvement was measured on a production line.",
    tags: ["Flask", "SQLite", "API REST", "ANDON", "QRQC", "5M / Ishikawa"],
    tagsEn: ["Flask", "SQLite", "REST API", "ANDON", "QRQC", "5M / Ishikawa"],
    reportPdf: "assets/reports/P02_Rapport_Andon_Digital.pdf"
  },
  p3: {
    categoryFr: "IA appliquée & Données",
    categoryEn: "Applied AI & Data",
    titleFr: "Reporting terrain par audio et IA — Whisper & NLP",
    titleEn: "Voice-to-Data Industrial Reporting — Whisper & NLP",
    contextFr: "Prototype développé pendant le stage DOGA FZ pour explorer la transformation d'un compte rendu vocal en données structurées.",
    contextEn: "Prototype developed during the DOGA FZ internship to explore converting a spoken field report into structured data.",
    methodFr: "Transcription avec Whisper, extraction NLP de 17 champs métier et génération de fichiers JSON et Excel pour revue par l'utilisateur.",
    methodEn: "Whisper transcription, NLP extraction of 17 business fields, and JSON and Excel output for user review.",
    resultsFr: "Le flux fonctionne sous forme de prototype. Le gain de temps, la précision d'extraction et la robustesse aux conditions d'atelier n'ont pas encore été évalués quantitativement.",
    resultsEn: "The workflow runs as a prototype. Time savings, extraction accuracy and robustness to shop-floor conditions have not yet been evaluated quantitatively.",
    tags: ["OpenAI Whisper", "Python", "NLP", "JSON", "Audit et Qualité"],
    tagsEn: ["OpenAI Whisper", "Python", "NLP", "JSON", "Audit and quality"],
    reportPdf: "assets/reports/P03_Rapport_Reporting_Audio_IA.pdf"
  },
  p4: {
    categoryFr: "Mécanique & Simulation",
    categoryEn: "Mechanics & Simulation",
    titleFr: "Analyse modale de structures — Abaqus FEA",
    titleEn: "Modal Analysis of Structures — Abaqus FEA",
    contextFr: "TP de caractérisation dynamique d'une structure, avec comparaison des fréquences propres calculées sous Abaqus aux valeurs issues des essais.",
    contextEn: "Structural dynamics lab comparing natural frequencies calculated in Abaqus with test values.",
    methodFr: "Modélisation par éléments finis sous Abaqus, étude de convergence spatiale du maillage, extraction et interprétation physique des modes propres (flexion, torsion, couplage).",
    methodEn: "Finite element modeling in Abaqus, mesh convergence study, and physical interpretation of natural eigenmodes (bending, torsion, coupled modes).",
    resultsFr: "Les écarts calcul–essai observés vont de 1,1 % à 7,2 % selon le mode. L'analyse modale constitue une entrée pour une étude aéroélastique, mais ne valide pas le flottement.",
    resultsEn: "Observed calculation-to-test differences range from 1.1% to 7.2%, depending on the mode. Modal analysis is an input to aeroelastic work, but does not validate flutter.",
    tags: ["Abaqus FEA", "Éléments finis", "Vibrations", "Dynamique des structures"],
    tagsEn: ["Abaqus FEA", "Finite elements", "Vibrations", "Structural dynamics"],
    reportPdf: "assets/reports/P04_Rapport_Analyse_Modale_Abaqus.pdf"
  },
  p5: {
    categoryFr: "IA, Données & Procédés",
    categoryEn: "AI, Data & Processes",
    titleFr: "Optimisation numérique d'un SVM par Uzawa — WAAM",
    titleEn: "Numerical SVM Optimization via Uzawa — WAAM",
    contextFr: "Mini-projet académique d'optimisation sous contraintes appliqué à un jeu de données WAAM fourni pour le TP.",
    contextEn: "Academic constrained-optimization mini-project using a WAAM dataset supplied for the course.",
    methodFr: "Implémentation from scratch en Python/NumPy de l'algorithme primal-dual d'Uzawa pour résoudre le problème d'optimisation sous contraintes d'un séparateur à vaste marge (SVM).",
    methodEn: "From-scratch implementation in Python/NumPy of the Uzawa primal-dual algorithm to solve constrained optimization for Support Vector Machine (SVM) classification.",
    resultsFr: "L'algorithme converge et sépare les deux classes du jeu étudié, avec identification des vecteurs supports. Ce résultat n'a pas été testé sur d'autres données industrielles.",
    resultsEn: "The algorithm converges and separates the two classes in the studied dataset while identifying support vectors. It was not tested on other industrial data.",
    tags: ["Python", "NumPy", "Algorithme d'Uzawa", "SVM", "WAAM"],
    tagsEn: ["Python", "NumPy", "Uzawa algorithm", "SVM", "WAAM"],
    reportPdf: "assets/reports/P05_Rapport_Optimisation_SVM_Uzawa.pdf"
  },
  p6: {
    categoryFr: "Éco-conception & Matériaux",
    categoryEn: "Eco-design & Materials",
    titleFr: "Éco-audit d’une trottinette électrique",
    titleEn: "Electric-Scooter Eco-Audit",
    contextFr: "Projet académique d'éco-audit d'une trottinette électrique, de sa fabrication à sa fin de vie.",
    contextEn: "Academic eco-audit of an electric scooter from manufacturing through end of life.",
    methodFr: "Modélisation sous Ansys Granta EduPack, calcul de l'empreinte carbone, évaluation de la réparabilité et de la recyclabilité, puis comparaison de scénarios d'amélioration.",
    methodEn: "Ansys Granta EduPack modeling, carbon-footprint calculation, repairability and recyclability assessment, followed by comparison of improvement scenarios.",
    resultsFr: "Le rapport estime 376 kg CO₂-eq par produit, une réparabilité de 3,7/10 et une recyclabilité de 85,8 %. Le scénario combiné étudié réduit l'impact calculé de 58 %.",
    resultsEn: "The report estimates 376 kg CO₂-eq per product, a 3.7/10 repairability score and 85.8% recyclability. The combined scenario studied reduces the calculated impact by 58%.",
    tags: ["Ansys Granta", "Éco-audit", "Réparabilité", "Recyclabilité"],
    tagsEn: ["Ansys Granta", "Eco audit", "Repairability", "Recyclability"],
    reportPdf: "assets/reports/P06_Rapport_Ecoconception_ACV.pdf"
  },
  p7: {
    categoryFr: "Mécanique & Vibrations",
    categoryEn: "Mechanics & Vibrations",
    titleFr: "Équilibrage statique et dynamique d'un rotor",
    titleEn: "Static and Dynamic Rotor Balancing",
    contextFr: "TP de mécanique vibratoire consacré au diagnostic d'un balourd et à sa correction sur un banc de rotor rigide.",
    contextEn: "Mechanical-vibration lab focused on diagnosing and correcting unbalance on a rigid-rotor test bench.",
    methodFr: "Mesure de l'amplitude et de la phase, équilibrage sur un puis deux plans et calcul des masselottes par la méthode des coefficients d'influence.",
    methodEn: "Amplitude and phase measurements, one- then two-plane balancing, and correction-mass calculations using the influence-coefficient method.",
    resultsFr: "Après correction, le rapport retient 4 mV sur P1 et 0,07 mV sur P2 à 40 Hz. La conformité à un seuil normalisé et l’effet sur la durée de vie des roulements n’ont pas été évalués.",
    resultsEn: "After correction, the report records 4 mV on P1 and 0.07 mV on P2 at 40 Hz. Compliance with a standardized threshold and the effect on bearing life were not evaluated.",
    tags: ["Mécanique des vibrations", "Équilibrage 1 et 2 plans", "Coefficients d'influence", "Banc d'essai"],
    tagsEn: ["Mechanical vibrations", "One- and two-plane balancing", "Influence coefficients", "Test bench"],
    reportPdf: "assets/reports/P07_Rapport_Equilibrage_Dynamique.pdf"
  },
  p8: {
    categoryFr: "Conception & Énergétique",
    categoryEn: "Design & Energy Systems",
    titleFr: "Étude énergétique d’un VAE et optimisation du disque de frein",
    titleEn: "E-Bike Energy Study and Brake-Disc Optimization",
    contextFr: "Projet de conception avancée d'un VAE, fondé sur une puissance cycliste de 140 W et une cadence de référence de 1,1 Hz.",
    contextEn: "Advanced e-bike design project based on 140 W of cyclist input and a reference cadence of 1.1 Hz.",
    methodFr: "Étude de la dynamique et du bilan énergétique, calcul du cas de freinage dimensionnant, puis optimisation topologique du disque sous HyperMesh et OptiStruct.",
    methodEn: "Dynamic and energy-balance study, calculation of the governing braking load, then topological optimization of the disc in HyperMesh and OptiStruct.",
    resultsFr: "Le cas de référence conduit à 24,9 km/h et à un couple de 86,6 N·m au disque. Ces valeurs restent celles d’un modèle académique et dépendent des hypothèses de charge retenues.",
    resultsEn: "The reference case gives 24.9 km/h and 86.6 N·m at the disc. These figures remain those of an academic model and depend on the selected load assumptions.",
    tags: ["HyperMesh", "OptiStruct", "Bilan énergétique", "Optimisation topologique"],
    tagsEn: ["HyperMesh", "OptiStruct", "Energy balance", "Topological optimization"],
    reportPdf: "assets/reports/P08_Rapport_Conception_VAE.pdf"
  },
  p9: {
    categoryFr: "Électrotechnique & Simulation",
    categoryEn: "Electrotechnics & Simulation",
    titleFr: "Caractérisation d'une MSAP sous FEMM",
    titleEn: "FEMM Characterization of a PMSM",
    contextFr: "TP de simulation d'une machine synchrone à aimants permanents afin d'étudier ses champs statoriques et son couple électromagnétique.",
    contextEn: "Simulation lab on a permanent-magnet synchronous machine, studying stator fields and electromagnetic torque.",
    methodFr: "Modélisation 2D sous FEMM, construction des excitations statoriques, passage dans le repère de Concordia et calcul du couple.",
    methodEn: "2D FEMM modeling, construction of stator excitations, Concordia-frame transformation and torque calculation.",
    resultsFr: "Dans le modèle étudié, le rapport obtient une constante de couple voisine de 0,15 N·m/A. Cette valeur caractérise la simulation ; le rendement et le comportement en charge sur banc n’ont pas été évalués.",
    resultsEn: "In the studied model, the report obtains a torque constant close to 0.15 N·m/A. This value characterizes the simulation; efficiency and test-bench behavior under load were not evaluated.",
    tags: ["FEMM", "MSAP / PMSM", "Champ magnétique", "Concordia", "Couple électromagnétique"],
    tagsEn: ["FEMM", "MSAP / PMSM", "Magnetic field", "Concordia", "Electromagnetic torque"],
    reportPdf: "assets/reports/P09_Rapport_MSAP_Electrotechnique.pdf"
  },
  p10: {
    categoryFr: "Énergétique & Systèmes",
    categoryEn: "Energy & Systems",
    titleFr: "Modélisation causale d'une chaîne de traction électrique",
    titleEn: "Causal Modeling of an Electric Powertrain",
    contextFr: "Projet académique visant à relier, dans un modèle simplifié, les principaux sous-systèmes d'un véhicule électrique.",
    contextEn: "Academic project linking the main electric-vehicle subsystems in a simplified model.",
    methodFr: "Assemblage causal des blocs batterie, convertisseur, moteur, réducteur, roue et véhicule, avec leurs relations mécaniques et énergétiques.",
    methodEn: "Causal assembly of battery, converter, motor, gearbox, wheel and vehicle blocks with their mechanical and energy relationships.",
    resultsFr: "Le modèle illustre les échanges entre sous-systèmes. Le rapport ne fournit pas de validation expérimentale ni de résultat d'autonomie, de consommation ou de SOC à revendiquer.",
    resultsEn: "The model illustrates exchanges between subsystems. The report provides no experimental validation and no range, consumption or state-of-charge result to claim.",
    tags: ["Modélisation causale", "Batterie", "Convertisseur", "Moteur", "Dynamique longitudinale"],
    tagsEn: ["Causal modeling", "Battery", "Converter", "Motor", "Longitudinal dynamics"],
    reportPdf: "assets/reports/P10_Rapport_Chaine_Traction_VE.pdf"
  },
  p11: {
    categoryFr: "Qualité & Plans d'expériences",
    categoryEn: "Quality & DoE",
    titleFr: "Plan Taguchi L8 et analyse ANOVA",
    titleEn: "Taguchi L8 Design and ANOVA",
    contextFr: "TP de qualité consacré à l'influence de trois facteurs d'usinage sur la réponse observée.",
    contextEn: "Quality lab studying the influence of three machining factors on the observed response.",
    methodFr: "Mise en œuvre d'un plan Taguchi L8, calcul des rapports signal/bruit et analyse de variance pour estimer la contribution de chaque facteur.",
    methodEn: "Taguchi L8 design, signal-to-noise calculations and analysis of variance to estimate each factor's contribution.",
    resultsFr: "Dans les données du TP, l'avance est le facteur dominant avec 78,05 % de contribution et A1B1C1 est la combinaison retenue. Un essai de confirmation serait nécessaire pour quantifier le gain obtenu.",
    resultsEn: "In the lab data, feed rate is the dominant factor with a 78.05% contribution, and A1B1C1 is the selected combination. A confirmation test would be needed to quantify the improvement.",
    tags: ["Plan Taguchi L8", "ANOVA", "Signal / Bruit", "3 facteurs", "A1B1C1"],
    tagsEn: ["Taguchi L8 design", "ANOVA", "Signal-to-noise", "3 factors", "A1B1C1"],
    reportPdf: "assets/reports/P11_Rapport_Optimisation_Taguchi_ANOVA.pdf"
  },
  p12: {
    categoryFr: "Données & Base relationnelle",
    categoryEn: "Data & Relational Databases",
    titleFr: "Base de données relationnelle — CAN 2025",
    titleEn: "Relational Database — AFCON 2025",
    contextFr: "Projet académique de structuration des données de la CAN 2025 dans Microsoft Access.",
    contextEn: "Academic project structuring AFCON 2025 data in Microsoft Access.",
    methodFr: "Élaboration du MCD et du MLD selon MERISE, normalisation jusqu'en 3NF, puis création des tables, requêtes SQL, formulaires et états Access.",
    methodEn: "MERISE conceptual and logical data modeling, normalization to 3NF, then creation of Access tables, SQL queries, forms and reports.",
    resultsFr: "Le livrable comprend les tables, requêtes, formulaires et états nécessaires à la démonstration. Les performances d’accès et l’usage en conditions réelles n’ont pas fait l’objet d’une mesure quantitative.",
    resultsEn: "The deliverable includes the tables, queries, forms and reports needed for the demonstration. Access performance and real-world use were not assessed quantitatively.",
    tags: ["Microsoft Access", "MERISE", "MCD / MLD", "3NF", "SQL", "Formulaires et états"],
    tagsEn: ["Microsoft Access", "MERISE", "Conceptual / logical model", "3NF", "SQL", "Forms and reports"],
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
const modalFocusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

let activeProjectId = null;
let lastModalTrigger = null;
let modalHideTimer = null;
let previousBodyOverflow = "";
const backgroundInertState = new Map();

function setModalInert(isInert) {
  if (modalOverlay && "inert" in modalOverlay) modalOverlay.inert = isInert;
}

function setBackgroundInert(isInert) {
  if (!modalOverlay || typeof HTMLElement === "undefined" || !("inert" in HTMLElement.prototype)) return;

  if (isInert) {
    backgroundInertState.clear();
    Array.from(document.body.children).forEach((element) => {
      if (!(element instanceof HTMLElement) || element === modalOverlay || element.tagName === "SCRIPT") return;
      backgroundInertState.set(element, element.inert);
      element.inert = true;
    });
    return;
  }

  backgroundInertState.forEach((wasInert, element) => {
    if (element.isConnected) element.inert = wasInert;
  });
  backgroundInertState.clear();
}

function renderQuickViewModal(projectId, lang = document.documentElement.lang) {
  const data = projectQuickViewData[projectId];
  if (!data || !modalOverlay) return false;
  const useEnglish = lang === "en";

  const modalValues = {
    modalCategory: useEnglish ? data.categoryEn : data.categoryFr,
    modalTitle: useEnglish ? data.titleEn : data.titleFr,
    modalContext: useEnglish ? data.contextEn : data.contextFr,
    modalMethod: useEnglish ? data.methodEn : data.methodFr,
    modalResults: useEnglish ? data.resultsEn : data.resultsFr
  };
  Object.entries(modalValues).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  });

  const tagsContainer = document.getElementById("modalTags");
  if (tagsContainer) {
    tagsContainer.replaceChildren();
    const tags = useEnglish && data.tagsEn ? data.tagsEn : data.tags;
    tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });
  }

  const reportLink = document.getElementById("modalReportLink");
  if (reportLink) reportLink.href = data.reportPdf;
  return true;
}

function openQuickViewModal(projectId, triggerElement) {
  if (!renderQuickViewModal(projectId) || !modalOverlay) return;

  activeProjectId = projectId;
  lastModalTrigger = triggerElement instanceof HTMLElement
    ? triggerElement
    : (document.activeElement instanceof HTMLElement ? document.activeElement : null);

  if (modalHideTimer) {
    window.clearTimeout(modalHideTimer);
    modalHideTimer = null;
  }

  previousBodyOverflow = document.body.style.overflow;
  modalOverlay.hidden = false;
  setModalInert(false);
  setBackgroundInert(true);
  modalOverlay.classList.add("open");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  window.requestAnimationFrame(() => {
    const initialFocus = closeModalBtn || modalCloseActionBtn || modalOverlay;
    if (initialFocus === modalOverlay && !modalOverlay.hasAttribute("tabindex")) {
      modalOverlay.setAttribute("tabindex", "-1");
    }
    initialFocus.focus();
  });
}

function closeQuickViewModal() {
  if (!modalOverlay || !modalOverlay.classList.contains("open")) return;
  modalOverlay.classList.remove("open");
  modalOverlay.setAttribute("aria-hidden", "true");
  setModalInert(true);
  setBackgroundInert(false);
  document.body.style.overflow = previousBodyOverflow;

  const focusTarget = lastModalTrigger;
  activeProjectId = null;
  lastModalTrigger = null;
  if (focusTarget && focusTarget.isConnected) focusTarget.focus();

  modalHideTimer = window.setTimeout(() => {
    if (modalOverlay && !modalOverlay.classList.contains("open")) modalOverlay.hidden = true;
    modalHideTimer = null;
  }, 350);
}

document.querySelectorAll(".quick-view-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const pid = btn.getAttribute("data-project");
    if (pid) openQuickViewModal(pid, btn);
  });
});

if (closeModalBtn) closeModalBtn.addEventListener("click", closeQuickViewModal);
if (modalCloseActionBtn) modalCloseActionBtn.addEventListener("click", closeQuickViewModal);
if (modalOverlay) {
  modalOverlay.hidden = true;
  modalOverlay.setAttribute("aria-hidden", "true");
  setModalInert(true);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeQuickViewModal();
  });
}

document.addEventListener("portfolio-language-change", (event) => {
  if (activeProjectId && modalOverlay && modalOverlay.classList.contains("open")) {
    renderQuickViewModal(activeProjectId, event.detail.lang);
  }
});

window.addEventListener("keydown", (e) => {
  if (!modalOverlay || !modalOverlay.classList.contains("open")) return;

  if (e.key === "Escape") {
    e.preventDefault();
    closeQuickViewModal();
    return;
  }

  if (e.key !== "Tab") return;
  const focusableElements = Array.from(modalOverlay.querySelectorAll(modalFocusableSelector))
    .filter((element) => element instanceof HTMLElement
      && !element.hidden
      && element.getAttribute("aria-hidden") !== "true"
      && element.getClientRects().length > 0);

  if (focusableElements.length === 0) {
    e.preventDefault();
    modalOverlay.focus();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  const focusIsOutside = !modalOverlay.contains(document.activeElement);
  if (e.shiftKey && (document.activeElement === firstElement || focusIsOutside)) {
    e.preventDefault();
    lastElement.focus();
  } else if (!e.shiftKey && (document.activeElement === lastElement || focusIsOutside)) {
    e.preventDefault();
    firstElement.focus();
  }
});


// ==================== SECURITY & ANTI-SCRAPING ====================
document.addEventListener("DOMContentLoaded", function () {

  // --- Obfuscated Email Decode ---
  document.querySelectorAll('.secure-email').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var encoded = btn.getAttribute('data-contact');
      if (encoded) {
        var decoded = atob(encoded);
        btn.textContent = decoded;
        btn.href = 'mailto:' + decoded;
        btn.classList.remove('secure-email');
      }
    });
  });

  // --- Document Password Protection ---
  var TARGET_HASH = "YWVybzIwMjc="; // btoa("aero2027")

  var securityModal = document.getElementById('securityModal');
  var closeSecurityModal = document.getElementById('closeSecurityModal');
  var cancelSecurityBtn = document.getElementById('cancelSecurityBtn');
  var confirmSecurityBtn = document.getElementById('confirmSecurityBtn');
  var documentPassword = document.getElementById('documentPassword');
  var securityError = document.getElementById('securityError');
  var pendingDocUrl = '';

  if (!securityModal || !documentPassword) {
    console.warn('[Security] Modal elements not found in DOM.');
    return;
  }

  function openSecurityModal(url) {
    pendingDocUrl = url;
    documentPassword.value = '';
    securityError.style.display = 'none';
    securityModal.removeAttribute('hidden');
    securityModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(function () { documentPassword.focus(); }, 120);
  }

  function closeSecurity() {
    securityModal.classList.remove('open');
    document.body.style.overflow = 'auto';
    pendingDocUrl = '';
  }

  function verifyPassword() {
    if (btoa(documentPassword.value) === TARGET_HASH) {
      closeSecurity();
      window.open(pendingDocUrl, '_blank', 'noopener,noreferrer');
    } else {
      securityError.style.display = 'block';
      documentPassword.value = '';
      documentPassword.focus();
    }
  }

  // Intercept every PDF link on the page (report links, CV link, modal link)
  document.querySelectorAll('a[href*=".pdf"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openSecurityModal(link.href);
    });
  });

  // Also intercept dynamically-set modal report link
  var modalReportLink = document.getElementById('modalReportLink');
  if (modalReportLink) {
    modalReportLink.addEventListener('click', function (e) {
      if (modalReportLink.href && modalReportLink.href.indexOf('.pdf') !== -1) {
        e.preventDefault();
        e.stopPropagation();
        openSecurityModal(modalReportLink.href);
      }
    });
  }

  // Close modal buttons
  if (closeSecurityModal) closeSecurityModal.addEventListener('click', closeSecurity);
  if (cancelSecurityBtn) cancelSecurityBtn.addEventListener('click', closeSecurity);
  if (confirmSecurityBtn) confirmSecurityBtn.addEventListener('click', verifyPassword);

  // Enter key in password field
  documentPassword.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') { verifyPassword(); }
  });

  // Close on overlay click (outside the modal container)
  securityModal.addEventListener('click', function (e) {
    if (e.target === securityModal) { closeSecurity(); }
  });

});
