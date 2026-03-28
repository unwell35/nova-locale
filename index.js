// @ts-check

/**
 * @typedef {import('./en/bot.json')} BotTranslation
 * @typedef {import('./en/dashboard.json')} DashboardTranslation
 */

/**
 * @type {Record<'ar' | 'en' | 'ku' | 'fr' | 'ko', BotTranslation>}
 */
const BOT_LANGUAGES = {
  ar: require("./ar/bot.json"),
  en: require("./en/bot.json"),
  ku: require("./ku/bot.json"),
  fr: require("./fr/bot.json"),
  ko: require("./ko/bot.json"),
};

/**
 * @type {Record<'ar' | 'en' | 'ku' | 'fr' | 'ko', DashboardTranslation>}
 */
const DASHBOARD_LANGUAGES = {
  ar: require("./ar/dashboard.json"),
  en: require("./en/dashboard.json"),
  ku: require("./ku/dashboard.json"),
  fr: require("./fr/dashboard.json"),
  ko: require("./ko/dashboard.json"),
};

module.exports = {
  BOT_LANGUAGES,
  DASHBOARD_LANGUAGES,
};
