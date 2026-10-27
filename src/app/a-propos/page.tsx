"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Shield,
  Zap,
  Cpu,
  Globe,
  Award,
  Users,
  Compass,
  ArrowRight,
  Terminal,
} from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Cpu,
      title: "Ingénierie Graphique Temps Réel",
      desc: "Nous exploitons le plein potentiel de l'Unreal Engine 5.4, des pipelines Vulkan bas niveau et des shaders de calcul pour offrir une fidélité visuelle cinématique sans compromettre le taux de rafraîchissement.",
    },
    {
      icon: Zap,
      title: "Latence Zéro & Synchronisation Absolue",
      desc: "Notre protocole réseau propriétaire BGYT NetEngine™ garantit des serveurs 128-tick avec prédiction de trajectoires en périphérie (Edge AI), annihilant tout désavantage compétitif.",
    },
    {
      icon: Compass,
      title: "Liberté Créative & Cyber-Futurisme",
      desc: "Chaque projet est conçu sans barrières éditoriales conventionnelles. Nos scénaristes, artistes 3D et sound designers fusionnent cyberpunk, science-fiction prospective et immersion sonore binaurale.",
    },
    {
      icon: Shield,
      title: "Éthique du Joueur & Souveraineté Numérique",
      desc: "Zéro mécanique abusive ou pay-to-win. Nos serveurs respectent scrupuleusement la confidentialité des joueurs et la conformité RGPD européenne la plus stricte.",
    },
  ];

  const milestones = [
    {
      year: "2022",
      badge: "FONDATION",
      title: "Création du Noyau BGYT Inc™",
      desc: "Regroupement de vétérans de l'industrie AAA autour d'une vision commune : créer un studio indépendant axé sur l'ingénierie vidéoludique de pointe.",
    },
    {
      year: "2023",
      badge: "R&D MOTEUR",
      title: "Brevet BGYT NetEngine™ v1",
      desc: "Développement initial de notre protocole réseau prédictif et déploiement du premier cluster de serveurs à latence ultra-faible en Europe.",
    },
    {
      year: "2024",
      badge: "ANNONCE TRIPLE-A",
      title: "Révélation de Chrono-Nexus: 2088",
      desc: "Présentation mondiale de notre Action-RPG phare sur Unreal Engine 5 lors de grands salons internationaux, saluée par la critique technique.",
    },
    {
      year: "2025",
      badge: "ESPORT",
      title: "Lancement Compétitif de Zero-Grav",
      desc: "Succès fulgurant du FPS gravitationnel 6v6 avec plus de 100,000 joueurs simultanés et premier championnat international.",
    },
    {
      year: "2026",
      badge: "EXPANSION",
      title: "Mise à jour 2.4 & Laboratoire XR",
      desc: "Déploiement du district Neo-Kyoto et lancement du projet pionnier de simulation spatiale Project Singularity sur casques VR nouvelle génération.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="relative py-20 bg-surface-container-lowest overflow-hidden border-b border-surface-container-high">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
            <Terminal className="w-4 h-4 text-primary-container" />
            <span>MANIFESTE &amp; ADN DU STUDIO</span>
          </div>

          <h1 className="font-headline-lg text-headline-lg lg:text-5xl text-on-surface font-extrabold tracking-tight max-w-4xl uppercase">
            À Propos de <span className="text-primary-container">BGYT Inc™</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Fondé avec l'ambition de redéfinir les standards de l'interactivité vidéoludique, BGYT
            Inc™ combine l'artisanat du jeu vidéo narratif avec une rigueur d'ingénierie logicielle
            de rang spatial.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-label-badge text-label-badge text-primary-container uppercase">
              Nos Fondations
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-bold">
              Les 4 Piliers Technologiques &amp; Humains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-surface-container-low border border-surface-container-high hover:border-primary-container/40 transition-all space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline-sm text-xl text-on-surface font-bold">
                    {pillar.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-surface-container-lowest border-t border-surface-container-high">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-3 max-w-xl">
            <span className="font-label-badge text-label-badge text-primary-container uppercase">
              Chronologie
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-bold">
              L'Épopée Technologique de BGYT Inc™
            </h2>
            <p className="font-body-md text-on-surface-variant">
              De l'expérimentation de serveurs dédiés jusqu'au statut d'éditeur indépendant reconnu.
            </p>
          </div>

          <div className="relative border-l border-surface-container-high ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface-container border-2 border-primary-container group-hover:bg-primary-container transition-colors" />

                <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-headline-sm text-xl text-primary font-bold">
                      {ms.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded font-label-badge text-[10px] bg-surface-container-highest text-primary-container font-semibold">
                      {ms.badge}
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-lg text-on-surface font-semibold">
                    {ms.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {ms.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Locations Strip */}
      <section className="py-16 bg-surface-container">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-label-badge text-label-badge text-primary uppercase">
              <Globe className="w-4 h-4 text-primary-container" />
              <span>RAYONNEMENT INTERNATIONAL</span>
            </div>
            <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
              Des Studios Connectés à Bruxelles, Paris &amp; Amsterdam
            </h3>
            <p className="font-body-sm text-on-surface-variant max-w-xl">
              Nos ingénieurs collaborent en télétravail hybride et au sein de nos hubs créatifs
              dotés de salles de capture de mouvement et de suites d'enregistrement audio.
            </p>
          </div>

          <Link
            href="/recrutement"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-headline-sm text-title-md font-bold flex items-center gap-2 shadow-lg shrink-0"
          >
            <Users className="w-4 h-4" />
            <span>Rejoindre l'Équipe</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
