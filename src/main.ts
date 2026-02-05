import "./style.css";

type UnitId = "recife" | "caa";

type DayId = "segunda" | "terca" | "quarta" | "quinta" | "sexta";

type MealSlot = "desjejum" | "almoco" | "jantar";

type MenuSection = {
  title: string;
  items: string[];
};

type MenuMeal = {
  name: string;
  time?: string;
  sections: MenuSection[];
};

type MenuDay = {
  dayId: DayId;
  dateLabel: string;
  meals: MenuMeal[];
};

type MenuWeek = {
  days: MenuDay[];
  notes?: string[];
};

type Pricing = {
  meal: MealSlot;
  student: number;
  visitor: number;
};

type OperationHours = {
  meal: MealSlot;
  time: string;
};

type Contact = {
  label: string;
  value: string;
  href: string;
};

type BiometricsInfo = {
  title: string;
  details: string[];
};

type Unit = {
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

type Notice = {
  date: string;
  title: string;
};

type AudienceProfile = {
  label: string;
  paymentShare: string;
  biometrics: string;
  access: string;
};

const assets = {
  logoHorizontal: new URL("./assets/logo-ru-horizontal.svg", import.meta.url).href,
  logoVertical: new URL("./assets/logo-ru-vertical.svg", import.meta.url).href,
  brandLight: new URL("./assets/brand-light.svg", import.meta.url).href,
  brandDark: new URL("./assets/brand-dark.svg", import.meta.url).href,
  brandMonoHorizontal: new URL(
    "./assets/brand-monochrome-horizontal-light.svg",
    import.meta.url,
  ).href,
  brandMonoVertical: new URL(
    "./assets/brand-monochrome-vertical-light.svg",
    import.meta.url,
  ).href,
  signatureHorizontal: new URL(
    "./assets/institutional-signature-horizontal.svg",
    import.meta.url,
  ).href,
  signatureVertical: new URL(
    "./assets/institutional-signature-vertical.svg",
    import.meta.url,
  ).href,
  cutlery: new URL("./assets/cutlery-plates.svg", import.meta.url).href,
  desserts: new URL("./assets/desserts.svg", import.meta.url).href,
  frutas: new URL("./assets/frutas.svg", import.meta.url).href,
  mosaic: new URL("./assets/mosaic.svg", import.meta.url).href,
};

const dayMeta: Record<
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

const mealLabels: Record<MealSlot, string> = {
  desjejum: "Desjejum",
  almoco: "Almoço",
  jantar: "Jantar",
};

const mealOrder: Record<MealSlot, number> = {
  desjejum: 0,
  almoco: 1,
  jantar: 2,
};

const audiences: Record<"student" | "visitor", AudienceProfile> = {
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

const notices: Notice[] = [
  {
    date: "29/01/2026",
    title: "Restaurante Universitário do Campus Recife retoma atividades",
  },
  {
    date: "15/04/2025",
    title:
      "UFPE informa sobre funcionamento do RU nos feriados de Semana Santa e Tiradentes",
  },
  {
    date: "28/02/2025",
    title:
      "UFPE divulga funcionamento do Restaurante Universitário no feriado do Carnaval e da Data Magna",
  },
  {
    date: "05/02/2025",
    title:
      "RU dos campi Recife e do Agreste têm funcionamento reduzido devido às chuvas",
  },
  {
    date: "19/12/2024",
    title: "Proaes divulga funcionamento do RU durante o recesso acadêmico",
  },
];

const units: Record<UnitId, Unit> = {
  recife: {
    id: "recife",
    name: "Restaurante Universitário Recife (RU UFPE)",
    shortName: "RU Recife",
    campus: "Campus Recife",
    city: "Recife - PE",
    description:
      "Refeições subsidiadas para estudantes e atendimento a servidores e visitantes no campus Recife.",
    links: {
      site: "https://www.ufpe.br/restaurante",
      instagram: "https://www.instagram.com/ruufpe",
      admin: { name: "General Goods", url: "https://ggoods.com.br/" },
    },
    location: {
      label: "Avenida dos Reitores, Cidade Universitária, Recife - PE",
      mapUrl: "https://maps.app.goo.gl/Uyx5pLMnQY6RFXj79",
      sourceNote: "Endereço indicado na página institucional do RU Recife.",
    },
    operation: [
      { meal: "desjejum", time: "07h às 08h" },
      { meal: "almoco", time: "10h30 às 14h30" },
      { meal: "jantar", time: "17h às 19h" },
    ],
    pricing: [
      { meal: "desjejum", student: 11.09, visitor: 11.09 },
      { meal: "almoco", student: 4.78, visitor: 12.84 },
      { meal: "jantar", student: 4.88, visitor: 13.11 },
    ],
    pricingNotes: [
      "Subsídio integral: gratuito para estudantes vinculados a programas de assistência estudantil.",
      "Desjejum subsidiado exclusivo para estudantes do Programa de Moradia; demais estudantes pagam valor integral.",
    ],
    eligibility:
      "Subsídio integral: estudantes de graduação vinculados a programas de assistência estudantil (moradia, auxílio permanência, alimentação, creche ou emergencial). Subsídio parcial: estudantes regularmente matriculados na graduação e pós-graduação. Servidores e visitantes pagam valor integral.",
    visitorAccess:
      "Servidores e visitantes podem utilizar mediante pagamento integral da refeição.",
    biometrics: {
      title: "Cadastramento facial",
      details: [
        "Cadastro disponível de segunda a sexta, das 08h às 19h.",
        "Local: 1ª entrada do RU.",
        "Apresentar documento oficial com foto e comprovante de vínculo com a UFPE.",
        "Ativação em até 24 horas após o cadastro.",
      ],
    },
    contacts: [
      { label: "E-mail", value: "ru@ufpe.br", href: "mailto:ru@ufpe.br" },
      { label: "WhatsApp", value: "(81) 2126-7181", href: "tel:+558121267181" },
    ],
    menuWeek: {
      days: [
        {
          dayId: "segunda",
          dateLabel: "02/02",
          meals: [
            {
              name: "Cardápio do dia",
              sections: [
                { title: "Entrada", items: ["Fruta"] },
                { title: "Salada crua", items: ["Salada crua", "Salada crua"] },
                {
                  title: "Salada cozida",
                  items: ["Batata, beterraba e chuchu"],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Carne moída",
                    "Almôndegas veganas",
                    "Frango caipira",
                    "Risoto de grão-de-bico (contém lactose)",
                    "Bife de carne ao molho madeira",
                    "Torta Madalena de soja (contém lactose)",
                  ],
                },
                {
                  title: "Guarnição",
                  items: [
                    "Macaxeira",
                    "Feijão mulatinho",
                    "Arroz com milho",
                    "Espaguete ao alho e óleo (contém glúten)",
                    "Cuscuz",
                  ],
                },
                {
                  title: "Acompanhamento",
                  items: [
                    "Farofa de cuscuz",
                    "Sopa de feijão vegetariana (contém glúten)",
                    "Canja",
                  ],
                },
                { title: "Sobremesa", items: ["Fruta"] },
                {
                  title: "Bebida",
                  items: [
                    "Achocolatado (contém lactose)",
                    "Café",
                    "Café com leite (contém lactose)",
                    "Suco",
                  ],
                },
                {
                  title: "Complemento",
                  items: [
                    "Pão (contém glúten)",
                    "Manteiga (contém lactose)",
                  ],
                },
              ],
            },
          ],
        },
        {
          dayId: "terca",
          dateLabel: "03/02",
          meals: [
            {
              name: "Cardápio do dia",
              sections: [
                { title: "Entrada", items: ["Fruta"] },
                { title: "Salada crua", items: ["Salada crua", "Salada crua"] },
                {
                  title: "Salada cozida",
                  items: ["Abobrinha, beterraba e chuchu"],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Ovos mexidos",
                    "Homus",
                    "Peixe à dorê (contém glúten)",
                    "Moqueca de banana",
                    "Frango ao forno",
                    "Bolonhesa de lentilha",
                  ],
                },
                {
                  title: "Guarnição",
                  items: [
                    "Cuscuz",
                    "Feijão macassar",
                    "Arroz branco",
                    "Arroz refogado",
                    "Macaxeira",
                  ],
                },
                {
                  title: "Acompanhamento",
                  items: [
                    "Pirão de peixe",
                    "Creme de batata",
                    "Sopa de legumes com carne (contém glúten)",
                  ],
                },
                { title: "Sobremesa", items: ["Gelatina de morango"] },
                {
                  title: "Bebida",
                  items: [
                    "Suco",
                    "Café",
                    "Café com leite (contém lactose)",
                  ],
                },
                {
                  title: "Complemento",
                  items: [
                    "Pão (contém glúten)",
                    "Manteiga (contém lactose)",
                  ],
                },
              ],
            },
          ],
        },
        {
          dayId: "quarta",
          dateLabel: "04/02",
          meals: [
            {
              name: "Cardápio do dia",
              sections: [
                { title: "Entrada", items: ["Fruta"] },
                { title: "Salada crua", items: ["Salada crua", "Salada crua"] },
                {
                  title: "Salada cozida",
                  items: ["Batata, abóbora e vagem"],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Queijo prato",
                    "Pasta de amendoim",
                    "Frango ao molho de queijo (contém glúten e lactose)",
                    "Lentilha com cebolas caramelizadas",
                    "Toscana acebolada",
                    "Empadão vegano (contém glúten)",
                  ],
                },
                {
                  title: "Guarnição",
                  items: [
                    "Banana comprida",
                    "Feijão preto",
                    "Arroz com cenoura",
                    "Arroz branco",
                    "Cará",
                  ],
                },
                {
                  title: "Acompanhamento",
                  items: [
                    "Farofa com batata palha",
                    "Sopa de legumes (contém glúten)",
                    "Sopa creme de macaxeira com charque (contém lactose)",
                  ],
                },
                { title: "Sobremesa", items: ["Fruta"] },
                {
                  title: "Bebida",
                  items: [
                    "Bebida láctea (contém lactose)",
                    "Café",
                    "Café com leite (contém lactose)",
                    "Suco",
                  ],
                },
                {
                  title: "Complemento",
                  items: [
                    "Pão (contém glúten)",
                    "Manteiga (contém lactose)",
                  ],
                },
              ],
            },
          ],
        },
        {
          dayId: "quinta",
          dateLabel: "05/02",
          meals: [
            {
              name: "Cardápio do dia",
              sections: [
                { title: "Entrada", items: ["Fruta"] },
                { title: "Salada crua", items: ["Salada crua", "Salada crua"] },
                {
                  title: "Salada cozida",
                  items: ["Repolho, batata doce e cenoura"],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Ovos mexidos",
                    "Soja refogada",
                    "Bife de panela",
                    "Soja ao molho de queijo (contém lactose)",
                    "Frango xadrez",
                    "Moqueca de banana com legumes",
                  ],
                },
                {
                  title: "Guarnição",
                  items: [
                    "Cará",
                    "Feijão macassar",
                    "Arroz com vagem",
                    "Espaguete ao alho e óleo (contém glúten)",
                    "Batata doce",
                  ],
                },
                {
                  title: "Acompanhamento",
                  items: [
                    "Espaguete ao alho e óleo (contém glúten)",
                    "Caldo verde",
                    "Sopa de feijão com carne (contém glúten)",
                  ],
                },
                { title: "Sobremesa", items: ["Fruta"] },
                {
                  title: "Bebida",
                  items: [
                    "Suco",
                    "Café",
                    "Café com leite (contém lactose)",
                  ],
                },
                {
                  title: "Complemento",
                  items: [
                    "Pão (contém glúten)",
                    "Manteiga (contém lactose)",
                  ],
                },
              ],
            },
          ],
        },
        {
          dayId: "sexta",
          dateLabel: "06/02",
          meals: [
            {
              name: "Cardápio do dia",
              sections: [
                { title: "Entrada", items: ["Fruta"] },
                { title: "Salada crua", items: ["Salada crua", "Salada crua"] },
                {
                  title: "Salada cozida",
                  items: ["Abobrinha, cenoura e chuchu"],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Cubos de frango ao molho",
                    "Antepasto de pimentão",
                    "Cassoulet",
                    "Quiche de cebola (contém glúten)",
                    "Suíno ao molho de abacaxi",
                    "Lasanha de soja (contém glúten e lactose)",
                  ],
                },
                {
                  title: "Guarnição",
                  items: [
                    "Cuscuz",
                    "Feijão mulatinho",
                    "Arroz refogado",
                  ],
                },
                {
                  title: "Acompanhamento",
                  items: [
                    "Farofa com banana",
                    "Sopa de lentilha",
                    "Munguzá (contém lactose)",
                  ],
                },
                { title: "Sobremesa", items: ["Doce de banana"] },
                {
                  title: "Bebida",
                  items: [
                    "Suco",
                    "Café",
                    "Café com leite (contém lactose)",
                  ],
                },
                {
                  title: "Complemento",
                  items: [
                    "Pão (contém glúten)",
                    "Manteiga (contém lactose)",
                  ],
                },
              ],
            },
          ],
        },
      ],
      notes: ["O cardápio está sujeito a alterações."],
    },
    highlightImage: assets.brandLight,
  },
  caa: {
    id: "caa",
    name: "Restaurante Universitário do Centro Acadêmico do Agreste (RU CAA UFPE)",
    shortName: "RU CAA",
    campus: "Centro Acadêmico do Agreste",
    city: "Caruaru - PE",
    description:
      "Refeições subsidiadas para estudantes do CAA e atendimento a servidores e visitantes.",
    links: {
      site: "https://www.ufpe.br/rucaa",
    },
    location: {
      label: "Rodovia BR-104, Km 59, Nova Caruaru, Caruaru - PE",
      mapUrl: "https://maps.app.goo.gl/V9XQUAxXNouADMyV9",
      sourceNote: "Endereço indicado na página institucional do RU CAA.",
    },
    operation: [
      { meal: "almoco", time: "11h às 14h30" },
      { meal: "jantar", time: "17h30 às 20h45" },
    ],
    pricing: [
      { meal: "almoco", student: 5.35, visitor: 14.01 },
      { meal: "jantar", student: 4.76, visitor: 12.47 },
    ],
    pricingNotes: [
      "Valores para estudantes com subsídio parcial (pagamento de 40% do valor de referência).",
      "Servidores e visitantes pagam o valor integral da refeição.",
    ],
    eligibility:
      "Subsídio parcial: estudantes regularmente matriculados no CAA. Servidores e visitantes pagam valor integral.",
    visitorAccess:
      "Servidores e visitantes podem utilizar mediante pagamento integral da refeição.",
    biometrics: {
      title: "Cadastramento biométrico",
      details: [
        "Cadastro realizado no caixa do RU.",
        "Necessário apresentar documento oficial com foto e CPF.",
        "Horários: 11h às 14h30 e 15h30 às 20h15 (segunda a sexta).",
        "Usuário liberado após validação do cadastro.",
      ],
    },
    contacts: [
      { label: "E-mail", value: "ru.caa@ufpe.br", href: "mailto:ru.caa@ufpe.br" },
      { label: "Telefone", value: "(81) 2103-9150", href: "tel:+558121039150" },
    ],
    capacity: "Capacidade de 900 refeições por dia.",
    menuWeek: {
      days: [
        {
          dayId: "segunda",
          dateLabel: "15/12/25",
          meals: [
            {
              name: "Almoço",
              time: "11h às 14h30",
              sections: [
                {
                  title: "Entrada",
                  items: [
                    "Salada de alface, tomate e pepino",
                    "Sopa de carne",
                    "Creme de legumes com ervilha",
                  ],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Almôndegas de carne ao sugo",
                    "Ovos mexidos com verduras",
                    "Fricassê de frango (contém lactose e glúten)",
                    "Gratinado de soja (contém lactose e glúten)",
                  ],
                },
                { title: "Guarnição", items: ["Legumes refogados"] },
                {
                  title: "Acompanhamento",
                  items: [
                    "Arroz carioca",
                    "Feijão macassar",
                    "Espaguete com açafrão (contém glúten)",
                    "Arroz colorido",
                  ],
                },
                { title: "Sobremesa", items: ["Fruta"] },
                { title: "Bebida", items: ["Refresco", "Café/Refresco"] },
                { title: "Complemento", items: ["Pão francês (contém glúten)"] },
              ],
            },
          ],
        },
        {
          dayId: "terca",
          dateLabel: "16/12/25",
          meals: [
            {
              name: "Almoço",
              time: "11h às 14h30",
              sections: [
                {
                  title: "Entrada",
                  items: [
                    "Salada crua",
                    "Caldo verde com calabresa",
                    "Sopa de feijão (contém glúten)",
                  ],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Frango guisado",
                    "Lasanha de soja (contém glúten e lactose)",
                    "Carne moída com legumes",
                    "Ovos mexidos ao molho de tomate",
                  ],
                },
                {
                  title: "Guarnição",
                  items: ["Purê de macaxeira (contém lactose)"],
                },
                {
                  title: "Acompanhamento",
                  items: [
                    "Arroz com cenoura",
                    "Feijão carioca",
                    "Espaguete com açafrão (contém glúten)",
                    "Cuscuz",
                  ],
                },
                { title: "Sobremesa", items: ["Fruta"] },
                { title: "Bebida", items: ["Refresco", "Café"] },
                { title: "Complemento", items: ["Pão francês (contém glúten)"] },
              ],
            },
          ],
        },
        {
          dayId: "quarta",
          dateLabel: "17/12/25",
          meals: [
            {
              name: "Almoço",
              time: "11h às 14h30",
              sections: [
                {
                  title: "Entrada",
                  items: [
                    "Salada refogada",
                    "Sopa de peixe",
                    "Caldo de feijão com azeitonas",
                  ],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Peito de frango ao molho mostarda (contém glúten)",
                    "Almôndega de grão-de-bico",
                    "Torta Madalena de carne (contém lactose)",
                    "Torta de repolho (contém lactose e glúten)",
                  ],
                },
                { title: "Guarnição", items: ["Farofa de cuscuz"] },
                {
                  title: "Acompanhamento",
                  items: [
                    "Arroz com açafrão",
                    "Feijão preto",
                    "Espaguete colorido (contém glúten)",
                    "Espaguete ao alho e óleo",
                  ],
                },
                { title: "Sobremesa", items: ["Fruta/Doce", "Fruta"] },
                { title: "Bebida", items: ["Refresco", "Café"] },
                {
                  title: "Complemento",
                  items: ["Bolo de laranja (contém glúten e lactose)"],
                },
              ],
            },
          ],
        },
        {
          dayId: "quinta",
          dateLabel: "18/12/25",
          meals: [
            {
              name: "Almoço",
              time: "11h às 14h30",
              sections: [
                {
                  title: "Entrada",
                  items: [
                    "Salada crua",
                    "Creme de batata com cebola",
                    "Sopa de charque (contém glúten)",
                  ],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Isca bovina com calabresa e abacaxi",
                    "Escondidinho de lentilha",
                    "Frango guisado",
                    "Soja à bolonhesa",
                  ],
                },
                { title: "Guarnição", items: ["Batata rústica"] },
                {
                  title: "Acompanhamento",
                  items: [
                    "Arroz com vagem",
                    "Feijão tropeiro",
                    "Espaguete colorido (contém glúten)",
                    "Macaxeira cozida",
                  ],
                },
                { title: "Sobremesa", items: ["Fruta"] },
                { title: "Bebida", items: ["Refresco", "Café"] },
                { title: "Complemento", items: ["Torrada (contém glúten)"] },
              ],
            },
          ],
        },
        {
          dayId: "sexta",
          dateLabel: "19/12/25",
          meals: [
            {
              name: "Almoço",
              time: "11h às 14h30",
              sections: [
                {
                  title: "Entrada",
                  items: [
                    "Salada crua",
                    "Sopa de legumes (contém glúten)",
                    "Canja de galinha",
                  ],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Lasanha à bolonhesa (contém glúten e lactose)",
                    "Quiche de alho-poró (contém glúten e lactose)",
                    "Isca de carne com verduras",
                    "Quiche de chuchu e cenoura (contém glúten e lactose)",
                  ],
                },
                {
                  title: "Guarnição",
                  items: ["Maionese de legumes (contém lactose)"],
                },
                {
                  title: "Acompanhamento",
                  items: [
                    "Arroz com açafrão",
                    "Feijão carioca",
                    "Macarrão ao molho de tomate (contém glúten)",
                    "Batata doce",
                  ],
                },
                { title: "Sobremesa", items: ["Fruta/Doce", "Fruta"] },
                { title: "Bebida", items: ["Refresco", "Café"] },
                { title: "Complemento", items: ["Pão francês (contém glúten)"] },
              ],
            },
          ],
        },
      ],
      notes: [
        "O cardápio está sujeito a alterações.",
        "Cardápio publicado na página do RU CAA refere-se ao almoço.",
      ],
    },
    highlightImage: assets.brandDark,
  },
};

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("Elemento #app não encontrado.");
}

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const dateFormatter = new Intl.DateTimeFormat("pt-BR");

