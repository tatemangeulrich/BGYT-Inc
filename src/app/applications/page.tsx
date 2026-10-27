"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteData } from "@/context/SiteDataContext";
import {
  Cpu,
  Zap,
  Server,
  ShieldCheck,
  Cloud,
  Layers,
  ArrowRight,
  Code2,
  Terminal,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function ApplicationsPage() {
  const { t } = useLanguage();
  const { applications } = useSiteData();

  const additionalLabs = [
    {
      id: "audiospatial",
      title: "BGYT AudioSpatial 3D™",
      tagline: "Acoustique Computationnelle & Ray-Traced Audio",
      metrics: "384 Voix Simultanées // Dolby Atmos & HRTF",
      description: "Moteur audio spatial simulant la diffraction, la réverbération et l'occlusion des ondes sonores en temps réel à travers les géométries 3D complexes.",
      features: [
        "Calcul des réflexions sonores couplé aux géométries Nanite",
        "Profils HRTF personnalisés pour casques et systèmes multi-canaux",
        "Intégration native middleware Wwise & FMOD"
      ],
    },
    {
      id: "devkit",
      title: "BGYT DevKit & Studio SDK",
      tagline: "Boîte à Outils pour Studios Partenaires",
      metrics: "C++ / Rust / Go / Python APIs",
      description: "Suite d'outils de télémétrie, de profiler graphique et de déploiement multiplateforme pour les équipes de production externes.",
      features: [
        "Analyseur de trame et détection automatique des goulots d'étranglement GPU",
        "Pipelines d'intégration continue automatisés pour consoles",
        "Documentation technique et exemples de code certifiés"
      ],
    },
  ];

  const allApps = [...applications, ...additionalLabs];

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <section className="relative py-20 bg-surface-container-lowest border-b border-surface-container-high overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-primary-container" />
            <span>SOLUTIONS &amp; ARCHITECTURES LOGICIELLES</span>
          </div>

          <h1 className="font-headline-lg text-4xl sm:text-5xl text-on-surface font-extrabold uppercase tracking-tight max-w-4xl">
            Nos Applications &amp; Labs Technologiques
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Au-delà de nos propres productions de jeux, BGYT Inc™ conçoit et commercialise des
            briques technologiques haute performance utilisées par l'écosystème vidéoludique
            mondial.
          </p>
        </div>
      </section>

      {/* Benchmark Telemetry Comparison */}
      <section className="py-12 bg-surface-container-low border-b border-surface-container-high">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-surface-container border border-primary-container/30 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="font-label-badge text-label-badge text-primary-container uppercase">
                BENCHMARK COMPARATIF // ARCHITECTURE NETENGINE
              </span>
              <h3 className="font-headline-sm text-xl text-on-surface font-bold">
                Tickrate 128Hz &amp; Compensation de Latence Prédictive
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
              <div className="p-3 rounded-xl bg-surface-container-low">
                <span className="font-label-code text-[11px] text-outline block">Latence Moyenne</span>
                <span className="font-headline-sm text-2xl text-emerald-400 font-bold">11 ms</span>
                <span className="font-label-code text-[10px] text-outline block">vs 45ms standard</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low">
                <span className="font-label-code text-[11px] text-outline block">Taux d'Échantillonnage</span>
                <span className="font-headline-sm text-2xl text-primary font-bold">128 Hz</span>
                <span className="font-label-code text-[10px] text-outline block">vs 64Hz standard</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low col-span-2 sm:col-span-1">
                <span className="font-label-code text-[11px] text-outline block">Désynchronisation</span>
                <span className="font-headline-sm text-2xl text-primary-container font-bold">0.00%</span>
                <span className="font-label-code text-[10px] text-outline block">Zéro perte paquet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allApps.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-surface-container-low border border-surface-container-high hover:border-primary-container/40 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform shadow-md">
                    <Zap className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="font-label-badge text-label-badge text-primary uppercase block mb-1">
                      {item.tagline}
                    </span>
                    <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>

                  <div className="p-3 rounded-xl bg-surface-container-lowest font-label-code text-[11.5px] text-outline">
                    <span className="text-primary-container font-semibold block mb-0.5">
                      SPÉCIFICATIONS TECHNIQUES
                    </span>
                    <span>{item.metrics}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-2">
                    {item.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-[12.5px] font-body-sm text-on-surface-variant"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-container shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-container-high/60 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="font-headline-sm text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                  >
                    <span>Demander une licence SDK</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

