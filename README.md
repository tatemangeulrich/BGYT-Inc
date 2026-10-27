# BGYT-Inc — Site Web Officiel & Console Core

<div align="center">
  <img src="public/logo.svg" alt="BGYT Inc™ Logo" width="320" />
  <p><strong>BGYT Inc™ — Official Gaming Studio & Cyber Systems</strong></p>
  <p><em>Forger le futur du jeu vidéo & des mondes cybernétiques</em></p>
</div>

---

## 🎮 Présentation du Projet

**BGYT Inc™** est le site officiel d'entreprise et de studio vidéoludique nouvelle génération. Conçu avec l'esthétique **Obsidian Cyber**, il allie la présentation d'univers de jeux vidéo AAA (Unreal Engine 5.4, NetEngine 128Hz), un laboratoire de R&D interactive, un portail de recrutement d'ingénierie et une **console d'administration complète** pour piloter l'intégralité du site sans modifier une seule ligne de code.

---

## ✨ Fonctionnalités Majeures

### 🌐 Public & Joueurs
- **Système Multilingue Intégral :** Français (`FR`), Anglais (`EN`) et Néerlandais (`NL`) avec bascule instantanée sans rechargement.
- **Thèmes Sombre & Clair :** Mode par défaut *Obsidian Cyber* (noir abyssal `#05070B`, cyan néon `#00D2FF`, bleu moteur `#0066FF`, blanc éclatant) avec bascule vers un thème clair futuriste haute lisibilité.
- **Catalogue des Jeux Complet :** Fiches immersives de titres (*Chrono-Nexus: 2088*, *Aetheria: Shattered Realms*, *Zero-Grav: Tactical Breach*, *Project Singularity VR/XR*) avec filtre par catégories, tiroir de spécifications matérielles minimales & recommandées, wishlist Steam et liens vers le Launcher officiel.
- **Centre de Téléchargement Launcher BGYT :** Binaires pour Windows 10/11, macOS (Apple Silicon / Metal) et Linux (AppImage / Vulkan).
- **Inscription Playtest Privé :** Modal interactif avec réservation d'accès pour les alphas/betas fermées sous NDA.
- **Hub Applications & R&D :** Vitrine de nos architectures logicielles propriétaires (*BGYT NetEngine™*, *RenderStream™*, *Sentinel Anti-Cheat™*, *CloudSync™*, *AudioSpatial 3D™*).
- **Transmissions & Devlogs :** Flux d'actualités avec recherche en temps réel, filtres par tags et lecteur d'articles complets.
- **Portail Recrutement & Formulaire d'Ingénierie :** Découverte des postes ouverts avec formulaire complet (dépôt de profil, GitHub, ArtStation, notes techniques) garantissant un retour sous 72 heures.
- **Hub Discord Officiel :** Intégration en direct avec télémétrie des membres en ligne, aperçu des salons et accès direct.
- **Palette de Commande Rapide (Ctrl + K) :** Recherche globale instantanée dans les jeux, patch notes, postes ouverts et équipes.
- **RGPD & Consentement Mises à Jour :** Bannière de consentement pour notifications de nouveaux patchs et respect absolu de la vie privée.

---

### 🛡️ Console Administrateur (`/admin`)
- **Authentification Sécurisée & Google Firebase :** Connexion par Google OAuth 2.0, identifiants administrateur avec jeton FIDO2 ou mode démo direct.
- **Gestion des Rôles & Niveaux d'Accès :** `SuperAdmin`, `Lead Game Director`, `HR Manager`, `Editor`.
- **Gestion des Jeux & Mises à Jour :** Ajout de nouveaux titres, modification des versions de build, clusters de ping et bascule des états opérationnels (*Production Live*, *Beta Privée*, *Maintenance*).
- **Publication de Communiqués & Patch Notes :** Éditeur avec aperçu instantané, sélection de la langue, tags et diffusion immédiate.
- **Gestion des Candidatures RH :** Suivi des dossiers reçus, consultation des portfolios/GitHub, modification de statut (*À réviser*, *Entretien planifié*, *Validé RH*, *Refusé*) et prise de contact en 1 clic.
- **Statistiques & Métriques Live :** Supervision des joueurs connectés, téléchargements du launcher, portée SEO et taux de tickrate.
- **Paramètres du Site sans Code :** Modification du nom du studio, du slogan hero, des textes introductifs et bascule du mode maintenance global.
- **Journal d'Audit en Temps Réel :** Traçabilité cryptographique conforme à la norme ISO/IEC 27001.

