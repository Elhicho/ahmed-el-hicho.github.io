# Portfolio technique — Ahmed EL HICHO

Je suis élève ingénieur Arts et Métiers, en parcours *Aeronautics & Space*. Je m'intéresse aux projets qui relient mécanique, simulation et digitalisation industrielle. Je recherche un stage de fin d'études de février à août 2027.

Ce dossier complète mon CV avec douze réalisations documentées. Je distingue volontairement les expériences en entreprise, les prototypes académiques et les travaux pratiques : un démonstrateur testé à l'école n'est pas présenté comme un outil déployé en production.

## Trois réalisations principales

### 1. MES sur Tulip pour une ligne d'assemblage

**Nature :** projet académique mené par une équipe de trois à l'Evolutive Lean Factory de l'ENSAM Bordeaux.
**Outils :** Tulip, modèle de données relationnel, principes ISA-95.
**Rapport :** [consulter le PDF](assets/reports/P01_Rapport_MES_Tulip.pdf)

La ligne semi-industrielle *X-Manufacturing* sert à assembler des vérins pneumatiques dans un environnement pédagogique. Le projet consistait à remplacer une partie du suivi papier par une interface opérateur et un tableau de bord superviseur.

Avec mon équipe, j'ai contribué à :

- structurer **11 tables relationnelles** pour les ordres de fabrication, les opérations, les opérateurs, les postes, la traçabilité et les défauts ;
- numériser une gamme de **10 opérations**, détaillée en **21 sous-opérations sur 3 postes** ;
- gérer trois variantes de vérins et enregistrer les temps à l'échelle de chaque opération ;
- créer une déclaration de non-conformité et des indicateurs de suivi pour le superviseur.

Le choix important a été de ne pas enregistrer seulement le début et la fin d'un ordre de fabrication. Nous avons horodaté chaque opération afin de pouvoir localiser un temps d'attente ou un goulot. Pendant les essais, j'ai aussi corrigé deux défauts de logique : un déclencheur enregistrait une valeur statique à la place de l'heure courante, et une étape de choix ne créait pas l'enregistrement attendu en sortie.

**Résultat et limite :** le démonstrateur assure le guidage, l'enregistrement et l'affichage des données prévues sur la ligne. Le rapport signale encore des dysfonctionnements résiduels à traiter. Il n'a pas fait l'objet d'un déploiement en usine ni d'une campagne assez longue pour annoncer un gain de productivité ou une baisse mesurée des rebuts.

### 2. Digitalisation du reporting chez DOGA FZ

**Nature :** stage ingénieur en entreprise, juillet 2025, à Tanger Free Zone.
**Outils :** Python, Flask, SQLAlchemy, SQLite, OpenPyXL, API OpenAI.
**Rapport du prototype audio :** [consulter le PDF](assets/reports/P03_Rapport_Reporting_Audio_IA.pdf)

Chez DOGA FZ, j'ai travaillé sur le reporting de cinq départements techniques : assemblage, usinage, traitement de surface, métrologie et plasturgie.

J'ai développé une application Flask avec des formulaires adaptés à chaque activité. Les données sont enregistrées dans une base SQLite, certains indicateurs qualité sont calculés à la saisie et les comptes rendus peuvent être exportés vers Excel. J'ai également préparé un ensemble de **plus de 15 indicateurs** pour le pilotage commercial et technique.

En parallèle, j'ai conçu un **prototype** de compte rendu terrain à partir d'un enregistrement audio. Le flux réalise la transcription avec Whisper, puis organise les informations dans **17 champs métier** avant de produire une trame de visite. L'objectif était de réduire la ressaisie, sans remplacer la validation du technico-commercial.

J'ai enfin proposé une organisation documentaire dans le contexte ISO 9001 et des pistes de connexion avec Odoo et Power BI. Ces deux outils étaient des **recommandations d'intégration** : je ne les présente pas comme des solutions que j'aurais déployées pendant le stage.

**Résultat et limite :** les applications et les supports de pilotage ont été produits pendant le stage. Le prototype audio n'a pas été industrialisé et je ne dispose pas de mesure d'adoption, de temps économisé ou de précision sur un corpus représentatif. Un déploiement réel demanderait notamment des tests utilisateurs, une validation des extractions et un traitement formel de la confidentialité des enregistrements.

### 3. Analyse modale avec Abaqus

**Nature :** travaux pratiques académiques de mécanique des structures.
**Outil :** Abaqus FEA.
**Rapport :** [consulter le PDF](assets/reports/P04_Rapport_Analyse_Modale_Abaqus.pdf)

J'ai construit et discrétisé un modèle de structure, étudié l'influence du type d'élément et de la finesse du maillage, puis résolu le problème aux valeurs propres :

