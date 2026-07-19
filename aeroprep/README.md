# AeroPrep Ahmed

Application personnelle de révision et de préparation aux entretiens, publiée dans le sous-dossier `aeroprep/` du portfolio.

## Identification

La première visite crée un compte local sur l’appareil. Le mot de passe est dérivé avec PBKDF2-SHA-256 (210 000 itérations et sel aléatoire) et n’est jamais stocké en clair. Cinq erreurs consécutives déclenchent un verrouillage temporaire.

GitHub Pages étant un hébergement statique public, cette identification constitue une barrière locale et non une protection serveur des fichiers sources.

## Contenu

- profil, pitchs et 17 fiches projets ;
- 115 notions et abréviations ;
- neuf parties d’introduction à l’aéronautique avec tests ;
- quiz quotidien ;
- simulateur d’entretien ;
- progression sauvegardée localement.

Le contenu principal est compressé en plusieurs fragments afin de conserver une publication autonome sans dépendances externes.
