"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, FileText, Lock, Globe, Mail } from "lucide-react";

export default function LegalPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <section className="relative py-20 bg-surface-container-lowest border-b border-surface-container-high overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-primary-container" />
            <span>CONFORMITÉ JURIDIQUE &amp; RGPD (GDPR)</span>
          </div>

          <h1 className="font-headline-lg text-4xl sm:text-5xl text-on-surface font-extrabold uppercase tracking-tight">
            Mentions Légales &amp; Confidentialité
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            BGYT Inc™ s'engage pour une transparence absolue concernant la protection de vos données
            personnelles, le respect de la vie privée des joueurs et la conformité au Règlement
            Général sur la Protection des Données (RGPD 2016/679).
          </p>
        </div>
      </section>

      {/* Legal Text Content */}
      <section className="py-20 bg-background">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section 1: Mentions légales */}
          <div className="p-8 rounded-3xl bg-surface-container-low border border-surface-container-high space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="font-headline-sm text-2xl text-on-surface font-bold">
                1. Mentions Légales &amp; Éditeur
              </h2>
            </div>

            <div className="space-y-4 font-body-sm text-[13.5px] text-on-surface-variant leading-relaxed">
              <p>
                <strong>Éditeur du site :</strong> BGYT Inc™ — Société d'ingénierie vidéoludique et
                de technologies interactives.
              </p>
              <p>
                <strong>Siège social européen :</strong> BGYT Inc Studio, Rue de la Loi 1040
                Bruxelles (Belgique) &amp; Antenne R&amp;D Paris (France).
              </p>
              <p>
                <strong>Directeur de la Publication :</strong> Alexandre Roy, Fondateur &amp; R&amp;D Lead.
              </p>
              <p>
                <strong>Contact central :</strong> contact@bgyt-inc.com
              </p>
              <p>
                <strong>Hébergement de l'infrastructure :</strong> Vercel Inc., 340 S Lemon Ave #4133
                Walnut, CA 91789, USA &amp; Datacenters européens certifiés ISO/IEC 27001 (Frankfurt,
                Paris).
              </p>
            </div>
          </div>

          {/* Section 2: RGPD */}
          <div className="p-8 rounded-3xl bg-surface-container-low border border-surface-container-high space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="font-headline-sm text-2xl text-on-surface font-bold">
                2. Politique de Confidentialité &amp; Données Personnelles
              </h2>
            </div>

            <div className="space-y-4 font-body-sm text-[13.5px] text-on-surface-variant leading-relaxed">
              <h3 className="font-title-md text-base text-on-surface font-semibold pt-2">
                2.1 Données Collectées
              </h3>
              <p>
                Dans le cadre de l'utilisation du site et des services de playtest, BGYT Inc™ est
                susceptible de traiter :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Votre adresse email pour la newsletter et les notifications de mises à jour.</li>
                <li>Votre nom, email, téléphone et CV dans le cadre des candidatures d'ingénierie.</li>
                <li>Des logs de connexion anonymisés pour la sécurité et la détection anti-DDoS.</li>
              </ul>

              <h3 className="font-title-md text-base text-on-surface font-semibold pt-2">
                2.2 Vos Droits (Articles 15 à 22 du RGPD)
              </h3>
              <p>
                Vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement
                de vos données personnelles. Vous pouvez exercer ces droits à tout moment en
                adressant une demande écrite à notre Délégué à la Protection des Données (DPO) :
              </p>
              <div className="p-4 rounded-xl bg-surface-container-lowest font-label-code text-xs text-primary flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>dpo@bgyt-inc.com // Traitement sous 48h ouvrées garanti</span>
              </div>
            </div>
          </div>

          {/* Section 3: Propriété intellectuelle */}
          <div className="p-8 rounded-3xl bg-surface-container-low border border-surface-container-high space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="font-headline-sm text-2xl text-on-surface font-bold">
                3. Propriété Intellectuelle &amp; Marques
              </h2>
            </div>

            <div className="space-y-4 font-body-sm text-[13.5px] text-on-surface-variant leading-relaxed">
              <p>
                L'ensemble des contenus, marques, logos, concepts de jeux (notamment Chrono-Nexus:
                2088, Aetheria, Zero-Grav), moteurs (BGYT NetEngine™) et éléments visuels ou sonores
                présents sur ce site sont la propriété exclusive de BGYT Inc™.
              </p>
              <p>
                Toute reproduction, distribution ou exploitation sans autorisation écrite préalable
                est formellement interdite et constitutive de contrefaçon sanctionnée par le Code de
                la propriété intellectuelle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
