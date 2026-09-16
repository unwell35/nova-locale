// Import the inferred JSON types
import type * as BotAR from "./ar/bot.json";
import type * as BotEN from "./en/bot.json";
import type * as BotFR from "./fr/bot.json";
import type * as BotKO from "./ko/bot.json";
import type * as BotKU from "./ku/bot.json";
import type * as BotDE from "./de/bot.json";
import type * as BotIT from "./it/bot.json";
import type * as BotPTBR from "./pt-BR/bot.json";
import type * as BotTR from "./tr/bot.json";
import type * as BotES from "./es/bot.json";
import type * as BotRU from "./ru/bot.json";

import type * as DashboardAR from "./ar/dashboard.json";
import type * as DashboardEN from "./en/dashboard.json";
import type * as DashboardFR from "./fr/dashboard.json";
import type * as DashboardKO from "./ko/dashboard.json";
import type * as DashboardKU from "./ku/dashboard.json";
import type * as DashboardDE from "./de/dashboard.json";
import type * as DashboardIT from "./it/dashboard.json";
import type * as DashboardPTBR from "./pt-BR/dashboard.json";
import type * as DashboardTR from "./tr/dashboard.json";
import type * as DashboardES from "./es/dashboard.json";
import type * as DashboardRU from "./ru/dashboard.json";

export type BotTranslation =
  | typeof BotAR
  | typeof BotEN
  | typeof BotKU
  | typeof BotFR
  | typeof BotKO
  | typeof BotDE
  | typeof BotIT
  | typeof BotPTBR
  | typeof BotTR
  | typeof BotES
  | typeof BotRU;
export type DashboardTranslation =
  | typeof DashboardAR
  | typeof DashboardEN
  | typeof DashboardKU
  | typeof DashboardFR
  | typeof DashboardKO
  | typeof DashboardDE
  | typeof DashboardIT
  | typeof DashboardPTBR
  | typeof DashboardTR
  | typeof DashboardES
  | typeof DashboardRU;

export interface BotLanguages {
  ar: typeof BotAR;
  en: typeof BotEN;
  fr: typeof BotFR;
  ku: typeof BotKU;
  ko: typeof BotKO;
  de: typeof BotDE;
  it: typeof BotIT;
  "pt-BR": typeof BotPTBR;
  tr: typeof BotTR;
  es: typeof BotES;
  ru: typeof BotRU;
}

export interface DashboardLanguages {
  ar: typeof DashboardAR;
  en: typeof DashboardEN;
  fr: typeof DashboardFR;
  ku: typeof DashboardKU;
  ko: typeof DashboardKO;
  de: typeof DashboardDE;
  it: typeof DashboardIT;
  "pt-BR": typeof DashboardPTBR;
  tr: typeof DashboardTR;
  es: typeof DashboardES;
  ru: typeof DashboardRU;
}

export const BOT_LANGUAGES: BotLanguages;
export const DASHBOARD_LANGUAGES: DashboardLanguages;
