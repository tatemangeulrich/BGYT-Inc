"use client";

import React, { useState, useEffect } from "react";
import { Bell, ShieldCheck, Check, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotificationBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("bgyt_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("bgyt_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("bgyt_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="p-4 rounded-xl bg-surface-container-low/95 backdrop-blur-xl border border-primary-container/30 shadow-[0_4px_24px_rgba(0,0,0,0.6)] space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded bg-surface-container-high text-primary-container flex items-center justify-center shrink-0">
            <Bell className="w-4 h-4 animate-bounce" />
          </div>
          <div className="space-y-1">
            <div className="font-title-md text-body-sm text-on-surface font-semibold flex items-center gap-1.5">
              <span>Consentement Mises à Jour &amp; Cookies RGPD</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
              BGYT Inc™ utilise des cookies techniques pour mémoriser votre langue et des
              notifications optionnelles pour vous alerter des nouveaux patchs de jeu.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-1 font-label-code text-[11px]">
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors"
          >
            {t("btn.decline_cookies")}
          </button>
          <button
            onClick={handleAccept}
            className="px-3 py-1.5 rounded bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-bold shadow-[0_0_12px_rgba(0,210,255,0.4)] transition-all"
          >
            {t("btn.accept_cookies")}
          </button>
        </div>
      </div>
    </div>
  );
}

