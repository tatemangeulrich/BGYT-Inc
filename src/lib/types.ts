export type Language = "fr" | "en" | "nl";

export interface Game {
  id: string;
  title: string;
  category: "all" | "pc-console" | "engine" | "vr-xr";
  badge: string;
  genre: string;
  version: string;
  status: "PRODUCTION LIVE" | "BETA PRIVÉE" | "MAINTENANCE PLANIFIÉE" | "EN DÉVELOPPEMENT";
  ping: string;
  description: string;
  image: string;
  features: string[];
  specs: {
    min: {
      cpu: string;
      gpu: string;
      ram: string;
      storage: string;
    };
    rec: {
      cpu: string;
      gpu: string;
      ram: string;
      storage: string;
    };
  };
  releaseDate: string;
  steamUrl?: string;
  downloadUrl?: string;
}

export interface ApplicationItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  icon: string;
  metrics: string;
  features: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  category: "PATCH NOTE" | "DEVLOG" | "COMMUNAUTÉ" | "STUDIO";
  date: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  author: string;
  lang?: "fr" | "en" | "nl" | "all";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Direction" | "Ingénierie" | "Art & 3D" | "Audio" | "Design";
  bio: string;
  avatar: string;
  status: string;
  socials?: {
    github?: string;
    artstation?: string;
    linkedin?: string;
    x?: string;
  };
}

export interface CandidateApplication {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  targetRole: string;
  experienceLevel: "junior" | "intermediate" | "senior" | "lead";
  portfolioUrl?: string;
  githubUrl?: string;
  notes?: string;
  status: "À Réviser" | "Entretien Planifié" | "Validé RH" | "Refusé";
  submittedAt: string;
}

export interface AuditLog {
  id: string;
  title: string;
  detail: string;
  timestamp: string;
  type: "auth" | "deploy" | "database" | "config";
}

export interface SiteSettings {
  siteName: string;
  heroHeadline: string;
  heroSubheadline: string;
  maintenanceMode: boolean;
  announcementBanner: string;
  announcementActive: boolean;
  discordMembers: number;
  activePlayers: number;
  launcherDownloads: number;
  contactEmail: string;
}

