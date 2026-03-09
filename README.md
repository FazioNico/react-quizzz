# React Quizzz

Application web interactive de **flashcards** pour réviser des concepts clés du développement web. Conçue avec React et Vite, elle propose un système de questions/réponses aléatoires avec un thème clair/sombre.

---

## Description

**React Quizzz** est une application de quiz par flashcards destinée aux étudiants et développeurs souhaitant consolider leurs connaissances en développement web. Les cartes couvrent un large éventail de sujets : Git, Node.js, React, UML, outils de développement, et bien plus.

L'utilisateur lance le quiz, visualise une question, peut afficher la réponse, puis passer à la question suivante — le tout dans une interface épurée et réactive.

---

## Valeur ajoutée

- **Apprentissage actif** — Le format question/réponse stimule la mémorisation à long terme (méthode de répétition espacée).
- **Accès instantané** — Application web déployée sur Firebase, accessible depuis n'importe quel navigateur sans installation.
- **Thème clair / sombre** — Confort visuel adapté à toutes les conditions de lecture.
- **Architecture moderne** — React 19, Vite 7, React Context pour la gestion d'état, JSDoc pour la documentation.
- **Extensible** — Ajoutez facilement de nouvelles flashcards dans un simple fichier JavaScript.
- **Open source** — Libre de contribuer, forker et améliorer.

---

## Technologies

| Outil | Rôle |
|-------|------|
| [React 19](https://react.dev/) | Bibliothèque UI |
| [Vite 7](https://vite.dev/) | Bundler & serveur de développement |
| [Firebase Hosting](https://firebase.google.com/docs/hosting) | Déploiement |
| [ESLint](https://eslint.org/) | Linting |
| [JSDoc](https://jsdoc.app/) | Documentation du code |

---

## Prérequis

- [Node.js](https://nodejs.org/) **v18+**
- [npm](https://www.npmjs.com/) (inclus avec Node.js)
- [Git](https://git-scm.com/)

---

## Installation & Démarrage

```bash
# 1. Cloner le dépôt
git clone https://github.com/nomades/react-quizzz.git
cd react-quizzz

# 2. Installer les dépendances
npm install

# 3. Créer un fichier d'environnement (optionnel)
cp .env.example .env   # puis renseigner les variables si nécessaire

# 4. Lancer le serveur de développement
npm run dev
```

L'application sera disponible sur **http://localhost:5173** par défaut.

### Autres commandes utiles

| Commande | Description |
|----------|-------------|
| `npm run build` | Génère le build de production dans `dist/` |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run doc` | Génère la documentation JSDoc |

---

## Structure du projet

```
react-quizzz/
├── public/              # Fichiers statiques
├── src/
│   ├── App.jsx          # Composant racine
│   ├── CardComponent.jsx # Affichage d'une flashcard
│   ├── QuizContext.jsx  # Contexte React du quiz
│   ├── Theme-hook.jsx   # Contexte et hook du thème
│   ├── flashcards.js    # Données des flashcards
│   ├── utils.js         # Fonctions utilitaires
│   ├── main.jsx         # Point d'entrée
│   └── assets/          # Ressources (images, etc.)
├── firebase.json        # Configuration Firebase Hosting
├── vite.config.js       # Configuration Vite
├── eslint.config.js     # Configuration ESLint
└── package.json
```

---

## Contribution

Les contributions sont les bienvenues ! Voici la marche à suivre :

1. **Forkez** le dépôt.
2. Créez une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature/ma-fonctionnalite
   ```
3. Effectuez vos modifications et commitez :
   ```bash
   git add .
   git commit -m "feat: description courte de la modification"
   ```
4. Poussez votre branche :
   ```bash
   git push origin feature/ma-fonctionnalite
   ```
5. Ouvrez une **Pull Request** sur le dépôt principal.

### Conventions

- Utilisez des messages de commit clairs et descriptifs (convention [Conventional Commits](https://www.conventionalcommits.org/) recommandée).
- Vérifiez le linting avant de soumettre : `npm run lint`.
- Documentez les nouvelles fonctions avec JSDoc.
- Une PR = une fonctionnalité ou un correctif.

---

## Licence

Ce projet est distribué sous la licence **MIT**. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.

```
MIT License

Copyright (c) 2025 Nomades

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une [issue](https://github.com/nomades/react-quizzz/issues) sur le dépôt.
