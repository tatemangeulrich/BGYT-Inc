/**
 * BGYT Inc™ — Central Data Store & Synchronizer
 * Persists changes in localStorage and synchronizes with Firebase when connected.
 */

const DEFAULT_GAMES = [
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
        storage: "85 Go NVMe SSD"
      },
      rec: {
        cpu: "Intel Core i7-13700K / Ryzen 7 7800X3D",
        gpu: "RTX 4070 Ti Super 16Go / RX 7900 XT",
        ram: "32 Go DDR5 6000MHz",
        storage: "85 Go DirectStorage Gen4 SSD"
      }
    },
    releaseDate: "Disponible dès maintenant (Mise à jour 2.4.1)",
    steamUrl: "https://store.steampowered.com",
    downloadUrl: "#download-center"
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
        storage: "110 Go NVMe SSD"
      },
      rec: {
        cpu: "Intel Core i7-14700K / Ryzen 7 7800X3D",
        gpu: "RTX 4080 16Go / RX 7900 XTX",
        ram: "32 Go DDR5",
        storage: "110 Go Gen4 NVMe SSD"
      }
    },
    releaseDate: "Accès Privé / Sortie Globale 2026",
    steamUrl: "https://store.steampowered.com",
    downloadUrl: "#download-center"
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
        storage: "45 Go SSD"
      },
      rec: {
        cpu: "Intel Core i5-13600K / Ryzen 5 7600X",
        gpu: "RTX 3070 / RX 6700 XT",
        ram: "16 Go DDR4/DDR5",
        storage: "45 Go NVMe SSD"
      }
    },
    releaseDate: "Disponible en eSport",
    steamUrl: "https://store.steampowered.com",
    downloadUrl: "#download-center"
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
        storage: "60 Go SSD"
      },
      rec: {
        cpu: "Intel i7-14700K / Ryzen 7 7800X3D",
        gpu: "RTX 4080 / 4090",
        ram: "32 Go",
        storage: "60 Go NVMe"
      }
    },
    releaseDate: "Alpha fermée Q3 2026",
    downloadUrl: "#download-center"
  }
];

const DEFAULT_NEWS = [
  {
    id: "news-1",
    title: "Lancement du Patch 2.4 : Nouveau District 'Neo-Kyoto' & Équilibrage Cyberware",
    category: "PATCH NOTE",
    date: "18 FÉVRIER 2026",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfHsNlZBPb9Zh4xqqFMia81S8hAflSrH39Fsb1tvWY2wxK_Ma_hMw6iDIqCR_0L4ioBCCQGlgPWNOcRxKc272af17yVcbHcpSYgLntG7OaDtNPTduC_7h9QTBv9CCM3nh34OqVuzAkn2XxZnM0BbMd6r3XoY9IxvhaFZbYi4v1lYAQTwokY84hf8RSdMwLtEDAkH2GU9Y1XOiRcYMF7UNFW4CQ9t1BIKQxtWYw5lhhBGvcBQko36Ls",
    excerpt: "Découvrez l'immense zone urbaine verticale de Neo-Kyoto, l'optimisation des temps de chargement SSD et les 14 nouveaux modules de combat cybernétiques.",
    content: "Découvrez l'immense zone urbaine verticale de Neo-Kyoto, l'optimisation des temps de chargement SSD et les 14 nouveaux modules de combat cybernétiques. Le patch est immédiatement disponible pour tous les joueurs PC et consoles.",
    tags: ["PATCH-NOTES", "CHRONO-NEXUS", "UE5", "UPDATE"],
    author: "Alexandre Roy"
  },
  {
    id: "news-2",
    title: "BGYT Developer Direct 2026 : Présentation de l'Unreal Engine 5.4 NetEngine",
    category: "DEVLOG",
    date: "05 FÉVRIER 2026",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXhgXYJYo0qQ_eEuTm-K-GUZCrznjvOxKHq6ilf7WnChhDVhHgUKLQwm7nz688J027_w_zUthanw-kPBoKPpLLu6Igd5WBKAT3e7jClrsnvCN57jtJC_gAu17s5TtjzwS8ef21SEUe888cczs_0XTvUw47cg_x6Di8uNJHmaTDpazEGHucuY63fNDBi4e3USzjsIBUg6Vkk05wJtkN_iPkar7rmFxhDKbz1uck5v3QZJtwVI1AgdL8",
    excerpt: "Notre équipe R&D dévoile les secrets technologiques derrière notre intégration d'Unreal Engine 5.4 avec notre cluster réseau propriétaire à latence nulle.",
    content: "Dans cette vidéo technique détaillée, notre directrice technique Sarah Rostami explique comment notre architecture hybride élimine les micro-désynchronisations dans les combats à haute cadence.",
    tags: ["DEVLOG", "TECH", "NETCODE", "UNREAL-ENGINE"],
    author: "Sarah Rostami"
  },
  {
    id: "news-3",
    title: "Tournoi Mondial Zero-Grav Invitational : Phase Finale à Séoul",
    category: "COMMUNAUTÉ",
    date: "22 JANVIER 2026",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALRmq62wBEDmBqQlf8xZ1hrxyp6XJgu8OirQU7RwCklrJILHRulWu6uBttDG2kIQkxdYy9F3oPoykzyTubV4gnIAg-sYYe3s2Eans32_-xHSZq3ptlOI-jVBGRRr7WpDo9zaGmxNqCnDX31098xDNCt669O4wj120t2ZEReCNX-32lK3a7HgmXh4bHOZ_czlQxv9bhuEBT5tpUsdore_XrhiKLYOdlXllvde0fS1X-vae_sHQKvC_0",
    excerpt: "Les 16 meilleures équipes mondiales s'affronteront en direct pour un cashprize de 250,000$ lors de la finale du premier tournoi majeur de Zero-Grav.",
    content: "Les phases finales réuniront plus de 15,000 spectateurs dans la métropole sud-coréenne et seront diffusées en simultané sur Twitch et YouTube Gaming.",
    tags: ["ESPORT", "ZERO-GRAV", "COMMUNITY"],
    author: "BGYT Events Team"
  }
];

