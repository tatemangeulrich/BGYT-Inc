"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteData } from "@/context/SiteDataContext";
import {
  Mail,
  Send,
  MessageSquare,
  Disc as DiscordIcon,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const { addAuditLog } = useSiteData();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Support Joueur & Technique",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    addAuditLog(
      `Message de contact reçu : ${formData.subject || formData.category}`,
      `De: ${formData.email} (${formData.name})`,
      "config"
    );
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <section className="relative py-20 bg-surface-container-lowest border-b border-surface-container-high overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
            <Mail className="w-4 h-4 text-primary-container" />
            <span>TRANSMISSIONS DIRECTES &amp; SUPPORT</span>
          </div>

          <h1 className="font-headline-lg text-4xl sm:text-5xl text-on-surface font-extrabold uppercase tracking-tight max-w-4xl">
            Contact &amp; Assistance BGYT Inc™
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Une question technique sur nos jeux, une proposition de partenariat ou une demande de
            presse ? Notre équipe de support et nos directeurs d'équipe vous répondent rapidement.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Discord (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-surface-container-low border border-surface-container-high space-y-6">
                <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
                  Coordonnées Officielles
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-label-code text-[11px] text-outline uppercase block">
                        Email Central
                      </span>
                      <a
                        href="mailto:contact@bgyt-inc.com"
                        className="font-body-md text-on-surface font-semibold hover:text-primary transition-colors"
                      >
                        contact@bgyt-inc.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-label-code text-[11px] text-outline uppercase block">
                        Quartier Général
                      </span>
                      <p className="font-body-md text-on-surface">
                        BGYT Inc™ Gaming Hub Europe
                        <br />
                        Bruxelles &amp; Paris
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-label-code text-[11px] text-outline uppercase block">
                        Support Joueur
                      </span>
                      <p className="font-body-md text-on-surface">
                        24h/24 &amp; 7j/7 via ticket Discord
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discord Banner */}
              <div className="p-8 rounded-3xl bg-[#5865F2]/10 border border-[#5865F2]/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#5865F2] flex items-center justify-center text-white">
                    <DiscordIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-lg text-on-surface font-bold">
                      Besoin d'aide immédiate ?
                    </h4>
                    <span className="font-label-code text-xs text-[#5865F2]">
                      14,250 membres actifs
                    </span>
                  </div>
                </div>

                <p className="font-body-sm text-on-surface-variant text-[13px] leading-relaxed">
                  Notre équipe de modération et nos développeurs sont connectés en permanence sur le
                  serveur officiel.
                </p>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-headline-sm text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Rejoindre le Support Discord</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-surface-container-low border border-primary-container/30 shadow-2xl space-y-6">
                <div>
                  <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
                    Transmettre un Message
                  </h3>
                  <p className="font-body-sm text-on-surface-variant mt-1">
                    Sélectionnez la catégorie appropriée pour diriger votre demande vers le bon
                    service.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary-container/20 border border-primary-container text-primary-container flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-headline-sm text-xl text-on-surface font-bold">
                      Message Transmis avec Succès !
                    </h4>
                    <p className="font-body-sm text-on-surface-variant max-w-sm mx-auto">
                      Nous avons bien reçu votre demande. Un membre de notre équipe vous répondra à{" "}
                      <strong>{formData.email}</strong> dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-code text-xs font-semibold"
                    >
                      Envoyer un nouveau message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block font-label-code text-label-code text-outline uppercase">
                          Votre Nom *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Vance"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-sm focus:border-primary-container focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="block font-label-code text-label-code text-outline uppercase">
                          Votre Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@domain.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-sm focus:border-primary-container focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block font-label-code text-label-code text-outline uppercase">
                        Catégorie de la Demande *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-sm focus:border-primary-container focus:outline-none"
                      >
                        <option value="Support Joueur & Technique">
                          Support Joueur &amp; Signalement de Bug
                        </option>
                        <option value="Partenariat & Presse">
                          Relations Presse &amp; Créateurs de Contenu
                        </option>
                        <option value="Licences BGYT NetEngine">
                          Licence Moteur &amp; BGYT NetEngine™
                        </option>
                        <option value="Autre Demande">Autre Demande Institutionnelle</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block font-label-code text-label-code text-outline uppercase">
                        Objet du Message
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Ex: Demande de clé presse Chrono-Nexus"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-sm focus:border-primary-container focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-label-code text-label-code text-outline uppercase">
                        Votre Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Détaillez votre demande..."
                        className="w-full p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-sm focus:border-primary-container focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-headline-sm text-title-md font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:brightness-110 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t("btn.send_message")}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

