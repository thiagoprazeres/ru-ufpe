import type { Unit, UnitId } from "../data/types";
import {
  renderAccessSteps,
  renderAudienceCards,
  renderBiometrics,
  renderDailyHighlight,
  renderFooter,
  renderHero,
  renderIdentityCarousel,
  renderContacts,
  renderLocation,
  renderNoticeList,
  renderOperation,
  renderPricing,
  renderUnitCards,
  renderUnitHeader,
  renderUnitHighlights,
  renderUnitTabs,
  renderWeekLegend,
  renderWeekNotes,
  renderWeekSummary,
  renderWeeklyMenu,
} from "./components";

export const renderLayout = (
  content: string,
  nav: string,
  footer: string,
) => {
  return `
    <a class="link link-hover" href="#conteudo">Pular para o conteúdo</a>
    ${nav}
    <main id="conteudo">
      ${content}
    </main>
    ${footer}
  `;
};

export const renderHome = (units: Unit[]) => {
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
          ${renderUnitCards(units)}
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

export const renderUnitOverview = (unit: Unit) => {
  return `
    ${renderUnitHeader(unit)}
    ${renderUnitTabs(unit, "resumo")}
    <section>
      <div class="card card-bordered bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Visão rápida</h2>
          ${renderUnitHighlights(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Prato do dia</h2>
          ${renderDailyHighlight(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Público-alvo e pagamento</h2>
          ${renderAudienceCards(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Cadastro biométrico</h2>
          ${renderBiometrics(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Horários de funcionamento</h2>
          ${renderOperation(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Valores por refeição</h2>
          ${renderPricing(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Localização</h2>
          ${renderLocation(unit)}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Contato</h2>
          ${renderContacts(unit)}
        </div>
      </div>
    </section>
  `;
};

export const renderUnitWeekly = (unit: Unit) => {
  return `
    ${renderUnitHeader(unit)}
    ${renderUnitTabs(unit, "semanal")}
    <section>
      <div class="card card-bordered bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Legenda de cores</h2>
          ${renderWeekLegend()}
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section>
      <div class="card card-bordered bg-base-100">
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

export const resolveUnit = (units: Record<UnitId, Unit>, unitId: string | null) => {
  if (!unitId) {
    return undefined;
  }
  const key = unitId as UnitId;
  return units[key];
};
