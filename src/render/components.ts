import { assets } from "../data/assets";
import { audiences, dayMeta, mealLabels, mealOrder } from "../data/constants";
import { notices } from "../data/notices";
import type { MenuMeal, MenuSection, Unit, UnitId } from "../data/types";
import { currencyFormatter, dateFormatter, getMinPrice } from "../utils/format";
import { getWeekRange, resolveTodayMenu } from "../utils/date";

export const renderNav = (units: Unit[], activeUnit?: UnitId) => {
  const unitButtons = units
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
    <div class="navbar bg-base-200">
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

export const renderHero = () => {
  return `
    <div class="hero bg-base-200">
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

export const renderHeroStats = () => {
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

export const renderAccessSteps = () => {
  return `
    <ul class="steps steps-vertical">
      <li class="step step-primary">Escolha a unidade do RU</li>
      <li class="step step-secondary">Realize o cadastro biométrico (estudantes)</li>
      <li class="step step-accent">Pague a tarifa conforme seu perfil</li>
      <li class="step step-info">Retire sua refeição</li>
    </ul>
  `;
};

export const renderUnitCards = (units: Unit[]) => {
  return units
    .map((unit, index) => {
      const divider = index === 0 ? "" : '<div class="divider"></div>';
      return `
        ${divider}
        <div class="card card-bordered card-side bg-base-100">
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

export const renderNoticeList = () => {
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
    <ul class="timeline timeline-vertical timeline-snap-icon">
      ${items}
    </ul>
  `;
};

export const renderIdentityCarousel = () => {
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
    <div class="carousel carousel-center bg-base-200">
      ${slides}
    </div>
  `;
};

export const renderUnitHeader = (unit: Unit) => {
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

export const renderUnitTabs = (unit: Unit, active: "resumo" | "semanal") => {
  return `
    <div class="tabs tabs-boxed">
      <a class="tab ${active === "resumo" ? "tab-active" : ""}" href="?unidade=${unit.id}">Resumo</a>
      <a class="tab ${active === "semanal" ? "tab-active" : ""}" href="?unidade=${unit.id}&view=semanal">Cardápio semanal</a>
    </div>
  `;
};

export const renderUnitHighlights = (unit: Unit) => {
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

export const renderDailyHighlight = (unit: Unit) => {
  const todayInfo = resolveTodayMenu(unit.menuWeek.days);
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

export const renderAudienceCards = (unit: Unit) => {
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

export const renderBiometrics = (unit: Unit) => {
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

export const renderOperation = (unit: Unit) => {
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

export const renderPricing = (unit: Unit) => {
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

export const renderLocation = (unit: Unit) => {
  return `
    <p>${unit.location.label}</p>
    <div class="card-actions">
      <a class="btn btn-outline" href="${unit.location.mapUrl}" target="_blank" rel="noopener">Abrir no mapa</a>
    </div>
    <small>${unit.location.sourceNote}</small>
  `;
};

export const renderContacts = (unit: Unit) => {
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

export const renderWeekLegend = () => {
  const steps = (Object.keys(dayMeta) as Array<keyof typeof dayMeta>)
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

export const renderWeekSummary = (unit: Unit) => {
  const range = getWeekRange(unit.menuWeek.days);
  if (!range) {
    return "<p>Semana informada sem datas de referência.</p>";
  }

  const start = dateFormatter.format(range.start);
  const end = dateFormatter.format(range.end);

  return `<p>Semana publicada: ${start} a ${end}</p>`;
};

export const renderWeekNotes = (unit: Unit) => {
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

export const renderWeeklyMenu = (unit: Unit) => {
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

export const renderMeal = (meal: MenuMeal, index: number) => {
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

export const renderSection = (section: MenuSection, index: number) => {
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

export const renderFooter = () => {
  return `
    <footer class="footer bg-base-200">
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

const renderDayBadge = (dayId: keyof typeof dayMeta) => {
  const meta = dayMeta[dayId];
  return `<span class="badge ${meta.badge} join-item" title="${meta.colorName}">${meta.label}</span>`;
};

const buildOperationSummary = (unit: Unit) => {
  return unit.operation
    .map((slot) => `${mealLabels[slot.meal]}: ${slot.time}`)
    .join(" • ");
};

const extractMainDishes = (day: { meals: MenuMeal[] }) => {
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