---

## 🛠️ Stack Technologique

- **Framework :** [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Bibliothèque UI :** [React 18](https://react.dev/)
- **Langage :** [TypeScript 5](https://www.typescriptlang.org/)
- **Design & Styles :** [Tailwind CSS 3](https://tailwindcss.com/) avec design tokens personnalisés Obsidian Cyber
- **Icônes :** [Lucide React](https://lucide.dev/)
- **Backend & Données :** Architecture hybride avec LocalStorage réactif + intégration Google Firebase (Google Auth & Cloud Firestore)

---

## 🚀 Installation & Lancement Local

### 1. Cloner le projet
\`\`\`bash
git clone https://github.com/tatemangeulrich/BGYT-Inc.git
cd BGYT-Inc
\`\`\`

### 2. Installer les dépendances
\`\`\`bash
npm install
\`\`\`

### 3. Configurer l'environnement (Optionnel)
Pour connecter votre projet Google Firebase réel, créez un fichier \`.env.local\` à la racine :
\`\`\`env
NEXT_PUBLIC_SITE_NAME="BGYT Inc™"
NEXT_PUBLIC_FIREBASE_API_KEY="votre_api_key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="votre_projet.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="votre_projet_id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="votre_projet.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="votre_sender_id"
NEXT_PUBLIC_FIREBASE_APP_ID="votre_app_id"
\`\`\`
*(Si aucune clé Firebase n'est fournie, le site utilise automatiquement le simulateur haute fidélité local sans aucune erreur).*

### 4. Démarrer le serveur de développement
\`\`\`bash
npm run dev
\`\`\`
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 5. Compiler pour la production
\`\`\`bash
npm run build
npm start
\`\`\`

---

## 📂 Architecture des Dossiers

\`\`\`
├── public/                     # Fichiers statiques et logo SVG officiel
│   └── logo.svg
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── a-propos/           # Page À propos de BGYT Inc™
│   │   ├── actualites/         # Page Actualités, patch notes & devlogs
│   │   ├── admin/              # Espace Administrateur complet & sécurisé
│   │   ├── applications/       # Page Nos applications & Labs
│   │   ├── contact/            # Page Contact & Support
│   │   ├── equipe/             # Page Notre équipe
│   │   ├── faq/                # Page FAQ interactive
│   │   ├── jeux/               # Page Nos jeux & spécifications matérielles
│   │   ├── legal/              # Mentions légales & RGPD
│   │   ├── projets/            # Page Nos projets R&D & roadmap
│   │   ├── recrutement/        # Page Recrutement & formulaire de candidature
│   │   ├── globals.css         # Styles globaux & animations cyber
│   │   ├── layout.tsx          # Root Layout avec providers & métadonnées SEO
│   │   ├── page.tsx            # Page d'accueil officielle
│   │   └── providers.tsx       # Providers de langue, thème et données
│   ├── components/             # Composants d'interface modulaires
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── NotificationBanner.tsx
│   │   ├── PlaytestModal.tsx
│   │   └── SearchModal.tsx
│   ├── context/                # Contextes React réactifs
│   │   ├── LanguageContext.tsx # Gestion multilingue FR, EN, NL
│   │   ├── SiteDataContext.tsx # Store réactif jeux, news, candidats, stats
│   │   └── ThemeContext.tsx    # Bascule Dark / Light mode
│   └── lib/                    # Utilitaires & données
│       ├── firebase.ts         # Bridge Firebase Auth & Firestore
│       ├── initialData.ts      # Données initiales conformes aux maquettes
│       ├── translations.ts     # Dictionnaires de traduction complets
│       ├── types.ts            # Définitions TypeScript
│       └── utils.ts            # Helpers
├── maquettes/                  # Maquettes et spécifications d'origine
├── tailwind.config.js          # Configuration des couleurs et polices Obsidian Cyber
└── package.json
\`\`\`

---

## 📜 Licence & Droits

© 2026 BGYT Inc™. Tous droits réservés. BGYT Inc™, Chrono-Nexus: 2088™, Aetheria: Shattered Realms™ et NetEngine™ sont des marques déposées de BGYT Inc.

