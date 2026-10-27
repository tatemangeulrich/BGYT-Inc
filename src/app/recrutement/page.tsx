"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteData } from "@/context/SiteDataContext";
import {
  Briefcase,
  Terminal,
  CheckCircle2,
  Send,
  MapPin,
  Clock,
  Sparkles,
  Award,
  Laptop,
  HeartHandshake,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Link as LinkIcon,
  Github,
} from "lucide-react";

export default function CareersPage() {
  const { t } = useLanguage();
  const { addCandidate } = useSiteData();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    targetRole: "Senior Gameplay Programmer (C++ / Unreal Engine 5)",
    experienceLevel: "senior" as const,
    portfolioUrl: "",
    githubUrl: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const perks = [
    {
      icon: Laptop,
      title: "Matériel R&D Sans Limite",
      desc: "Station de travail sur-mesure RTX 4090, 64 Go RAM DDR5, double écran 4K OLED et casques VR de test fournis.",
    },
    {
      icon: MapPin,
      title: "Flexibilité Hybride Totale",
      desc: "Télétravail complet en Europe ou accès à nos studios de Bruxelles, Paris et Amsterdam selon votre mode de vie.",
    },
    {
      icon: Award,
      title: "Intéressement aux Jeux",
      desc: "Chaque membre de l'équipe perçoit un pourcentage direct sur le chiffre d'affaires des ventes mondiales des titres.",
    },
    {
      icon: HeartHandshake,
      title: "Équilibre & Crunch Zéro",
      desc: "Gestion de projet agile stricte sans heures supplémentaires abusives, congés flexibles et mutuelle de santé haut de gamme.",
    },
  ];

  const jobs = [
    {
      id: "job-1",
      title: "Senior Gameplay Programmer (C++ / Unreal Engine 5)",
      dept: "Programmation",
      type: "CDI Temps Plein",
      location: "Bruxelles / Paris / Télétravail",
      desc: "Conception des mécaniques de combat cinématiques, intégration du gameplay temps réel et optimisation bas niveau.",
    },
    {
      id: "job-2",
      title: "Lead Environment 3D Artist",
      dept: "Direction Artistique",
      type: "CDI Temps Plein",
      location: "Amsterdam / Télétravail",
      desc: "Supervision des environnements photoréalistes, création d'assets modulaires et gestion de l'éclairage Lumen.",
    },
    {
      id: "job-3",
      title: "Backend & Network Systems Engineer (Go / Rust / PostgreSQL)",
      dept: "Infrastructure",
      type: "CDI Temps Plein",
      location: "Paris / Télétravail",
      desc: "Architecture des serveurs dédiés 128-tick, synchronisation multiplateforme et résistance aux attaques DDoS.",
    },
    {
      id: "job-4",
      title: "Technical Sound Designer & Audio Programmer (Wwise)",
      dept: "Audio",
      type: "CDI Temps Plein",
      location: "Bruxelles / Télétravail",
      desc: "Implémentation de l'audio spatial 3D, moteurs de réverbération dynamique et intégration Wwise/Unreal.",
    },
    {
      id: "job-5",
      title: "UI/UX Game Interface Designer",
      dept: "Design",
      type: "CDI Temps Plein",
      location: "Télétravail Européen",
      desc: "Création d'interfaces HUD cybernétiques diégétiques et non-diégétiques avec réactivité 120 FPS.",
    },
    {
      id: "job-6",
      title: "Candidature Spontanée (Art, Code, QA, Production)",
      dept: "Candidature Libre",
      type: "CDI / Freelance",
      location: "Monde Entier",
      desc: "Vous possédez une expertise rare ou une passion dévorante pour l'ingénierie vidéoludique ? Transmettez-nous votre portfolio.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    addCandidate({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      targetRole: formData.targetRole,
      experienceLevel: formData.experienceLevel,
      portfolioUrl: formData.portfolioUrl,
      githubUrl: formData.githubUrl,
      notes: formData.notes,
    });

    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="relative py-20 bg-surface-container-lowest border-b border-surface-container-high overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-primary-container" />
            <span>PORTAIL OFFICIEL CARRIÈRES // TALENT HUNT</span>
          </div>

          <h1 className="font-headline-lg text-4xl sm:text-5xl text-on-surface font-extrabold uppercase tracking-tight max-w-4xl">
            Construisez les Mondes de Demain avec BGYT Inc™
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Nous recherchons des esprits audacieux, des architectes logiciels méticuleux et des
            créateurs visuels capables de transformer des visions avant-gardistes en réalités
            interactives.
          </p>
        </div>
      </section>

      {/* Studio Perks */}
      <section className="py-20 bg-background border-b border-surface-container-high">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-label-badge text-label-badge text-primary-container uppercase">
              Avantages Studio
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-bold">
              Un Environnement Conçu pour l'Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline-sm text-lg text-on-surface font-bold">
                    {p.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant text-[13px] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="py-20 bg-surface-container-lowest border-b border-surface-container-high">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2 max-w-xl">
            <span className="font-label-badge text-label-badge text-primary-container uppercase">
              Opportunités Ouvertes
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-bold">
              Postes Vacants Immédiats
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Sélectionnez un rôle pour préremplir votre dossier de candidature ci-dessous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-3xl bg-surface-container-low border border-surface-container-high hover:border-primary-container/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-[10px] text-primary px-2 py-0.5 rounded bg-surface-container">
                      {job.dept}
                    </span>
                    <span className="font-label-code text-[11px] text-emerald-400 font-semibold">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-xl text-on-surface font-bold">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-1.5 font-label-code text-[11px] text-outline">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}</span>
                  </div>

                  <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                    {job.desc}
                  </p>
                </div>

                <a
                  href="#formulaire-candidature"
                  onClick={() => setFormData((prev) => ({ ...prev, targetRole: job.title }))}
                  className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-primary-container hover:text-on-primary text-on-surface font-headline-sm text-xs font-bold flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <span>Postuler pour ce rôle</span>
                  <Terminal className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Application Form */}
      <section id="formulaire-candidature" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-surface-container-low border border-primary-container/30 p-6 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-10 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-primary-container" />
                <span>SECURE RECRUITMENT PORTAL v3.8</span>
              </div>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-bold">
                Transmettez Votre Dossier d'Ingénierie
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Remplissez les spécifications de votre profil. Nos Leads d'équipe examinent
                directement les commits, portfolios et architectures soumis sous un délai garanti de
                72 heures.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4 max-w-lg mx-auto">
                <div className="w-16 h-16 rounded-full bg-primary-container/20 border border-primary-container text-primary-container flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-headline-sm text-2xl text-on-surface font-bold">
                  Dossier Transmis avec Succès !
                </h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  Merci <strong>{formData.fullName}</strong>. Votre candidature pour le poste de{" "}
                  <strong>{formData.targetRole}</strong> a été enregistrée dans notre console de
                  recrutement. Un accusé de réception vous a été adressé à {formData.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-code text-xs font-semibold"
                >
                  Transmettre un autre dossier
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-surface-container-high font-headline-sm text-sm text-primary uppercase">
                    <span className="w-6 h-6 rounded bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs">
                      01
                    </span>
                    <span>Identité &amp; Rôle Ciblé</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1">
                      <label className="block font-label-code text-label-code text-outline uppercase">
                        Nom complet *
                      </label>
                      <div className="flex items-center bg-surface-container-lowest px-3.5 py-3 rounded-xl border border-surface-container-high focus-within:border-primary-container">
                        <User className="w-4 h-4 text-outline mr-2" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="Ex: Alexandre Roy"
                          className="w-full bg-transparent text-on-surface font-body-sm focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block font-label-code text-label-code text-outline uppercase">
                        Adresse Email Directe *
                      </label>
                      <div className="flex items-center bg-surface-container-lowest px-3.5 py-3 rounded-xl border border-surface-container-high focus-within:border-primary-container">
                        <Mail className="w-4 h-4 text-outline mr-2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="dev@domain.tech"
                          className="w-full bg-transparent text-on-surface font-body-sm focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block font-label-code text-label-code text-outline uppercase">
                        Téléphone (Optionnel)
                      </label>
                      <div className="flex items-center bg-surface-container-lowest px-3.5 py-3 rounded-xl border border-surface-container-high focus-within:border-primary-container">
                        <Phone className="w-4 h-4 text-outline mr-2" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+33 6 00 00 00 00"
                          className="w-full bg-transparent text-on-surface font-body-sm focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1">
                      <label className="block font-label-code text-label-code text-outline uppercase">
                        Poste Visé *
                      </label>
                      <select
                        value={formData.targetRole}
                        onChange={(e) =>
                          setFormData({ ...formData, targetRole: e.target.value })
                        }
                        className="w-full px-3.5 py-3 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-sm focus:border-primary-container focus:outline-none"
                      >
                        {jobs.map((j) => (
                          <option key={j.id} value={j.title}>
                            {j.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block font-label-code text-label-code text-outline uppercase">
                        Niveau d'Expérience *
                      </label>
                      <select
                        value={formData.experienceLevel}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experienceLevel: e.target.value as any,
                          })
                        }
                        className="w-full px-3.5 py-3 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-sm focus:border-primary-container focus:outline-none"
                      >
                        <option value="junior">Junior (1 - 2 ans d'expérience)</option>
                        <option value="intermediate">Intermédiaire (3 - 5 ans)</option>
                        <option value="senior">Senior (5 - 8 ans)</option>
                        <option value="lead">Lead / Principal (8+ ans &amp; Direction)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-surface-container-high font-headline-sm text-sm text-primary uppercase">
                    <span className="w-6 h-6 rounded bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs">
                      02
                    </span>
                    <span>Portfolios &amp; Références Techniques</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="block font-label-code text-label-code text-outline uppercase">
                        Lien Portfolio / ArtStation / Démo Reel
                      </label>
                      <div className="flex items-center bg-surface-container-lowest px-3.5 py-3 rounded-xl border border-surface-container-high focus-within:border-primary-container">
                        <LinkIcon className="w-4 h-4 text-outline mr-2" />
                        <input
                          type="url"
                          value={formData.portfolioUrl}
                          onChange={(e) =>
                            setFormData({ ...formData, portfolioUrl: e.target.value })
                          }
                          placeholder="https://artstation.com/nom ou vimeo..."
                          className="w-full bg-transparent text-on-surface font-body-sm focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block font-label-code text-label-code text-outline uppercase">
                        Dépôt GitHub / GitLab / Code source
                      </label>
                      <div className="flex items-center bg-surface-container-lowest px-3.5 py-3 rounded-xl border border-surface-container-high focus-within:border-primary-container">
                        <Github className="w-4 h-4 text-outline mr-2" />
                        <input
                          type="url"
                          value={formData.githubUrl}
                          onChange={(e) =>
                            setFormData({ ...formData, githubUrl: e.target.value })
                          }
                          placeholder="https://github.com/votre-compte"
                          className="w-full bg-transparent text-on-surface font-body-sm focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-label-code text-label-code text-outline uppercase">
                      Notes Personnelles &amp; Projets Notables
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Décrivez brièvement les moteurs de jeu maîtrisés, vos contributions open-source ou vos architectures préférées..."
                      className="w-full p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-sm focus:border-primary-container focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 font-label-code text-xs text-outline">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Données chiffrées AES-256 conformément au RGPD</span>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-headline-sm text-title-md font-bold flex items-center gap-2 shadow-[0_0_24px_rgba(0,210,255,0.4)] hover:brightness-110 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t("btn.submit_application")}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
