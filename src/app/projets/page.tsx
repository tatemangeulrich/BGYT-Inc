"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Cpu,
  Brain,
  CloudRain,
  Shield,
  Layers,
  ArrowRight,
  Clock,
  Compass,
} from "lucide-react";

export default function ProjectsPage() {
  const { t } = useLanguage();

  const rdProjects = [
    {
      id: "project-singularity",
      title: "Project Singularity (XR / VR)",
      category: "LABORATOIRE IMMERSIF",
      status: "ALPHA TEST CONFIDENTIEL",
      icon: Compass,
      desc: "Expérience interactive pionnière combinant suivi oculaire fovéal, retours haptiques complets et rendu spatial photoréaliste pour Meta Quest 3, SteamVR et Apple Vision Pro.",
      progress: 68,
      tech: ["Apple VisionOS", "Meta SDK", "OpenXR", "UE5 Spatial Audio"],
    },
    {
      id: "neural-npc",
      title: "Matrice Neuronale pour PNJ Autonomes",
      category: "INTELLIGENCE ARTIFICIELLE",
      status: "PROTOTYPE ACTIF",
      icon: Brain,
      desc: "Système d'agents non-joueurs dotés de modèles d'IA légers exécutés localement sur le GPU du joueur, permettant des dialogues contextuels infinis et des stratégies de combat émergentes.",
      progress: 82,
      tech: ["LLM On-Device", "Llama Core C++", "Behavior Trees", "Dynamic Voice"],
    },
    {
      id: "volumetric-weather",
      title: "Moteur Météorologique Volumétrique DirectGPU",
      category: "MOTEUR GRAPHIQUE",
      status: "INTÉGRATION CHRONO-NEXUS",
      icon: CloudRain,
      desc: "Simulation physique de tempêtes électromagnétiques, brouillards denses et précipitations acides calculée entièrement par compute shaders sans pénalité CPU.",
      progress: 95,
      tech: ["Compute Shaders", "HLSL", "Nanite Weather Clutter", "Lumen Refraction"],
    },
    {
      id: "post-quantum-security",
      title: "Chiffrement Réseau Post-Quantique (PQC)",
      category: "CYBERSÉCURITÉ",
      status: "VALIDATION CRYPTOGRAPHIQUE",
      icon: Shield,
      desc: "Implémentation d'algorithmes de cryptographie résistants aux ordinateurs quantiques pour sécuriser les échanges multijoueurs compétitifs et l'intégrité des inventaires.",
      progress: 74,
      tech: ["Kyber-768", "Dilithium Signatures", "Zero-Knowledge Proofs", "Rust Core"],
    },
  ];

  const roadmapSteps = [
    {
      quarter: "Q1 2026",
      status: "TERMINÉ",
      title: "Déploiement Patch Majeur 2.4",
      desc: "Lancement du district urbain 'Neo-Kyoto', support DirectStorage Gen4 et 14 nouveaux châssis cyberware.",
    },
    {
      quarter: "Q2 2026",
      status: "EN COURS",
      title: "Tournoi Mondial Zero-Grav & Cross-Play",
      desc: "Phase finale eSport à Séoul avec retransmission en direct et synchronisation multiplateforme PS5 / PC.",
    },
    {
      quarter: "Q3 2026",
      status: "PLANIFIÉ",
      title: "Beta Fermée Aetheria: Shattered Realms",
      desc: "Ouverture des premiers serveurs de guilde pour 15,000 testeurs sélectionnés et tests de charge 500-joueurs.",
    },
    {
      quarter: "Q4 2026",
      status: "VISION",
      title: "Sortie Globale & Révélation Project Singularity",
      desc: "Lancement commercial mondial d'Aetheria et démonstration publique de notre premier titre natif XR spatial.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <section className="relative py-20 bg-surface-container-lowest border-b border-surface-container-high overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-primary-container" />
            <span>R&amp;D EXPÉRIMENTALE &amp; FUTUR NUMÉRIQUE</span>
          </div>

          <h1 className="font-headline-lg text-4xl sm:text-5xl text-on-surface font-extrabold uppercase tracking-tight max-w-4xl">
            Nos Projets &amp; Laboratoires de Recherche
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Chez BGYT Inc™, un tiers de nos ressources d'ingénierie est dédié à l'exploration des
            technologies de rupture : IA émergente, calcul spatial XR et cryptographie avancée.
          </p>
        </div>
      </section>

      {/* R&D Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2">
            <span className="font-label-badge text-label-badge text-primary-container uppercase">
              Laboratoires Actifs
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-bold">
              Prototypes &amp; Innovations en Cours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rdProjects.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="p-8 rounded-3xl bg-surface-container-low border border-surface-container-high hover:border-primary-container/40 transition-all space-y-6 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded font-label-badge text-[11px] bg-surface-container-high text-primary font-bold">
                      {p.status}
                    </span>
                  </div>

                  <div>
                    <span className="font-label-code text-[11px] text-outline uppercase block mb-1">
                      {p.category}
                    </span>
                    <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
                      {p.title}
                    </h3>
                  </div>

                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Progress bar */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between font-label-code text-[11px] text-outline">
                      <span>Progression R&amp;D</span>
                      <span className="text-primary-container font-bold">{p.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-secondary-container to-primary-container shadow-[0_0_10px_rgba(0,210,255,0.6)]"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-surface-container font-label-code text-[11px] text-on-surface-variant"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-surface-container-lowest border-t border-surface-container-high">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="space-y-2 max-w-xl">
            <span className="font-label-badge text-label-badge text-primary-container uppercase">
              Vision &amp; Planning
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-bold">
              Feuille de Route 2026
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Les étapes majeures de déploiement et de release pour l'ensemble du studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-2xl text-primary font-bold">
                    {step.quarter}
                  </span>
                  <span
                    className={`font-label-badge text-[10px] px-2 py-0.5 rounded font-bold ${
                      step.status === "TERMINÉ"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : step.status === "EN COURS"
                        ? "bg-primary-container/20 text-primary-container animate-pulse"
                        : "bg-surface-container-high text-outline"
                    }`}
                  >
                    {step.status}
                  </span>
                </div>

                <h4 className="font-headline-sm text-lg text-on-surface font-bold">
                  {step.title}
                </h4>

                <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

