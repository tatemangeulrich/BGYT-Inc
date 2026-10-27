"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteData } from "@/context/SiteDataContext";
import { NewsArticle } from "@/lib/types";
import {
  Newspaper,
  Search,
  Calendar,
  User,
  Tag,
  ArrowRight,
  X,
  Share2,
} from "lucide-react";

export default function NewsPage() {
  const { t } = useLanguage();
  const { news } = useSiteData();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const filteredNews = news.filter((item) => {
    const matchesCategory =
      selectedCategory === "ALL" || item.category === selectedCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <section className="relative py-16 bg-surface-container-lowest border-b border-surface-container-high overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
            <Newspaper className="w-4 h-4 text-primary-container" />
            <span>TRANSMISSIONS DIRECTES &amp; DEVLOGS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h1 className="font-headline-lg text-4xl sm:text-5xl text-on-surface font-extrabold uppercase tracking-tight">
                Actualités &amp; Mises à Jour
              </h1>
              <p className="font-body-lg text-on-surface-variant">
                Notes de version officielles, analyses techniques de nos ingénieurs et annonces
                stratégiques du studio BGYT Inc™.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-outline absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher par mot-clé, tag..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container-low border border-surface-container-high text-on-surface font-body-sm focus:border-primary-container focus:outline-none"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {["ALL", "PATCH NOTE", "DEVLOG", "COMMUNAUTÉ", "STUDIO"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg font-label-code text-[11px] uppercase transition-all ${
                  selectedCategory === cat
                    ? "bg-primary-container text-on-primary font-bold shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {cat === "ALL" ? "Toutes les catégories" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {filteredNews.length === 0 ? (
            <div className="text-center py-20 text-outline space-y-2">
              <p className="font-headline-sm text-lg">Aucun communiqué correspondant.</p>
              <button
                onClick={() => {
                  setSelectedCategory("ALL");
                  setSearchQuery("");
                }}
                className="font-label-code text-xs text-primary hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article) => (
                <article
                  key={article.id}
                  id={article.id}
                  className="rounded-3xl bg-surface-container-low border border-surface-container-high overflow-hidden flex flex-col justify-between group hover:border-primary-container/40 transition-all"
                >
                  <div>
                    {/* Media */}
                    <div className="relative aspect-video w-full overflow-hidden bg-surface-container">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-badge text-label-badge font-bold">
                        {article.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 font-label-code text-[11px] text-outline">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {article.author}
                        </span>
                      </div>

                      <h3 className="font-headline-sm text-xl text-on-surface font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="font-body-sm text-[13.5px] text-on-surface-variant leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {article.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-surface-container-highest text-[10.5px] font-label-code text-on-surface-variant"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-surface-container-high/60 mt-4 flex items-center justify-between">
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="font-headline-sm text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                    >
                      <span>Lire le communiqué complet</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-surface-container-low border border-primary-container/40 p-6 sm:p-10 shadow-2xl space-y-6 relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-badge text-label-badge font-bold inline-block">
                {activeArticle.category}
              </span>
              <h2 className="font-headline-sm text-2xl sm:text-3xl text-on-surface font-extrabold">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-3 font-label-code text-xs text-outline">
                <span>Publié le {activeArticle.date}</span>
                <span>•</span>
                <span>Auteur : {activeArticle.author}</span>
              </div>
            </div>

            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-surface-container">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none text-on-surface-variant font-body-md text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
              {activeArticle.content}
            </div>

            <div className="pt-4 border-t border-surface-container-high flex flex-wrap items-center justify-between gap-4 font-label-code text-xs">
              <div className="flex flex-wrap gap-2">
                {activeArticle.tags.map((tg, idx) => (
                  <span key={idx} className="text-primary">
                    #{tg}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("Lien du communiqué copié dans le presse-papier !");
                }}
                className="flex items-center gap-1.5 text-outline hover:text-on-surface transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Partager</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

