import { Game, ApplicationItem, NewsArticle, TeamMember, CandidateApplication, AuditLog, SiteSettings } from "./types";

export const initialGames: Game[] = [
  {
    id: "chrono-nexus",
    title: "Chrono-Nexus: 2088",
    category: "pc-console",
    badge: "FLAGSHIP TRIPLE-A",
    genre: "Action-RPG Spatial & Cybernétique",
    version: "v2.4.1 (Main-Prod)",
    status: "PRODUCTION LIVE",
    ping: "EU-FRA (14ms)",
    description: "Plongez dans les mégastructures temporelles du Neo-Tokyo 2088. Manipulez les failles chronologiques, personnalisez votre exosquelette modulaire et affrontez des factions autonomes régies par une IA émergente.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXhgXYJYo0qQ_eEuTm-K-GUZCrznjvOxKHq6ilf7WnChhDVhHgUKLQwm7nz688J027_w_zUthanw-kPBoKPpLLu6Igd5WBKAT3e7jClrsnvCN57jtJC_gAu17s5TtjzwS8ef21SEUe888cczs_0XTvUw47cg_x6Di8uNJHmaTDpazEGHucuY63fNDBi4e3USzjsIBUg6Vkk05wJtkN_iPkar7rmFxhDKbz1uck5v3QZJtwVI1AgdL8",
    features: [
      "Personnalisation exo-châssis modulaire à 100+ nœuds",
      "Multijoueur coopératif dynamique à 4 opérateurs sans latence",
      "Moteur graphique Unreal Engine 5.4 avec Lumen & Nanite temps-réel",
      "Combats verticaux avec propulsion gravitationnelle et distorsions temporelles"
    ],
    specs: {
      min: {
        cpu: "Intel Core i5-10400F / Ryzen 5 3600",
        gpu: "RTX 2060 6Go / RX 5600 XT",
        ram: "16 Go DDR4",
        storage: "85 Go NVMe SSD",
      },
      rec: {
        cpu: "Intel Core i7-13700K / Ryzen 7 7800X3D",
        gpu: "RTX 4070 Ti Super 16Go / RX 7900 XT",
        ram: "32 Go DDR5 6000MHz",
        storage: "85 Go DirectStorage Gen4 SSD",
      },
    },
    releaseDate: "Disponible dès maintenant (Mise à jour 2.4.1)",
    steamUrl: "https://store.steampowered.com",
    downloadUrl: "#",
  },
  {
    id: "aetheria",
    title: "Aetheria: Shattered Realms",
    category: "pc-console",
    badge: "FANTASY-TECH MMORPG",
    genre: "Tactical Cyber-MMORPG Persistant",
    version: "v0.8.2 (Beta-Nightly)",
    status: "BETA PRIVÉE",
    ping: "US-EST (32ms)",
    description: "Un monde hybride où la magie runique rencontre les circuits quantiques. Explorez des îles célestes en lévitation, construisez des citadelles de guilde et participez à des guerres de siège à 500 joueurs simultanés.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHYRH8Fwo8tjA94xKaFU9WqgyN53aNQtVHD5_p-tdX9zqfQFM4JMCGzAjQcf_IzlUd_nVOZibIw4irvtdmPdQDcKlGlqa5X7jNYx4NRZ5abVQQgiuY-eN1Pqa6XQk_j0PLS24uALsTrl4bYfNDAgJE3evRYdNE5nHnXJL3kwNapYyqz0SsJFqgVOGIOld3cvE6eRtiD6qGUojhgOeG_TiF8yViVTlpGR47j7_qu8BDf-8SB4wTX3m9",
    features: [
      "Économie décentralisée pilotée par les guildes et les artisans",
      "Guerres territoriales massives sans zones de chargement",
      "Combats tactiques basés sur la physique et les éléments énergétiques"
    ],
    specs: {
      min: {
        cpu: "Intel Core i5-11400 / Ryzen 5 5600",
        gpu: "RTX 3060 12Go / RX 6600",
        ram: "16 Go DDR4",
        storage: "110 Go NVMe SSD",
      },
      rec: {
        cpu: "Intel Core i7-14700K / Ryzen 7 7800X3D",
        gpu: "RTX 4080 16Go / RX 7900 XTX",
        ram: "32 Go DDR5",
        storage: "110 Go Gen4 NVMe SSD",
      },
    },
    releaseDate: "Accès Privé / Sortie Globale 2026",
    steamUrl: "https://store.steampowered.com",
    downloadUrl: "#",
  },
  {
    id: "zero-grav",
    title: "Zero-Grav: Tactical Breach",
    category: "pc-console",
    badge: "FPS COMPÉTITIF 6V6",
    genre: "Tir tactique en apesanteur 128-Tick",
    version: "v1.9.0 (Staging)",
    status: "PRODUCTION LIVE",
    ping: "EU-FRA (11ms)",
    description: "Le tir tactique compétitif réinventé en gravité zéro. Naviguez dans des stations spatiales industrielles, percez les blindages sous tous les angles tridimensionnels et coordonnez vos brèches à haute vitesse.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALRmq62wBEDmBqQlf8xZ1hrxyp6XJgu8OirQU7RwCklrJILHRulWu6uBttDG2kIQkxdYy9F3oPoykzyTubV4gnIAg-sYYe3s2Eans32_-xHSZq3ptlOI-jVBGRRr7WpDo9zaGmxNqCnDX31098xDNCt669O4wj120t2ZEReCNX-32lK3a7HgmXh4bHOZ_czlQxv9bhuEBT5tpUsdore_XrhiKLYOdlXllvde0fS1X-vae_sHQKvC_0",
    features: [
      "Moteur physique 6DoF avec décompression explosive des sas",
      "Serveurs dédiés 128-Tick alimentés par BGYT NetEngine™",
      "Système de tournois classés et matchmaking anti-smurf"
    ],
    specs: {
      min: {
        cpu: "Intel Core i3-12100 / Ryzen 5 3600",
        gpu: "GTX 1660 Super / RX 580",
        ram: "8 Go RAM",
        storage: "45 Go SSD",
      },
      rec: {
        cpu: "Intel Core i5-13600K / Ryzen 5 7600X",
        gpu: "RTX 3070 / RX 6700 XT",
        ram: "16 Go DDR4/DDR5",
        storage: "45 Go NVMe SSD",
      },
    },
    releaseDate: "Disponible en eSport",
    steamUrl: "https://store.steampowered.com",
    downloadUrl: "#",
  },
  {
    id: "project-singularity",
    title: "Project Singularity: VR/XR",
    category: "vr-xr",
    badge: "EXPÉRIENCE XR FUTURE",
    genre: "Simulation Cybernétique Immersive",
    version: "v0.4.0 (Dev-Prototype)",
    status: "EN DÉVELOPPEMENT",
    ping: "Local Render (90fps)",
    description: "Expérience interactive pionnière combinant suivi oculaire fovéal, retours haptiques complets et rendu spatial photoréaliste pour Meta Quest 3, SteamVR et Apple Vision Pro.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvphxopiYfxLUhbuHrhsUbI8eT2PEtkUpwdpTdupmMx83nX2oZd2OrE82SgP0zE_o2vxsCqWdFffL2WcehCi8AeYC1tR_fxIeuIjalJuL--3AUqbxxmSl5fE5_41cVED1FVHjoJjhg17DXSRSAPOZL4SLT-6zDWjtm8e7mA59YEVENC1paIgc8jY0Us8Arytp4UUSZ8MnKpddU3ZIxVKoq6q0YXFMggOC4R8LRvf4VV9fJncqtPM4v",
    features: [
      "Suivi des mains à 120Hz et reconnaissance gestuelle cyber",
      "Rendu fovéal dynamique optimisé pour les puces mobiles & PCVR",
      "Audio binaural 3D calculé par réflexion acoustique temps réel"
    ],
    specs: {
      min: {
        cpu: "Intel i5-12600K / Ryzen 7 5700X",
        gpu: "RTX 3080 10Go",
        ram: "16 Go",
        storage: "60 Go SSD",
      },
      rec: {
        cpu: "Intel i7-14700K / Ryzen 7 7800X3D",
        gpu: "RTX 4080 / 4090",
        ram: "32 Go",
        storage: "60 Go NVMe",
      },
    },
    releaseDate: "Alpha fermée Q3 2026",
    downloadUrl: "#",
  },
];

