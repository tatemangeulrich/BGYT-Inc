"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Game,
  ApplicationItem,
  NewsArticle,
  TeamMember,
  CandidateApplication,
  AuditLog,
  SiteSettings,
} from "@/lib/types";
import {
  initialGames,
  initialApplications,
  initialNews,
  initialTeam,
  initialCandidates,
  initialAuditLogs,
  initialSiteSettings,
} from "@/lib/initialData";

interface SiteDataContextType {
  games: Game[];
  applications: ApplicationItem[];
  news: NewsArticle[];
  team: TeamMember[];
  candidates: CandidateApplication[];
  logs: AuditLog[];
  settings: SiteSettings;
  addCandidate: (app: Omit<CandidateApplication, "id" | "status" | "submittedAt">) => void;
  updateCandidateStatus: (id: string, status: CandidateApplication["status"]) => void;
  publishNews: (article: Omit<NewsArticle, "id">) => void;
  updateGame: (game: Game) => void;
  addGame: (game: Omit<Game, "id">) => void;
  deleteGame: (id: string) => void;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  addAuditLog: (title: string, detail: string, type?: AuditLog["type"]) => void;
  resetToDefaults: () => void;
}

const SiteDataContext = createContext<SiteDataContextType | null>(null);

export function SiteDataProvider({ children }: { children: React.ReactNode }) {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [applications] = useState<ApplicationItem[]>(initialApplications);
  const [news, setNews] = useState<NewsArticle[]>(initialNews);
  const [team] = useState<TeamMember[]>(initialTeam);
  const [candidates, setCandidates] = useState<CandidateApplication[]>(initialCandidates);
  const [logs, setLogs] = useState<AuditLog[]>(initialAuditLogs);
  const [settings, setSettings] = useState<SiteSettings>(initialSiteSettings);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedGames = localStorage.getItem("bgyt_games");
      if (savedGames) setGames(JSON.parse(savedGames));

      const savedNews = localStorage.getItem("bgyt_news");
      if (savedNews) setNews(JSON.parse(savedNews));

      const savedCandidates = localStorage.getItem("bgyt_candidates");
      if (savedCandidates) setCandidates(JSON.parse(savedCandidates));

      const savedLogs = localStorage.getItem("bgyt_logs");
      if (savedLogs) setLogs(JSON.parse(savedLogs));

      const savedSettings = localStorage.getItem("bgyt_settings");
      if (savedSettings) setSettings(JSON.parse(savedSettings));
    } catch (e) {
      console.error("Failed to load local state:", e);
    }
  }, []);

  const addAuditLog = (title: string, detail: string, type: AuditLog["type"] = "config") => {
    const newLog: AuditLog = {
      id: "log-" + Date.now(),
      title,
      detail: `${detail} • ${new Date().toLocaleTimeString("fr-FR")}`,
      timestamp: new Date().toLocaleTimeString("fr-FR"),
      type,
    };
    setLogs((prev) => {
      const updated = [newLog, ...prev.slice(0, 25)];
      localStorage.setItem("bgyt_logs", JSON.stringify(updated));
      return updated;
    });
  };

  const addCandidate = (cand: Omit<CandidateApplication, "id" | "status" | "submittedAt">) => {
    const newCand: CandidateApplication = {
      ...cand,
      id: "cand-" + Date.now(),
      status: "À Réviser",
      submittedAt: "À l'instant",
    };
    setCandidates((prev) => {
      const updated = [newCand, ...prev];
      localStorage.setItem("bgyt_candidates", JSON.stringify(updated));
      return updated;
    });
    addAuditLog(`Nouvelle candidature : ${cand.fullName}`, `Poste : ${cand.targetRole}`, "auth");
  };

  const updateCandidateStatus = (id: string, status: CandidateApplication["status"]) => {
    setCandidates((prev) => {
      const updated = prev.map((c) => (c.id === id ? { ...c, status } : c));
      localStorage.setItem("bgyt_candidates", JSON.stringify(updated));
      return updated;
    });
    addAuditLog(`Statut candidat modifié [${status}]`, `UUID: ${id}`, "config");
  };

  const publishNews = (article: Omit<NewsArticle, "id">) => {
    const newArticle: NewsArticle = {
      ...article,
      id: "news-" + Date.now(),
    };
    setNews((prev) => {
      const updated = [newArticle, ...prev];
      localStorage.setItem("bgyt_news", JSON.stringify(updated));
      return updated;
    });
    addAuditLog(`Publication du communiqué : ${article.title}`, "Diffusé sur CDN & portail", "deploy");
  };

  const updateGame = (updatedGame: Game) => {
    setGames((prev) => {
      const updated = prev.map((g) => (g.id === updatedGame.id ? updatedGame : g));
      localStorage.setItem("bgyt_games", JSON.stringify(updated));
      return updated;
    });
    addAuditLog(`Mise à jour jeu : ${updatedGame.title}`, `Version : ${updatedGame.version}`, "deploy");
  };

  const addGame = (gameData: Omit<Game, "id">) => {
    const newGame: Game = {
      ...gameData,
      id: "game-" + Date.now(),
    };
    setGames((prev) => {
      const updated = [...prev, newGame];
      localStorage.setItem("bgyt_games", JSON.stringify(updated));
      return updated;
    });
    addAuditLog(`Nouveau jeu ajouté : ${newGame.title}`, `Catégorie : ${newGame.category}`, "deploy");
  };

  const deleteGame = (id: string) => {
    setGames((prev) => {
      const updated = prev.filter((g) => g.id !== id);
      localStorage.setItem("bgyt_games", JSON.stringify(updated));
      return updated;
    });
    addAuditLog(`Jeu retiré du catalogue`, `UUID: ${id}`, "config");
  };

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem("bgyt_settings", JSON.stringify(updated));
      return updated;
    });
    addAuditLog(`Paramètres système mis à jour`, "Modifications appliquées", "config");
  };

  const resetToDefaults = () => {
    setGames(initialGames);
    setNews(initialNews);
    setCandidates(initialCandidates);
    setLogs(initialAuditLogs);
    setSettings(initialSiteSettings);
    localStorage.removeItem("bgyt_games");
    localStorage.removeItem("bgyt_news");
    localStorage.removeItem("bgyt_candidates");
    localStorage.removeItem("bgyt_logs");
    localStorage.removeItem("bgyt_settings");
    addAuditLog("Réinitialisation aux données d'usine", "Base de données réinitialisée", "database");
  };

  return (
    <SiteDataContext.Provider
      value={{
        games,
        applications,
        news,
        team,
        candidates,
        logs,
        settings,
        addCandidate,
        updateCandidateStatus,
        publishNews,
        updateGame,
        addGame,
        deleteGame,
        updateSettings,
        addAuditLog,
        resetToDefaults,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error("useSiteData must be used within a SiteDataProvider");
  }
  return context;
}
