"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { HelpCircle, ChevronDown, Search, Shield, Cpu, Gamepad2, Users } from "lucide-react";

export default function FAQPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-1": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const faqData = [
    {
      category: "Jeux & Gameplay",
      icon: Gamepad2,
      items: [
        {
          id: "faq-1",
          q: "Sur quelles plateformes les jeux BGYT Inc™ sont-ils disponibles ?",
          a: "Nos titres phares comme Chrono-Nexus: 2088 et Zero-Grav sont disponibles sur PC (Steam, Epic Games Store, Launcher BGYT propriétaire), PlayStation 5 et Xbox Series X|S. Le cross-play complet et la progression partagée sont activés par défaut via BGYT CloudSync™.",
        },
        {
          id: "faq-2",
          q: "Les jeux comportent-ils des microtransactions 'Pay-to-Win' ?",
          a: "Non. BGYT Inc™ applique une politique éditoriale stricte 'Zero Pay-to-Win'. Tous les achats intégrés sont exclusivement d'ordre cosmétique (skins d'armes, exochâssis, emotes) sans aucun impact sur les statistiques de jeu ou l'équilibre compétitif.",
        },
        {
          id: "faq-3",
          q: "Comment puis-je participer aux playtests privés des versions alpha/beta ?",
          a: "Vous pouvez vous inscrire gratuitement via le bouton 'Playtest Privé' disponible dans la barre de navigation ou sur la page de nos jeux. Les sélections s'effectuent par vagues régulières avec envoi de clés Steam confidentielles.",
        },
      ],
    },
    {
      category: "Technique & Configuration",
      icon: Cpu,
      items: [
        {
          id: "faq-4",
          q: "Quelle est la configuration matérielle minimale pour jouer dans de bonnes conditions ?",
          a: "Pour faire tourner nos titres en 1080p à 60 FPS, nous recommandons au minimum un processeur Intel Core i5 de 10e génération ou AMD Ryzen 5 3600, une carte graphique NVIDIA RTX 2060 ou AMD RX 5600 XT, 16 Go de RAM et un SSD NVMe pour bénéficier du streaming d'assets DirectStorage.",
        },
        {
          id: "faq-5",
          q: "Les jeux sont-ils compatibles avec le Steam Deck et Linux ?",
          a: "Oui, nos jeux sont entièrement testés et optimisés pour SteamOS et le Steam Deck via Proton et des binaires Vulkan natifs, garantissant une autonomie optimisée et un affichage 60 FPS stable.",
        },
      ],
    },
    {
      category: "Sécurité & Anti-Triche",
      icon: Shield,
      items: [
        {
          id: "faq-6",
          q: "Comment fonctionne la technologie BGYT Sentinel Anti-Cheat™ ?",
          a: "Sentinel est un bouclier heuristique combinant validation cryptographique des modules mémoire et détection cinétique par réseau neuronal. Contrairement aux solutions invasives, il ne scanne pas vos fichiers personnels et respecte scrupuleusement la réglementation européenne RGPD.",
        },
        {
          id: "faq-7",
          q: "Comment puis-je demander la suppression définitive de mes données personnelles ?",
          a: "Conformément à l'article 17 du RGPD, vous pouvez formuler une demande d'effacement de données via notre formulaire de contact ou directement par email à dpo@bgyt-inc.com. Le traitement est garanti sous 48 heures.",
        },
      ],
    },
    {
      category: "Recrutement & Studio",
      icon: Users,
      items: [
        {
          id: "faq-8",
          q: "Quel est le délai de réponse pour les candidatures transmises ?",
          a: "Nos Leads d'ingénierie et directeurs de département examinent directement chaque portfolio et commit soumis. Nous nous engageons formellement à répondre sous un délai maximal de 72 heures ouvrées.",
        },
        {
          id: "faq-9",
          q: "Acceptez-vous le télétravail à 100% ?",
          a: "Oui, la majorité de nos postes techniques (Gameplay C++, Netcode, Shaders, UI/UX) sont ouverts en télétravail intégral partout au sein de l'Union Européenne et au Royaume-Uni.",
        },
      ],
    },
  ];

  const filteredCategories = faqData
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (i) =>
          i.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          i.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <section className="relative py-20 bg-surface-container-lowest border-b border-surface-container-high overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-primary-container" />
            <span>BASE DE CONNAISSANCES OFFICIELLE</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h1 className="font-headline-lg text-4xl sm:text-5xl text-on-surface font-extrabold uppercase tracking-tight">
                Foire Aux Questions (F.A.Q)
              </h1>
              <p className="font-body-lg text-on-surface-variant">
                Retrouvez les réponses instantanées aux interrogations les plus fréquentes sur nos
                jeux, nos technologies et notre politique de recrutement.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-outline absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une question..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container-low border border-surface-container-high text-on-surface font-body-sm focus:border-primary-container focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordions List */}
      <section className="py-20 bg-background">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 text-outline space-y-2">
              <p className="font-headline-sm text-lg">Aucune question ne correspond à votre recherche.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="font-label-code text-xs text-primary hover:underline"
              >
                Réinitialiser la recherche
              </button>
            </div>
          ) : (
            filteredCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-surface-container-high">
                    <Icon className="w-5 h-5 text-primary-container" />
                    <h2 className="font-headline-sm text-xl text-on-surface font-bold uppercase tracking-wider">
                      {cat.category}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {cat.items.map((item) => {
                      const isOpen = openItems[item.id];
                      return (
                        <div
                          key={item.id}
                          className="rounded-2xl bg-surface-container-low border border-surface-container-high overflow-hidden transition-all"
                        >
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full p-5 text-left font-title-md text-base text-on-surface font-semibold flex items-center justify-between gap-4 hover:bg-surface-container/60 transition-colors"
                          >
                            <span>{item.q}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-outline shrink-0 transition-transform duration-300 ${
                                isOpen ? "rotate-180 text-primary-container" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-on-surface-variant font-body-sm text-[13.5px] leading-relaxed border-t border-surface-container-high/40 animate-in fade-in duration-200">
                              {item.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