export const initialApplications: ApplicationItem[] = [
  {
    id: "netengine",
    title: "BGYT NetEngine™",
    tagline: "Architecture Réseau Ultra-Basse Latence",
    category: "Réseau & Serveurs",
    icon: "Network",
    metrics: "128Hz Tickrate // <12ms Latence Edge",
    description: "Notre architecture client-serveur exclusive intégrant la prédiction des mouvements par intelligence artificielle en périphérie de réseau, garantissant une synchronisation absolue sans désynchronisation compétitive.",
    features: [
      "Rollback netcode optimisé pour les collisions complexes 3D",
      "Serveurs de relais répartis sur 24 datacenters mondiaux",
      "Protection native anti-DDoS multi-térabits"
    ],
  },
  {
    id: "renderstream",
    title: "BGYT RenderStream™",
    tagline: "Pipeline de Cloud Gaming & Rendu Distribué",
    category: "Moteur Graphique",
    icon: "MonitorPlay",
    metrics: "4K 120 FPS // Débit adaptatif AV1",
    description: "Système de streaming à fidélité maximale permettant d'exécuter des graphismes photoréalistes sur n'importe quel terminal connecté sans aucun temps de latence perceptible.",
    features: [
      "Compression sans perte visuelle par encodage matériel NVENC & Intel QuickSync",
      "Support multi-écrans et périphériques VR sans fil",
      "Synchronisation haptique et audio multi-canaux 7.1"
    ],
  },
  {
    id: "sentinel-anticheat",
    title: "BGYT Sentinel Anti-Cheat™",
    tagline: "Protection Intègre & Heuristique IA",
    category: "Cybersécurité",
    icon: "ShieldAlert",
    metrics: "99.98% Précision // 0 Faux-positifs",
    description: "Bouclier de détection comportemental au niveau matériel qui neutralise les tentatives de triche, les injections mémoire et les manipulations réseau en temps réel.",
    features: [
      "Validation cryptographique des exécutables et DLL mémoire",
      "Analyse cinétique des visées et trajectoires par réseau neuronal",
      "Respect strict de la vie privée et conformité RGPD"
    ],
  },
  {
    id: "cloudsync",
    title: "BGYT CloudSync & Social™",
    tagline: "Profil Universel Cross-Platform",
    category: "Services Joueur",
    icon: "CloudCog",
    metrics: "100% Cross-Play // Instantané",
    description: "Backbone unifié permettant de synchroniser les sauvegardes, les inventaires, les amis et les succès instantanément entre PC, PlayStation 5, Xbox et plateformes mobiles.",
    features: [
      "Chiffrement AES-256 de bout en bout des données de profil",
      "Système de matchmaking unifié par compétences (MMR)",
      "Messagerie textuelle et vocale chiffrée intégrée"
    ],
  },
];

