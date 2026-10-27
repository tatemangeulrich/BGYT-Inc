"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteData } from "@/context/SiteDataContext";
import { Users, Github, Linkedin, Twitter, ArrowRight, ShieldCheck } from "lucide-react";

export default function TeamPage() {
  const { t } = useLanguage();
  const { team } = useSiteData();
  const [selectedDept, setSelectedDept] = useState<string>("ALL");

  const departments = ["ALL", "Direction", "Ingénierie", "Art & 3D", "Audio", "Design"];

  const filteredTeam =
    selectedDept === "ALL" ? team : team.filter((m) => m.department === selectedDept);

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <section className="relative py-16 bg-surface-container-lowest border-b border-surface-container-high overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
            <Users className="w-4 h-4 text-primary-container" />
            <span>TALENTS &amp; DIRECTEURS DE PRODUCTION</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h1 className="font-headline-lg text-4xl sm:text-5xl text-on-surface font-extrabold uppercase tracking-tight">
                L'Équipe d'Ingénierie BGYT Inc™
              </h1>
              <p className="font-body-lg text-on-surface-variant">
                Des vétérans du jeu vidéo AAA, des chercheurs en infographie et des artistes 3D
                passionnés réunis pour repousser les limites de l'interactivité.
              </p>
            </div>

            {/* Department Filters */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface-container-low border border-surface-container-high">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-lg font-label-code text-[11px] uppercase transition-all ${
                    selectedDept === dept
                      ? "bg-primary-container text-on-primary font-bold shadow-sm"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {dept === "ALL" ? "Tous les départements" : dept}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeam.map((member) => (
              <div
                key={member.id}
                id={member.id}
                className="p-6 rounded-3xl bg-surface-container-low border border-surface-container-high hover:border-primary-container/40 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Avatar & Role Header */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary-container/30 group-hover:ring-primary-container transition-all"
                      />
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-primary-container rounded-full border-2 border-surface-container-low" />
                    </div>

                    <div>
                      <h3 className="font-headline-sm text-xl text-on-surface font-bold group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <div className="font-label-badge text-[11px] text-primary-container font-semibold">
                        {member.role}
                      </div>
                      <div className="font-label-code text-[10px] text-outline">
                        {member.department} • {member.status}
                      </div>
                    </div>
                  </div>

                  <p className="font-body-sm text-[13.5px] text-on-surface-variant leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Socials & Profile Action */}
                <div className="pt-4 border-t border-surface-container-high/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {member.socials?.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-surface-container text-outline hover:text-primary hover:bg-surface-container-high transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials?.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-surface-container text-outline hover:text-primary hover:bg-surface-container-high transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials?.x && (
                      <a
                        href={member.socials.x}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-surface-container text-outline hover:text-primary hover:bg-surface-container-high transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <span className="font-label-code text-[11px] text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Identité Validée</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Strip */}
      <section className="py-16 bg-surface-container border-t border-surface-container-high">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
              Envie de créer les mondes de demain avec nous ?
            </h3>
            <p className="font-body-sm text-on-surface-variant">
              Nous recrutons des programmeurs moteur C++, des artistes 3D et des ingénieurs réseau.
            </p>
          </div>

          <Link
            href="/recrutement"
            className="px-6 py-3 rounded-xl bg-primary-container text-on-primary font-headline-sm text-title-md font-bold flex items-center gap-2 shadow-lg hover:brightness-110 transition-all shrink-0"
          >
            <span>Consulter les Postes Ouverts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

