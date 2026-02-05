import "./style.css";

import { units } from "./data/units";
import type { UnitId } from "./data/types";
import { renderNav, renderFooter } from "./render/components";
import {
  renderHome,
  renderLayout,
  renderUnitOverview,
  renderUnitWeekly,
  resolveUnit,
} from "./render/pages";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("Elemento #app não encontrado.");
}

const render = () => {
  const params = new URLSearchParams(window.location.search);
  const unitId = params.get("unidade") as UnitId | null;
  const view = params.get("view");
  const unit = resolveUnit(units, unitId);
  const nav = renderNav(Object.values(units), unit?.id);
  const footer = renderFooter();

  if (!unit) {
    app.innerHTML = renderLayout(renderHome(Object.values(units)), nav, footer);
    return;
  }

  if (view === "semanal") {
    app.innerHTML = renderLayout(renderUnitWeekly(unit), nav, footer);
    return;
  }

  app.innerHTML = renderLayout(renderUnitOverview(unit), nav, footer);
};

render();

window.addEventListener("popstate", render);