const DEFAULT_CANDIDATES = [
  {
    id: "cand-1",
    fullName: "Éléonore Chen",
    email: "e.chen@rendercore.io",
    phone: "+33 6 42 18 90 22",
    targetRole: "Senior Gameplay Programmer (C++ / Unreal Engine 5)",
    experienceLevel: "Senior (5 - 8 ans)",
    portfolioUrl: "https://artstation.com/echen",
    githubUrl: "https://github.com/echen-rendercore",
    notes: "Expertise approfondie sur Vulkan et shaders HLSL. A contribué à deux titres AAA.",
    status: "À Réviser",
    submittedAt: "Il y a 2h"
  },
  {
    id: "cand-2",
    fullName: "Marc Van Der Beek",
    email: "m.vanderbeek@concept3d.nl",
    phone: "+31 6 12 34 56 78",
    targetRole: "Lead Environment 3D Artist",
    experienceLevel: "Lead / Principal (8+ ans)",
    portfolioUrl: "https://artstation.com/mvdbeek-concept",
    githubUrl: "",
    notes: "Spécialiste univers cyberpunk & hard surface. Démo reel impressionnante.",
    status: "Entretien Planifié",
    submittedAt: "Hier 16:40"
  },
  {
    id: "cand-3",
    fullName: "Sarah Rostami",
    email: "s.rostami@netdev.org",
    phone: "+33 6 88 77 66 55",
    targetRole: "Backend & Network Systems Engineer (Go / Rust / PostgreSQL)",
    experienceLevel: "Senior (5 - 8 ans)",
    portfolioUrl: "",
    githubUrl: "https://github.com/s-rostami-net",
    notes: "Architecte UDP haute fréquence. Offre transmise et en cours de signature.",
    status: "Validé RH",
    submittedAt: "Il y a 3 jours"
  }
];

const DEFAULT_AUDIT_LOGS = [
  {
    id: "log-1",
    text: "Connexion SuperAdmin IP 192.168.1.1",
    meta: "2FA OK (FIDO2 Token BGYT-KEY-09) • 14:12:08",
    icon: "key",
    color: "text-primary"
  },
  {
    id: "log-2",
    text: "Patch v2.4.1 déployé sur CDN Frankfurt",
    meta: "Checksum SHA256 validé • 13:45:00",
    icon: "cloud_upload",
    color: "text-secondary"
  },
  {
    id: "log-3",
    text: "Sauvegarde PostgreSQL effectuée",
    meta: "Taille: 7.4 GB — Stockage chiffré AES-256 • 12:00:15",
    icon: "database",
    color: "text-primary-fixed-dim"
  }
];

