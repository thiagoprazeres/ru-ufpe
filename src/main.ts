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

const dayMeta: Record<DayId, { label: string; badge: string; colorName: string }> = {
  segunda: {
    label: "Segunda-feira",
    badge: "badge-accent",
    colorName: "Amarelo ovo",
  },
  terca: {
    label: "Terça-feira",
    badge: "badge-success",
    colorName: "Verde alface",
  },
  quarta: {
    label: "Quarta-feira",
    badge: "badge-info",
    colorName: "Azul frescor",
  },
  quinta: {
    label: "Quinta-feira",
    badge: "badge-error",
    colorName: "Vermelho melancia",
  },
  sexta: {
    label: "Sexta-feira",
    badge: "badge-neutral",
    colorName: "Cinza panela",
  },
};

const mealLabels: Record<MealSlot, string> = {
  desjejum: "Desjejum",
  almoco: "Almoço",
  jantar: "Jantar",
};

const audiences: Record<"student" | "visitor", AudienceProfile> = {
  student: {
    label: "Estudantes",
    paymentShare: "Pagam cerca de 40% do valor de referência (consulte tarifas).",
    biometrics: "Cadastramento biométrico obrigatório para acesso.",
    access: "Voltado a estudantes regularmente matriculados.",
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
    date: "24/01/2025",
    title: "Funcionamento do Restaurante Universitário em 24/01/2025",
  },
  {
    date: "24/01/2025",
    title: "RU fechará para dedetização em 26/01/2025",
  },
  {
    date: "16/01/2025",
    title: "Horário de funcionamento do RU durante o recesso acadêmico",
  },
  {
    date: "08/04/2024",
    title: "Lista de aprovados: Auxílio Restaurante Universitário (ARU) - 2024.1",
  },
  {
    date: "23/05/2023",
    title: "Aumento no preço do RU? É falso. Entenda.",
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
      "Atende a comunidade acadêmica do campus Recife com refeições subsidiadas e opção para visitantes.",
    links: {
      site: "https://www.ufpe.br/restaurante",
      instagram: "https://www.instagram.com/ruufpe",
      admin: { name: "General Goods", url: "https://ggoods.com.br/" },
    },
    location: {
      label: "Avenida dos Reitores, Cidade Universitária - Recife/PE (Campus Recife)",
      mapUrl: "https://maps.app.goo.gl/Uyx5pLMnQY6RFXj79",
      sourceNote: "Localização indicada no campus Recife (Avenida dos Reitores).",
    },
    operation: [
      { meal: "desjejum", time: "7h às 8h" },
      { meal: "almoco", time: "11h às 14h30" },
      { meal: "jantar", time: "17h30 às 20h45" },
    ],
    pricing: [
      { meal: "desjejum", student: 2.5, visitor: 5.0 },
      { meal: "almoco", student: 3.0, visitor: 7.0 },
      { meal: "jantar", student: 3.0, visitor: 7.0 },
    ],
    eligibility:
      "Estudantes regularmente matriculados, servidores docentes e técnicos administrativos.",
    visitorAccess: "Visitantes podem utilizar mediante pagamento da tarifa de visitante.",
    biometrics: {
      title: "Cadastramento facial",
      details: [
        "Obrigatório para acesso ao RU.",
        "Realizado no posto de atendimento na entrada do RU.",
        "Apresentar documento oficial com foto e comprovante de vínculo com a UFPE.",
        "Tempo médio de atendimento: 2 minutos por pessoa.",
      ],
    },
    contacts: [
      { label: "E-mail", value: "ru@ufpe.br", href: "mailto:ru@ufpe.br" },
      { label: "Telefone", value: "(81) 2126-7772", href: "tel:+558121267772" },
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
                { title: "Salada crua", items: ["Salada crua"] },
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
                { title: "Salada crua", items: ["Salada crua"] },
                {
                  title: "Salada cozida",
                  items: ["Abobrinha, beterraba e chuchu"],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Ovos mexidos",
                    "Homus",
                    "Peixe à dorê",
                    "Moqueca de banana",
                    "Frango ao forno",
                    "Bolonhesa de lentilha",
                  ],
                },
                {
                  title: "Guarnição",
                  items: [
                    "Macaxeira",
                    "Feijão mulatinho",
                    "Arroz",
                    "Espaguete ao alho e óleo (contém glúten)",
                    "Cuscuz",
                  ],
                },
                {
                  title: "Acompanhamento",
                  items: [
                    "Farofa de cuscuz",
                    "Sopa de feijão vegetariana (contém glúten)",
                    "Caldo verde",
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
          dayId: "quarta",
          dateLabel: "04/02",
          meals: [
            {
              name: "Cardápio do dia",
              sections: [
                { title: "Entrada", items: ["Fruta"] },
                { title: "Salada crua", items: ["Salada crua"] },
                {
                  title: "Salada cozida",
                  items: ["Abobrinha, repolho e chuchu"],
                },
                {
                  title: "Prato principal",
                  items: [
                    "Queijo prato (contém lactose)",
                    "Pasta de amendoim",
                    "Frango ao molho de queijo (contém lactose)",
                    "Moqueca de banana",
                    "Peixe em iscas",
                    "Fricassê de soja (contém lactose)",
                  ],
                },
                {
                  title: "Guarnição",
                  items: [
                    "Macaxeira",
                    "Feijão mulatinho",
                    "Arroz com cenoura",
                    "Espaguete ao alho e óleo (contém glúten)",
                    "Cuscuz",
                  ],
                },
                {
                  title: "Acompanhamento",
                  items: [
                    "Farofa de cuscuz",
                    "Sopa de feijão vegetariana (contém glúten)",
                    "Creme de legumes",
                  ],
                },
                { title: "Sobremesa", items: ["Doce"] },
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
          dayId: "quinta",
          dateLabel: "05/02",
          meals: [
            {
              name: "Cardápio do dia",
              sections: [
                { title: "Entrada", items: ["Fruta"] },
                { title: "Salada crua", items: ["Salada crua"] },
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
                    "Macaxeira",
                    "Feijão mulatinho",
                    "Arroz",
                    "Espaguete ao alho e óleo (contém glúten)",
                    "Cuscuz",
                  ],
                },
                {
                  title: "Acompanhamento",
                  items: [
                    "Farofa de cuscuz",
                    "Sopa de feijão vegetariana (contém glúten)",
                    "Caldo de legumes",
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
          dayId: "sexta",
          dateLabel: "06/02",
          meals: [
            {
              name: "Cardápio do dia",
              sections: [
                { title: "Entrada", items: ["Fruta"] },
                { title: "Salada crua", items: ["Salada crua"] },
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
                    "Quiche de cebola",
                    "Suíno ao molho de abacaxi",
                    "Lasanha de soja",
                  ],
                },
                {
                  title: "Guarnição",
                  items: [
                    "Macaxeira",
                    "Feijão mulatinho",
                    "Arroz",
                    "Espaguete ao alho e óleo (contém glúten)",
                    "Cuscuz",
                  ],
                },
                {
                  title: "Acompanhamento",
                  items: [
                    "Farofa de cuscuz",
                    "Sopa de feijão vegetariana (contém glúten)",
                    "Caldo de batata com legumes",
                  ],
                },
                { title: "Sobremesa", items: ["Doce"] },
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
      "Atende a comunidade acadêmica do CAA com refeições subsidiadas e opção para visitantes.",
    links: {
      site: "https://www.ufpe.br/rucaa",
    },
    location: {
      label: "Rodovia BR-104, Km 59, S/N - Nova Caruaru, Caruaru - PE",
      mapUrl: "https://maps.app.goo.gl/V9XQUAxXNouADMyV9",
      sourceNote: "Endereço do campus CAA indicado na documentação institucional.",
    },
    operation: [
      { meal: "desjejum", time: "6h30 às 8h" },
      { meal: "almoco", time: "11h às 14h" },
      { meal: "jantar", time: "17h às 19h" },
    ],
    pricing: [
      { meal: "desjejum", student: 2.0, visitor: 4.0 },
      { meal: "almoco", student: 2.5, visitor: 6.0 },
      { meal: "jantar", student: 2.5, visitor: 6.0 },
    ],
    eligibility:
      "Estudantes regularmente matriculados, servidores docentes e técnicos administrativos.",
    visitorAccess: "Visitantes podem utilizar mediante pagamento da tarifa de visitante.",
    biometrics: {
      title: "Cadastramento biométrico",
      details: [
        "Obrigatório para usuários da comunidade acadêmica.",
        "Aplica-se a estudantes, docentes e servidores técnicos administrativos.",
      ],
    },
    contacts: [
      { label: "E-mail", value: "ru.caa@ufpe.br", href: "mailto:ru.caa@ufpe.br" },
    ],
    capacity: "Capacidade de 900 refeições por dia.",
    menuWeek: {
      days: [
        {
          dayId: "segunda",
          dateLabel: "15/12/25",
          meals: [
            {
              name: "Desjejum",
              time: "6h30 às 8h",
              sections: [
                { title: "Bebida", items: ["Café ou leite"] },
                { title: "Cuscuz", items: ["Cuscuz"] },
                { title: "Acompanhamento", items: ["Ovos"] },
                { title: "Complemento", items: ["Macaxeira"] },
              ],
            },
            {
              name: "Almoço",
              time: "11h às 14h",
              sections: [
                { title: "Prato principal", items: ["Carne assada"] },
                { title: "Vegetariano", items: ["Feijoada vegana"] },
                { title: "Guarnição", items: ["Legumes salteados"] },
                { title: "Sobremesa", items: ["Fruta"] },
              ],
            },
            {
              name: "Jantar",
              time: "17h às 19h",
              sections: [
                { title: "Prato principal", items: ["Carne ao molho"] },
                { title: "Vegetariano", items: ["Yakisoba de legumes"] },
                { title: "Guarnição", items: ["Purê de macaxeira"] },
                { title: "Sobremesa", items: ["Fruta"] },
              ],
            },
          ],
        },
        {
          dayId: "terca",
          dateLabel: "16/12/25",
          meals: [
            {
              name: "Desjejum",
              time: "6h30 às 8h",
              sections: [
                { title: "Bebida", items: ["Café ou leite"] },
                { title: "Cuscuz", items: ["Cuscuz"] },
                { title: "Acompanhamento", items: ["Ovos"] },
                { title: "Complemento", items: ["Macaxeira"] },
              ],
            },
            {
              name: "Almoço",
              time: "11h às 14h",
              sections: [
                { title: "Prato principal", items: ["Frango ao molho"] },
                { title: "Vegetariano", items: ["Hamburguer de lentilha"] },
                { title: "Guarnição", items: ["Farofa"] },
                { title: "Sobremesa", items: ["Doce"] },
              ],
            },
            {
              name: "Jantar",
              time: "17h às 19h",
              sections: [
                { title: "Prato principal", items: ["Hambúrguer de carne"] },
                { title: "Vegetariano", items: ["Omelete"] },
                { title: "Guarnição", items: ["Batata palha"] },
                { title: "Sobremesa", items: ["Doce"] },
              ],
            },
          ],
        },
        {
          dayId: "quarta",
          dateLabel: "17/12/25",
          meals: [
            {
              name: "Desjejum",
              time: "6h30 às 8h",
              sections: [
                { title: "Bebida", items: ["Café ou leite"] },
                { title: "Cuscuz", items: ["Cuscuz"] },
                { title: "Acompanhamento", items: ["Ovos"] },
                { title: "Complemento", items: ["Macaxeira"] },
              ],
            },
            {
              name: "Almoço",
              time: "11h às 14h",
              sections: [
                { title: "Prato principal", items: ["Bife ao molho"] },
                { title: "Vegetariano", items: ["Macarronada de legumes"] },
                { title: "Guarnição", items: ["Feijão verde"] },
                { title: "Sobremesa", items: ["Fruta"] },
              ],
            },
            {
              name: "Jantar",
              time: "17h às 19h",
              sections: [
                { title: "Prato principal", items: ["Carne moída"] },
                { title: "Vegetariano", items: ["Escondidinho de legumes"] },
                { title: "Guarnição", items: ["Arroz"] },
                { title: "Sobremesa", items: ["Fruta"] },
              ],
            },
          ],
        },
        {
          dayId: "quinta",
          dateLabel: "18/12/25",
          meals: [
            {
              name: "Desjejum",
              time: "6h30 às 8h",
              sections: [
                { title: "Bebida", items: ["Café ou leite"] },
                { title: "Cuscuz", items: ["Cuscuz"] },
                { title: "Acompanhamento", items: ["Ovos"] },
                { title: "Complemento", items: ["Macaxeira"] },
              ],
            },
            {
              name: "Almoço",
              time: "11h às 14h",
              sections: [
                { title: "Prato principal", items: ["Filé de peixe"] },
                { title: "Vegetariano", items: ["Strogonoff de legumes"] },
                { title: "Guarnição", items: ["Legumes salteados"] },
                { title: "Sobremesa", items: ["Doce"] },
              ],
            },
            {
              name: "Jantar",
              time: "17h às 19h",
              sections: [
                { title: "Prato principal", items: ["Frango assado"] },
                { title: "Vegetariano", items: ["Ovo mexido"] },
                { title: "Guarnição", items: ["Purê de batata"] },
                { title: "Sobremesa", items: ["Doce"] },
              ],
            },
          ],
        },
        {
          dayId: "sexta",
          dateLabel: "19/12/25",
          meals: [
            {
              name: "Desjejum",
              time: "6h30 às 8h",
              sections: [
                { title: "Bebida", items: ["Café ou leite"] },
                { title: "Cuscuz", items: ["Cuscuz"] },
                { title: "Acompanhamento", items: ["Ovos"] },
                { title: "Complemento", items: ["Macaxeira"] },
              ],
            },
            {
              name: "Almoço",
              time: "11h às 14h",
              sections: [
                { title: "Prato principal", items: ["Carne ao molho"] },
                { title: "Vegetariano", items: ["Feijoada vegana"] },
                { title: "Guarnição", items: ["Legumes salteados"] },
                { title: "Sobremesa", items: ["Fruta"] },
              ],
            },
            {
              name: "Jantar",
              time: "17h às 19h",
              sections: [
                { title: "Prato principal", items: ["Peixe frito"] },
                { title: "Vegetariano", items: ["Escondidinho de legumes"] },
                { title: "Guarnição", items: ["Purê de macaxeira"] },
                { title: "Sobremesa", items: ["Fruta"] },
              ],
            },
          ],
        },
      ],
      notes: ["O cardápio está sujeito a alterações."],
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
        <img src="${assets.mosaic}" alt="Mosaico institucional" width="180" height="180" />
      </div>
    </div>
  `;
};

const renderHome = () => {
  return `
    ${renderHero()}
    <div class="divider"></div>
    <section id="unidades">
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Escolha sua unidade</h2>
          ${renderUnitCards()}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section id="avisos">
      <div class="card card-bordered">
        <div class="card-body">
          <h2 class="card-title">Avisos</h2>
          ${renderNoticeList()}
        </div>
      </div>
    </section>
    <div class="divider"></div>
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

const renderUnitCards = () => {
  return (Object.values(units) as Unit[])
    .map((unit, index) => {
      const divider = index === 0 ? "" : '<div class="divider"></div>';
      return `
        ${divider}
        <div class="card card-bordered">
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
    .map((notice) => {
      return `
        <li>
          <span class="badge badge-outline">${notice.date}</span>
          <span>${notice.title}</span>
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
    <div class="carousel">
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
    <div class="tabs">
      <a class="tab ${active === "resumo" ? "tab-active" : ""}" href="?unidade=${unit.id}">Resumo</a>
      <a class="tab ${active === "semanal" ? "tab-active" : ""}" href="?unidade=${unit.id}&view=semanal">Cardápio semanal</a>
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
  const stats = unit.operation
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
  const rows = unit.pricing
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

  return `
    <table class="table">
      <thead>
        <tr>
          <th>Refeição</th>
          <th>Estudante</th>
          <th>Visitante</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
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
  const badges = (Object.keys(dayMeta) as DayId[])
    .map((dayId) => renderDayBadge(dayId))
    .join("");

  return `
    <div class="join">
      ${badges}
    </div>
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
        <div class="collapse collapse-arrow">
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
