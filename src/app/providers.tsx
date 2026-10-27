"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { SiteDataProvider } from "@/context/SiteDataContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import PlaytestModal from "@/components/PlaytestModal";
import NotificationBanner from "@/components/NotificationBanner";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [playtestOpen, setPlaytestOpen] = useState(false);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <SiteDataProvider>
          <Navbar
            onOpenSearch={() => setSearchOpen(true)}
            onOpenPlaytest={() => setPlaytestOpen(true)}
          />
          <main className="flex-1 pt-16 sm:pt-20">{children}</main>
          <Footer />
          <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
          <PlaytestModal isOpen={playtestOpen} onClose={() => setPlaytestOpen(false)} />
          <NotificationBanner />
        </SiteDataProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