export const initialNews: NewsArticle[] = [
  {
    id: "news-1",
    title: "Lancement du Patch 2.4 : Nouveau District 'Neo-Kyoto' & Équilibrage Cyberware",
    category: "PATCH NOTE",
    date: "18 FÉVRIER 2026",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfHsNlZBPb9Zh4xqqFMia81S8hAflSrH39Fsb1tvWY2wxK_Ma_hMw6iDIqCR_0L4ioBCCQGlgPWNOcRxKc272af17yVcbHcpSYgLntG7OaDtNPTduC_7h9QTBv9CCM3nh34OqVuzAkn2XxZnM0BbMd6r3XoY9IxvhaFZbYi4v1lYAQTwokY84hf8RSdMwLtEDAkH2GU9Y1XOiRcYMF7UNFW4CQ9t1BIKQxtWYw5lhhBGvcBQko36Ls",
    excerpt: "Découvrez l'immense zone urbaine verticale de Neo-Kyoto, l'optimisation des temps de chargement SSD et les 14 nouveaux modules de combat cybernétiques.",
    content: `### Patch Note 2.4 — Déploiement Majeur

Nous sommes fiers de déployer la mise à jour 2.4 pour **Chrono-Nexus: 2088**. Ce déploiement apporte des avancées majeures :

- **Nouveau District 'Neo-Kyoto' :** Une mégastructure de 18 niveaux verticaux avec des cycles météorologiques dynamiques et des zones de danger électromagnétique.
- **Optimisation DirectStorage Gen4 :** Réduction des temps de transition de zone de 85%, rendant l'exploration du monde complètement fluide.
- **14 Nouveaux Châssis Cyberware :** Nouveaux modules de surcharge gravitationnelle, boucliers à déphasage et amplificateurs neuro-moteurs.
- **Équilibrage multijoueur :** Ajustement des multiplicateurs de dégâts cinétiques en mode classé 4v4.`,
    tags: ["PATCH-NOTES", "CHRONO-NEXUS", "UE5", "UPDATE"],
    author: "Alexandre Roy",
    lang: "all",
  },
  {
    id: "news-2",
    title: "BGYT Developer Direct 2026 : Présentation de l'Unreal Engine 5.4 NetEngine",
    category: "DEVLOG",
    date: "05 FÉVRIER 2026",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXhgXYJYo0qQ_eEuTm-K-GUZCrznjvOxKHq6ilf7WnChhDVhHgUKLQwm7nz688J027_w_zUthanw-kPBoKPpLLu6Igd5WBKAT3e7jClrsnvCN57jtJC_gAu17s5TtjzwS8ef21SEUe888cczs_0XTvUw47cg_x6Di8uNJHmaTDpazEGHucuY63fNDBi4e3USzjsIBUg6Vkk05wJtkN_iPkar7rmFxhDKbz1uck5v3QZJtwVI1AgdL8",
    excerpt: "Notre équipe R&D dévoile les secrets technologiques derrière notre intégration d'Unreal Engine 5.4 avec notre cluster réseau propriétaire à latence nulle.",
    content: `### Dans les coulisses de l'ingénierie BGYT

Lors de notre récente keynote studio, notre CTO Sarah Rostami a présenté en détail la synergie entre la géométrie virtualisée Nanite et le pipeline de synchronisation temps réel BGYT NetEngine.

Grâce à notre protocole UDP personnalisé avec interpolation prédictive, les sessions multijoueurs garantissent un tickrate constant de 128Hz, éliminant totalement l'effet de 'ghosting' ou de compensation tardive.`,
    tags: ["DEVLOG", "TECH", "NETCODE", "UNREAL-ENGINE"],
    author: "Sarah Rostami",
    lang: "all",
  },
  {
    id: "news-3",
    title: "Tournoi Mondial Zero-Grav Invitational : Phase Finale à Séoul",
    category: "COMMUNAUTÉ",
    date: "22 JANVIER 2026",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALRmq62wBEDmBqQlf8xZ1hrxyp6XJgu8OirQU7RwCklrJILHRulWu6uBttDG2kIQkxdYy9F3oPoykzyTubV4gnIAg-sYYe3s2Eans32_-xHSZq3ptlOI-jVBGRRr7WpDo9zaGmxNqCnDX31098xDNCt669O4wj120t2ZEReCNX-32lK3a7HgmXh4bHOZ_czlQxv9bhuEBT5tpUsdore_XrhiKLYOdlXllvde0fS1X-vae_sHQKvC_0",
    excerpt: "Les 16 meilleures équipes mondiales s'affronteront en direct pour un cashprize de 250,000$ lors de la finale du premier tournoi majeur de Zero-Grav.",
    content: `### La compétition au zénith

Zero-Grav s'impose comme la nouvelle référence de l'eSport tactique tridimensionnel. Les phases finales réuniront plus de 15,000 spectateurs dans la métropole sud-coréenne et seront diffusées en simultané sur Twitch et YouTube Gaming avec overlay télémétrique 3D en direct.`,
    tags: ["ESPORT", "ZERO-GRAV", "COMMUNITY"],
    author: "BGYT Events Team",
    lang: "all",
  },
];

