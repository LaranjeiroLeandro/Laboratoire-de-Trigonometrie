# Laboratoire de Trigonométrie

![Laboratoire de Trigonométrie](Laboratoire de Trigonométrie.png)

---

## Aperçu

**Laboratoire de Trigonométrie** est une application pédagogique qui permet d'explorer visuellement les 12 fonctions trigonométriques et hyperboliques à travers leur représentation géométrique sur le cercle unité ou l'hyperbole.

Chaque fonction est animée en temps réel à partir d'un angle (ou paramètre) réglable, accompagnée de sa définition conceptuelle, sa série de Taylor et sa formule d'Euler.

---

## Fonctionnalités

- **Visualisation géométrique** — cercle unité pour les fonctions trigonométriques, hyperbole pour les hyperboliques
- **12 fonctions couvertes** — sin, cos, tan, sec, csc, cot, sinh, cosh, tanh, sech, csch, coth
- **Saisie flexible de l'angle** — curseur, valeur numérique, degrés ou radians (supporte les expressions `π/4`, `2pi`, etc.)
- **Panneau d'information à 3 onglets** par fonction :
  - 💡 **Concept** — explication intuitive en langage naturel
  - **∑ Série de Taylor** — développement en série entière
  - **e Formule d'Euler** — lien avec l'exponentielle complexe
- **Mode sombre / clair** — bascule intégrée
- **Design responsive** — fonctionne sur mobile et desktop

---

## Technologies utilisées

| Outil | Rôle |
|---|---|
| [React 18](https://react.dev) | Interface et état |
| [Tailwind CSS](https://tailwindcss.com) | Style utilitaire |
| [shadcn/ui](https://ui.shadcn.com) | Composants (`Card`, `Slider`) |
| [Lucide React](https://lucide.dev) | Icônes |

---

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/LaranjeiroLeandro/Laboratoire-de-Trigonometrie.git
cd Laboratoire-de-Trigonometrie

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

> **Prérequis** : Node.js 18+, un projet React avec Tailwind CSS et shadcn/ui configurés.

### Composants shadcn/ui requis

```bash
npx shadcn-ui@latest add card slider
```

---

## Utilisation

Copiez le fichier `TangentVisualizer.jsx` dans votre dossier de composants, puis importez-le :

```jsx
import TangentVisualizer from '@/components/TangentVisualizer';

export default function App() {
  return <TangentVisualizer />;
}
```

---

## Structure du code

```
TangentVisualizer.jsx
├── COLORS            — Palette de couleurs par fonction
├── EXPLANATIONS      — Définitions, séries de Taylor et formules d'Euler
├── Composants SVG    — MathFormula, Frac, Sigma, FormulaWrapper
├── TangentVisualizer — Composant principal (état, calculs, rendu)
│   ├── SVG géométrique (cercle / hyperbole)
│   ├── Curseur d'angle
│   ├── Cartes de valeurs numériques
│   └── Panneau d'explication
└── App               — Point d'entrée
```

---

## Fonctions disponibles

### Trigonométriques

| Fonction | Nom complet |
|---|---|
| **sin** | Sinus |
| **cos** | Cosinus |
| **tan** | Tangente |
| **csc** | Cosécante |
| **sec** | Sécante |
| **cot** | Cotangente |

### Hyperboliques

| Fonction | Nom complet |
|---|---|
| **sinh** | Sinus Hyperbolique |
| **cosh** | Cosinus Hyperbolique |
| **tanh** | Tangente Hyperbolique |
| **csch** | Cosécante Hyperbolique |
| **sech** | Sécante Hyperbolique |
| **coth** | Cotangente Hyperbolique |

---

## Licence

MIT — libre d'utilisation, de modification et de distribution.

---

Fait avec ❤️ pour apprendre les maths autrement.
