import type { AudienceProfile, DayId, MealSlot } from "./types";

export const dayMeta: Record<
  DayId,
  { label: string; badge: string; colorName: string; step: string }
> = {
  segunda: {
    label: "Segunda-feira",
    badge: "badge-accent",
    colorName: "Amarelo ovo",
    step: "step-accent",
  },
  terca: {
    label: "Terça-feira",
    badge: "badge-success",
    colorName: "Verde alface",
    step: "step-success",
  },
  quarta: {
    label: "Quarta-feira",
    badge: "badge-info",
    colorName: "Azul frescor",
    step: "step-info",
  },
  quinta: {
    label: "Quinta-feira",
    badge: "badge-error",
    colorName: "Vermelho melancia",
    step: "step-error",
  },
  sexta: {
    label: "Sexta-feira",
    badge: "badge-neutral",
    colorName: "Cinza panela",
    step: "step-neutral",
  },
};

export const mealLabels: Record<MealSlot, string> = {
  desjejum: "Desjejum",
  almoco: "Almoço",
  jantar: "Jantar",
};

export const mealOrder: Record<MealSlot, number> = {
  desjejum: 0,
  almoco: 1,
  jantar: 2,
};

export const audiences: Record<"student" | "visitor", AudienceProfile> = {
  student: {
    label: "Estudantes",
    paymentShare:
      "Subsídio parcial: pagam cerca de 40% do valor de referência. Subsídio integral: isenção total conforme programas de assistência.",
    biometrics: "Cadastramento biométrico obrigatório para acesso.",
    access: "Acesso para estudantes regularmente matriculados com cadastro biométrico ativo.",
  },
  visitor: {
    label: "Visitantes",
    paymentShare: "Pagam o valor integral da refeição.",
    biometrics: "Não precisam de cadastramento biométrico.",
    access: "Acesso mediante pagamento da tarifa de visitante.",
  },
};
