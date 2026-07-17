# 🚀 PORTFOLIO DÉTAILLÉ DES PROJETS D'INGÉNIERIE & RÉALISATIONS TECHNIQUES
**Auteur :** Ahmed EL HICHO | Élève Ingénieur Arts et Métiers ParisTech (ENSAM Campus de Bordeaux-Talence)  
**Spécialisation 3ème année :** Expertise Aeronautics & Space (ENSAM ParisTech)  
**Objectif :** Dossier technique exhaustif valorisant les compétences, méthodes, outils et résultats quantifiés pour une candidature en Stage de Fin d'Études (SFE) dans l'industrie Aéronautique & Spatiale.

---

## 📌 TABLE DES MATIÈRES
1. [PROJETS PHARES : INDUSTRIE 4.0, LEAN MANUFACTURING & DIGITALISATION](#1-projets-phares--industrie-40-lean-manufacturing--digitalisation)
   - 1.1. [Déploiement d'un MES sur la plateforme No-Code Tulip (Projet PJ8)](#11-déploiement-dun-mes-sur-la-plateforme-no-code-tulip-projet-pj8)
   - 1.2. [Système ANDON – Digitalisation & Gestion d'alertes Lean (Projet PJ7)](#12-système-andon--digitalisation--gestion-dalertes-lean-projet-pj7)
   - 1.3. [Stage Ingénieur – Digitalisation & Pilotage de la performance industrielle (DOGA FZ)](#13-stage-ingénieur--digitalisation--pilotage-de-la-performance-industrielle-doga-fz)
2. [PROJETS D'INGÉNIERIE MÉCANIQUE, SIMULATION & ÉCO-CONCEPTION](#2-projets-dingénierie-mécanique-simulation--éco-conception)
   - 2.1. [Éco-conception & Analyse de Cycle de Vie (ACV) – Projet COPA](#21-éco-conception--analyse-de-cycle-de-vie-acv--projet-copa)
   - 2.2. [Conception Avancée – Véhicule à Assistance Électrique (VAE)](#22-conception-avancée--véhicule-à-assistance-électrique-vae)
   - 2.3. [Analyse Modale de Structures par Éléments Finis (Abaqus FEA)](#23-analyse-modale-de-structures-par-éléments-finis-abaqus-fea)
   - 2.4. [Équilibrage Dynamique de Machines Tournantes](#24-équilibrage-dynamique-de-machines-tournantes)
3. [MATHÉMATIQUES APPLIQUÉES, IA & MODÉLISATION NUMÉRIQUE](#3-mathématiques-appliquées-ia--modélisation-numérique)
   - 3.1. [Optimisation Numérique – Algorithme UZAWA pour SVM (MINA)](#31-optimisation-numérique--algorithme-uzawa-pour-svm-mina)
   - 3.2. [Plans d'Expériences Taguchi & ANOVA – Optimisation Qualité](#32-plans-dexpériences-taguchi--anova--optimisation-qualité)
4. [ÉLECTROTECHNIQUE, AUTOMATIQUE & SYSTÈMES ÉNERGÉTIQUES](#4-électrotechnique-automatique--systèmes-énergétiques)
   - 4.1. [Caractérisation de Machine Synchrone à Aimants Permanents (MSAP)](#41-caractérisation-de-machine-synchrone-à-aimants-permanents-msap)
   - 4.2. [Modélisation Multi-Physique de la Chaîne de Traction d'un Véhicule Électrique](#42-modélisation-multi-physique-de-la-chaîne-de-traction-dun-véhicule-électrique)
   - 4.3. [Conception d'un Système de Recyclage des Eaux Grises (MGWS)](#43-conception-dun-système-de-recyclage-des-eaux-grises-mgws)
5. [INGÉNIERIE DES DONNÉES & BASES RELATIONNELLES](#5-ingénierie-des-données--bases-relationnelles)
   - 5.1. [Conception de la Base de Données Relationnelle OREXA (CAN 2025)](#51-conception-de-la-base-de-données-relationnelle-orexa-can-2025)
6. [SYNTHÈSE DU PROFIL & VALORISATION POUR L'AÉROSPATIAL](#6-synthèse-du-profil--valorisation-pour-laérospatial)

---

## 1. PROJETS PHARES : INDUSTRIE 4.0, LEAN MANUFACTURING & DIGITALISATION

### 1.1. Déploiement d'un MES sur la plateforme No-Code Tulip (Projet PJ8)
* **Contexte & Problématique :** Projet intégrateur de 2ème année (PJT N°43) réalisé au sein de l'**Evolutive Lean Factory (ELF)** de l'ENSAM Bordeaux. La plateforme d'assemblage *X-Manufacturing* (dédiée au montage de vérins pneumatiques industriels) fonctionnait en mode entièrement papier : fiches d'instructions imprimées, chronométrage manuel inexistant, absence de traçabilité des pièces, aucune remontée en temps réel des défauts pour le superviseur.
* **Partenaire Industriel :** **Percall** (intégrateur de solutions MES et de la plateforme cloud no-code **Tulip**, utilisée par plus de 3 000 leaders industriels mondiaux tels que Toyota et Johnson & Johnson).
* **Objectifs SMART (3 Livrables) :**
  1. *L1 - Digitalisation des gammes de montage :* Création d'une interface opérateur tactile guidant l'assemblage pas-à-pas avec instructions visuelles et contrôles intégrés.
  2. *L2 - Traçabilité & Conformité :* Enregistrement automatique et transparent des temps de cycle réels et des non-conformités détectées.
  3. *L3 - Monitoring temps réel :* Conception d'un tableau de bord superviseur affichant les KPIs critiques de l'atelier.
* **Architecture Technique & Modélisation ISA-95 :**
  * **Positionnement ISA-95 :** Système de Niveau 3 (MES - Exécution de la production), faisant le pont entre le pilotage stratégique (Niveau 4 - ERP) et l'automatisation terrain (Niveaux 0-2 - SCADA/Capteurs).
  * **Couverture MESA (6 fonctions sur 11) :** Contrôle des documents (F4), Collecte des données (F5), Gestion du WIP (F6), Gestion de la qualité (F7), Gestion de la performance (F8), Traçabilité (F9).
  * **Modèle de Données (11 Tables Interconnectées) :** Conçu selon une logique relationnelle stricte au sein du cloud Tulip :
    1. `Tracabilite` : Suivi fin par opération (ID, OF, Opération, Opérateur, Poste, Variante, Horodatage début/fin, Statut).
    2. `Productions` : Suivi global par Ordre de Fabrication (OF) et comptage des pièces conformes (Qté OK).
    3. `Ordres_Fabrication` : Planification, quantité cible et suivi d'avancement.
    4. `Alertes_Defauts` : Journalisation des anomalies par poste, type de défaut et sévérité.
    5. `Operateurs` : Profils, badges QR et habilitations.
    6. `Postes` : Supervision en temps réel de l'état des stations (Actif, Arrêt, Défaut).
    7. `Gammes` & `Operations` & `OperationGamme` : Définition de 10 opérations d'assemblage et séquencement selon 3 variantes de vérins (Type A, B0, B6).
    8. `Liste_Etapes_Operation` & `Variantes` : Liaison avec les supports visuels (diapos) et gestion des nomenclatures.
  * **Choix d'Architecture Majeur (Granularité par Opération) :** Contrairement à l'approche classique se contentant d'un suivi global par OF, notre équipe a implémenté un horodatage automatique à **chaque étape d'assemblage** (table `Actuel_Productions`). Ce choix permet d'identifier précisément les goulots d'étranglement opération par opération.
* **Réalisation & Interfaces Déployées :**
  * **Gamme opératoire (Vérin Type A) :** Séquence de 10 opérations (~6 min de temps de cycle cible) décomposées en **21 sous-opérations sur 3 postes** (P1 : assemblage corps/tige/culasse ; P2 : intégration flasque et serrages ; P3 : finition, chape et écrou dynamométrique).
  * **Interface Opérateur (Application 1) :** Navigation intuitive en 5 sections (Accueil/Identification par menu déroulant, Choix du Type de vérin, Formation/Tutoriels, Assemblage pas-à-pas, Déclaration de défauts). Intégration de chronomètres invisibles déclenchés par les triggers Tulip *« On step enter »* et *« On step exit »*.
  * **Module Qualité :** Écran dédié accessible à tout moment, permettant de déclarer une non-conformité selon **3 types de vérins × 3 niveaux de sévérité (9 combinaisons)**, alimentant directement la table `Alertes_Defauts`.
  * **Tableau de Bord Superviseur (Application 2) :** Application distincte basée sur le management visuel Lean. Affiche en temps réel : nombre de vérins produits, temps de cycle moyen par opération, taux de défauts (%) et statut en direct de chaque poste (vert/jaune/rouge).
* **Résolution de Problèmes & Debugging :**
  * *Bug 1 (Horodatage invalide) :* Les triggers par défaut enregistraient un identifiant statique au lieu de l'heure système. Résolution : modification systématique des 7 étapes pour injecter *« Date et Heure actuelles »*.
  * *Bug 2 (Rupture de traçabilité) :* L'étape pivot de choix du vérin ne créait pas d'enregistrement en sortie. Résolution : ajout d'un trigger d'écriture en table sur l'événement *« On step exit »*.
  * *Analyse critique du No-Code :* Identification des limites de Tulip (absence de tests unitaires automatisés, rafraîchissement perfectible de l'éditeur lié aux événements synthétiques React).
* **Analyse de Durabilité (ADEME 2050) :** Alignement avec le scénario *« Technologies Vertes »*. Contribution directe : réduction des rebuts matière par détection au plus tôt (Poka-Yoke digital), optimisation énergétique par lissage des temps de cycle (Kaizen) et suppression totale du papier dans l'atelier.
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * L'aéronautique (normes **AS9100, EASA/FAA Part 21 & Part 145**) exige une **traçabilité unitaire absolue** (qui a monté quelle pièce, avec quel outil, à quelle heure et selon quelle révision de gamme).
  * La maîtrise de la digitalisation d'une ligne d'assemblage (MES), la structuration de bases de données industrielles ISA-95 et le suivi en temps réel du Takt Time sont des compétences directement recherchées sur les chaînes d'assemblage final (FAL) d'avions ou d'intégration de satellites.

---

### 1.2. Système ANDON – Digitalisation & Gestion d'alertes Lean (Projet PJ7)
* **Contexte & Problématique :** Projet intégrateur de 1ère année sur la **Ligne Karakuri A1** (3 postes de travail : P1, P2, P3). Le *Karakuri* désigne une philosophie d'automatisation low-cost et gravitaire (leviers, ressorts, plans inclinés). L'enjeu était d'éliminer les temps d'attente cachés et de fluidifier la communication en cas d'aléa sur la ligne.
* **Objectif :** Concevoir et déployer un **système ANDON digital complet** (système de management visuel issu du Toyota Production System) permettant de déclencher, catégoriser, suivre et résoudre les alertes en temps réel, tout en générant des analyses de performance continue.
* **Architecture Logicielle Full-Stack (Double Outil) :**
  1. **Application Web Opérationnelle Temps Réel (Flask / SQLite / HTML-CSS-JS) :**
     * Backend : Python 3.10+, framework **Flask 3.0.3**, base de données relationnelle légère **SQLite** (`andon.db`).
     * Modèle de données (`events`) : 12 colonnes traçant le cycle de vie complet (`id`, `poste`, `type`, `couleur`, `description`, `statut`, horodatages `t_declenchement`, `t_ack`, `t_arrivee`, `t_cloture`, et analyse `cause_5m`, `action`).
     * Machine à états stricte : `OPEN` (déclenchement) $\rightarrow$ `ACK` (prise en compte par le chef d'équipe) $\rightarrow$ `ARRIVED` (arrivée de l'intervenant au poste) $\rightarrow$ `CLOSED` (clôture avec analyse).
     * API REST intégrée (`GET /api/events`) renvoyant les 200 derniers événements au format JSON pour interconnexion avec d'autres systèmes tiers.
  2. **Dashboard Analytique Offline (Python / Streamlit / Pandas / Matplotlib) :**
     * Prototype d'analyse post-production (`andon_dashboard_streamlit.py`) important les journaux Excel (`EventLog`).
     * Calcul et affichage interactif avec filtres multi-critères (par Run, Poste, Type d'alerte).
* **Hiérarchisation des Alertes & Engagements SLA (Service Level Agreement) :**
  * **5 Catégories d'alertes :** Qualité, Panne machine, Approvisionnement (lié au flux Kanban), Assistance opérateur, Sécurité.
  * **Code Couleur & Priorisation automatique :**
    * 🔴 **ROUGE (Priorité 3 - Arrêt critique / Qualité / Sécurité) :** SLA Arrivée $\le$ **2 min (120 s)** | SLA Résolution $\le$ **15 min (900 s)**.
    * 🟡 **JAUNE (Priorité 2 - Assistance technique) :** SLA Arrivée $\le$ **5 min (300 s)** | SLA Résolution $\le$ **20 min (1200 s)**.
    * 🔵 **BLEU (Priorité 1 - Approvisionnement / Kanban) :** SLA Arrivée $\le$ **10 min (600 s)** | SLA Résolution $\le$ **20 min (1200 s)**.
    * 🟢 **VERT (Priorité 0) :** Fonctionnement normal (aucun événement ouvert).
  * *Gestion des conflits :* Si plusieurs alertes surviennent simultanément sur un même poste, l'algorithme affiche automatiquement la couleur de priorité maximale.
* **Indicateurs de Performance (KPIs) & Moteur de Calcul :**
  * Calcul sur une fenêtre glissante de 24 heures (`compute_kpi()`).
  * **MTTA (Mean Time To Acknowledge) :** Temps moyen de prise en compte de l'alerte.
  * **MTTA (Mean Time To Arrive) :** Réactivité effective de la maintenance ou de la logistique.
  * **MTTR (Mean Time To Resolve) :** Durée moyenne d'intervention et d'arrêt ligne.
  * **Taux de conformité SLA (%) :** Pourcentage d'alertes respectant les seuils contractuels d'arrivée et de clôture.
* **Analyse Causes Racines (Méthodologie 5M / Ishikawa / 5 Pourquoi) :**
  * L'application **interdit formellement la clôture d'une alerte sans capitalisation**.
  * Le formulaire de clôture exige la saisie obligatoire de la **Cause 5M** (*Méthode, Main d'œuvre, Machine, Matière, Milieu*) et de l'**Action corrective immédiate / Poka-Yoke** mis en place.
  * *Concept clé :* « Une clôture sans cause/action = perte de connaissance. L'ANDON doit alimenter la revue quotidienne (QRQC / SQCDP) ».
* **Livrables et Rigueur Industrielle :**
  * Production d'un package documentaire complet : Charte ANDON, Procédure Opératoire Standard (SOP), Maquette du tableau d'affichage physique, Schéma des flux d'information et Rapport de tests de validation.
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * Dans la construction aéronautique (ex: chaînes d'assemblage Airbus A320/A350 ou Safran), l'arrêt d'un poste a un coût financier colossal.
  * La mise en place de systèmes **ANDON digitaux**, le suivi strict des **MTTR/MTTA**, l'application du **QRQC (Quick Response Quality Control)** et l'investigation systématique par **Ishikawa (5M)** sont les outils quotidiens de l'ingénieur amélioration continue en usine aéronautique.

---

### 1.3. Stage Ingénieur – Digitalisation & Pilotage de la performance industrielle (DOGA FZ)
* **Contexte & Entreprise :** Stage d'immersion industrielle réalisé en juillet 2025 chez **DOGA FZ** (Tanger Free Zone, Maroc), filiale marocaine du **Groupe DOGA France** (fondé en 1946, 100 salariés en France, 25 M€ de CA, réseau de 50 usines partenaires dans le monde, certifié **ISO 9001** depuis 1996).
* **Périmètre d'intervention :** DOGA FZ (14 collaborateurs au Maroc) est spécialisée dans la distribution technique et l'accompagnement en équipements industriels de pointe sur 5 départements techniques : **Assemblage** (visseuses asservies, mesure de couple, rivetage), **Usinage** (outils coupants, attachements), **Traitement de surface** (pistolets peinture/colle, ponceuses, meuleuses), **Métrologie** (mesure dimensionnelle, rugosité, contrôle optique 3D) et **Plasturgie**.
* **Problématique Globale :** Une gestion interne historiquement reposant sur des tableurs dispersés et des processus manuels, entraînant une absence de visibilité consolidée sur la performance qualité technique des départements et une perte d'information lors des remontées terrain des ingénieurs commerciaux.

#### Réalisation 1 : Application Web de Reporting Départemental (V2)
* **Conception & Développement Full-Stack :** Création d'une application web autonome (Python / **Flask 3.1.1** / **SQLAlchemy 2.0.41** / SQLite / **OpenPyXL 3.1.5** / HTML5-CSS3-JS).
* **Formulaires Adaptatifs par Métier :** Interface générant dynamiquement des champs d'évaluation techniques spécifiques à chacun des 5 départements industriels :
  * *Assemblage :* Suivi des types d'assemblage, pièces montées, nombre de défauts, temps de cycle, retouches, état des visseuses asservies, besoins en formation.
  * *Enlèvement de matière :* Suivi des matières usinées, pièces produites, rebuts, non-conformités dimensionnelles, usure des outils coupants, fréquence des pannes.
  * *Peinture & Colle :* Consommation moyenne de produit par pièce, défauts d'aspect, problèmes d'adhérence, conditions environnementales (hygrométrie/température).
  * *Métrologie :* Types de mesure, non-conformités détectées, précision de l'instrumentation, date de dernière calibration des bancs.
  * *Plasturgie :* Conformité aspect et dimensionnelle, maîtrise des paramètres d'injection, refroidissement et outillages.
* **Moteur de Calcul de KPIs Qualité & Management Visuel :**
  * Calcul en temps réel lors de la saisie des taux de défauts, taux de rebut, taux de retouche et précision métrologique.
  * *Codage couleur automatique :* Seuil de danger rouge ($>10\%$ de défauts), seuil d'alerte orange ($>5\%$), seuil de conformité vert ($\le 5\%$).
* **Fonctionnalités Avancées :** Sauvegarde automatique dans le navigateur (`localStorage`) toutes les 30 secondes (anti-perte de données), restauration de session, API REST, et **génération automatisée de rapports Excel professionnels** (mise en page stylisée, en-têtes bleus corporatifs, cellules de KPIs colorées, exports individuels ou consolidés multi-départements).

#### Réalisation 2 : Application Web de Reporting Terrain par Audio (IA & NLP)
* **Objectif :** Révolutionner la remontée d'information des ingénieurs technico-commerciaux en itinérance dans les usines clientes (automobile, aéronautique).
* **Architecture & Pipeline IA (OpenAI API) :**
  1. *Acquisition :* Upload d'enregistrements vocaux terrain (formats WAV, MP3, M4A, OGG, FLAC) via une interface web responsive (drag-and-drop, barre de progression).
  2. *Transcription Vocale (ASR) :* Intégration du modèle **OpenAI Whisper (`whisper-1`)** pour une retranscription fidèle du discours technique en français.
  3. *Extraction Structurée par NLP :* Interrogation du modèle **GPT-3.5-Turbo** avec un prompt système rigoureux pour extraire un JSON normalisé contenant 17 champs techniques : nom du client, secteur, processus de fabrication, matières premières, inventaire et état du parc machines, capacités de production, **défis techniques et goulots d'étranglement**, opportunités d'amélioration et besoins en nouveaux équipements.
  4. *Génération de Livrable :* Remplissage automatique d'un modèle de compte-rendu de visite structuré en 4 parties (Infos générales, Processus & Équipements, Analyse des besoins & Proposition de valeur, Observations).

#### Réalisation 3 : Structuration du Pilotage Commercial & Organisation Qualité
* **Framework de Pilotage KPI :** Définition d'un tableau de bord de 15+ indicateurs clés distincts pour les équipes sédentaires (taux de conversion appels $\rightarrow$ RDV, temps de traitement, devis émis) et itinérantes (coût par visite, durée du cycle de vente, conversion visites $\rightarrow$ commandes, CAC, ROI). Recommandation d'interconnexion entre l'ERP **Odoo** (déjà en place) et des outils BI (**Power BI** / Qlik).
* **Plan de Déploiement en 4 Phases :** Audit de l'existant $\rightarrow$ Définition des KPIs $\rightarrow$ Sélection des outils $\rightarrow$ Déploiement et conduite du changement.
* **Procédures Organisationnelles (Contexte ISO 9001) :**
  * *Classification Documentaire :* Conception d'une arborescence normalisée (`Documents_Entreprise/Procédures_Processus`, etc.) associée à une convention de nommage stricte (`AAAA-MM-JJ_TypeDocument_Sujet_Version.ext`), une politique de gestion des versions et de sauvegarde.
  * *Procédure d'Intégration (Onboarding) :* Formalisation d'un parcours d'intégration en 4 phases (Pré-boarding, J1, S1/M1, suivi 3/6 mois) personnalisé selon les spécificités techniques de chaque département (formation au catalogue outillage, formation Odoo).
  * *Veille & Innovation :* Test et rédaction d'un guide d'optimisation de **Microsoft Copilot** pour la synthèse de réunions techniques et la simulation de gestion de non-conformités.
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * DOGA FZ fournit directement des outils d'assemblage critique (visseuses asservies avec contrôle de couple et d'angle) pour l'aéronautique. Comprendre le fonctionnement de ces équipements et digitaliser leur suivi est une compétence directe en **ingénierie d'assemblage aérospatial**.
  * La capacité à développer des applications métiers autonomes (Python/Flask) pour automatiser les tâches sans valeur ajoutée est un atout majeur pour mener des projets de **digitalisation 4.0** en bureau des méthodes ou en direction industrielle.

---

## 2. PROJETS D'INGÉNIERIE MÉCANIQUE, SIMULATION & ÉCO-CONCEPTION

### 2.1. Éco-conception & Analyse de Cycle de Vie (ACV) – Projet COPA
* **Contexte & Objectif :** Projet d'ingénierie environnementale (COPA) visant à analyser et réduire l'empreinte écologique de produits industriels par la méthodologie normalisée d'**Analyse de Cycle de Vie (ACV)** et le désassemblage mécanique rigoureux.
* **Support d'Étude :** Trottinette électrique urbaine *WISPEED T855* (cycle de vie de référence : 4 ans, utilisation en France) et étude d'une pièce technique mécanique mondiale.
* **Méthodologie de Désassemblage & Nomenclature :**
  * Réalisation du démontage complet de la trottinette en atelier (génération d'un dossier de désassemblage exhaustif de 70 Mo et 16 pages).
  * Identification pièce par pièce de la nomenclature (BOM), caractérisation des matériaux (alliages d'aluminium, acier, polymères, cellules Li-ion) et des procédés de fabrication associés (extrusion, emboutissage, moulage par injection).
* **Simulation & Éco-Audit via Ansys Granta EduPack :**
  * Modélisation de l'ensemble du cycle de vie (Matières premières, Fabrication, Transport, Utilisation électrique, Élimination et Fin de vie) dans le module *Eco Audit* d'**Ansys Granta EduPack**.
  * **Résultats Quantifiés (Trottinette complète sur 4 ans) :**
    * ⚡ **Consommation d'Énergie Totale :** **2 950 MJ** (soit une charge annuelle de 737 MJ/an).
    * 🌍 **Empreinte Carbone Totale :** **209 kg CO₂-eq** sur l'ensemble du cycle.
  * **Analyse critique de la répartition des impacts :**
    * La phase de **Fabrication / Procédés** est de loin le poste le plus impactant : elle représente **51,6 % de l'énergie totale** et **57,7 % des émissions de CO₂**.
    * Les **Matières premières** constituent le second poste majeur : **39,7 % de l'énergie et du CO₂**.
    * La phase d'utilisation (recharge électrique sur le mix français décarboné) et le transport ont un impact minoritaire (< 9 %).
* **Optimisation & Stratégie de Fin de Vie :**
  * Mise en évidence d'un **potentiel de récupération énergétique et carbone massif** en fin de vie grâce au recyclage des alliages métalliques et des batteries : économie potentielle de **-696 MJ d'énergie** et **-55,9 kg CO₂-eq**.
  * Recommandations d'éco-conception : substitution de matériaux par des alliages à plus fort taux de recyclé, conception orientée pour le démontage rapide (Design for Disassembly - DfD) afin de faciliter le tri en fin de vie.
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * L'aviation civile est engagée dans une transition écologique radicale (objectif **Net Zero 2050**, initiatives **Clean Aviation** et ACARE).
  * L'éco-conception, le choix des matériaux par sélection multicritère sur **Ansys Granta**, l'Analyse de Cycle de Vie (ACV) des structures aéronautiques et la recyclabilité des composites et alliages sont au cœur des cahiers des charges des futurs aéronefs.

---

### 2.2. Conception Avancée – Véhicule à Assistance Électrique (VAE)
* **Contexte & Objectif :** Projet de conception mécanique et de modélisation système d'un Véhicule à Assistance Électrique (VAE), mené en équipe dans le cadre du module de Conception Avancée.
* **Périmètre & Dimensionnement :**
  * Cahier des charges : motorisation d'assistance électrique nominale de **140 W** pour une fréquence de pédalage de référence de **1,1 Hz** (cadence nominale).
  * Réalisation de l'étude **DFVAE (Dynamique et Fonctionnement du VAE)** : analyse cinématique et dynamique des efforts appliqués sur le véhicule en mouvement.
* **Modélisation Multi-Physique de la Chaîne de Traction :**
  * Établissement de l'équation fondamentale de la dynamique longitudinale prenant en compte : la résistance au roulement (pneumatiques/chaussée), la traînée aérodynamique ($F_a = \frac{1}{2} \rho S C_x v^2$), l'effort de gravité en rampe et l'inertie des masses tournantes.
  * Dimensionnement du couplage électromécanique : sélection du moteur électrique, calcul du rapport de réduction mécanique, modélisation des courbes couple-vitesse et évaluation de l'autonomie énergétique globale de la batterie Li-ion.
* **Livrables :** Soutenance technique devant jury et rédaction d'un rapport final de conception justifiant les choix d'architecture mécanique et électrique.
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * La méthodologie de modélisation longitudinale d'un véhicule électrique est strictement identique à celle utilisée pour le dimensionnement de la **propulsion électrique ou hybride d'un drone (UAV)** ou d'un aéronef à décollage vertical (**eVTOL**).
  * La maîtrise du bilan des efforts, de l'optimisation énergétique et du choix des actionneurs électromécaniques est essentielle en systèmes de propulsion aérospatiale.

---

### 2.3. Analyse Modale de Structures par Éléments Finis (Abaqus FEA)
* **Contexte & Objectif :** Travaux pratiques d'ingénierie mécanique avancée (TP11) dédiés à l'analyse vibratoire et au calcul des modes propres de structures continues par la méthode des Éléments Finis (MEF).
* **Outil & Simulation :** Utilisation du logiciel de calcul de structure de référence industrielle **Abaqus FEA**.
* **Méthodologie & Travail Réalisé :**
  * Modélisation géométrique et discrétisation d'une structure mécanique complexe.
  * *Étude de convergence de maillage :* analyse de l'influence du type d'élément (éléments finis linéaires vs quadratiques, 2D/3D) et de la densité du maillage sur la précision des résultats numériques.
  * Configuration et résolution de l'équation aux valeurs propres $[K]\{u\} - \omega^2 [M]\{u\} = \{0\}$ (où $[K]$ est la matrice de rigidité et $[M]$ la matrice de masse) pour extraire les **fréquences naturelles de résonance ($\omega_i$)** et les **déformées modales (modes propres)** associées.
  * Post-traitement et interprétation physique des modes de flexion, de torsion et de couplage.
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * L'analyse modale sur **Abaqus** est une compétence **critique en calcul de structure aéronautique**.
  * En conception d'ailes, de fuselages ou d'aubes de turbines, il est impératif de vérifier que les fréquences propres de la structure ne coïncident pas avec les fréquences d'excitation aérodynamiques ou moteurs afin de **prévenir tout risque de résonance destructrice ou de flottement (aeroelastic flutter)**.

---

### 2.4. Équilibrage Dynamique de Machines Tournantes
* **Contexte & Objectif :** Travaux pratiques de mécanique vibratoire appliqués au diagnostic et à l'équilibrage de rotors rigides industriels en rotation rapide.
* **Méthodologie & Travail Réalisé :**
  * Compréhension théorique et expérimentale des phénomènes de balourd statique (désalignement du centre de gravité) et de balourd dynamique (existence d'un couple centrifuge gauche générant des vibrations dynamiques sur les paliers).
  * *Équilibrage sur 1 plan (statique) :* mesure de la vibration et détermination de la masse de correction et de sa position angulaire.
  * *Équilibrage sur 2 plans (dynamique) :* application de la méthode des coefficients d'influence par relevés vibratoires (amplitude et phase via capteurs piézoélectriques et stroboscope) sur banc d'essai.
  * Utilisation de logiciels d'équilibrage pour calculer la matrice de correction et valider la réduction drastique du niveau vibratoire après ajout des masselottes.
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * Les moteurs aéronautiques (turboréacteurs, turbopropulseurs, rotors d'hélicoptères, turbines à gaz et Auxiliary Power Units - APU) tournent à des vitesses de rotation extrêmes (10 000 à 50 000 tr/min).
  * L'**équilibrage dynamique de haute précision** et l'analyse vibratoire des arbres et compresseurs sont indispensables pour garantir l'intégrité mécanique, éviter la fatigue des paliers et assurer la sécurité des vols.

---

## 3. MATHÉMATIQUES APPLIQUÉES, IA & MODÉLISATION NUMÉRIQUE

### 3.1. Optimisation Numérique – Algorithme UZAWA pour SVM (MINA)
* **Contexte & Objectif :** Mini-projet N°3 du module d'excellence **MINA (Méthodes et Ingénierie Numérique Avancée)**. L'objectif était de développer *from scratch* (sans librairie de Machine Learning de haut niveau) un algorithme d'optimisation numérique par point-selle pour résoudre un problème de classification binaire par **Machines à Vecteurs de Support (SVM - Support Vector Machines)** sous contraintes.
* **Formulation Mathématique & Théorie de la Dualité :**
  * Problème primal : recherche de l'hyperplan séparateur optimal maximisant la marge entre deux classes de données, formulé comme la minimisation quadratique de la norme du vecteur normal $\frac{1}{2} ||w||^2$ sous contraintes d'inégalité $y_i(w^T x_i + b) \ge 1$.
  * Introduction du **Lagrangien dual** associé avec les multiplicateurs de Lagrange $\lambda_i \ge 0$ :
    $$\mathcal{L}(w, b, \lambda) = \frac{1}{2} ||w||^2 + \sum_{i=1}^n \lambda_i \big(1 - y_i(w^T x_i + b)\big)$$
* **Implémentation Algorithmique en Python (NumPy) :**
  * Développement d'un script Python autonome de 239 lignes (`UZAWA_sqlt.py`) exploitant **NumPy**, **Pandas** et **Matplotlib**.
  * **Algorithme d'UZAWA (Recherche de Point-Selle) :** Structure itérative imbriquée à deux boucles :
    1. *Boucle interne (Infimum / Minimisation primal) :* Minimisation du Lagrangien par descente de gradient par rapport aux variables primales $(w, b)$ à multiplicateurs $\lambda$ fixés.
    2. *Boucle externe (Supremum / Maximisation dual) :* Maximisation par montée de gradient projeté par rapport aux variables duales $\lambda$, avec **projection géométrique stricte sur l'orthonrant positif** ($\lambda_i = \max(0, \lambda_i + \rho \cdot \nabla_\lambda \mathcal{L})$).
  * *Critère de convergence :* Vérification du respect des conditions de **Karush-Kuhn-Tucker (KKT)** et arrêt sur seuil de tolérance combiné de la norme des variations de paramètres ($||w_{k+1} - w_k|| < \epsilon$).
* **Application Industrielle & Visualisation :**
  * Application de l'algorithme sur un jeu de données industrielles issu de procédés de fabrication additive **WAAM (Wire Arc Additive Manufacturing)** pour classer la qualité de cordons de soudure en fonction des paramètres de dépose.
  * Génération de graphiques avancés affichant : les points de données des deux classes, l'hyperplan séparateur optimal ($H_0$), les hyperplans de marge ($H_+, H_-$), et l'**identification automatique des vecteurs supports** (points où $\lambda_i > 0$).
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * Le procédé **WAAM (fabrication additive arc-fil)** est aujourd'hui massivement étudié et implémenté dans l'aérospatial pour imprimer des pièces de structure de grandes dimensions en alliages de Titane ou d'Aluminium à moindre coût matière.
  * La maîtrise des **mathématiques appliquées de l'optimisation sous contraintes**, de l'algorithmique numérique et des modèles de classification (IA) est une compétence d'excellence pour l'ingénierie des trajectoires spatiales, l'optimisation topologique de structures et la maintenance prédictive des flottes aériennes.

---

### 3.2. Plans d'Expériences Taguchi & ANOVA – Optimisation Qualité
* **Contexte & Objectif :** Travaux pratiques d'ingénierie de la qualité et d'optimisation statistique des procédés (TP2 Taguchi / ANOVA).
* **Méthodologie & Travail Réalisé :**
  * **Plans d'Expériences (Design of Experiments - DoE) :** Utilisation de la méthodologie de **Taguchi** pour réduire drastiquement le nombre d'essais nécessaires lors de la caractérisation d'un procédé industriel multidimensionnel. Mise en œuvre de **tables orthogonales** standardisées ($L_8, L_9, L_{16}$).
  * *Calcul du ratio Signal sur Bruit (S/N) :* Évaluation de la robustesse du procédé face aux facteurs de bruit (approches « le plus grand est le meilleur » ou « le plus petit est le meilleur »).
  * **Analyse de Variance (ANOVA) :** Modélisation statistique complète sur tableur Excel (`ANOVA_TP2_Taguchi_v3_corrige.xlsx`). Calcul des sommes des carrés (SS), des degrés de liberté (DLL), de la variance (MS) et du **ratio F de Fisher-Snedecor** pour évaluer la significativité statistique de chaque facteur.
  * *Détermination des contributions :* Identification chiffrée du pourcentage de contribution de chaque paramètre machine sur le taux de défaut final et définition du jeu de paramètres optimal.
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * Dans la fabrication de pièces aérospatiales critiques (ex: usinage haute précision de carters moteurs, cuisson en autoclave de composites carbone-époxy, traitements thermiques), il est impossible d'effectuer des essais par essais unitaires intuitifs.
  * La maîtrise des **Plans d'Expériences (Taguchi)** et de l'**ANOVA** (outils piliers du **Six Sigma / Black Belt**) est indispensable pour optimiser les procédés spéciaux, qualifier de nouvelles machines et garantir une qualité Zéro Défaut en production aéronautique.

---

## 4. ÉLECTROTECHNIQUE, AUTOMATIQUE & SYSTÈMES ÉNERGÉTIQUES

### 4.1. Caractérisation de Machine Synchrone à Aimants Permanents (MSAP)
* **Contexte & Objectif :** Travaux pratiques approfondis de conversion électromécanique de l'énergie (TP1 MSAP), dédiés à l'étude expérimentale et théorique d'un moteur synchrone à aimants permanents.
* **Méthodologie & Travail Réalisé :**
  * *Essais à vide (génératrice) :* Mesure de la force électromotrice (FEM) induite en fonction de la vitesse de rotation, vérification de la linéarité et détermination de la constante de FEM ($K_e$).
  * *Essais en charge :* Caractérisation du moteur sous différents régimes de couple et de vitesse. Relevé des puissances électriques absorbées, des courants statoriques et des puissances mécaniques utiles.
  * *Cartographie des performances :* Tracé des courbes de rendement ($\eta$), détermination des pertes fer, pertes mécaniques et pertes par effet Joule statorique. Analyse du comportement vectoriel (diagramme de Fresnel, réactance synchrone $L_s$).
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * Les **Machines Synchrones à Aimants Permanents (MSAP / PMSM)** représentent le cœur technologique de l'aviation de demain et du concept **More Electric Aircraft (MEA)**.
  * Grâce à leur densité massique et volumique de puissance exceptionnelle et leur rendement supérieur à 95 %, les MSAP sont systématiquement choisies pour les actionneurs électromécaniques de commandes de vol (**EMA / EHA**), la propulsion des drones et les moteurs de traction des **aéronefs à décollage vertical (eVTOL)**.

---

### 4.2. Modélisation Multi-Physique de la Chaîne de Traction d'un Véhicule Électrique
* **Contexte & Objectif :** Projet de modélisation et simulation des systèmes énergétiques en automatique et électrotechnique, visant à concevoir un simulateur complet de performance d'un véhicule électrique.
* **Méthodologie & Travail Réalisé :**
  * Modélisation systémique causale de la chaîne de traction complète : Batterie $\rightarrow$ Onduleur/Variateur $\rightarrow$ Moteur électrique $\rightarrow$ Transmission mécanique $\rightarrow$ Roues/Chaussée.
  * Implémentation des équations de charge dynamique du véhicule (résistance aérodynamique, résistance au roulement, effort de pente, accélération inertielle).
  * Simulation sur cycle de conduite standard : calcul des appels de courant batterie, des pertes thermiques dans l'électronique de puissance, de l'évolution du **SOC (State of Charge)** et de la consommation énergétique spécifique (Wh/km).
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * Cette démarche d'ingénierie système multi-physique est transposable à l'identique pour la **simulation de mission et le bilan énergétique d'un drone, d'un satellite ou d'un avion à propulsion hybride-électrique**.
  * Savoir modéliser le couplage entre stockage d'énergie, électronique de puissance et aérodynamique est une compétence clé pour l'innovation en propulsion aérospatiale décarbonée.

---

### 4.3. Conception d'un Système de Recyclage des Eaux Grises (MGWS)
* **Contexte & Objectif :** Projet d'ingénierie environnementale et de conception de systèmes autonomes (Projet Eau), visant à concevoir un **Système Modulaire de Recyclage des Eaux Grises (MGWS - Modular Greywater System)** pour la réutilisation de l'eau en site isolé ou bâtiment éco-responsable.
* **Méthodologie & Travail Réalisé :**
  * *Ingénierie des procédés :* Étude bibliographique et dimensionnement scientifique des filières de traitement (filtration physique, traitement biologique, désinfection UV/chloration) pour atteindre les normes sanitaires de réutilisation.
  * *Instrumentation & Capteurs :* Sélection et intégration d'une chaîne de capteurs intelligents (mesure de turbidité, pH-mètre, capteurs de débit, sondes de niveau et de température) pour le pilotage automatique du cycle.
  * *Énergie & Supervision à distance :* Dimensionnement d'une alimentation énergétique autonome et conception d'une architecture de télésurveillance permettant le monitoring en temps réel de la qualité d'eau et des alertes de maintenance à distance.
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * Le recyclage en boucle fermée de l'eau et le monitoring environnemental par multi-capteurs sont le fondement des **systèmes de support-vie et de contrôle environnemental (ECLSS - Environmental Control and Life Support System)** embarqués à bord des stations spatiales (ISS) et des futurs modules habités lunaires ou martiens.

---

## 5. INGÉNIERIE DES DONNÉES & BASES RELATIONNELLES

### 5.1. Conception de la Base de Données Relationnelle OREXA (CAN 2025)
* **Contexte & Objectif :** Projet d'ingénierie des systèmes d'information (CAN 2025) dédié à la modélisation et au développement d'une base de données relationnelle complète sous **Microsoft Access** (`OREXA_BDD_CAN2025.accdb`) pour la gestion d'une organisation technique/événementielle.
* **Méthodologie & Travail Réalisé :**
  * *Modélisation Conceptuelle & Logique :* Élaboration du **Modèle Conceptuel de Données (MCD)** selon la méthode MERISE. Identification des entités, des relations, des cardinalités et des clés primaires/étrangères.
  * *Normalisation :* Application stricte des règles de normalisation (jusqu'à la **3ème Forme Normale - 3NF**) pour éliminer toute redondance de données et garantir l'intégrité référentielle.
  * *Développement sous Access :* Création des tables relationnelles, élaboration de requêtes SQL complexes (jointures, sélections, agrégations, calculs), et conception d'interfaces graphiques (formulaires de saisie ergonomiques et états d'impression).
* **✈️ Valeur Ajoutée & Pertinence Aérospatiale :**
  * La gestion de données techniques massives et parfaitement structurées est le socle du **PLM (Product Lifecycle Management)** et du suivi de configuration en aéronautique.
  * Que ce soit pour la traçabilité des pièces de rechange en maintenance aéronautique (**MRO**) ou la gestion des nomenclatures d'un programme spatial, la maîtrise de la modélisation relationnelle et des requêtes SQL est une compétence primordiale.

---

## 6. SYNTHÈSE DU PROFIL & VALORISATION POUR L'AÉROSPATIAL

Le parcours d'**Ahmed EL HICHO**, élève ingénieur aux **Arts et Métiers ParisTech (ENSAM)** spécialisé en **Expertise Aeronautics & Space (3A)**, se caractérise par une double compétence hautement recherchée par les industriels de l'aéronautique et du spatial :

1. **Une solide expertise en mécanique scientifique et modélisation numérique :**
   * Maîtrise des calculs de structure avancés et de l'analyse vibratoire sur **Abaqus FEA** (prévention du flottement, modes propres).
   * Compétences en conception et dimensionnement sur **CATIA 3DEXPERIENCE** et **SolidWorks**.
   * Maîtrise des mathématiques appliquées et de la programmation d'algorithmes complexes d'optimisation en **Python / NumPy** (résolution d'équations par point-selle UZAWA pour le Machine Learning et la fabrication additive WAAM).
   * Expertise en caractérisation et modélisation des systèmes électromécaniques de pointe (**MSAP**, propulsion électrique, chaîne de traction).

2. **Une maîtrise opérationnelle de l'Industrie 4.0, du Lean Management et de l'Amélioration Continue :**
   * Capacité prouvée à concevoir, développer et déployer des applications industrielles de **digitalisation (MES sur Tulip, systèmes ANDON sur Flask/SQLite)** en environnement de production réel.
   * Maîtrise des normes et architectures de données industrielles (**ISA-95, MESA, SQL**).
   * Expérience terrain en PME industrielle certifiée **ISO 9001 (DOGA FZ)** : création d'applications web full-stack de reporting départemental, intégration de l'IA vocale (OpenAI Whisper / GPT-3.5) pour la remontée terrain, et structuration de tableaux de bord KPI.
   * Maîtrise des outils statistiques de la qualité (**Plans d'expériences Taguchi, ANOVA, 5M/Ishikawa, Poka-Yoke, Kaizen, QRQC**).

3. **Une sensibilité environnementale et des compétences en Éco-conception :**
   * Maîtrise de l'**Analyse de Cycle de Vie (ACV)** et sélection des matériaux sur **Ansys Granta EduPack**, en parfaite adéquation avec les enjeux de décarbonation de l'aviation civile (*Clean Aviation*).

Ce portfolio démontre qu'Ahmed EL HICHO ne se contente pas de connaissances théoriques : il possède une **rigueur pragmatique de terrain**, une capacité d'autonomie en développement informatique (Python, Web, BDD) et une excellente compréhension des enjeux d'assemblage, de qualité et de traçabilité propres à l'industrie aérospatiale. Il est immédiatement opérationnel pour un **Stage de Fin d'Études (SFE)** en bureau d'études, direction industrielle, bureau des méthodes, amélioration continue ou gestion de projets 4.0 dans le secteur aéronautique et spatial.
