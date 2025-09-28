// Import the inferred JSON types
import type * as BotAR from "./ar/bot.json";
import type * as BotEN from "./en/bot.json";
import type * as BotKU from "./ku/bot.json";

import type * as DashboardAR from "./ar/dashboard.json";
import type * as DashboardEN from "./en/dashboard.json";
import type * as DashboardKU from "./ku/dashboard.json";

export type BotTranslation = typeof BotAR | typeof BotEN | typeof BotKU;
export type DashboardTranslation = typeof DashboardAR | typeof DashboardEN | typeof DashboardKU;

export interface BotLanguages {
  ar: typeof BotAR;
  en: typeof BotEN;
  ku: typeof BotKU;
}

export interface DashboardLanguages {
  ar: typeof DashboardAR;
  en: typeof DashboardEN;
  ku: typeof DashboardKU;
}

export const BOT_LANGUAGES: BotLanguages;
export const DASHBOARD_LANGUAGES: DashboardLanguages;
