export type UnitId = "recife" | "caa";

export type DayId = "segunda" | "terca" | "quarta" | "quinta" | "sexta";

export type MealSlot = "desjejum" | "almoco" | "jantar";

export type MenuSection = {
  title: string;
  items: string[];
};

export type MenuMeal = {
  name: string;
  time?: string;
  sections: MenuSection[];
};

export type MenuDay = {
  dayId: DayId;
  dateLabel: string;
  meals: MenuMeal[];
};

export type MenuWeek = {
  days: MenuDay[];
  notes?: string[];
};

export type Pricing = {
  meal: MealSlot;
  student: number;
  visitor: number;
};

export type OperationHours = {
  meal: MealSlot;
  time: string;
};

export type Contact = {
  label: string;
  value: string;
  href: string;
};

export type BiometricsInfo = {
  title: string;
  details: string[];
};

export type Unit = {
  id: UnitId;
  name: string;
  shortName: string;
  campus: string;
  city: string;
  description: string;
  links: {
    site: string;
    instagram?: string;
    admin?: { name: string; url: string };
  };
  location: {
    label: string;
    mapUrl: string;
    sourceNote: string;
  };
  operation: OperationHours[];
  pricing: Pricing[];
  pricingNotes?: string[];
  eligibility: string;
  visitorAccess: string;
  biometrics: BiometricsInfo;
  contacts: Contact[];
  capacity?: string;
  menuWeek: MenuWeek;
  highlightImage: string;
};

export type Notice = {
  date: string;
  title: string;
};

export type AudienceProfile = {
  label: string;
  paymentShare: string;
  biometrics: string;
  access: string;
};