const render = () => {
  const params = new URLSearchParams(window.location.search);
  const unitId = params.get("unidade") as UnitId | null;
  const view = params.get("view");
  const unit = unitId ? units[unitId] : undefined;

  if (!unit) {
    app.innerHTML = renderLayout(renderHome(), undefined);
    return;
  }

  if (view === "semanal") {
    app.innerHTML = renderLayout(renderUnitWeekly(unit), unit.id);
    return;
  }

  app.innerHTML = renderLayout(renderUnitOverview(unit), unit.id);
};

const renderLayout = (content: string, activeUnit?: UnitId) => {
  return `
    <a class="link link-hover" href="#conteudo">Pular para o conteúdo</a>
    ${renderNav(activeUnit)}
    <main id="conteudo">
      ${content}
    </main>
    ${renderFooter()}
  `;
};

const renderNav = (activeUnit?: UnitId) => {
  const unitButtons = (Object.values(units) as Unit[])
    .map((unit) => {
      const isActive = unit.id === activeUnit;
      return `
        <a class="btn ${isActive ? "btn-primary" : "btn-ghost"}" href="?unidade=${unit.id}">
          ${unit.shortName}
        </a>
      `;
    })
    .join("");

  return `
    <div class="navbar">
      <div class="navbar-start">
        <a class="btn btn-ghost" href="?">
          <img src="${assets.logoHorizontal}" alt="Restaurante Universitário da UFPE" width="160" height="48" />
        </a>
      </div>
      <div class="navbar-center">
        <div class="join">
          ${unitButtons}
        </div>
      </div>
      <div class="navbar-end">
        <a class="btn btn-outline" href="#avisos">Avisos</a>
      </div>
    </div>
  `;
};

