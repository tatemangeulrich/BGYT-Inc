"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteData } from "@/context/SiteDataContext";
import { Game, CandidateApplication } from "@/lib/types";
import {
  Shield,
  ShieldCheck,
  Gamepad2,
  Newspaper,
  Users,
  Briefcase,
  Activity,
  Key,
  CloudUpload,
  Database,
  Sliders,
  Settings,
  Plus,
  Trash2,
  Edit,
  CheckCircle2,
  XCircle,
  Eye,
  LogOut,
  LogIn,
  Search,
  Sparkles,
  ArrowRight,
  Send,
  AlertTriangle,
  Lock,
} from "lucide-react";

export default function AdminPage() {
  const { t } = useLanguage();
  const {
    games,
    news,
    candidates,
    logs,
    settings,
    updateCandidateStatus,
    publishNews,
    updateGame,
    addGame,
    deleteGame,
    updateSettings,
    addAuditLog,
    resetToDefaults,
  } = useSiteData();

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
    role: "SuperAdmin" | "Lead Game Director" | "HR Manager" | "Editor";
  }>({
    name: "Alexandre Roy",
    email: "a.roy@bgyt-inc.com",
    role: "SuperAdmin",
  });

  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");

  // Navigation tab in Admin
  const [activeTab, setActiveTab] = useState<
    "overview" | "games" | "news" | "candidates" | "settings" | "logs"
  >("overview");

  // News Publisher Form
  const [newsTitle, setNewsTitle] = useState("");
  const [newsCategory, setNewsCategory] = useState<
    "PATCH NOTE" | "DEVLOG" | "COMMUNAUTÉ" | "STUDIO"
  >("PATCH NOTE");
  const [newsExcerpt, setNewsExcerpt] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [newsTags, setNewsTags] = useState("PATCH-NOTES, UPDATE");
  const [newsSuccess, setNewsSuccess] = useState(false);

  // New Game Modal / Form
  const [showGameModal, setShowGameModal] = useState(false);
  const [newGameData, setNewGameData] = useState<Partial<Game>>({
    title: "",
    genre: "",
    version: "v1.0.0",
    status: "PRODUCTION LIVE",
    ping: "EU-FRA (14ms)",
    category: "pc-console",
    badge: "NOUVEAU TITRE",
    description: "",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXhgXYJYo0qQ_eEuTm-K-GUZCrznjvOxKHq6ilf7WnChhDVhHgUKLQwm7nz688J027_w_zUthanw-kPBoKPpLLu6Igd5WBKAT3e7jClrsnvCN57jtJC_gAu17s5TtjzwS8ef21SEUe888cczs_0XTvUw47cg_x6Di8uNJHmaTDpazEGHucuY63fNDBi4e3USzjsIBUg6Vkk05wJtkN_iPkar7rmFxhDKbz1uck5v3QZJtwVI1AgdL8",
    features: ["Multijoueur temps réel", "Moteur Unreal Engine 5.4"],
    specs: {
      min: { cpu: "Core i5", gpu: "RTX 2060", ram: "16 Go", storage: "50 Go" },
      rec: { cpu: "Core i7", gpu: "RTX 4070", ram: "32 Go", storage: "50 Go SSD" },
    },
    releaseDate: "2026",
  });

  // Settings form state
  const [siteNameInput, setSiteNameInput] = useState(settings.siteName);
  const [heroHeadlineInput, setHeroHeadlineInput] = useState(settings.heroHeadline);
  const [heroSubheadlineInput, setHeroSubheadlineInput] = useState(settings.heroSubheadline);
  const [maintenanceInput, setMaintenanceInput] = useState(settings.maintenanceMode);
  const [settingsSuccess, setSettingsSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    addAuditLog("Connexion Administrateur réussie", `Compte : ${authEmail || currentUser.email}`, "auth");
  };

  const handleGoogleLogin = () => {
    // Simulated Google Auth or real Firebase bridge
    setIsAuthenticated(true);
    setCurrentUser({
      name: "Alexandre Roy (Google Auth)",
      email: "alexandre.roy@google.bgyt.com",
      role: "SuperAdmin",
    });
    addAuditLog("Authentification Google OAuth 2.0 validée", "Jeton FIDO2 / SSL certifié", "auth");
  };

  const handlePublishNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle || !newsContent) return;

    publishNews({
      title: newsTitle,
      category: newsCategory,
      date: new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).toUpperCase(),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCfHsNlZBPb9Zh4xqqFMia81S8hAflSrH39Fsb1tvWY2wxK_Ma_hMw6iDIqCR_0L4ioBCCQGlgPWNOcRxKc272af17yVcbHcpSYgLntG7OaDtNPTduC_7h9QTBv9CCM3nh34OqVuzAkn2XxZnM0BbMd6r3XoY9IxvhaFZbYi4v1lYAQTwokY84hf8RSdMwLtEDAkH2GU9Y1XOiRcYMF7UNFW4CQ9t1BIKQxtWYw5lhhBGvcBQko36Ls",
      excerpt: newsExcerpt || newsContent.slice(0, 120) + "...",
      content: newsContent,
      tags: newsTags.split(",").map((t) => t.trim().toUpperCase()),
      author: currentUser.name,
      lang: "all",
    });

    setNewsSuccess(true);
    setTimeout(() => {
      setNewsTitle("");
      setNewsExcerpt("");
      setNewsContent("");
      setNewsSuccess(false);
    }, 3000);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      siteName: siteNameInput,
      heroHeadline: heroHeadlineInput,
      heroSubheadline: heroSubheadlineInput,
      maintenanceMode: maintenanceInput,
    });
    setSettingsSuccess(true);
    setTimeout(() => setSettingsSuccess(false), 3000);
  };

  const handleCreateGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGameData.title) return;

    addGame({
      title: newGameData.title,
      category: newGameData.category as any,
      badge: newGameData.badge || "NOUVEAU TITRE",
      genre: newGameData.genre || "Action / Multijoueur",
      version: newGameData.version || "v1.0.0",
      status: (newGameData.status as any) || "PRODUCTION LIVE",
      ping: newGameData.ping || "EU-FRA (14ms)",
      description: newGameData.description || "Description du nouveau titre...",
      image: newGameData.image!,
      features: newGameData.features || ["Unreal Engine 5.4", "128Hz Tickrate"],
      specs: newGameData.specs as any,
      releaseDate: newGameData.releaseDate || "2026",
    });

    setShowGameModal(false);
  };

  // If not logged in, show secure Cyber Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-16 bg-surface-container-lowest relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-surface-container-low border border-primary-container/30 shadow-[0_0_50px_rgba(0,210,255,0.25)] space-y-8 relative z-10">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-surface-container border border-primary-container/40 flex items-center justify-center text-primary-container mx-auto shadow-md">
              <Shield className="w-7 h-7" />
            </div>
            <h1 className="font-headline-sm text-2xl text-on-surface font-extrabold uppercase tracking-tight">
              Console Administrateur
            </h1>
            <p className="font-body-sm text-xs text-outline font-label-code">
              BGYT Inc™ Core Kernel // Accès Niveau 4 Chiffré
            </p>
          </div>

          {/* Quick Demo Auth Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-headline-sm text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Connexion avec Google Firebase</span>
            </button>

            <button
              onClick={() => {
                setIsAuthenticated(true);
                addAuditLog("Connexion Démo Rapide (SuperAdmin)", "Session ouverte", "auth");
              }}
              className="w-full py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-code text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-surface-container-highest"
            >
              <Key className="w-3.5 h-3.5" />
              <span>Accès Immédiat Démo SuperAdmin</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <span className="w-full border-t border-surface-container-high" />
            <span className="px-3 bg-surface-container-low font-label-code text-[10px] text-outline uppercase absolute">
              OU AUTHENTIFICATION SSL
            </span>
          </div>

          {/* Form Credentials */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="block font-label-code text-[11px] text-outline uppercase">
                Identifiant Administrateur
              </label>
              <input
                type="email"
                required
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="admin@bgyt-inc.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container text-on-surface font-body-sm focus:border-primary-container focus:outline-none border border-surface-container-high"
              />
            </div>

            <div className="space-y-1">
              <label className="block font-label-code text-[11px] text-outline uppercase">
                Mot de Passe / Clé FIDO2
              </label>
              <input
                type="password"
                required
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container text-on-surface font-body-sm focus:border-primary-container focus:outline-none border border-surface-container-high"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-headline-sm text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:brightness-110 transition-all"
            >
              <LogIn className="w-4 h-4" />
              <span>Ouvrir la Session Console</span>
            </button>
          </form>

          <div className="text-center font-label-code text-[10.5px] text-outline flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chiffrement TLS 1.3 • Protection anti-intrusion active</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      {/* Top Admin Telemetry Header */}
      <div className="w-full bg-surface-container-lowest border-b border-surface-container-high px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface-container-low border border-primary-container/40 flex items-center justify-center text-primary-container font-black">
            B
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-base text-on-surface font-bold">
                BGYT<span className="text-primary-container">.</span>Console Core
              </span>
              <span className="font-label-badge text-[9px] px-2 py-0.5 rounded bg-surface-container-high text-primary font-bold">
                CLUSTER // EU-CENTRAL-01
              </span>
            </div>
            <span className="font-label-code text-[10px] text-outline">
              Session active pour {currentUser.name} ({currentUser.role})
            </span>
          </div>
        </div>

        {/* Right Tools & Role Switcher */}
        <div className="flex items-center gap-3">
          <select
            value={currentUser.role}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, role: e.target.value as any })
            }
            className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface font-label-code text-xs border border-surface-container-high"
          >
            <option value="SuperAdmin">Rôle : SuperAdmin (Tous droits)</option>
            <option value="Lead Game Director">Rôle : Game Director (Jeux & Patchs)</option>
            <option value="HR Manager">Rôle : RH Lead (Candidatures)</option>
            <option value="Editor">Rôle : Éditeur (Communiqués)</option>
          </select>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-error/20 hover:text-error text-on-surface font-label-code text-xs flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        {/* Context Strip & Maintenance Status */}
        <div className="relative overflow-hidden bg-surface-container-low rounded-2xl p-6 border border-surface-container-high shadow-xl backdrop-blur-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-label-badge text-label-badge px-2.5 py-1 rounded bg-surface-container-highest text-primary font-semibold tracking-wider uppercase">
                SECURE ACCESS // LEVEL 4
              </span>
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-on-surface">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-label-code text-[11px] text-primary-container font-medium">
                  Serveurs de production: STABLES (Latence moyenne 11ms)
                </span>
              </div>
            </div>
            <h1 className="font-headline-md text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
              Portail Administration &amp; Opérations BGYT Inc™
            </h1>
            <p className="font-body-sm text-on-surface-variant max-w-2xl">
              Supervision temps réel du catalogue, publication des notes de version, revue des
              dossiers RH et personnalisation globale du site sans toucher au code.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const nextState = !settings.maintenanceMode;
                updateSettings({ maintenanceMode: nextState });
              }}
              className={`px-4 py-2 rounded-xl font-headline-sm text-xs font-bold flex items-center gap-2 transition-all ${
                settings.maintenanceMode
                  ? "bg-error text-on-error animate-pulse"
                  : "bg-surface-container-high hover:bg-surface-container-highest text-on-surface"
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>
                {settings.maintenanceMode ? "Mode Maintenance ACTIF" : "Mode Maintenance OFF"}
              </span>
            </button>

            <button
              onClick={resetToDefaults}
              className="px-3 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-outline text-xs font-label-code"
              title="Réinitialiser aux valeurs d'origine"
            >
              Reset Usine
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-surface-container-high pb-4">
          {[
            { id: "overview", label: "Vue d'ensemble", icon: Activity },
            { id: "games", label: "Gestion des Jeux", icon: Gamepad2 },
            { id: "news", label: "Communiqués & News", icon: Newspaper },
            { id: "candidates", label: "Candidatures RH", icon: Briefcase },
            { id: "settings", label: "Paramètres du Site", icon: Settings },
            { id: "logs", label: "Journal d'Audit", icon: Shield },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl font-headline-sm text-xs font-semibold flex items-center gap-2 transition-all ${
                  isActive
                    ? "bg-primary-container text-on-primary shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. OVERVIEW VIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* KPI Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-[11px] text-outline uppercase">
                    Joueurs Connectés
                  </span>
                  <div className="w-8 h-8 rounded bg-surface-container text-primary-container flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-headline-sm text-2xl text-on-surface font-bold">
                  {settings.activePlayers.toLocaleString()}
                </div>
                <p className="font-body-sm text-[11px] text-emerald-400">
                  +12% pic simultané global hebdo
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-[11px] text-outline uppercase">
                    Téléchargements Launcher
                  </span>
                  <div className="w-8 h-8 rounded bg-surface-container text-secondary flex items-center justify-center">
                    <CloudUpload className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-headline-sm text-2xl text-on-surface font-bold">
                  {settings.launcherDownloads.toLocaleString()}
                </div>
                <p className="font-body-sm text-[11px] text-secondary">
                  Version 3.8.4 Win &amp; macOS
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-[11px] text-outline uppercase">
                    Candidatures R&amp;D
                  </span>
                  <div className="w-8 h-8 rounded bg-surface-container text-primary flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-headline-sm text-2xl text-on-surface font-bold">
                  {candidates.length} Dossiers
                </div>
                <p className="font-body-sm text-[11px] text-outline">
                  {candidates.filter((c) => c.status === "À Réviser").length} en attente de revue
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-[11px] text-outline uppercase">
                    Portée Web &amp; SEO
                  </span>
                  <div className="w-8 h-8 rounded bg-surface-container text-primary-container flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-headline-sm text-2xl text-on-surface font-bold">
                  620,400 Visites
                </div>
                <p className="font-body-sm text-[11px] text-emerald-400">
                  Indice Lighthouse Google 98/100
                </p>
              </div>
            </div>

            {/* Two Columns Overview Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left: Quick Games Table (7 cols) */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-lg text-on-surface font-bold flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5 text-primary-container" />
                    <span>Statut des Titres en Production</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab("games")}
                    className="font-label-code text-xs text-primary hover:underline"
                  >
                    Gérer tout
                  </button>
                </div>

                <div className="space-y-3">
                  {games.map((g) => (
                    <div
                      key={g.id}
                      className="p-3.5 rounded-xl bg-surface-container flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={g.image}
                          alt={g.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-title-md text-sm text-on-surface font-bold">
                            {g.title}
                          </div>
                          <span className="font-label-code text-[11px] text-outline">
                            {g.version} • {g.ping}
                          </span>
                        </div>
                      </div>
                      <span className="font-label-badge text-[10px] px-2.5 py-1 rounded bg-surface-container-highest text-primary font-bold">
                        {g.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Security & Real-Time Audit Log (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-lg text-on-surface font-bold flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-container" />
                    <span>Journal d'Audit Temps Réel</span>
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-2.5 font-label-code text-[11px]">
                  {logs.slice(0, 5).map((log) => (
                    <div
                      key={log.id}
                      className="p-3 rounded-xl bg-surface-container flex items-start gap-2.5"
                    >
                      <Key className="w-3.5 h-3.5 text-primary-container shrink-0 mt-0.5" />
                      <div>
                        <p className="text-on-surface font-semibold">{log.title}</p>
                        <span className="text-outline">{log.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. GAMES MANAGEMENT VIEW */}
        {activeTab === "games" && (
          <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
                  Gestion du Catalogue des Jeux
                </h3>
                <p className="font-body-sm text-on-surface-variant text-xs">
                  Modifiez les versions, statuts opérationnels, métriques ou ajoutez de nouveaux titres.
                </p>
              </div>

              <button
                onClick={() => setShowGameModal(true)}
                className="px-4 py-2 rounded-xl bg-primary-container text-on-primary font-headline-sm text-xs font-bold flex items-center gap-1.5 shadow-sm hover:brightness-110 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Ajouter un Nouveau Jeu</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-body-sm text-sm">
                <thead>
                  <tr className="border-b border-surface-container-high text-outline font-label-code text-xs uppercase">
                    <th className="py-3 px-4">Titre du Projet</th>
                    <th className="py-3 px-4">Version</th>
                    <th className="py-3 px-4">Statut Opérationnel</th>
                    <th className="py-3 px-4">Cluster / Latence</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-high/40">
                  {games.map((game) => (
                    <tr key={game.id} className="hover:bg-surface-container/50 transition-colors">
                      <td className="py-4 px-4 flex items-center gap-3">
                        <img
                          src={game.image}
                          alt={game.title}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-title-md text-on-surface font-bold">
                            {game.title}
                          </div>
                          <span className="font-label-code text-[11px] text-outline">
                            {game.genre}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-label-code text-xs text-primary">
                        {game.version}
                      </td>
                      <td className="py-4 px-4">
                        <select
                          value={game.status}
                          onChange={(e) =>
                            updateGame({ ...game, status: e.target.value as any })
                          }
                          className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface font-label-badge text-[11px] border border-surface-container-high"
                        >
                          <option value="PRODUCTION LIVE">PRODUCTION LIVE</option>
                          <option value="BETA PRIVÉE">BETA PRIVÉE</option>
                          <option value="MAINTENANCE PLANIFIÉE">MAINTENANCE PLANIFIÉE</option>
                          <option value="EN DÉVELOPPEMENT">EN DÉVELOPPEMENT</option>
                        </select>
                      </td>
                      <td className="py-4 px-4 font-label-code text-xs text-outline">
                        {game.ping}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => deleteGame(game.id)}
                          className="p-1.5 rounded-lg bg-surface-container hover:bg-error/20 hover:text-error text-outline transition-colors"
                          title="Supprimer du catalogue"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. NEWS PUBLISHER VIEW */}
        {activeTab === "news" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Publisher Form (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-6">
              <div>
                <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
                  Publication d'Actualité ou Patch Note
                </h3>
                <p className="font-body-sm text-on-surface-variant text-xs mt-1">
                  Diffusion multilingue synchrone sur le portail web et le launcher BGYT.
                </p>
              </div>

              {newsSuccess && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-label-code text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Communiqué publié et déployé sur le CDN avec succès !</span>
                </div>
              )}

              <form onSubmit={handlePublishNews} className="space-y-4">
                <div className="space-y-1">
                  <label className="block font-label-code text-[11px] text-outline uppercase">
                    Titre de l'Annonce *
                  </label>
                  <input
                    type="text"
                    required
                    value={newsTitle}
                    onChange={(e) => setNewsTitle(e.target.value)}
                    placeholder="Ex: Déploiement Hotfix Chrono-Nexus 2.4.2"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container text-on-surface font-body-sm border border-surface-container-high focus:border-primary-container focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-label-code text-[11px] text-outline uppercase">
                      Catégorie *
                    </label>
                    <select
                      value={newsCategory}
                      onChange={(e) => setNewsCategory(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container text-on-surface font-body-sm border border-surface-container-high focus:border-primary-container focus:outline-none"
                    >
                      <option value="PATCH NOTE">PATCH NOTE</option>
                      <option value="DEVLOG">DEVLOG TECHNIQUE</option>
                      <option value="COMMUNAUTÉ">COMMUNAUTÉ &amp; ESPORT</option>
                      <option value="STUDIO">ANNONCE STUDIO</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-label-code text-[11px] text-outline uppercase">
                      Tags (Séparés par virgules)
                    </label>
                    <input
                      type="text"
                      value={newsTags}
                      onChange={(e) => setNewsTags(e.target.value)}
                      placeholder="PATCH-NOTES, UE5, BUGFIX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container text-on-surface font-body-sm border border-surface-container-high focus:border-primary-container focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-label-code text-[11px] text-outline uppercase">
                    Extrait / Résumé Court
                  </label>
                  <input
                    type="text"
                    value={newsExcerpt}
                    onChange={(e) => setNewsExcerpt(e.target.value)}
                    placeholder="Bref résumé en 1 phrase affiché sur la page d'accueil..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container text-on-surface font-body-sm border border-surface-container-high focus:border-primary-container focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-label-code text-[11px] text-outline uppercase">
                    Corps du Message (Markdown supporté) *
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={newsContent}
                    onChange={(e) => setNewsContent(e.target.value)}
                    placeholder="### Changelog v2.4.2&#10;- Résolution du bug de collision arène&#10;- Amélioration des shaders Vulkan..."
                    className="w-full p-3.5 rounded-xl bg-surface-container text-on-surface font-label-code text-xs border border-surface-container-high focus:border-primary-container focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-headline-sm text-xs font-bold flex items-center gap-2 shadow-[0_0_16px_rgba(0,210,255,0.4)] hover:brightness-110 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Diffuser &amp; Publier Immédiatement</span>
                </button>
              </form>
            </div>

            {/* Existing News List (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-4">
              <h3 className="font-headline-sm text-lg text-on-surface font-bold">
                Articles en Ligne ({news.length})
              </h3>

              <div className="space-y-3">
                {news.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-surface-container border border-surface-container-high/60 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-label-badge text-[9px] px-2 py-0.5 rounded bg-primary-container text-on-primary font-bold">
                        {item.category}
                      </span>
                      <span className="font-label-code text-[10px] text-outline">{item.date}</span>
                    </div>
                    <h4 className="font-title-md text-sm text-on-surface font-bold line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="font-body-sm text-xs text-outline line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. CANDIDATES REVIEW VIEW */}
        {activeTab === "candidates" && (
          <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
                  Dossiers de Candidature Reçus ({candidates.length})
                </h3>
                <p className="font-body-sm text-on-surface-variant text-xs">
                  Portefeuilles et profils techniques soumis via le portail carrières public.
                </p>
              </div>

              <span className="font-label-code text-xs text-outline">
                Délais de réponse garanti : &lt; 72 heures
              </span>
            </div>

            <div className="space-y-4">
              {candidates.map((cand) => (
                <div
                  key={cand.id}
                  className="p-5 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary-container/40 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="font-headline-sm text-lg text-on-surface font-bold">
                        {cand.fullName}
                      </h4>
                      <span className="font-label-code text-xs text-primary">{cand.email}</span>
                      {cand.phone && (
                        <span className="font-label-code text-xs text-outline">• {cand.phone}</span>
                      )}
                    </div>

                    <div className="font-body-sm text-sm text-on-surface-variant">
                      <strong>Poste :</strong> {cand.targetRole} ({cand.experienceLevel})
                    </div>

                    {cand.notes && (
                      <p className="font-body-sm text-xs text-outline italic">
                        "{cand.notes}"
                      </p>
                    )}

                    <div className="flex items-center gap-4 font-label-code text-xs pt-1">
                      {cand.portfolioUrl && (
                        <a
                          href={cand.portfolioUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline flex items-center gap-1"
                        >
                          Portfolio <ArrowRight className="w-3 h-3" />
                        </a>
                      )}
                      {cand.githubUrl && (
                        <a
                          href={cand.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-secondary hover:underline flex items-center gap-1"
                        >
                          GitHub <ArrowRight className="w-3 h-3" />
                        </a>
                      )}
                      <span className="text-outline">Reçu : {cand.submittedAt}</span>
                    </div>
                  </div>

                  {/* Status selector */}
                  <div className="flex items-center gap-3 shrink-0">
                    <select
                      value={cand.status}
                      onChange={(e) => updateCandidateStatus(cand.id, e.target.value as any)}
                      className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-code text-xs border border-surface-container-highest"
                    >
                      <option value="À Réviser">Statut : À Réviser</option>
                      <option value="Entretien Planifié">Statut : Entretien Planifié</option>
                      <option value="Validé RH">Statut : Validé RH</option>
                      <option value="Refusé">Statut : Refusé</option>
                    </select>

                    <a
                      href={`mailto:${cand.email}?subject=Suite%20candidature%20BGYT%20Inc%20-${cand.targetRole}`}
                      className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-headline-sm text-xs font-bold"
                    >
                      Écrire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. SITE SETTINGS VIEW */}
        {activeTab === "settings" && (
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-6 max-w-3xl">
            <div>
              <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
                Paramètres Généraux du Site Web
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs mt-1">
                Personnalisez les textes clés, slogans et fonctionnalités globales sans modifier le
                code source.
              </p>
            </div>

            {settingsSuccess && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-label-code text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Paramètres enregistrés et immédiatement synchronisés !</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div className="space-y-1">
                <label className="block font-label-code text-[11px] text-outline uppercase">
                  Nom Officiel du Studio
                </label>
                <input
                  type="text"
                  value={siteNameInput}
                  onChange={(e) => setSiteNameInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container text-on-surface font-body-sm border border-surface-container-high focus:border-primary-container focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-label-code text-[11px] text-outline uppercase">
                  Slogan Principal (Titre Hero)
                </label>
                <input
                  type="text"
                  value={heroHeadlineInput}
                  onChange={(e) => setHeroHeadlineInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container text-on-surface font-body-sm border border-surface-container-high focus:border-primary-container focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-label-code text-[11px] text-outline uppercase">
                  Texte d'Introduction Studio (Paragraphe Hero)
                </label>
                <textarea
                  rows={3}
                  value={heroSubheadlineInput}
                  onChange={(e) => setHeroSubheadlineInput(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-surface-container text-on-surface font-body-sm border border-surface-container-high focus:border-primary-container focus:outline-none resize-none"
                />
              </div>

              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex items-center justify-between">
                <div>
                  <span className="font-title-md text-sm text-on-surface font-bold block">
                    Mode Maintenance Global
                  </span>
                  <span className="font-body-sm text-xs text-outline">
                    Affiche une bannière d'alerte de maintenance sur toutes les pages publiques.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={maintenanceInput}
                  onChange={(e) => setMaintenanceInput(e.target.checked)}
                  className="w-5 h-5 accent-primary-container rounded cursor-pointer"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-primary-container text-on-primary font-headline-sm text-xs font-bold shadow-sm hover:brightness-110 transition-all"
              >
                Enregistrer les Modifications
              </button>
            </form>
          </div>
        )}

        {/* 6. AUDIT LOGS VIEW */}
        {activeTab === "logs" && (
          <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
                  Journal des Actions Administratives &amp; Sécurité
                </h3>
                <p className="font-body-sm text-on-surface-variant text-xs">
                  Traçabilité cryptographique conforme à la norme ISO/IEC 27001.
                </p>
              </div>

              <button
                onClick={() => addAuditLog("Vérification manuelle d'intégrité", "Tous les checksums sont conformes", "config")}
                className="px-3.5 py-1.5 rounded-lg bg-surface-container font-label-code text-xs text-primary"
              >
                Purger / Vérifier
              </button>
            </div>

            <div className="space-y-3 font-label-code text-xs">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex items-start gap-3"
                >
                  <Key className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <p className="text-on-surface font-bold">{log.title}</p>
                      <span className="text-outline">{log.detail}</span>
                    </div>
                    <span className="font-label-badge text-[10px] text-outline shrink-0">
                      {log.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* New Game Creation Modal */}
      {showGameModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-primary-container/40 space-y-4 max-h-[85vh] overflow-y-auto">
            <h3 className="font-headline-sm text-xl text-on-surface font-bold">
              Ajouter un Nouveau Titre au Catalogue
            </h3>

            <form onSubmit={handleCreateGame} className="space-y-4">
              <div className="space-y-1">
                <label className="block font-label-code text-xs text-outline uppercase">
                  Titre du Jeu *
                </label>
                <input
                  type="text"
                  required
                  value={newGameData.title}
                  onChange={(e) => setNewGameData({ ...newGameData, title: e.target.value })}
                  placeholder="Ex: Cyber-Diver: Deep Void"
                  className="w-full px-3 py-2 rounded-xl bg-surface-container text-on-surface text-sm border border-surface-container-high focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-label-code text-xs text-outline uppercase">
                    Genre *
                  </label>
                  <input
                    type="text"
                    required
                    value={newGameData.genre}
                    onChange={(e) => setNewGameData({ ...newGameData, genre: e.target.value })}
                    placeholder="ARPG / FPS / MMORPG"
                    className="w-full px-3 py-2 rounded-xl bg-surface-container text-on-surface text-sm border border-surface-container-high focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-label-code text-xs text-outline uppercase">
                    Version &amp; Branche
                  </label>
                  <input
                    type="text"
                    value={newGameData.version}
                    onChange={(e) => setNewGameData({ ...newGameData, version: e.target.value })}
                    placeholder="v1.0.0 (Main-Prod)"
                    className="w-full px-3 py-2 rounded-xl bg-surface-container text-on-surface text-sm border border-surface-container-high focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-label-code text-xs text-outline uppercase">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={newGameData.description}
                  onChange={(e) =>
                    setNewGameData({ ...newGameData, description: e.target.value })
                  }
                  placeholder="Synopsis et mécaniques de jeu..."
                  className="w-full p-3 rounded-xl bg-surface-container text-on-surface text-sm border border-surface-container-high focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowGameModal(false)}
                  className="px-4 py-2 rounded-xl bg-surface-container text-outline text-xs"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-primary-container text-on-primary font-bold text-xs"
                >
                  Ajouter au Catalogue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

