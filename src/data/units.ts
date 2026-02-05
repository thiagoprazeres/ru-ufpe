import { assets } from "./assets";
import type { Unit, UnitId } from "./types";

export const units: Record<UnitId, Unit> = {
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