$$[K]\{u\}-\omega^2[M]\{u\}=\{0\}$$

Le post-traitement m'a permis d'identifier et d'interpréter des modes de flexion, de torsion et des modes couplés. L'étude de convergence était essentielle : une fréquence calculée n'est utile que si elle devient suffisamment stable lorsque le maillage évolue. J'ai ensuite comparé les fréquences Abaqus aux mesures d'essai ; les écarts du rapport sont d'environ **1,1 à 7,2 %** selon le mode étudié.

**Résultat et limite :** la comparaison à l'essai donne un premier contrôle du modèle sur la structure étudiée. Le travail ne comprend toutefois pas d'analyse aéroélastique. Il permet d'identifier des fréquences propres et des formes modales, mais ne démontre à lui seul ni le flottement, ni la durée de vie en fatigue, ni la tenue d'une structure aéronautique réelle.

## Autres projets académiques

### 4. ANDON digital et suivi des alertes

**Outils :** Flask, SQLite, HTML/CSS/JavaScript, Streamlit, Pandas.
**Rapport :** [consulter le PDF](assets/reports/P02_Rapport_Andon_Digital.pdf)

Pour une ligne pédagogique Karakuri à trois postes, j'ai participé à la réalisation d'un prototype ANDON. L'application suit chaque alerte dans quatre états : `OPEN`, `ACK`, `ARRIVED` et `CLOSED`. La base conserve le poste, le type d'alerte, la priorité, les horodatages, la cause 5M et l'action corrective.

Les calculs distinguent clairement le **délai moyen de prise en compte**, le **délai moyen d'arrivée au poste** et le **temps moyen de résolution (MTTR)**. La clôture demande une cause 5M et une action corrective, afin de garder une trace exploitable lors d'une revue QRQC.

**Limite :** les scénarios ont été simulés ; les seuils de priorité et de délai sont des paramètres du démonstrateur, pas des niveaux de service mesurés en usine. L'instrumentation et l'industrialisation matérielle faisaient partie des suites envisagées. Le prototype n'est pas présenté comme un système de production qualifié.

### 5. Optimisation d'un SVM par l'algorithme d'Uzawa

**Outils :** Python, NumPy, Pandas, Matplotlib.
**Rapport :** [consulter le PDF](assets/reports/P05_Rapport_Optimisation_SVM_Uzawa.pdf)

Dans le cadre du module MINA, j'ai programmé un algorithme d'Uzawa pour résoudre un problème de classification binaire sous contraintes. L'implémentation alterne une descente sur les variables primales et une montée projetée sur les multiplicateurs de Lagrange. La projection est réalisée dans l'**orthant positif** :

$$\lambda_i \leftarrow \max(0,\lambda_i+\rho\,\nabla_{\lambda_i}\mathcal{L})$$

J'ai visualisé l'hyperplan, les marges et les vecteurs supports sur des données liées au procédé WAAM. Le classifieur obtenu sépare tous les points du jeu utilisé pendant le TP.

**Limite :** il s'agit d'une implémentation pédagogique et d'un jeu de données d'étude. Le modèle n'a pas été qualifié sur une base industrielle indépendante et ne constitue pas un outil de décision en production.

### 6. Éco-audit et scénarios d'éco-conception

**Outil :** Ansys Granta EduPack, module Eco Audit.
**Rapport :** [consulter le PDF](assets/reports/P06_Rapport_Ecoconception_ACV.pdf)

J'ai participé au démontage d'une trottinette WISPEED T855, à la construction de sa nomenclature et à l'identification des matériaux et procédés. Le modèle couvre les matières premières, la fabrication, le transport, l'utilisation et la fin de vie.

L'état initial obtient dans le rapport une **réparabilité de 3,7/10**, une **recyclabilité de 85,8 %** et une empreinte modélisée de **376 kg CO₂-éq par produit**. Le scénario qui combine les pistes d'éco-conception réduit cet indicateur de **58 %** par rapport à la référence du modèle.

**Limite :** les résultats dépendent de la nomenclature, de la durée de vie, du mix électrique et des hypothèses de fin de vie. Ils permettent de comparer des scénarios, pas de certifier l'empreinte réelle de chaque trottinette.

### 7. Équilibrage d'un rotor

**Nature :** travaux pratiques sur banc d'essai.
**Rapport :** [consulter le PDF](assets/reports/P07_Rapport_Equilibrage_Dynamique.pdf)

J'ai étudié le balourd d'un rotor rigide, d'abord sur un plan puis sur deux plans. Les mesures d'amplitude et de phase, réalisées avec des capteurs et un stroboscope, servent à déterminer la position et la masse des corrections par la méthode des coefficients d'influence.

Après correction sur deux plans, le rapport indique environ **4 mV sur P1** et **0,07 mV sur P2** en une itération.

