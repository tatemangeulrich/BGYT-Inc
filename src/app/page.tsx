"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteData } from "@/context/SiteDataContext";
import {
  Gamepad2,
  Download,
  ArrowRight,
  Disc as DiscordIcon,
  Activity,
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  Monitor,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();
  const { games, applications, news, settings } = useSiteData();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredGames =
    selectedCategory === "all"
      ? games
      : games.filter((g) => g.category === selectedCategory);

  return (
    <div className="w-full flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest -mt-16 sm:-mt-20 pt-24 sm:pt-32 pb-20 lg:pb-28">
        {/* Background Visual Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="w-full h-full bg-cover bg-center opacity-40 scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDquD-dMjPjpYnK08G9Kcb2NpFKX49gBSwZllloMB7xYg3jpDkUJ7tU7yUlDyEmXNPLw4eshLTNtUTVv0uTKse7bFSzINVX8YP3sHV4-7jMmoF2D1F-AZGL3zwk7Weu_DgWsY388RcCQUA8rh29GkVTPLBqXGzNTN-1d1R3wrKzAllAO672UMdDWP_gIbsroiNmZYXJ4wFDh4Nmis4BwOMv1JeT4eAWk-DmxM18rEFfGai3ANtT1Wwj')",
            }}
          />
          {/* Cybernetic Vignette & Bloom */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-surface-container-lowest/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-surface-container-lowest/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-container/15 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] opacity-40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-[82vh]">
          {/* Top Telemetry Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low/90 backdrop-blur-md border border-primary-container/20">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
              <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">
                {t("hero.badge_project")}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-4 font-label-code text-label-code text-on-surface-variant">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-primary-container" />
                {t("hero.network_latency")}
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <Zap className="w-3.5 h-3.5" />
                {t("hero.prod_build")}
              </span>
            </div>
          </div>

          {/* Main Headline & Description */}
          <div className="max-w-4xl mt-12 sm:mt-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-surface-container-high/90 backdrop-blur-sm border border-outline-variant/40">
              <span className="font-label-badge text-label-badge text-primary-container">
                FLAGSHIP TRIPLE-A
              </span>
              <span className="text-outline">/</span>
              <span className="font-label-badge text-label-badge text-on-surface uppercase">
                CHRONO-NEXUS: 2088
              </span>
            </div>

            <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-on-surface tracking-tight uppercase leading-none font-bold">
              {t("hero.main_h1_prefix")}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary-container">
                {t("hero.main_h1_highlight")}
              </span>
              {t("hero.main_h1_suffix")}
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {t("hero.lead")}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/jeux"
                className="group relative px-6 py-3.5 rounded bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-headline-sm text-title-md font-bold flex items-center gap-2 shadow-[0_0_24px_rgba(0,210,255,0.45)] hover:shadow-[0_0_36px_rgba(0,210,255,0.7)] hover:-translate-y-0.5 transition-all"
              >
                <Gamepad2 className="w-5 h-5" />
                <span>{t("btn.discover_games")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded bg-surface-container-high/90 hover:bg-surface-container-highest backdrop-blur-md text-on-surface font-title-md text-title-md font-semibold flex items-center gap-2 transition-all border border-outline-variant/30"
              >
                <DiscordIcon className="w-5 h-5 text-primary-container" />
                <span>{t("btn.join_discord")}</span>
                <span className="font-label-badge text-[10px] px-2 py-0.5 rounded bg-surface-container-low text-primary-container ml-1">
                  {t("hero.discord_online")}
                </span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Cluster */}
          <div className="mt-14 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-4 rounded-xl bg-surface-container-low/90 backdrop-blur-md border border-surface-container-high">
                <span className="font-label-code text-label-code text-outline uppercase block mb-1">
                  {t("stat.active_players")}
                </span>
                <div className="font-headline-sm text-2xl lg:text-3xl text-on-surface font-bold">
                  {settings.activePlayers.toLocaleString()}
                </div>
                <div className="font-label-badge text-[11px] text-primary-container flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+14.8% ce mois</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low/90 backdrop-blur-md border border-surface-container-high">
                <span className="font-label-code text-label-code text-outline uppercase block mb-1">
                  {t("stat.launcher_downloads")}
                </span>
                <div className="font-headline-sm text-2xl lg:text-3xl text-on-surface font-bold">
                  {settings.launcherDownloads.toLocaleString()}
                </div>
                <div className="font-label-badge text-[11px] text-secondary flex items-center gap-1 mt-1">
                  <span>v3.8.4 Win &amp; macOS</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low/90 backdrop-blur-md border border-surface-container-high">
                <span className="font-label-code text-label-code text-outline uppercase block mb-1">
                  Tickrate Moyen
                </span>
                <div className="font-headline-sm text-2xl lg:text-3xl text-primary font-bold">
                  128 Hz
                </div>
                <div className="font-label-badge text-[11px] text-outline flex items-center gap-1 mt-1">
                  <span>Architecture NetEngine</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low/90 backdrop-blur-md border border-surface-container-high">
                <span className="font-label-code text-label-code text-outline uppercase block mb-1">
                  {t("stat.web_traffic")}
                </span>
                <div className="font-headline-sm text-2xl lg:text-3xl text-on-surface font-bold">
                  620K+
                </div>
                <div className="font-label-badge text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                  <span>Indice Google 98/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLATFORM ECOSYSTEM STRIP */}
      <section className="w-full bg-surface-container-low py-6 border-y border-surface-container-high">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-label-badge text-label-badge text-outline uppercase">
            <Layers className="w-4 h-4 text-primary" />
            <span>ÉCOSYSTÈME MULTIPLATEFORME CERTIFIÉ</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-on-surface-variant font-headline-sm text-title-md">
            <span className="hover:text-primary transition-colors flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-primary-container" /> STEAM
            </span>
            <span className="hover:text-primary transition-colors flex items-center gap-2">
              <Cpu className="w-4 h-4 text-primary-container" /> UNREAL ENGINE 5
            </span>
            <span className="hover:text-primary transition-colors flex items-center gap-2">
              <Monitor className="w-4 h-4 text-primary-container" /> PLAYSTATION 5
            </span>
            <span className="hover:text-primary transition-colors flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary-container" /> XBOX SERIES X|S
            </span>
            <span className="hover:text-primary transition-colors flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary-container" /> NVIDIA RTX
            </span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED GAMES CATALOG */}
      <section className="w-full py-20 bg-surface-container-lowest relative" id="catalogue-jeux">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 font-label-badge text-label-badge text-primary-container uppercase">
                <span className="w-2 h-2 bg-primary-container rounded-full" />
                <span>{t("section.games_subtitle")}</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                {t("section.games_title")}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("section.games_desc")}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface-container-low border border-surface-container-high">
              {[
                { id: "all", label: t("cat.all") },
                { id: "pc-console", label: t("cat.pc_console") },
                { id: "engine", label: t("cat.engine") },
                { id: "vr-xr", label: t("cat.vr_xr") },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg font-label-code text-[11.5px] transition-all ${
                    selectedCategory === tab.id
                      ? "bg-surface-container-high text-primary shadow-sm font-semibold"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game, idx) => (
              <div
                key={game.id}
                className={`group relative rounded-2xl bg-surface-container-low border border-surface-container-high overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-primary-container/60 hover:shadow-[0_0_30px_rgba(0,210,255,0.2)] ${
                  idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Glow Bar on top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Media Banner */}
                  <div className="relative aspect-video w-full overflow-hidden bg-surface-container">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded bg-surface-container-lowest/90 font-label-badge text-label-badge text-primary-container font-semibold backdrop-blur-md">
                        {game.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-surface-container-highest/90 font-label-badge text-label-badge text-on-surface font-semibold backdrop-blur-md">
                        {game.version}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                      <span className="font-label-code text-[11px] text-primary">
                        {game.ping}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="font-label-code text-[11px] text-outline uppercase block">
                        {game.genre}
                      </span>
                      <h3 className="font-headline-sm text-2xl text-on-surface font-bold mt-1 group-hover:text-primary transition-colors">
                        {game.title}
                      </h3>
                    </div>

                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      {game.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-2">
                      {game.features.slice(0, 3).map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-[12.5px] font-body-sm text-on-surface-variant"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-primary-container shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="p-6 pt-0 border-t border-surface-container-high/60 mt-4 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={`/jeux#${game.id}`}
                    className="flex items-center gap-1.5 font-label-code text-[12px] text-primary hover:underline"
                  >
                    <span>{t("btn.view_details")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {game.steamUrl && (
                      <a
                        href={game.steamUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-code text-[11px] flex items-center gap-1 transition-colors"
                      >
                        <Gamepad2 className="w-3.5 h-3.5 text-primary" />
                        <span>Steam</span>
                      </a>
                    )}
                    <Link
                      href="/jeux"
                      className="px-3 py-1.5 rounded bg-primary-container text-on-primary font-headline-sm text-[12px] font-bold flex items-center gap-1 hover:brightness-110 shadow-sm transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Launcher</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATIONS & DIGITAL INNOVATIONS (Bento Grid) */}
      <section className="w-full py-20 bg-surface-container relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 font-label-badge text-label-badge text-primary-container uppercase">
              <Cpu className="w-4 h-4" />
              <span>{t("section.apps_subtitle")}</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              {t("section.apps_title")}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t("section.apps_desc")}
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app) => (
              <div
                key={app.id}
                className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-high relative overflow-hidden flex flex-col justify-between group hover:border-primary-container/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="font-label-badge text-[10px] text-primary uppercase block mb-1">
                      {app.category}
                    </span>
                    <h3 className="font-headline-sm text-xl text-on-surface font-bold">
                      {app.title}
                    </h3>
                  </div>

                  <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                    {app.description}
                  </p>

                  <div className="p-3 rounded-lg bg-surface-container-lowest font-label-code text-[11px] text-outline">
                    <span className="text-primary font-semibold block mb-0.5">MÉTRIQUE CLÉ</span>
                    <span>{app.metrics}</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/applications"
                    className="inline-flex items-center gap-1.5 font-label-code text-[12px] text-primary hover:underline"
                  >
                    <span>Explorer la suite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWS & PATCH NOTES */}
      <section className="w-full py-20 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 font-label-badge text-label-badge text-primary-container uppercase">
                <Sparkles className="w-4 h-4" />
                <span>{t("section.news_subtitle")}</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                {t("section.news_title")}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("section.news_desc")}
              </p>
            </div>

            <Link
              href="/actualites"
              className="flex items-center gap-2 font-title-md text-title-md text-primary hover:text-on-surface transition-colors"
            >
              <span>{t("btn.view_all_news")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.slice(0, 3).map((item) => (
              <article
                key={item.id}
                className="p-5 rounded-2xl bg-surface-container-low border border-surface-container-high flex flex-col justify-between group hover:bg-surface-container transition-all"
              >
                <div className="space-y-4">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded font-label-badge text-label-badge bg-primary-container text-on-primary font-bold">
                      {item.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-label-code text-[11px] text-outline block">
                      {item.date} // PAR {item.author.toUpperCase()}
                    </span>
                    <h3 className="font-headline-sm text-title-md text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-[13px] text-on-surface-variant line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-surface-container-high/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tg, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-surface-container-highest text-[10px] font-label-code text-outline"
                      >
                        #{tg}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/actualites#${item.id}`}
                    className="font-label-code text-[11px] text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Lire</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DISCORD INTEGRATION HUB */}
      <section className="w-full py-20 bg-surface-container relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text & Channels */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 font-label-badge text-label-badge text-primary-container uppercase">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                <span>HUB COMMUNAUTAIRE OFFICIEL</span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                {t("section.discord_title")}
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {t("section.discord_desc")}
              </p>

              {/* Channel Previews */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container-high flex items-center justify-between">
                  <div className="flex items-center gap-2 font-label-code text-body-sm text-on-surface">
                    <span className="text-primary">#</span>
                    <span>annonces-studio</span>
                  </div>
                  <span className="font-label-badge text-[10px] text-outline">TRANSMISSIONS</span>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container-high flex items-center justify-between">
                  <div className="flex items-center gap-2 font-label-code text-body-sm text-on-surface">
                    <span className="text-primary">#</span>
                    <span>beta-playtest-feedback</span>
                  </div>
                  <span className="font-label-badge text-[10px] text-primary-container font-semibold">
                    ACTIF
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container-high flex items-center justify-between">
                  <div className="flex items-center gap-2 font-label-code text-body-sm text-on-surface">
                    <span className="text-primary">#</span>
                    <span>lfg-recherche-escouade</span>
                  </div>
                  <span className="font-label-badge text-[10px] text-outline">MATCHMAKING</span>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container-high flex items-center justify-between">
                  <div className="flex items-center gap-2 font-label-code text-body-sm text-on-surface">
                    <span className="text-primary">#</span>
                    <span>devlogs-qa-direct</span>
                  </div>
                  <span className="font-label-badge text-[10px] text-secondary font-semibold">
                    DIRECTEURS
                  </span>
                </div>
              </div>
            </div>

            {/* Live Discord Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-surface-container-low border border-primary-container/30 p-8 shadow-2xl relative overflow-hidden space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#5865F2] flex items-center justify-center text-white shadow-lg">
                      <DiscordIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-headline-sm text-lg text-on-surface font-bold">
                        BGYT Inc™ Official HQ
                      </div>
                      <div className="flex items-center gap-2 font-label-code text-[11px] text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>14,250 Membres en Ligne</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-body-sm text-on-surface-variant text-[13px] leading-relaxed">
                  Rejoignez le salon de discussion principal, accédez aux clés privées de playtest
                  et interagissez directement avec nos équipes de développement.
                </p>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-headline-sm text-title-md font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <DiscordIcon className="w-5 h-5" />
                  <span>Rejoindre le Discord BGYT</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
