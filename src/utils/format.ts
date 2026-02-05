import type { Pricing } from "../data/types";

export const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export const getMinPrice = (prices: Pricing[], key: "student" | "visitor") => {
  if (!prices.length) {
    return "Consulte";
  }
  const values = prices.map((price) => price[key]);
  const minValue = Math.min(...values);
  return currencyFormatter.format(minValue);
};
