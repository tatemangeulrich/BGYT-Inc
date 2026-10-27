"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSiteData } from "@/context/SiteDataContext";
import { Search, X, Gamepad2, Newspaper, Briefcase, Users, ArrowRight } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const { games, news, team } = useSiteData();
  const [query, setQuery] = useState("");

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredGames = query.trim()
    ? games.filter(
        (g) =>
          g.title.toLowerCase().includes(query.toLowerCase()) ||
          g.genre.toLowerCase().includes(query.toLowerCase()) ||
          g.description.toLowerCase().includes(query.toLowerCase())
      )
    : games.slice(0, 3);

  const filteredNews = query.trim()
    ? news.filter(
        (n) =>
          n.title.toLowerCase().includes(query.toLowerCase()) ||
          n.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          n.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : news.slice(0, 3);

  const filteredTeam = query.trim()
    ? team.filter(
        (m) =>
          m.name.toLowerCase().includes(query.toLowerCase()) ||
          m.role.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl rounded-2xl bg-surface-container-low border border-primary-container/30 shadow-[0_0_40px_rgba(0,210,255,0.25)] overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-surface-container-high gap-3">
          <Search className="w-5 h-5 text-primary-container shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher jeux, patch notes, devlogs, carrières..."
            className="flex-1 bg-transparent text-on-surface placeholder:text-outline font-body-md focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded hover:bg-surface-container text-outline"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-surface-container font-label-code text-[11px] text-outline"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {/* Games Section */}
          {filteredGames.length > 0 && (
            <div className="space-y-2">
              <span className="font-label-badge text-label-badge text-primary uppercase flex items-center gap-1.5 px-2">
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Titres Vidéoludiques ({filteredGames.length})</span>
              </span>
              <div className="space-y-1">
                {filteredGames.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => handleSelect(`/jeux#${game.id}`)}
                    className="w-full p-2.5 rounded-lg bg-surface-container/60 hover:bg-surface-container flex items-center justify-between text-left group transition-colors"
                  >
                    <div>
                      <div className="font-title-md text-body-sm text-on-surface group-hover:text-primary transition-colors">
                        {game.title}
                      </div>
                      <div className="font-label-code text-[11px] text-outline">
                        {game.genre} • {game.version}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* News Section */}
          {filteredNews.length > 0 && (
            <div className="space-y-2">
              <span className="font-label-badge text-label-badge text-primary uppercase flex items-center gap-1.5 px-2">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Actualités & Devlogs ({filteredNews.length})</span>
              </span>
              <div className="space-y-1">
                {filteredNews.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => handleSelect(`/actualites#${article.id}`)}
                    className="w-full p-2.5 rounded-lg bg-surface-container/60 hover:bg-surface-container flex items-center justify-between text-left group transition-colors"
                  >
                    <div>
                      <div className="font-title-md text-body-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                        {article.title}
                      </div>
                      <div className="font-label-code text-[11px] text-outline">
                        {article.date} • {article.category}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Team Section (if searching) */}
          {filteredTeam.length > 0 && (
            <div className="space-y-2">
              <span className="font-label-badge text-label-badge text-primary uppercase flex items-center gap-1.5 px-2">
                <Users className="w-3.5 h-3.5" />
                <span>Membres de l'Équipe ({filteredTeam.length})</span>
              </span>
              <div className="space-y-1">
                {filteredTeam.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => handleSelect(`/equipe#${member.id}`)}
                    className="w-full p-2.5 rounded-lg bg-surface-container/60 hover:bg-surface-container flex items-center justify-between text-left group transition-colors"
                  >
                    <div>
                      <div className="font-title-md text-body-sm text-on-surface group-hover:text-primary transition-colors">
                        {member.name}
                      </div>
                      <div className="font-label-code text-[11px] text-outline">
                        {member.role} ({member.department})
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Shortcuts */}
          <div className="pt-2 border-t border-surface-container-high flex flex-wrap gap-2 text-[11px] font-label-code text-outline">
            <span>Raccourcis :</span>
            <button
              onClick={() => handleSelect("/recrutement")}
              className="text-primary hover:underline flex items-center gap-1"
            >
              <Briefcase className="w-3 h-3" /> Postes ouverts
            </button>
            <span>•</span>
            <button
              onClick={() => handleSelect("/faq")}
              className="text-primary hover:underline"
            >
              F.A.Q
            </button>
            <span>•</span>
            <button
              onClick={() => handleSelect("/admin")}
              className="text-primary hover:underline"
            >
              Console Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

