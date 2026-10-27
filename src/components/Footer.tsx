"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Send,
  CheckCircle2,
  Server,
  ShieldCheck,
  Disc as DiscordIcon,
  Github,
  Youtube,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high/60 text-on-surface-variant relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface-container-low border border-primary-container/40 flex items-center justify-center">
                <span className="font-display-hero text-lg font-black text-primary-container">
                  B
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-sm text-title-md font-extrabold text-on-surface">
                    BGYT
                  </span>
                  <span className="font-headline-sm text-title-md font-bold text-primary-container">
                    INC
                  </span>
                  <span className="font-label-badge text-[9px] text-outline font-semibold">
                    ™
                  </span>
                </div>
                <span className="font-label-code text-[9px] tracking-widest text-outline uppercase">
                  OFFICIAL GAMING STUDIO
                </span>
              </div>
            </Link>

            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
              Studio indépendant de recherche & développement vidéoludique. Nous concevons des mondes
              cyber-immersifs, des moteurs graphiques temps réel et des protocoles réseau sans
              latence.
            </p>

            {/* Live Server Telemetry */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-surface-container-low border border-surface-container-high">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-label-code text-[11px] text-on-surface">
                {t("footer.status")}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-surface-container-low hover:bg-primary-container hover:text-on-primary flex items-center justify-center transition-all"
                title="Discord"
              >
                <DiscordIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/tatemange/BGYT-Inc"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-surface-container-low hover:bg-primary-container hover:text-on-primary flex items-center justify-center transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-surface-container-low hover:bg-primary-container hover:text-on-primary flex items-center justify-center transition-all"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-surface-container-low hover:bg-primary-container hover:text-on-primary flex items-center justify-center transition-all"
                title="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-label-badge text-label-badge text-primary uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 font-body-sm text-body-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/jeux" className="hover:text-primary transition-colors">
                  {t("nav.games")}
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-primary transition-colors">
                  {t("nav.apps")}
                </Link>
              </li>
              <li>
                <Link href="/projets" className="hover:text-primary transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio & Communauté */}
          <div className="space-y-3">
            <h4 className="font-label-badge text-label-badge text-primary uppercase tracking-wider">
              Studio & RH
            </h4>
            <ul className="space-y-2 font-body-sm text-body-sm">
              <li>
                <Link href="/recrutement" className="hover:text-primary transition-colors">
                  {t("nav.careers")}
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="hover:text-primary transition-colors">
                  {t("nav.team")}
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="hover:text-primary transition-colors">
                  {t("nav.news")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-primary-container hover:underline">
                  {t("nav.admin")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-3">
            <h4 className="font-label-badge text-label-badge text-primary uppercase tracking-wider">
              {t("footer.newsletter_title")}
            </h4>
            <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
              {t("footer.newsletter_desc")}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.newsletter_placeholder")}
                  required
                  className="w-full px-3 py-2 text-xs rounded bg-surface-container text-on-surface placeholder:text-outline border border-surface-container-high focus:border-primary-container focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-headline-sm text-xs font-bold flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(0,210,255,0.3)] hover:brightness-110 transition-all"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Inscrit avec succès !</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{t("btn.subscribe")}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & RGPD */}
        <div className="mt-14 pt-6 border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-4 font-label-code text-[11px] text-outline">
          <div>
            © {new Date().getFullYear()} BGYT Inc™. {t("footer.rights")}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/legal" className="hover:text-primary transition-colors">
              {t("footer.legal")}
            </Link>
            <span>•</span>
            <Link href="/legal" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
            <span>•</span>
            <Link href="/legal" className="hover:text-primary transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

