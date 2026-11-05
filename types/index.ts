export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  includedMinutes: number;
  description: string;
  features: string[];
  /** "available" can be bought today; "coming-soon" shows its price but sells nothing yet. */
  status: "available" | "coming-soon";
  /** Short line under the price: when a coming-soon plan arrives, or why an available one exists. */
  availability: string;
  /** Days of notice to cancel. */
  noticeDays: number;
  highlighted?: boolean;
}
