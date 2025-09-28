const BOT_LANGUAGES = {};
BOT_LANGUAGES.ar = require('./ar/bot.json');
BOT_LANGUAGES.en = require('./en/bot.json');
BOT_LANGUAGES.ku = require('./ku/bot.json');

module.exports.BOT_LANGUAGES = BOT_LANGUAGES;

const DASHBOARD_LANGUAGES = {};
DASHBOARD_LANGUAGES.ar = require('./ar/dashboard.json');
DASHBOARD_LANGUAGES.en = require('./en/dashboard.json');
DASHBOARD_LANGUAGES.ku = require('./ku/dashboard.json');

module.exports.DASHBOARD_LANGUAGES = DASHBOARD_LANGUAGES;
