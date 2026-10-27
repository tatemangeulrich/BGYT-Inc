"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Gamepad2, ShieldCheck, Mail, Cpu, User } from "lucide-react";
import { useSiteData } from "@/context/SiteDataContext";

interface PlaytestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGame?: string;
}

export default function PlaytestModal({
  isOpen,
  onClose,
  defaultGame = "Chrono-Nexus: 2088",
}: PlaytestModalProps) {
  const { games, addAuditLog } = useSiteData();
  const [selectedGame, setSelectedGame] = useState(defaultGame);
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("PC (Steam / Epic)");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    addAuditLog(`Inscription Playtest : ${email}`, `Jeu: ${selectedGame} (${platform})`, "auth");
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg rounded-2xl bg-surface-container-low border border-primary-container/40 shadow-[0_0_50px_rgba(0,210,255,0.3)] p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-primary-container/20 border border-primary-container text-primary-container flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Accès Playtest Enregistré !
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
              Votre clé d'accès privée pour <strong>{selectedGame}</strong> vous sera envoyée
              par email avant la prochaine vague de tests.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
                <Gamepad2 className="w-3.5 h-3.5 text-primary-container" />
                <span>BGYT EARLY ACCESS PROTOCOL</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Demande d'Accès Playtest Privé
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Participez aux tests confidentiels sous accord de non-divulgation (NDA) et
                influencez directement le développement.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="block font-label-code text-label-code text-outline uppercase">
                  Titre Ciblé
                </label>
                <select
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  className="w-full px-3 py-2.5 rounded bg-surface-container text-on-surface font-body-sm border border-surface-container-high focus:border-primary-container focus:outline-none"
                >
                  {games.map((g) => (
                    <option key={g.id} value={g.title}>
                      {g.title} ({g.version})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block font-label-code text-label-code text-outline uppercase">
                  Plateforme de Test
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full px-3 py-2.5 rounded bg-surface-container text-on-surface font-body-sm border border-surface-container-high focus:border-primary-container focus:outline-none"
                >
                  <option value="PC (Steam / Epic)">PC Windows (DirectX 12 / Vulkan)</option>
                  <option value="PlayStation 5">PlayStation 5 Dev Kit / Retail</option>
                  <option value="Xbox Series X">Xbox Series X|S</option>
                  <option value="VR / Quest 3">Casque VR (Meta Quest 3 / SteamVR)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block font-label-code text-label-code text-outline uppercase">
                  Adresse Email pour Réception de Clé
                </label>
                <div className="flex items-center bg-surface-container px-3 py-2.5 rounded border border-surface-container-high focus-within:border-primary-container">
                  <Mail className="w-4 h-4 text-outline mr-2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="pilote@domaine.com"
                    className="w-full bg-transparent text-on-surface font-body-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-3 rounded bg-surface-container text-outline font-label-code text-[11px] flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                <span>
                  Validation FIDO2 & télémétrie de crash anonymisée conformément au RGPD.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-headline-sm text-title-md font-bold shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:brightness-110 transition-all"
              >
                Valider &amp; Réserver mon Emplacement
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
