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
  setupFee: number;
  monthly: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}
