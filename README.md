# Tenant Zéro, le poste Orbitale

Support de cours d'une journée : sécurité des systèmes d'exploitation et Microsoft Entra ID.
Tout se passe dans un poste Windows simulé, avec la formation intégrée, des missions en cascade,
une messagerie et un centre d'administration Entra reproduit. Entreprise fictive : Orbitale Systèmes.

## Adresse du cours

https://h4ckg3t.github.io/Tenant-zero/Tenant_Zero_Poste_Orbitale.html

L'adresse courte https://h4ckg3t.github.io/Tenant-zero/ renvoie au même endroit.

Le formateur donne aux équipes un lien complété d'un identifiant de suivi. La console animateur
l'affiche tout prêt dans l'onglet Suivi des équipes. Sans cet identifiant, le cours fonctionne
normalement, mais l'avancement de l'équipe n'est pas remonté.

## Pour les étudiants

- Ouvrir le lien reçu dans un navigateur récent (Edge, Chrome ou Firefox), sur un écran d'au moins
  1366 pixels de large. Un seul fichier, rien à installer.
- Saisir le nom de l'équipe à l'écran de connexion. La session reste sur le poste : on peut fermer
  et rouvrir l'onglet, on retrouve son avancement.
- Premier exercice : la fiche de positionnement, dans l'application Diagnostic du bureau.
  Seize questions, sans note ni classement.
- Touches utiles : B pour passer de la Formation au poste, S pour le sommaire, L pour le lexique.
- Le panneau Missions, à droite, se coche tout seul. Les missions s'ouvrent dans l'ordre.

## Pour le formateur

- La console animateur, les corrections et les notes sont chiffrées dans le fichier et s'ouvrent
  avec le code animateur. Rien de tout cela n'est lisible dans le code source.
- Le suivi des équipes passe par une feuille Google Sheets et un script Apps Script, à régler dans
  l'onglet Suivi des équipes de la console. Le guide de mise en place est fourni avec le cours,
  hors de ce dépôt.
- Pour publier une nouvelle version : remplacer Tenant_Zero_Poste_Orbitale.html sur la branche
  main, l'adresse ne change pas. Le site est reconstruit en une à deux minutes (onglet Actions).

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| Tenant_Zero_Poste_Orbitale.html | Le cours complet, version protégée |
| index.html | Renvoi de l'adresse courte vers le cours |
| .nojekyll | Publication du fichier tel quel par GitHub Pages |

Les sources, le corrigé du formateur et le script de suivi ne sont pas publiés.