**Limite :** ces amplitudes caractérisent ce banc, à 40 Hz, avec son instrumentation. Elles ne signifient pas une suppression totale des vibrations et ne peuvent pas être transposées directement à une autre machine.

### 8. Étude énergétique d'un VAE et optimisation d'un disque de frein

**Nature :** projet académique mené en équipe.
**Rapport :** [consulter le PDF](assets/reports/P08_Rapport_Conception_VAE.pdf)

À partir d'un cahier des charges retenant une **puissance cycliste de 140 W** à une fréquence de pédalage de **1,1 Hz**, nous avons établi le bilan énergétique du VAE. Le modèle donne une vitesse de référence d'environ **24,9 km/h**. Une seconde partie du travail dimensionne le freinage à **86,6 N·m** au disque, puis étudie une optimisation topologique sous contraintes mécaniques.

**Limite :** le livrable rassemble des études de calcul. Il ne correspond ni à un véhicule fabriqué et testé sur route, ni à un disque optimisé fabriqué puis validé expérimentalement.

### 9. Modélisation d'une machine synchrone à aimants permanents

**Nature :** travaux pratiques de modélisation électromagnétique.
**Outil :** FEMM.
**Rapport :** [consulter le PDF](assets/reports/P09_Rapport_MSAP_Electrotechnique.pdf)

J'ai construit le modèle électromagnétique de la machine sous FEMM et étudié la répartition du champ. Le traitement des grandeurs triphasées utilise la transformation de Concordia, puis le rapport analyse le couple électromagnétique obtenu pour les configurations étudiées.

**Limite :** il s'agit d'une étude numérique, sans essais à vide ou en charge sur une machine physique. Le rapport ne mesure pas le rendement ; je n'en déduis donc aucune valeur de performance énergétique.

### 10. Modèle de chaîne de traction d'un véhicule électrique

**Nature :** projet académique de modélisation multiphysique.
**Rapport :** [consulter le PDF](assets/reports/P10_Rapport_Chaine_Traction_VE.pdf)

J'ai construit un modèle causal reliant la batterie, le convertisseur, le moteur, le réducteur, la roue et le véhicule. Il formalise les échanges de couple, de vitesse et de puissance entre les sous-systèmes ainsi que les efforts résistants.

**Limite :** il s'agit d'un modèle de simulation, sans validation sur un véhicule instrumenté. Le rapport ne suffit pas à démontrer un suivi du SOC ou une autonomie réelle. La méthode peut être réutilisée dans d'autres domaines, mais ce modèle n'est pas pour autant un modèle de drone, de satellite ou d'aéronef.

### 11. Plans d'expériences Taguchi et ANOVA

**Nature :** travaux pratiques de qualité et de statistique.
**Rapport :** [consulter le PDF](assets/reports/P11_Rapport_Optimisation_Taguchi_ANOVA.pdf)

J'ai utilisé une table orthogonale **L8**, le rapport signal/bruit et une analyse de variance pour estimer l'effet des facteurs du procédé étudié. L'ANOVA identifie l'**avance** comme facteur dominant, avec une contribution calculée de **78,05 %**, et le réglage retenu est **A1B1C1**.

**Limite :** les conclusions restent liées au plan d'expériences et aux données du TP. Elles ne prouvent pas l'absence totale de défauts et ne remplacent pas une validation sur un procédé industriel.

### 12. Base de données relationnelle pour la CAN 2025

**Outils :** Microsoft Access, SQL, méthode MERISE.
**Rapport :** [consulter le PDF](assets/reports/P12_Rapport_BDD_OREXA_SQL.pdf)

J'ai conçu un modèle conceptuel pour gérer équipes, joueurs, stades, matchs et participations, puis défini les relations, cardinalités et clés avant de traduire le modèle dans Access. Le travail comprend la normalisation jusqu'à la troisième forme normale, des requêtes SQL, des formulaires de saisie et des états imprimables.

**Limite :** cette base est un projet académique réalisé avec des données de démonstration. Elle n'a pas fait l'objet de tests de charge, d'un audit de sécurité ou d'une intégration à un PLM industriel.

## Ce que je retiens de ces travaux

Ces projets m'ont surtout appris à passer d'un besoin à un objet testable : modèle de données, application, calcul ou simulation. Mon fil conducteur est la structuration de l'information technique, qu'il s'agisse d'une opération d'assemblage, d'une alerte, d'un résultat de calcul ou d'un indicateur.

Mon objectif dans l'aéronautique et le spatial est d'approfondir trois axes : l'industrialisation et la traçabilité, le calcul de structures, et les outils numériques appliqués à la production. Les réalisations présentées ici constituent une base académique et une première expérience industrielle ; elles ne remplacent pas encore une expérience sur un programme aéronautique certifié.
