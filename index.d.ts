// Import the inferred JSON types
import type * as BotAR from "./ar/bot.json";
import type * as BotDE from "./de/bot.json";
import type * as BotEN from "./en/bot.json";
import type * as BotKU from "./ku/bot.json";
import type * as BotTR from "./tr/bot.json";

import type * as DashboardAR from "./ar/dashboard.json";
import type * as DashboardDE from "./de/dashboard.json";
import type * as DashboardEN from "./en/dashboard.json";
import type * as DashboardKU from "./ku/dashboard.json";
import type * as DashboardTR from "./tr/dashboard.json";

export type BotTranslation = typeof BotAR | typeof BotEN | typeof BotKU;
export type DashboardTranslation = typeof DashboardAR | typeof DashboardEN | typeof DashboardKU;

export interface BotLanguages {
  ar: typeof BotAR;
  en: typeof BotEN;
  ku: typeof BotKU;
  tr: typeof BotTR;
  de: typeof BotDE;
}

export interface DashboardLanguages {
  ar: typeof DashboardAR;
  en: typeof DashboardEN;
  ku: typeof DashboardKU;
  tr: typeof DashboardTR;
  de: typeof DashboardDE;
}

export const BOT_LANGUAGES: BotLanguages;
export const DASHBOARD_LANGUAGES: DashboardLanguages;
