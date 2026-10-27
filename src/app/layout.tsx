import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "BGYT Inc™ — Official Gaming Studio & Cyber Systems",
  description:
    "Site officiel de BGYT Inc™. Studio indépendant d'ingénierie vidéoludique dédié à la création d'univers immersifs nouvelle génération, de moteurs graphiques temps réel et d'architectures interactives d'ultra-haute précision.",
  keywords: [
    "BGYT Inc",
    "Jeux vidéo",
    "Gaming Studio",
    "Unreal Engine 5",
    "Chrono-Nexus",
    "Aetheria",
    "Zero-Grav",
    "NetEngine",
    "VR",
    "XR",
  ],
  authors: [{ name: "BGYT Inc™ Core Team" }],
  openGraph: {
    title: "BGYT Inc™ — Official Gaming Studio",
    description:
      "Forger le futur du jeu vidéo & des mondes cybernétiques. Découvrez nos productions, moteurs temps réel et opportunités de recrutement.",
    url: "https://bgyt-inc.com",
    siteName: "BGYT Inc™",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

