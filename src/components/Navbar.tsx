"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import {
  Search,
  Sun,
  Moon,
  Menu,
  X,
  Shield,
  Gamepad2,
  ChevronDown,
  Compass,
  Sparkles,
  Users,
  Mail,
  HelpCircle,
  FileText,
} from "lucide-react";

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenPlaytest: () => void;
}

export default function Navbar({ onOpenSearch, onOpenPlaytest }: NavbarProps) {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [overflowMenuOpen, setOverflowMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overflowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close overflow dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        overflowRef.current &&
        !overflowRef.current.contains(event.target as Node)
      ) {
        setOverflowMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOverflowMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // 1. Primary visible links (core studio pillars)
  const primaryNavLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/jeux", label: t("nav.games") },
    { href: "/applications", label: t("nav.apps") },
    { href: "/actualites", label: t("nav.news") },
    { href: "/recrutement", label: t("nav.careers") },
  ];

  // 2. Overflow submenu links ("Plus")
  const overflowNavLinks = [
    {
      href: "/a-propos",
      label: t("nav.about"),
      icon: Compass,
      desc: "Manifeste & Histoire",
    },
    {
      href: "/projets",
      label: t("nav.projects"),
      icon: Sparkles,
      desc: "R&D & Feuille de Route",
    },
    {
      href: "/equipe",
      label: t("nav.team"),
      icon: Users,
      desc: "Talents & Directeurs",
    },
    {
      href: "/contact",
      label: t("nav.contact"),
      icon: Mail,
      desc: "Assistance & Support",
    },
    {
      href: "/faq",
      label: t("nav.faq"),
      icon: HelpCircle,
      desc: "Foire Aux Questions",
    },
    {
      href: "/legal",
      label: t("footer.legal"),
      icon: FileText,
      desc: "Mentions Légales & RGPD",
    },
  ];

  const isOverflowActive = overflowNavLinks.some(
    (link) => pathname === link.href
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_16px_rgba(0,0,0,0.6)] py-2"
          : "bg-surface-container-lowest/80 backdrop-blur-md py-3"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            {/* Crest Hexagon Icon */}
            <div className="w-9 h-9 rounded-lg bg-surface-container-low border border-primary-container/40 flex items-center justify-center shadow-[0_0_12px_rgba(0,210,255,0.3)] group-hover:border-primary-container transition-all">
              <span className="font-display-hero text-lg font-black text-primary-container">
                B
              </span>
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary-container rounded-full animate-ping opacity-75"></span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-headline-sm text-title-md tracking-wider font-extrabold text-on-surface">
                BGYT
              </span>
              <span className="font-headline-sm text-title-md font-bold text-primary-container">
                INC
              </span>
              <span className="font-label-badge text-[9px] text-outline font-semibold">
                ™
              </span>
            </div>
            <span className="font-label-code text-[9px] tracking-widest text-outline uppercase hidden sm:block">
              CYBERNETIC STUDIOS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Overflow "Plus" Menu */}
        <nav className="hidden lg:flex items-center gap-1 shrink-0">
          {primaryNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg font-body-sm text-[13.5px] whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-surface-container-high text-primary-container font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Overflow Menu ("Plus") */}
          <div className="relative" ref={overflowRef}>
            <button
              onClick={() => setOverflowMenuOpen(!overflowMenuOpen)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-body-sm text-[13.5px] whitespace-nowrap transition-all ${
                isOverflowActive || overflowMenuOpen
                  ? "bg-surface-container-high text-primary-container font-semibold shadow-sm border border-primary-container/30"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
              }`}
            >
              <span>{t("nav.more")}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-outline transition-transform duration-200 ${
                  overflowMenuOpen ? "rotate-180 text-primary-container" : ""
                }`}
              />
              {isOverflowActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container ml-0.5" />
              )}
            </button>

            {/* Dropdown Panel */}
            {overflowMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-72 rounded-2xl bg-surface-container-low/95 backdrop-blur-2xl border border-primary-container/30 shadow-[0_12px_40px_rgba(0,0,0,0.7)] p-2 space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 border-b border-surface-container-high/60 mb-1">
                  <span className="font-label-badge text-[10px] text-outline uppercase tracking-wider">
                    SECTIONS COMPLÉMENTAIRES
                  </span>
                </div>

                {overflowNavLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOverflowMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${
                        isActive
                          ? "bg-primary-container/15 text-primary-container font-semibold"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive
                            ? "bg-primary-container text-on-primary"
                            : "bg-surface-container text-primary-container"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-sm text-[13px] whitespace-nowrap text-on-surface">
                          {item.label}
                        </span>
                        <span className="font-label-code text-[10px] text-outline">
                          {item.desc}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Right Tools & Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors shrink-0 whitespace-nowrap border border-surface-container-high/60"
            title="Recherche (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5 text-primary-container" />
            <span className="font-label-code text-[11px] hidden sm:inline text-outline">
              Ctrl+K
            </span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-surface-container-low p-0.5 rounded-lg border border-surface-container-high shrink-0">
            {(["fr", "en", "nl"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-0.5 rounded font-label-code text-[11px] uppercase transition-all whitespace-nowrap ${
                  language === lang
                    ? "bg-primary-container text-on-primary font-bold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors shrink-0 border border-surface-container-high/60"
            title="Basculer le thème"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-primary-container" />
            ) : (
              <Moon className="w-4 h-4 text-secondary-container" />
            )}
          </button>

          {/* Admin Link */}
          <Link
            href="/admin"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-code text-[11.5px] border border-outline-variant/40 hover:border-primary-container/50 transition-all shrink-0 whitespace-nowrap"
          >
            <Shield className="w-3.5 h-3.5 text-primary-container" />
            <span>Admin</span>
          </Link>

          {/* Quick Playtest CTA Button */}
          <button
            onClick={onOpenPlaytest}
            className="relative px-3 sm:px-4 py-1.5 rounded-lg bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-headline-sm text-xs font-bold flex items-center gap-1.5 shadow-[0_0_16px_rgba(0,210,255,0.4)] hover:shadow-[0_0_24px_rgba(0,210,255,0.7)] hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0"
          >
            <Gamepad2 className="w-3.5 h-3.5 shrink-0" />
            <span>{t("nav.quick_playtest")}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-surface-container lg:hidden text-on-surface shrink-0"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest/95 backdrop-blur-2xl border-b border-surface-container-high px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Primary group */}
          <div className="space-y-1">
            <span className="font-label-badge text-[10px] text-outline uppercase tracking-wider block px-3 mb-1">
              PRINCIPAUX
            </span>
            {primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-4 py-2 rounded-xl font-body-md transition-colors ${
                  pathname === link.href
                    ? "bg-primary-container/20 text-primary-container font-semibold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Overflow group */}
          <div className="space-y-1 pt-2 border-t border-surface-container-high/60">
            <span className="font-label-badge text-[10px] text-outline uppercase tracking-wider block px-3 mb-1">
              PLUS D'UNIVERS
            </span>
            {overflowNavLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl font-body-md transition-colors ${
                    pathname === link.href
                      ? "bg-primary-container/20 text-primary-container font-semibold"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  <Icon className="w-4 h-4 text-primary-container" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-surface-container-high/60">
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl bg-surface-container text-primary-container font-semibold flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span>{t("nav.admin")}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