class DataStore {
  constructor() {
    this.gamesKey = "bgyt_games_data";
    this.newsKey = "bgyt_news_data";
    this.candidatesKey = "bgyt_candidates_data";
    this.logsKey = "bgyt_logs_data";
    this.settingsKey = "bgyt_settings_data";
    this.init();
  }

  init() {
    if (!localStorage.getItem(this.gamesKey)) {
      localStorage.setItem(this.gamesKey, JSON.stringify(DEFAULT_GAMES));
    }
    if (!localStorage.getItem(this.newsKey)) {
      localStorage.setItem(this.newsKey, JSON.stringify(DEFAULT_NEWS));
    }
    if (!localStorage.getItem(this.candidatesKey)) {
      localStorage.setItem(this.candidatesKey, JSON.stringify(DEFAULT_CANDIDATES));
    }
    if (!localStorage.getItem(this.logsKey)) {
      localStorage.setItem(this.logsKey, JSON.stringify(DEFAULT_AUDIT_LOGS));
    }
    if (!localStorage.getItem(this.settingsKey)) {
      localStorage.setItem(this.settingsKey, JSON.stringify({
        maintenanceMode: false,
        activePlayers: 142890,
        launcherDownloads: 84310,
        pendingCandidates: 38,
        webTraffic: "620,400"
      }));
    }
  }

  getGames() {
    return JSON.parse(localStorage.getItem(this.gamesKey) || "[]");
  }

  saveGames(games) {
    localStorage.setItem(this.gamesKey, JSON.stringify(games));
    window.dispatchEvent(new CustomEvent("bgyt_data_updated", { detail: { type: "games" } }));
  }

  getNews() {
    return JSON.parse(localStorage.getItem(this.newsKey) || "[]");
  }

  saveNews(news) {
    localStorage.setItem(this.newsKey, JSON.stringify(news));
    window.dispatchEvent(new CustomEvent("bgyt_data_updated", { detail: { type: "news" } }));
  }

  addNews(article) {
    const news = this.getNews();
    article.id = "news-" + Date.now();
    news.unshift(article);
    this.saveNews(news);
    this.addLog("Publication de communiqué : " + article.title, "Diffusé sur CDN & portail", "newspaper", "text-primary-container");
    return article;
  }

  getCandidates() {
    return JSON.parse(localStorage.getItem(this.candidatesKey) || "[]");
  }

  addCandidate(cand) {
    const list = this.getCandidates();
    cand.id = "cand-" + Date.now();
    cand.status = "À Réviser";
    cand.submittedAt = "À l'instant";
    list.unshift(cand);
    localStorage.setItem(this.candidatesKey, JSON.stringify(list));
    this.addLog("Nouvelle candidature reçue : " + cand.fullName, cand.targetRole, "badge", "text-secondary");
    window.dispatchEvent(new CustomEvent("bgyt_data_updated", { detail: { type: "candidates" } }));
    return cand;
  }

  updateCandidateStatus(id, newStatus) {
    const list = this.getCandidates();
    const item = list.find(c => c.id === id);
    if (item) {
      item.status = newStatus;
      localStorage.setItem(this.candidatesKey, JSON.stringify(list));
      this.addLog(`Statut candidature mis à jour : ${item.fullName} -> ${newStatus}`, "Action RH", "edit", "text-primary");
      window.dispatchEvent(new CustomEvent("bgyt_data_updated", { detail: { type: "candidates" } }));
    }
  }

  getLogs() {
    return JSON.parse(localStorage.getItem(this.logsKey) || "[]");
  }

  addLog(text, meta, icon = "info", color = "text-primary") {
    const logs = this.getLogs();
    logs.unshift({
      id: "log-" + Date.now(),
      text,
      meta: meta + " • " + new Date().toLocaleTimeString(),
      icon,
      color
    });
    localStorage.setItem(this.logsKey, JSON.stringify(logs.slice(0, 30)));
    window.dispatchEvent(new CustomEvent("bgyt_data_updated", { detail: { type: "logs" } }));
  }

  getSettings() {
    return JSON.parse(localStorage.getItem(this.settingsKey) || "{}");
  }

  updateSettings(newSettings) {
    const current = this.getSettings();
    const updated = { ...current, ...newSettings };
    localStorage.setItem(this.settingsKey, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("bgyt_data_updated", { detail: { type: "settings" } }));
  }
}

window.bgytData = new DataStore();
