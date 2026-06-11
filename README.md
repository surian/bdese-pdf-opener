# BDESE – Ouvrir PDF natif

Extension Chrome qui remplace la visionneuse PDF embarquée du site [bdese.editions-legislatives.fr](https://bdese.editions-legislatives.fr) par l'ouverture directe du fichier dans le lecteur PDF natif du navigateur.

## Problème résolu

Sur la plateforme BDESE d'Éditions Législatives, cliquer sur un document PDF ouvre une modale avec une visionneuse intégrée. Cette visionneuse est limitée et ne permet pas d'utiliser les fonctionnalités du lecteur PDF natif du navigateur.

## Ce que fait l'extension

Lorsque vous cliquez sur le bouton de téléchargement d'un document PDF :

1. L'extension intercepte le clic **avant** que le handler jQuery ne s'exécute
2. Elle vérifie que le document est bien un PDF (via l'icône dans la ligne)
3. Elle ouvre le fichier directement dans un **nouvel onglet** via l'URL de téléchargement direct

Résultat : le PDF s'affiche dans le lecteur natif du navigateur, avec toutes ses fonctionnalités.

## Sites couverts

- `https://bdes.editions-legislatives.fr/*`
- `https://bdese.editions-legislatives.fr/*`

## Installation

### Depuis le Chrome Web Store

> [Installer l'extension](https://chromewebstore.google.com/detail/bdese-%E2%80%93-ouvrir-pdf-natif/nfdkicfhleegghkapfhbcdipnpeagkho)

### Manuellement (mode développeur)

1. Télécharger ou cloner ce dépôt
2. Ouvrir Chrome et aller sur `chrome://extensions`
3. Activer le **Mode développeur** (en haut à droite)
4. Cliquer sur **Charger l'extension non empaquetée**
5. Sélectionner le dossier du projet
