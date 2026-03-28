// Import the inferred JSON types
import type * as BotAR from "./ar/bot.json";
import type * as BotEN from "./en/bot.json";
import type * as BotFR from "./fr/bot.json";
import type * as BotKO from "./ko/bot.json";
import type * as BotKU from "./ku/bot.json";

import type * as DashboardAR from "./ar/dashboard.json";
import type * as DashboardEN from "./en/dashboard.json";
import type * as DashboardFR from "./fr/dashboard.json";
import type * as DashboardKO from "./ko/dashboard.json";
import type * as DashboardKU from "./ku/dashboard.json";

export type BotTranslation = typeof BotAR | typeof BotEN | typeof BotKU | typeof BotFR | typeof BotKO;
export type DashboardTranslation = typeof DashboardAR | typeof DashboardEN | typeof DashboardKU | typeof DashboardFR | typeof DashboardKO;

export interface BotLanguages {
  ar: typeof BotAR;
  en: typeof BotEN;
  fr: typeof BotFR;
  ku: typeof BotKU;
  kr: typeof BotKO;
}

export interface DashboardLanguages {
  ar: typeof DashboardAR;
  en: typeof DashboardEN;
  fr: typeof DashboardFR;
  ku: typeof DashboardKU;
  kr: typeof DashboardKO;
}

export const BOT_LANGUAGES: BotLanguages;
export const DASHBOARD_LANGUAGES: DashboardLanguages;
