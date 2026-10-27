"use client";

import React, { useState, useEffect } from "react";
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
  Sparkles,
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/a-propos", label: t("nav.about") },
    { href: "/jeux", label: t("nav.games") },
    { href: "/applications", label: t("nav.apps") },
    { href: "/projets", label: t("nav.projects") },
    { href: "/actualites", label: t("nav.news") },
    { href: "/equipe", label: t("nav.team") },
    { href: "/recrutement", label: t("nav.careers") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_16px_rgba(0,0,0,0.6)] py-2"
          : "bg-surface-container-lowest/80 backdrop-blur-md py-3"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
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

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded font-body-sm text-[13.5px] transition-all ${
                  isActive
                    ? "bg-surface-container-high text-primary-container font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Tools & Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"
            title="Recherche (Ctrl + K)"
          >
            <Search className="w-4 h-4 text-primary-container" />
            <span className="font-label-code text-[11px] hidden md:inline text-outline">
              Ctrl+K
            </span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-surface-container-low p-0.5 rounded border border-surface-container-high">
            {(["fr", "en", "nl"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-0.5 rounded font-label-code text-[11px] uppercase transition-all ${
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
            className="p-1.5 rounded bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"
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
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-code text-[11.5px] border border-outline-variant/40 hover:border-primary-container/50 transition-all"
          >
            <Shield className="w-3.5 h-3.5 text-primary-container" />
            <span>Admin</span>
          </Link>

          {/* Quick Playtest CTA Button */}
          <button
            onClick={onOpenPlaytest}
            className="relative px-3.5 py-1.5 rounded bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-headline-sm text-body-sm font-bold flex items-center gap-1.5 shadow-[0_0_16px_rgba(0,210,255,0.4)] hover:shadow-[0_0_24px_rgba(0,210,255,0.7)] hover:-translate-y-0.5 transition-all"
          >
            <Gamepad2 className="w-4 h-4" />
            <span className="hidden sm:inline">{t("nav.quick_playtest")}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded bg-surface-container xl:hidden text-on-surface"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/95 backdrop-blur-2xl border-b border-surface-container-high px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded font-body-md transition-colors ${
                  pathname === link.href
                    ? "bg-primary-container/20 text-primary-container font-semibold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded bg-surface-container text-primary-container font-semibold flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span>{t("nav.admin")}</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
