import type { MenuDay } from "../data/types";

export const parseDateLabel = (label: string, fallbackYear: number) => {
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

export const getWeekRange = (days: MenuDay[]) => {
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

const isSameDate = (left: Date, right: Date) => {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
};

export const resolveTodayMenu = (days: MenuDay[]) => {
  const today = new Date();
  const fallbackYear = today.getFullYear();

  const matched = days.find((day) => {
    const date = parseDateLabel(day.dateLabel, fallbackYear);
    return date ? isSameDate(date, today) : false;
  });

  if (matched) {
    return { day: matched, status: "hoje" as const };
  }

  const range = getWeekRange(days);
  const note = range
    ? `Cardápio exibido com base na semana publicada (${new Intl.DateTimeFormat("pt-BR").format(range.start)} a ${new Intl.DateTimeFormat("pt-BR").format(range.end)}).`
    : "Cardápio exibido com base na última semana publicada.";

  return { day: days[0], status: "semana" as const, note };
};