export const initialTeam: TeamMember[] = [
  {
    id: "alexandre-roy",
    name: "Alexandre Roy",
    role: "Fondateur & Studio Director",
    department: "Direction",
    bio: "Pionnier des moteurs graphiques temps réel et vétéran de l'industrie AAA avec plus de 15 ans d'expérience dans la production vidéoludique.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgsz53QDocUc95nOMxlWWYr4aWhJ2dYDsTW7ve_QO2CjY3zZYxffxSnJ0Ss7s7fpo4yMotn3T3ByVU95f17gw6fuon67deENILX4YUt9LPW71RDGL9KdY1ow75xzxF5rd1gz8iLXxhnkqnx3MpZUje55aT4wyOekwFa0npcNAvJVtmT6ky5MHCY6U2aNGrNIX4UA6moQAVQRvqK89x5WUTzqGKh4-ZvDK1QqartT_3EOe42CswPzaU",
    status: "Actif // Bruxelles & Paris",
    socials: { github: "https://github.com", linkedin: "https://linkedin.com" },
  },
  {
    id: "sarah-rostami",
    name: "Sarah Rostami",
    role: "Directrice Technique & Lead Netcode",
    department: "Ingénierie",
    bio: "Experte en architectures réseau distribuées, protocoles UDP faible latence et intégration moteur Unreal Engine / C++.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    status: "Active // Lead NetEngine",
    socials: { github: "https://github.com" },
  },
  {
    id: "marc-vanderbeek",
    name: "Marc Van Der Beek",
    role: "Lead 3D Hard-Surface & Lighting",
    department: "Art & 3D",
    bio: "Spécialiste de la direction artistique futuriste, modélisation procédurale Houdini et éclairage cinématographique Lumen.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    status: "Actif // Studio Amsterdam",
    socials: { artstation: "https://artstation.com" },
  },
  {
    id: "eleonore-chen",
    name: "Éléonore Chen",
    role: "Senior Vulkan & GPU Programmer",
    department: "Ingénierie",
    bio: "Optimisation bas-niveau, compute shaders, raytracing matériel et pipelines graphiques cross-platform.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    status: "Active // Vulkan Core",
    socials: { github: "https://github.com" },
  },
  {
    id: "hugo-dubois",
    name: "Hugo Dubois",
    role: "Directeur Audio & Sound Designer",
    department: "Audio",
    bio: "Compositeur et ingénieur son interactif spécialisé dans la spatialisation 3D Dolby Atmos et l'intégration audio Wwise.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    status: "Actif // Studio Son",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    id: "maya-lindqvist",
    name: "Maya Lindqvist",
    role: "Lead Game Designer & XR Architect",
    department: "Design",
    bio: "Conception de boucles de gameplay systémiques, ergonomie spatiale VR/XR et équilibrage compétitif.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    status: "Active // XR Lab",
    socials: { x: "https://x.com" },
  },
];

