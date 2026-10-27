"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteData } from "@/context/SiteDataContext";
import PlaytestModal from "@/components/PlaytestModal";
import {
  Gamepad2,
  Download,
  ChevronDown,
  Cpu,
  Monitor,
  BookmarkPlus,
  ArrowRight,
  Shield,
  Layers,
  Terminal,
  Server,
  Zap,
} from "lucide-react";

export default function GamesPage() {
  const { t } = useLanguage();
  const { games } = useSiteData();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({
    "chrono-nexus": false,
  });
  const [playtestGame, setPlaytestGame] = useState<string | null>(null);

  const toggleSpecs = (id: string) => {
    setExpandedSpecs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredGames =
    activeTab === "all" ? games : games.filter((g) => g.category === activeTab);

  return (
    <div className="w-full flex flex-col">
      {/* Page Header */}
      <section className="relative py-16 bg-surface-container-lowest border-b border-surface-container-high overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
            <Gamepad2 className="w-4 h-4 text-primary-container" />
            <span>CATALOGUE OFFICIEL &amp; PRODUCTION LIVE</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h1 className="font-headline-lg text-4xl sm:text-5xl text-on-surface font-extrabold uppercase tracking-tight">
                Nos Titres &amp; Univers Immersifs
              </h1>
              <p className="font-body-lg text-on-surface-variant">
                Découvrez nos expériences vidéoludiques propulsées par l'Unreal Engine 5.4 et notre
                architecture de serveurs dédiés 128-tick.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface-container-low border border-surface-container-high">
              {[
                { id: "all", label: "TOUS LES TITRES" },
                { id: "pc-console", label: "PC & CONSOLES" },
                { id: "vr-xr", label: "VR / XR" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-label-code text-[11.5px] uppercase transition-all ${
                    activeTab === tab.id
                      ? "bg-surface-container-high text-primary shadow-sm font-bold"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog View */}
      <section className="py-16 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              id={game.id}
              className="rounded-3xl bg-surface-container-low border border-surface-container-high p-6 sm:p-10 shadow-xl overflow-hidden hover:border-primary-container/40 transition-all space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Media Column (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative aspect-video sm:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container shadow-md">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded bg-surface-container-lowest/90 font-label-badge text-label-badge text-primary-container font-bold backdrop-blur-md">
                        {game.badge}
                      </span>
                      <span className="px-3 py-1 rounded bg-surface-container-highest/90 font-label-badge text-label-badge text-on-surface font-semibold backdrop-blur-md">
                        {game.version}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md border border-primary-container/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-label-code text-[11px] text-primary">
                        {game.status} ({game.ping})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Column (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="font-label-code text-label-code text-outline uppercase">
                      CODE_IDENT // {game.id.toUpperCase()}
                    </div>
                    <h2 className="font-headline-sm text-3xl sm:text-4xl text-on-surface font-extrabold mt-1">
                      {game.title}
                    </h2>
                    <span className="font-label-badge text-[12px] text-primary-container font-semibold">
                      {game.genre}
                    </span>
                  </div>

                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {game.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {game.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 rounded-xl bg-surface-container/70 border border-surface-container-high/80 text-[13px] font-body-sm text-on-surface flex items-start gap-2.5"
                      >
                        <Zap className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Hardware Drawer */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleSpecs(game.id)}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors"
                    >
                      <span className="flex items-center gap-2 font-label-code text-label-code">
                        <Cpu className="w-4 h-4 text-primary-container" />
                        <span>SPÉCIFICATIONS MATÉRIELLES &amp; COMPATIBILITÉ</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-outline transition-transform duration-300 ${
                          expandedSpecs[game.id] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedSpecs[game.id] && (
                      <div className="mt-3 p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high text-body-sm space-y-4 animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <span className="font-label-badge text-[10px] text-outline uppercase block mb-2 font-bold">
                              Configuration Minimale (1080p 60fps)
                            </span>
                            <ul className="text-on-surface-variant font-label-code text-[11.5px] space-y-1.5">
                              <li>• CPU : {game.specs.min.cpu}</li>
                              <li>• GPU : {game.specs.min.gpu}</li>
                              <li>• RAM : {game.specs.min.ram}</li>
                              <li>• Stockage : {game.specs.min.storage}</li>
                            </ul>
                          </div>

                          <div>
                            <span className="font-label-badge text-[10px] text-primary uppercase block mb-2 font-bold">
                              Configuration Recommandée (1440p / 4K DLSS)
                            </span>
                            <ul className="text-on-surface-variant font-label-code text-[11.5px] space-y-1.5">
                              <li>• CPU : {game.specs.rec.cpu}</li>
                              <li>• GPU : {game.specs.rec.gpu}</li>
                              <li>• RAM : {game.specs.rec.ram}</li>
                              <li>• Stockage : {game.specs.rec.storage}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href="#download-center"
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-headline-sm text-title-md font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:brightness-110 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>Télécharger le Launcher</span>
                    </a>

                    {game.steamUrl && (
                      <a
                        href={game.steamUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm flex items-center gap-2 transition-colors border border-surface-container-high"
                      >
                        <BookmarkPlus className="w-4 h-4 text-primary" />
                        <span>Wishlist Steam</span>
                      </a>
                    )}

                    <button
                      onClick={() => setPlaytestGame(game.title)}
                      className="px-4 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-body-sm flex items-center gap-2 transition-colors border border-surface-container-high"
                    >
                      <Gamepad2 className="w-4 h-4" />
                      <span>Rejoindre le Playtest</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Center Section */}
      <section
        id="download-center"
        className="w-full py-20 bg-surface-container-lowest border-t border-surface-container-high"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase">
              <Download className="w-4 h-4 text-primary-container" />
              <span>CENTRE OFFICIEL DE TÉLÉCHARGEMENT</span>
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-bold">
              Launcher BGYT Inc™ Universal
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Une application unique pour installer, mettre à jour et lancer l'ensemble des titres
              BGYT avec mise en cache locale ultra-rapide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-4 hover:border-primary-container/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-title-md text-lg text-on-surface font-bold">Windows</span>
                <span className="font-label-badge text-[10px] text-primary-container px-2 py-0.5 rounded bg-surface-container">
                  RECOMMANDÉ
                </span>
              </div>
              <p className="font-body-sm text-outline text-xs">
                Windows 10 / 11 64-bit • DirectStorage &amp; DirectX 12 Ultimate
              </p>
              <div className="font-label-code text-[11px] text-on-surface-variant">
                Version 3.8.4 • 94.2 MB
              </div>
              <button
                onClick={() => alert("Téléchargement du Launcher BGYT Windows démarré !")}
                className="w-full py-2.5 rounded-lg bg-primary-container text-on-primary font-bold font-headline-sm text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger (.exe)</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-4 hover:border-primary-container/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-title-md text-lg text-on-surface font-bold">macOS</span>
                <span className="font-label-badge text-[10px] text-outline px-2 py-0.5 rounded bg-surface-container">
                  APPLE SILICON
                </span>
              </div>
              <p className="font-body-sm text-outline text-xs">
                macOS 13+ Ventura / Sonoma / Sequoia • Metal 3 Pipeline
              </p>
              <div className="font-label-code text-[11px] text-on-surface-variant">
                Version 3.8.4 • 108.5 MB
              </div>
              <button
                onClick={() => alert("Téléchargement du Launcher BGYT macOS démarré !")}
                className="w-full py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold font-headline-sm text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger (.dmg)</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-4 hover:border-primary-container/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-title-md text-lg text-on-surface font-bold">Linux</span>
                <span className="font-label-badge text-[10px] text-outline px-2 py-0.5 rounded bg-surface-container">
                  VULKAN NATIVE
                </span>
              </div>
              <p className="font-body-sm text-outline text-xs">
                Ubuntu, Arch, Fedora • Steam Deck / SteamOS optimisé
              </p>
              <div className="font-label-code text-[11px] text-on-surface-variant">
                Version 3.8.4 • 89.1 MB
              </div>
              <button
                onClick={() => alert("Téléchargement du Launcher BGYT Linux démarré !")}
                className="w-full py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold font-headline-sm text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger (.AppImage)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Playtest Modal */}
      {playtestGame && (
        <PlaytestModal
          isOpen={true}
          onClose={() => setPlaytestGame(null)}
          defaultGame={playtestGame}
        />
      )}
    </div>
  );
}

