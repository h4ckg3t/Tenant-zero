# Orbitale Systèmes

Deux supports de cours d'une journée, même entreprise fictive. Chacun est un seul fichier HTML,
hors ligne, avec la formation intégrée, des missions en cascade et une console animateur chiffrée.

## Tenant Zéro, le poste Orbitale

Sécurité des systèmes d'exploitation et Microsoft Entra ID. Tout se passe dans un poste Windows
simulé, avec un centre d'administration Entra reproduit.

https://h4ckg3t.github.io/Tenant-zero/Tenant_Zero_Poste_Orbitale.html

Le formateur donne aux équipes un lien complété d'un identifiant de suivi. La console animateur
l'affiche tout prêt dans l'onglet Suivi des équipes. Sans cet identifiant, le cours fonctionne
normalement, mais l'avancement de l'équipe n'est pas remonté.

## Boîte Blanche, l'audit du code

Revue de code HTML et JavaScript le matin, Python pour la sécurité l'après-midi. L'équipe d'audit
relit le code du portail Orbitale, puis écrit son propre outil d'enquête sur les journaux de
l'incident.

https://h4ckg3t.github.io/Tenant-zero/Boite_Blanche_Audit_du_Code.html

Ce cours charge un interpréteur Python dans le navigateur (dossier pyodide/, environ 13 Mo),
récupéré seulement au premier lancement d'une mission Python. Une connexion est donc nécessaire à
ce moment-là, même si le reste du cours fonctionne hors ligne.

L'adresse courte https://h4ckg3t.github.io/Tenant-zero/ renvoie vers une page qui propose les deux
cours.

## Pour les étudiants

- Ouvrir le lien reçu dans un navigateur récent (Edge, Chrome ou Firefox), sur un écran d'au moins
  1366 pixels de large.
- Saisir son nom ou celui du binôme à l'écran d'accueil. La session reste sur le poste : on peut
  fermer et rouvrir l'onglet, on retrouve son avancement.
- Touches utiles : B pour passer de la Formation à l'atelier (ou au poste), S pour le sommaire, L
  pour le lexique.
- Le panneau Missions se coche tout seul. Les missions s'ouvrent dans l'ordre.

## Pour le formateur

- La console animateur, les corrections et les notes sont chiffrées dans chaque fichier et
  s'ouvrent avec le code animateur (Ctrl Alt P). Rien de tout cela n'est lisible dans le code
  source.
- Le suivi des équipes de Tenant Zéro passe par une feuille Google Sheets et un script Apps
  Script, à régler dans l'onglet Suivi des équipes de la console. Le guide de mise en place est
  fourni avec le cours, hors de ce dépôt.
- Pour publier une nouvelle version d'un cours : remplacer son fichier HTML sur la branche main,
  l'adresse ne change pas. Le site est reconstruit en une à deux minutes (onglet Actions).

## Contenu du dépôt

| Fichier ou dossier | Rôle |
|---|---|
| Tenant_Zero_Poste_Orbitale.html | Le cours Tenant Zéro, version protégée |
| Boite_Blanche_Audit_du_Code.html | Le cours Boîte Blanche, version protégée |
| pyodide/ | Interpréteur Python de Boîte Blanche (chargé à la demande) |
| index.html | Page d'accueil, renvoie vers les deux cours |
| .nojekyll | Publication des fichiers tels quels par GitHub Pages |

Les sources, les corrigés du formateur et le script de suivi ne sont pas publiés.