const renderHero = () => {
  return `
    <div class="hero">
      <div class="hero-content">
        <img src="${assets.logoVertical}" alt="RU UFPE" width="160" height="160" />
        <div>
          <h1>Restaurante Universitário da UFPE</h1>
          <p>
            Serviços de alimentação para a comunidade acadêmica com duas unidades.
            Escolha sua unidade para ver horários, cardápio semanal, cadastro biométrico e valores.
          </p>
          <div class="card-actions">
            <a class="btn btn-primary" href="?unidade=recife">Entrar no RU Recife</a>
            <a class="btn btn-secondary" href="?unidade=caa">Entrar no RU CAA</a>
          </div>
        </div>
        ${renderHeroStats()}
      </div>
    </div>
  `;
};

const renderHeroStats = () => {
  return `
    <div class="stats stats-vertical">
      <div class="stat">
        <div class="stat-title">Unidades</div>
        <div class="stat-value">2</div>
        <div class="stat-desc">Recife e CAA</div>
      </div>
      <div class="stat">
        <div class="stat-title">Cardápio</div>
        <div class="stat-value">Semanal</div>
        <div class="stat-desc">Segunda a sexta</div>
      </div>
      <div class="stat">
        <div class="stat-title">Acesso</div>
        <div class="stat-value">Biometria</div>
        <div class="stat-desc">Obrigatória para estudantes</div>
      </div>
    </div>
  `;
};

