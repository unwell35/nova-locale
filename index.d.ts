// Import the inferred JSON types
import type * as BotAR from "./ar/bot.json";
import type * as BotDE from "./de/bot.json";
import type * as BotEN from "./en/bot.json";
import type * as BotFR from "./fr/bot.json";
import type * as BotKU from "./ku/bot.json";
import type * as BotTR from "./tr/bot.json";

import type * as DashboardAR from "./ar/dashboard.json";
import type * as DashboardDE from "./de/dashboard.json";
import type * as DashboardEN from "./en/dashboard.json";
import type * as DashboardFR from "./fr/dashboard.json";
import type * as DashboardKU from "./ku/dashboard.json";
import type * as DashboardTR from "./tr/dashboard.json";

export type BotTranslation = typeof BotAR | typeof BotEN | typeof BotKU | typeof BotFR;
export type DashboardTranslation = typeof DashboardAR | typeof DashboardEN | typeof DashboardKU | typeof DashboardFR;

export interface BotLanguages {
  ar: typeof BotAR;
  en: typeof BotEN;
  fr: typeof BotFR;
  ku: typeof BotKU;
  tr: typeof BotTR;
  de: typeof BotDE;
}

export interface DashboardLanguages {
  ar: typeof DashboardAR;
  en: typeof DashboardEN;
  fr: typeof DashboardFR;
  ku: typeof DashboardKU;
  tr: typeof DashboardTR;
  de: typeof DashboardDE;
}

export const BOT_LANGUAGES: BotLanguages;
export const DASHBOARD_LANGUAGES: DashboardLanguages;
