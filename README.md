# Pika Pika 🎲

Petit site web pour sélectionner « l’élu(e) » parmi une liste d’élèves.

- Ajout d’élèves (séparés par des virgules)
- Tirage aléatoire avec animations + confettis
- Comptage en temps réel
- Sélecteur de langue (FR/EN/ES/DE/PT) avec routage par URL
- Musique pendant la sélection

## Démo

Ouvrez `index.html` dans votre navigateur.

> Le fichier `index.html` utilise `style.css` et `index.js`.

## Screenshot

![Screenshot](/Images/image.png)

## Fonctionnement

1. Saisissez un ou plusieurs noms dans la zone de texte.
2. Cliquez sur **Ajouter**.
3. Cliquez sur **Pika Pika !** pour lancer le tirage.
4. Les élèves sont mémorisés dans votre navigateur via `localStorage`.

## Projet Next.js (dossier `pika-pika/`)

Ce dépôt contient aussi une version Next.js.

```bash
cd pika-pika
npm install
npm run dev
```

Ouvrez ensuite `http://localhost:3000`.

## Licence

Distribué sous la **licence MIT** (voir `LICENSE`).