const renderHome = () => {
  return `
    ${renderHero()}
    <div class="divider">Como funciona</div>
    <section id="fluxo">
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Fluxo de acesso</h2>
          ${renderAccessSteps()}
        </div>
      </div>
    </section>
    <div class="divider">Unidades</div>
    <section id="unidades">
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Escolha sua unidade</h2>
          ${renderUnitCards()}
        </div>
      </div>
    </section>
    <div class="divider">Avisos</div>
    <section id="avisos">
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Avisos</h2>
          ${renderNoticeList()}
        </div>
      </div>
    </section>
    <div class="divider">Identidade visual</div>
    <section id="identidade">
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Identidade visual e ícones</h2>
          ${renderIdentityCarousel()}
        </div>
      </div>
    </section>
  `;
};

const renderAccessSteps = () => {
  return `
    <ul class="steps steps-vertical">
      <li class="step step-primary">Escolha a unidade do RU</li>
      <li class="step step-secondary">Realize o cadastro biométrico (estudantes)</li>
      <li class="step step-accent">Pague a tarifa conforme seu perfil</li>
      <li class="step step-info">Retire sua refeição</li>
    </ul>
  `;
};

const renderUnitCards = () => {
  return (Object.values(units) as Unit[])
    .map((unit, index) => {
      const divider = index === 0 ? "" : '<div class="divider"></div>';
      return `
        ${divider}
        <div class="card card-bordered card-side">
          <figure>
            <img src="${unit.highlightImage}" alt="Marca ${unit.shortName}" width="240" height="120" />
          </figure>
          <div class="card-body">
            <h3 class="card-title">${unit.name}</h3>
            <p>${unit.campus} • ${unit.city}</p>
            <div class="card-actions">
              <a class="btn btn-primary" href="?unidade=${unit.id}">Acessar unidade</a>
              <a class="btn btn-outline" href="${unit.links.site}" target="_blank" rel="noopener">Página atual</a>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
};

const renderNoticeList = () => {
  const items = notices
    .map((notice, index) => {
      const isFirst = index === 0;
      const isLast = index === notices.length - 1;
      const marker = index === 0 ? "badge-primary" : "badge-outline";
      return `
        <li>
          ${isFirst ? "" : "<hr />"}
          <div class="timeline-start">
            <span class="badge badge-outline">${notice.date}</span>
          </div>
          <div class="timeline-middle">
            <span class="badge ${marker}"></span>
          </div>
          <div class="timeline-end timeline-box">${notice.title}</div>
          ${isLast ? "" : "<hr />"}
        </li>
      `;
    })
    .join("");

  return `
    <ul class="timeline timeline-vertical">
      ${items}
    </ul>
  `;
};

const renderIdentityCarousel = () => {
  const items = [
    { src: assets.brandLight, alt: "Marca clara" },
    { src: assets.brandDark, alt: "Marca escura" },
    { src: assets.brandMonoHorizontal, alt: "Marca monocromática horizontal" },
    { src: assets.brandMonoVertical, alt: "Marca monocromática vertical" },
    { src: assets.signatureHorizontal, alt: "Assinatura institucional horizontal" },
    { src: assets.signatureVertical, alt: "Assinatura institucional vertical" },
    { src: assets.cutlery, alt: "Ícone de pratos" },
    { src: assets.desserts, alt: "Ícone de sobremesa" },
    { src: assets.frutas, alt: "Ícone de frutas" },
    { src: assets.mosaic, alt: "Mosaico institucional" },
  ];

  const slides = items
    .map((item) => {
      return `
        <div class="carousel-item">
          <img src="${item.src}" alt="${item.alt}" width="200" height="140" loading="lazy" />
        </div>
      `;
    })
    .join("");

  return `
    <div class="carousel carousel-center">
      ${slides}
    </div>
  `;
};

const renderUnitOverview = (unit: Unit) => {
  return `
    ${renderUnitHeader(unit)}
    ${renderUnitTabs(unit, "resumo")}
    <section>
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Visão rápida</h2>
          ${renderUnitHighlights(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Prato do dia</h2>
          ${renderDailyHighlight(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Público-alvo e pagamento</h2>
          ${renderAudienceCards(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Cadastro biométrico</h2>
          ${renderBiometrics(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Horários de funcionamento</h2>
          ${renderOperation(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Valores por refeição</h2>
          ${renderPricing(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Localização</h2>
          ${renderLocation(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Contato</h2>
          ${renderContacts(unit)}
        </div>
      </div>
    </section>
  `;
};

const renderUnitWeekly = (unit: Unit) => {
  return `
    ${renderUnitHeader(unit)}
    ${renderUnitTabs(unit, "semanal")}
    <section>
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Legenda de cores</h2>
          ${renderWeekLegend()}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Cardápio semanal</h2>
          ${renderWeekSummary(unit)}
          ${renderWeekNotes(unit)}
          ${renderWeeklyMenu(unit)}
        </div>
      </div>
    </section>
  `;
};

const renderUnitHeader = (unit: Unit) => {
  return `
    <section>
      <div class="card card-bordered">
        <div class="card-body">
          <div class="breadcrumbs">
            <ul>
              <li><a href="?">Início</a></li>
              <li>${unit.shortName}</li>
            </ul>
          </div>
          <div class="card-actions">
            <img src="${assets.signatureVertical}" alt="Assinatura institucional" width="72" height="96" />
          </div>
          <h1 class="card-title">${unit.name}</h1>
          <p>${unit.description}</p>
          <div class="join">
            <span class="badge badge-outline join-item">${unit.campus}</span>
            <span class="badge badge-outline join-item">${unit.city}</span>
          </div>
          <div class="card-actions">
            <a class="btn btn-outline" href="${unit.links.site}" target="_blank" rel="noopener">Página atual</a>
            ${
              unit.links.instagram
                ? `<a class="btn btn-outline" href="${unit.links.instagram}" target="_blank" rel="noopener">Instagram</a>`
                : ""
            }
            ${
              unit.links.admin
                ? `<a class="btn btn-outline" href="${unit.links.admin.url}" target="_blank" rel="noopener">Administração: ${unit.links.admin.name}</a>`
                : ""
            }
          </div>
          ${unit.capacity ? `<p>${unit.capacity}</p>` : ""}
        </div>
      </div>
    </section>
  `;
};

const renderUnitTabs = (unit: Unit, active: "resumo" | "semanal") => {
  return `
    <div class="tabs tabs-boxed">
      <a class="tab ${active === "resumo" ? "tab-active" : ""}" href="?unidade=${unit.id}">Resumo</a>
      <a class="tab ${active === "semanal" ? "tab-active" : ""}" href="?unidade=${unit.id}&view=semanal">Cardápio semanal</a>
    </div>
  `;
};

const renderUnitHighlights = (unit: Unit) => {
  const operationSummary = buildOperationSummary(unit);
  return `
    <div class="stats stats-vertical">
      <div class="stat">
        <div class="stat-title">Horários publicados</div>
        <div class="stat-value">Funcionamento</div>
        <div class="stat-desc">${operationSummary}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Estudantes</div>
        <div class="stat-value">${getMinPrice(unit.pricing, "student")}</div>
        <div class="stat-desc">Menor tarifa publicada</div>
      </div>
      <div class="stat">
        <div class="stat-title">Visitantes</div>
        <div class="stat-value">${getMinPrice(unit.pricing, "visitor")}</div>
        <div class="stat-desc">Menor tarifa publicada</div>
      </div>
    </div>
  `;
};

const renderDailyHighlight = (unit: Unit) => {
  const todayInfo = resolveTodayMenu(unit);
  const mainDishes = extractMainDishes(todayInfo.day);

  const badge = renderDayBadge(todayInfo.day.dayId);
  const notice = todayInfo.note
    ? `<div class="alert alert-warning">${todayInfo.note}</div>`
    : "";
  const statusBadge =
    todayInfo.status === "hoje" ? "<div class=\"badge badge-success join-item\">Hoje</div>" : "";
  const dishes = mainDishes.length
    ? `<ul class="menu">${mainDishes.map((dish) => `<li>${dish}</li>`).join("")}</ul>`
    : "<p>Prato principal não informado para este dia.</p>";

  return `
    <div class="card card-bordered">
      <div class="card-body">
        <div class="card-actions">
          <img src="${assets.cutlery}" alt="Ícone de pratos" width="64" height="64" />
        </div>
        <div class="join">
          ${badge}
          <div class="badge badge-outline join-item">${todayInfo.day.dateLabel}</div>
          ${statusBadge}
        </div>
        ${notice}
        ${dishes}
        <div class="card-actions">
          <a class="btn btn-primary" href="?unidade=${unit.id}&view=semanal">Ver cardápio semanal</a>
        </div>
      </div>
    </div>
  `;
};

const renderAudienceCards = (unit: Unit) => {
  const student = audiences.student;
  const visitor = audiences.visitor;

  return `
    <div class="card card-bordered">
      <div class="card-body">
        <h3 class="card-title">${student.label}</h3>
        <p>${student.paymentShare}</p>
        <p>${student.biometrics}</p>
        <p>${unit.eligibility}</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="card card-bordered">
      <div class="card-body">
        <h3 class="card-title">${visitor.label}</h3>
        <p>${visitor.paymentShare}</p>
        <p>${visitor.biometrics}</p>
        <p>${unit.visitorAccess}</p>
      </div>
    </div>
  `;
};

const renderBiometrics = (unit: Unit) => {
  const items = unit.biometrics.details
    .map((detail) => `<li>${detail}</li>`)
    .join("");

  return `
    <h3 class="card-title">${unit.biometrics.title}</h3>
    <ul class="menu">
      ${items}
    </ul>
  `;
};

const renderOperation = (unit: Unit) => {
  const stats = [...unit.operation]
    .sort((a, b) => mealOrder[a.meal] - mealOrder[b.meal])
    .map((slot) => {
      return `
        <div class="stat">
          <div class="stat-title">${mealLabels[slot.meal]}</div>
          <div class="stat-value">${slot.time}</div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="stats stats-vertical">
      ${stats}
    </div>
  `;
};

const renderPricing = (unit: Unit) => {
  const rows = [...unit.pricing]
    .sort((a, b) => mealOrder[a.meal] - mealOrder[b.meal])
    .map((price) => {
      return `
        <tr>
          <td>${mealLabels[price.meal]}</td>
          <td>${currencyFormatter.format(price.student)}</td>
          <td>${currencyFormatter.format(price.visitor)}</td>
        </tr>
      `;
    })
    .join("");

  const notes =
    unit.pricingNotes && unit.pricingNotes.length
      ? `
        <div class="alert alert-info">
          <ul class="menu">
            ${unit.pricingNotes.map((note) => `<li>${note}</li>`).join("")}
          </ul>
        </div>
      `
      : "";

  return `
    <table class="table">
      <thead>
        <tr>
          <th>Refeição</th>
          <th>Estudante (subsídio parcial)</th>
          <th>Visitante/Servidor</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
    ${notes}
  `;
};

const renderLocation = (unit: Unit) => {
  return `
    <p>${unit.location.label}</p>
    <div class="card-actions">
      <a class="btn btn-outline" href="${unit.location.mapUrl}" target="_blank" rel="noopener">Abrir no mapa</a>
    </div>
    <small>${unit.location.sourceNote}</small>
  `;
};

const renderContacts = (unit: Unit) => {
  const items = unit.contacts
    .map((contact) => {
      return `
        <li>
          <a href="${contact.href}">${contact.label}: ${contact.value}</a>
        </li>
      `;
    })
    .join("");

  return `
    <ul class="menu">
      ${items}
    </ul>
  `;
};

const renderWeekLegend = () => {
  const steps = (Object.keys(dayMeta) as DayId[])
    .map((dayId) => {
      const meta = dayMeta[dayId];
      return `<li class="step ${meta.step}" title="${meta.colorName}">${meta.label}</li>`;
    })
    .join("");

  return `
    <ul class="steps steps-vertical">
      ${steps}
    </ul>
  `;
};

const renderWeekSummary = (unit: Unit) => {
  const range = getWeekRange(unit.menuWeek.days);
  if (!range) {
    return "<p>Semana informada sem datas de referência.</p>";
  }

  const start = dateFormatter.format(range.start);
  const end = dateFormatter.format(range.end);

  return `<p>Semana publicada: ${start} a ${end}</p>`;
};

const renderWeekNotes = (unit: Unit) => {
  if (!unit.menuWeek.notes || unit.menuWeek.notes.length === 0) {
    return "";
  }

  const items = unit.menuWeek.notes.map((note) => `<li>${note}</li>`).join("");
  return `
    <div class="alert alert-info">
      <ul class="menu">
        ${items}
      </ul>
    </div>
  `;
};

const renderWeeklyMenu = (unit: Unit) => {
  return unit.menuWeek.days
    .map((day, index) => {
      const checked = index === 0 ? "checked" : "";
      return `
        <div class="collapse collapse-plus">
          <input type="radio" name="menu-${unit.id}" ${checked} />
          <div class="collapse-title">
            <div class="join">
              ${renderDayBadge(day.dayId)}
              <div class="badge badge-outline join-item">${day.dateLabel}</div>
            </div>
          </div>
          <div class="collapse-content">
            ${day.meals.map((meal, mealIndex) => renderMeal(meal, mealIndex)).join("")}
          </div>
        </div>
      `;
    })
    .join("");
};

const renderMeal = (meal: MenuMeal, index: number) => {
  const header = meal.time ? `${meal.name} - ${meal.time}` : meal.name;
  const sections = meal.sections
    .map((section, sectionIndex) => renderSection(section, sectionIndex))
    .join("");

  const divider = index === 0 ? "" : '<div class="divider"></div>';

  return `
    ${divider}
    <div class="card card-bordered">
      <div class="card-body">
        <h3 class="card-title">${header}</h3>
        ${sections}
      </div>
    </div>
  `;
};

const renderSection = (section: MenuSection, index: number) => {
  const items = section.items.map((item) => `<li>${item}</li>`).join("");
  const divider = index === 0 ? "" : '<div class="divider"></div>';

  return `
    ${divider}
    <div class="card card-bordered">
      <div class="card-body">
        <h4 class="card-title">${section.title}</h4>
        <ul class="menu">
          ${items}
        </ul>
      </div>
    </div>
  `;
};

const renderFooter = () => {
  return `
    <footer class="footer">
      <div>
        <img src="${assets.signatureHorizontal}" alt="Universidade Federal de Pernambuco" width="220" height="48" loading="lazy" />
        <p>Restaurante Universitário da UFPE</p>
      </div>
      <div>
        <span class="footer-title">Unidades</span>
        <a class="link link-hover" href="?unidade=recife">RU Recife</a>
        <a class="link link-hover" href="?unidade=caa">RU CAA</a>
      </div>
      <div>
        <span class="footer-title">Cardápios</span>
        <a class="link link-hover" href="?unidade=recife&view=semanal">Semana Recife</a>
        <a class="link link-hover" href="?unidade=caa&view=semanal">Semana CAA</a>
      </div>
    </footer>
  `;
};

const renderDayBadge = (dayId: DayId) => {
  const meta = dayMeta[dayId];
  return `<span class="badge ${meta.badge} join-item" title="${meta.colorName}">${meta.label}</span>`;
};

const buildOperationSummary = (unit: Unit) => {
  return unit.operation
    .map((slot) => `${mealLabels[slot.meal]}: ${slot.time}`)
    .join(" • ");
};

const getMinPrice = (prices: Pricing[], key: "student" | "visitor") => {
  if (!prices.length) {
    return "Consulte";
  }
  const values = prices.map((price) => price[key]);
  const minValue = Math.min(...values);
  return currencyFormatter.format(minValue);
};

const parseDateLabel = (label: string, fallbackYear: number) => {
  const parts = label.split("/").map((part) => Number(part));
  if (parts.length < 2 || Number.isNaN(parts[0]) || Number.isNaN(parts[1])) {
    return undefined;
  }
  const day = parts[0];
  const month = parts[1] - 1;
  const year = parts.length >= 3 ? normalizeYear(parts[2]) : fallbackYear;
  return new Date(year, month, day);
};

const normalizeYear = (year: number) => {
  if (year < 100) {
    return 2000 + year;
  }
  return year;
};

const getWeekRange = (days: MenuDay[]) => {
  const fallbackYear = new Date().getFullYear();
  const dates = days
    .map((day) => parseDateLabel(day.dateLabel, fallbackYear))
    .filter((date): date is Date => Boolean(date));

  if (!dates.length) {
    return undefined;
  }

  const sorted = dates.sort((a, b) => a.getTime() - b.getTime());
  return { start: sorted[0], end: sorted[sorted.length - 1] };
};

const resolveTodayMenu = (unit: Unit) => {
  const today = new Date();
  const fallbackYear = today.getFullYear();

  const matched = unit.menuWeek.days.find((day) => {
    const date = parseDateLabel(day.dateLabel, fallbackYear);
    return date ? isSameDate(date, today) : false;
  });

  if (matched) {
    return { day: matched, status: "hoje" as const };
  }

  const range = getWeekRange(unit.menuWeek.days);
  const note = range
    ? `Cardápio exibido com base na semana publicada (${dateFormatter.format(range.start)} a ${dateFormatter.format(range.end)}).`
    : "Cardápio exibido com base na última semana publicada.";

  return { day: unit.menuWeek.days[0], status: "semana" as const, note };
};

const isSameDate = (left: Date, right: Date) => {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
};

const extractMainDishes = (day: MenuDay) => {
  const preferredMeals = ["Almoço", "Jantar", "Cardápio do dia", "Desjejum"];
  for (const mealName of preferredMeals) {
    const meal = day.meals.find((item) => item.name === mealName);
    if (!meal) {
      continue;
    }
    const section = meal.sections.find((item) =>
      item.title.toLowerCase().includes("prato principal"),
    );
    if (section) {
      return section.items;
    }
  }

  for (const meal of day.meals) {
    const section = meal.sections.find((item) =>
      item.title.toLowerCase().includes("prato principal"),
    );
    if (section) {
      return section.items;
    }
  }

  return [];
};

render();

window.addEventListener("popstate", render);
