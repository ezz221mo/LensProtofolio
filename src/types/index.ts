export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  featured?: boolean;
}

export interface WorkCategory {
  id: string;
  label: string;
}

export interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  features?: string[];
}

export interface StatItem {
  id: number;
  count: number;
  suffix?: string;
  label: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

/** Service package / pricing plan */
export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  featured?: boolean;
}

/** A step in the working process */
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

/** Career / company timeline entry */
export interface TimelineEvent {
  id: number;
  period: string;
  title: string;
  description: string;
}

/** Award received */
export interface AwardItem {
  id: number;
  title: string;
  year: string;
  description: string;
}

/** FAQ entry */
export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

/** Brand / client logo (text placeholder) */
export interface BrandItem {
  id: number;
  name: string;
}

/** Value / principle card */
export interface ValueItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}
