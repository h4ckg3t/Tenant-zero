# Orbitale Systèmes

Des supports de cours autour d'une même entreprise fictive. Chacun est un seul fichier HTML,
avec des missions en cascade et une console animateur chiffrée.

## Tenant Zéro, le poste Orbitale

Sécurité des systèmes d'exploitation et Microsoft Entra ID. Tout se passe dans un poste Windows
simulé, avec un centre d'administration Entra reproduit.

https://h4ckg3t.github.io/Tenant-zero/Tenant_Zero_Poste_Orbitale.html

Le formateur donne aux équipes un lien complété d'un identifiant de suivi. La console animateur
l'affiche tout prêt dans l'onglet Suivi des équipes. Sans cet identifiant, le cours fonctionne
normalement, mais l'avancement de l'équipe n'est pas remonté.

## Projet applicatif cyber

Une journée de projet. Chaque équipe cadre, code, documente et relit une petite application de
sécurité, puis présente son code en démonstration.

https://h4ckg3t.github.io/Tenant-zero/Projet_Applicatif_Cyber.html

## Audit du code, la passerelle d'audit

Une mission de test d'intrusion en boîte noire sur Orbitale : un terminal à gauche, un éditeur à
droite, dix objectifs qui s'enchaînent. À chaque étape, un script Python est laissé sur la
passerelle. Il a l'air correct. L'équipe doit le lire, comprendre ce qu'il fait vraiment et le
corriger.

https://h4ckg3t.github.io/Tenant-zero/Terminal_Pentest_Orbitale.html

La mission s'ouvre aussi dans le poste Tenant Zéro : dossier Audit du code sur le bureau.

Elle charge un interpréteur Python dans le navigateur (dossier pyodide/, environ 13 Mo),
récupéré au premier lancement d'un script. Une connexion est donc nécessaire à ce moment-là.

L'adresse courte https://h4ckg3t.github.io/Tenant-zero/ renvoie vers une page qui propose les
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
- Le suivi des équipes passe par une feuille Google Sheets et un script Apps Script, à régler
  dans la console. Chaque cours a sa propre feuille : Tenant Zéro la sienne, la passerelle
  d'audit la sienne. Les guides de mise en place sont fournis avec les cours, hors de ce dépôt.
- Pour publier une nouvelle version d'un cours : remplacer son fichier HTML sur la branche main,
  l'adresse ne change pas. Le site est reconstruit en une à deux minutes (onglet Actions).

## Contenu du dépôt

| Fichier ou dossier | Rôle |
|---|---|
| Tenant_Zero_Poste_Orbitale.html | Le cours Tenant Zéro, version protégée |
| Projet_Applicatif_Cyber.html | Le sujet du projet applicatif cyber |
| Ligne_de_Front_Defi_Securite.html | Ancienne adresse du même sujet |
| Terminal_Pentest_Orbitale.html | La passerelle d'audit, version protégée |
| pyodide/ | Interpréteur Python de la passerelle d'audit (chargé à la demande) |
| index.html | Page d'accueil, renvoie vers les cours |
| .nojekyll | Publication des fichiers tels quels par GitHub Pages |

Les sources, les corrigés du formateur et le script de suivi ne sont pas publiés.
