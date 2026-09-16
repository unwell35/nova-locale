// @ts-check

/**
 * @typedef {import('./en/bot.json')} BotTranslation
 * @typedef {import('./en/dashboard.json')} DashboardTranslation
 */

/**
 * @type {Record<'ar' | 'en' | 'ku' | 'fr' | 'ko' | 'de' | 'it' | 'pt-BR' | 'tr' | 'es' | 'ru', BotTranslation>}
 */
const BOT_LANGUAGES = {
  ar: require("./ar/bot.json"),
  en: require("./en/bot.json"),
  ku: require("./ku/bot.json"),
  fr: require("./fr/bot.json"),
  ko: require("./ko/bot.json"),
  de: require("./de/bot.json"),
  it: require("./it/bot.json"),
  "pt-BR": require("./pt-BR/bot.json"),
  tr: require("./tr/bot.json"),
  es: require("./es/bot.json"),
  ru: require("./ru/bot.json"),
};

/**
 * @type {Record<'ar' | 'en' | 'ku' | 'fr' | 'ko' | 'de' | 'it' | 'pt-BR' | 'tr' | 'es' | 'ru', DashboardTranslation>}
 */
const DASHBOARD_LANGUAGES = {
  ar: require("./ar/dashboard.json"),
  en: require("./en/dashboard.json"),
  ku: require("./ku/dashboard.json"),
  fr: require("./fr/dashboard.json"),
  ko: require("./ko/dashboard.json"),
  de: require("./de/dashboard.json"),
  it: require("./it/dashboard.json"),
  "pt-BR": require("./pt-BR/dashboard.json"),
  tr: require("./tr/dashboard.json"),
  es: require("./es/dashboard.json"),
  ru: require("./ru/dashboard.json"),
};

module.exports = {
  BOT_LANGUAGES,
  DASHBOARD_LANGUAGES,
};