export const initialCandidates: CandidateApplication[] = [
  {
    id: "cand-1",
    fullName: "Éléonore Chen",
    email: "e.chen@rendercore.io",
    phone: "+33 6 42 18 90 22",
    targetRole: "Senior Gameplay Programmer (C++ / Unreal Engine 5)",
    experienceLevel: "senior",
    portfolioUrl: "https://artstation.com/echen",
    githubUrl: "https://github.com/echen-rendercore",
    notes: "Expertise approfondie sur Vulkan et shaders HLSL. A contribué à deux titres AAA.",
    status: "À Réviser",
    submittedAt: "Il y a 2 heures",
  },
  {
    id: "cand-2",
    fullName: "Marc Van Der Beek",
    email: "m.vanderbeek@concept3d.nl",
    phone: "+31 6 12 34 56 78",
    targetRole: "Lead Environment 3D Artist",
    experienceLevel: "lead",
    portfolioUrl: "https://artstation.com/mvdbeek-concept",
    notes: "Spécialiste univers cyberpunk & hard surface. Démo reel impressionnante.",
    status: "Entretien Planifié",
    submittedAt: "Hier 16:40",
  },
  {
    id: "cand-3",
    fullName: "Sarah Rostami",
    email: "s.rostami@netdev.org",
    phone: "+33 6 88 77 66 55",
    targetRole: "Backend & Network Systems Engineer (Go / Rust / PostgreSQL)",
    experienceLevel: "senior",
    githubUrl: "https://github.com/s-rostami-net",
    notes: "Architecte UDP haute fréquence. Offre salariale transmise et en signature.",
    status: "Validé RH",
    submittedAt: "Il y a 3 jours",
  },
];

export const initialAuditLogs: AuditLog[] = [
  {
    id: "log-1",
    title: "Connexion SuperAdmin IP 192.168.1.1",
    detail: "2FA OK (FIDO2 Token BGYT-KEY-09) • Session active",
    timestamp: "14:12:08",
    type: "auth",
  },
  {
    id: "log-2",
    title: "Patch v2.4.1 déployé sur CDN Frankfurt",
    detail: "Checksum SHA256 validé • Débit 40 Gbps",
    timestamp: "13:45:00",
    type: "deploy",
  },
  {
    id: "log-3",
    title: "Sauvegarde PostgreSQL effectuée",
    detail: "Taille: 7.4 GB — Stockage chiffré AES-256",
    timestamp: "12:00:15",
    type: "database",
  },
  {
    id: "log-4",
    title: "Synchronisation Cloud Firestore",
    detail: "Cluster EU-Central-01 connecté avec succès",
    timestamp: "11:30:22",
    type: "config",
  },
];

export const initialSiteSettings: SiteSettings = {
  siteName: "BGYT Inc™",
  heroHeadline: "FORGER LE FUTUR DU JEU VIDÉO & DES MONDES CYBERNÉTIQUES",
  heroSubheadline: "BGYT Inc™ est un studio indépendant d'ingénierie vidéoludique dédié à la création d'univers immersifs nouvelle génération, de moteurs graphiques temps réel et d'architectures interactives d'ultra-haute précision.",
  maintenanceMode: false,
  announcementBanner: "PROJET MAÎTRE // UNREAL ENGINE 5.4.3 BUILD #9204-PROD OPÉRATIONNEL",
  announcementActive: true,
  discordMembers: 14250,
  activePlayers: 142890,
  launcherDownloads: 84310,
  contactEmail: "contact@bgyt-inc.com",
};

