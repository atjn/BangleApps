/* jshint esversion: 6 */

/**
 * How many meters per X?
 */
exports.distanceUnits = {
  m: 1,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.34,
  km: 1000,
  kmi: 1000,
  nm: 1852,
};

/**
 * How many kph per X?
 */
exports.speedUnits = {
  kmh: 1,
  kph: 1,
  "km/h": 1,
  kmt: 1,
  "km/t": 1,
  mph: 1.60934,
  kts: 1.852,
};

/**
 * For a codepage, 'map' is a map of char codes 128 and above.
 * Where there is no character, just use '.'
 */
exports.codePages = {
  "ISO8859-1": {
    name: "ISO8859-1",
    map: `
  €.‚ƒ„…†‡ˆ‰Š‹Œ.Ž.
  .‘’“”•–—˜™š›œ.žŸ
  .¡¢£¤¥¦§¨©ª«¬.®¯
  °±²³´µ¶·¸¹º»¼½¾¿
  ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ
  ÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß
  àáâãäåæçèéêëìíîï
  ðñòóôõö÷øùúûüýþÿ
  `.replace(/[ \n]/g, ""),
  },
};

// charFallbacks is now in core/js/utils.js as CODEPAGE_CONVERSIONS

/**
 * timePattern / datePattern:
 *
 * %Y   year, all digits (2004, 2020, 32100)
 * %y   year, last two digits (04, 20, 00)
 * %m   month, two digits (01, 12)
 * %-m  month, one or two digits (1, 12)
 * %d   day of month, two digits (01, 26)
 * %-d  day of month, one or two digits (1, 26)
 *
 * %A   locale's weekday name, full (e.g., Sunday)
 * %a   locale's weekday name, abbreviated (e.g., Sun)
 * %B   locale's month name, full (e.g., January)
 * %b   locale's month name, abbreviated (e.g., Jan)
 *
 * %HH  hours, two digits (00..23)
 * %MM  minutes, two digits (00..59)
 * %SS  seconds, two digits (00..60)
 * %P   locale's equivalent of either am or pm, lowercase
 * %p   locale's equivalent of either AM or PM, uppercase
 */

/**
 * A list of all supported locales.
 *
 * To add a new locale, you must manually define:
 * - `calendar` (try 'gregory')
 * - `numberingSystem` (try 'latn')
 * All other values are autogenerated but you can override them here if you disagree with the autogenerated result.
 * If your locale is unsupported, you can define a `fallbackLang` that will be used for default values.
 *
 * If your language contains fancy unicode characters, they are probably not supported by Espruino.
 * In that case, you can define a fallback character in `character_fallback_map`.
 *
 * To see the final output of the autogenerator, run:
 * node bin/create-locales-js.mjs LOCALECODE
 *
 * LOCALECODE is the locale that you want to see the output for, e.g. "en_US".
 *
 * Limits:
 * decimal_point: must be 1 char
 * thousands_sep: must be 1 char
 * speed: must be <5 chars
 * distance: must be <4 chars, ideally 2
 * temperature: must be <4 chars, ideally 2
 * am/pm: must be <4 chars, ideally 2
 * long time: must be <9 chars
 * short time: must be <6 char
 * long date: must be <15 chars, ideally <13
 * short date: must be <12 chars, ideally <10
 * abmonth: short months (must be <5 chars, ideally 3)
 * month: normal month names (current longest is 11 chars)
 * abday: short days (must be <5 chars, ideally 3)
 * day: normal day names (current longest is 13 chars)
 */
exports.locales = {
  en_GB: {
    // this is default
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "mph",
    distance: { 0: "yd", 1: "mi" },
    datePattern: { 0: "%b %d %Y", 1: "%d/%m/%Y" },
    abmonth: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
  },
  en_US: {
    notes: "USA with MM/DD/YY date",
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "mph",
    distance: { 0: "ft", 1: "mi" },
    temperature: "°F",
  },
  "en_US 2": {
    notes: "USA with YYYY-MM-DD date",
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "mph",
    distance: { 0: "ft", 1: "mi" },
    temperature: "°F",
    datePattern: { 0: "%b %d, %Y", 1: "%Y-%m-%d" },
  },
  en_IN: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    abmonth: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
  },
  en_IE: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    abmonth: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
  },
  en_NAV: {
    // navigation units nautical miles and knots
    fallbackLang: "en_GB", // the locale generator doesn't know what NAV is, so give it a different lang to take values from
    icon: "⛵✈️",
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kts",
    distance: { 0: "m", 1: "nm" },
  },
  de_DE: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    datePattern: { 0: "%d. %b %Y", 1: "%d.%m.%Y" }, // 1. März 2020 // 01.03.20
    trans: {
      yes: "ja",
      Yes: "Ja",
      no: "nein",
      No: "Nein",
      ok: "ok",
      on: "an",
      off: "aus",
      "< Back": "< Zurück",
      Delete: "Löschen",
      "Mark Unread": "Als ungelesen markieren",
    },
  },
  en_JP: {
    // we do not have the font, so it is not ja_JP
    fallbackLang: "en_GB", // en_JP is not supported by the generator, so we give it somewhere else to grab the english names from
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    distance: { 0: "m", 1: "km" },
    datePattern: { 0: "%Y/%m/%d", 1: "%Y/%m/%d" },
  },
  nl_NL: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    ampm: { 0: "AM", 1: "PM" },
    trans: {
      yes: "ja",
      Yes: "Ja",
      no: "nee",
      No: "Nee",
      ok: "ok",
      on: "aan",
      off: "uit",
      "< Back": "< Terug",
      Delete: "Verwijderen",
      "Mark Unread": "Markeer als ongelezen",
    },
  },
  en_NL: {
    // English date units with Dutch number and navigation units.
    calendar: "gregory",
    numberingSystem: "latn",
    datePattern: { 0: "%b %d %Y", 1: "%d/%m/%Y" }, // Feb 28 2020" // "01/03/2020"(short)
    abmonth: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
  },
  en_CA: {
    calendar: "gregory",
    numberingSystem: "latn",
    ampm: { 0: "am", 1: "pm" },
  },
  fr_FR: {
    calendar: "gregory",
    numberingSystem: "latn",
    abmonth: "janv,févr,mars,avr,mai,juin,juil,août,sept,oct,nov,déc",
    abday: "dim,lun,mar,mer,jeu,ven,sam",
    trans: {
      yes: "oui",
      Yes: "Oui",
      no: "non",
      No: "Non",
      ok: "ok",
      on: "on",
      off: "off",
    },
  },
  fr_MC: {
    calendar: "gregory",
    numberingSystem: "latn",
    abmonth: "janv,févr,mars,avr,mai,juin,juil,août,sept,oct,nov,déc",
    abday: "dim,lun,mar,mer,jeu,ven,sam",
  },
  sv_SE: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "km/t",
    datePattern: { 0: "%b %d %Y", 1: "%Y-%m-%d" }, // feb 1 2020 //  2020-03-01
    abmonth: "jan,feb,mars,apr,maj,juni,juli,aug,sep,okt,nov,dec",
    trans: {
      yes: "ja",
      Yes: "Ja",
      no: "nej",
      No: "Nej",
      ok: "ok",
      on: "on",
      off: "off",
    },
  },
  en_SE: {
    // Swedish localisation with English text
    calendar: "gregory",
    numberingSystem: "latn",
    abmonth: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
  },
  da_DK: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "km/t",
    abmonth: "jan,feb,mar,apr,maj,jun,jul,aug,sep,okt,nov,dec",
    abday: "søn,man,tir,ons,tor,fre,lør",
    trans: { yes: "ja", Yes: "Ja", no: "nej", No: "Nej", ok: "ok" },
  },
  en_DK: {
    // Danish units with english language
    calendar: "gregory",
    numberingSystem: "latn",
    abmonth: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
  },
  en_NZ: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kph",
    abmonth: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
  },
  en_AU: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    abmonth: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
  },
  de_AT: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    trans: {
      yes: "ja",
      Yes: "Ja",
      no: "nein",
      No: "Nein",
      ok: "ok",
      on: "an",
      off: "aus",
      "< Back": "< Zurück",
      Delete: "Löschen",
      "Mark Unread": "Als ungelesen markieren",
    },
  },
  en_IL: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    abmonth: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
  },
  es_ES: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    ampm: { 0: "AM", 1: "PM" },
    trans: {
      yes: "sí",
      Yes: "Sí",
      no: "no",
      No: "No",
      ok: "ok",
      on: "on",
      off: "off",
      "< Back": "< Atrás",
      Delete: "Borrar ",
      "Mark Unread": "Marcar como no leído",
    },
  },
  fr_BE: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    abmonth: "janv,févr,mars,avr,mai,juin,juil,août,sept,oct,nov,déc",
    abday: "dim,lun,mar,mer,jeu,ven,sam",
    trans: {
      yes: "oui",
      Yes: "Oui",
      no: "non",
      No: "Non",
      ok: "ok",
      on: "on",
      off: "off",
    },
  },
  nl_BE: {
    calendar: "gregory",
    numberingSystem: "latn",
    ampm: { 0: "AM", 1: "PM" },
  },
  de_BE: {
    calendar: "gregory",
    numberingSystem: "latn",
  },
  fi_FI: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    ampm: { 0: "ap", 1: "ip" },
    abmonth: "tamm,helm,maal,huht,touk,kesä,hein,elo,syys,loka,marr,joul",
    trans: {
      yes: "oui",
      Yes: "Oui",
      no: "no",
      No: "No",
      ok: "ok",
      on: "on",
      off: "off",
    },
  },
  de_CH: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    ampm: { 0: "VM", 1: "NM" },
    trans: {
      yes: "ja",
      Yes: "Ja",
      no: "nein",
      No: "Nein",
      ok: "ok",
      on: "an",
      off: "aus",
    },
  },
  fr_CH: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    abmonth: "janv,févr,mars,avr,mai,juin,juil,août,sept,oct,nov,déc",
    abday: "dim,lun,mar,mer,jeu,ven,sam",
    trans: {
      yes: "oui",
      Yes: "Oui",
      no: "non",
      No: "Non",
      ok: "ok",
      on: "on",
      off: "off",
    },
  },
  it_CH: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    trans: {
      yes: "sì",
      Yes: "Sì",
      no: "no",
      No: "No",
      ok: "ok",
      on: "on",
      off: "off",
    },
  },
  it_IT: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    trans: {
      yes: "sì",
      Yes: "Sì",
      no: "no",
      No: "No",
      ok: "ok",
      on: "on",
      off: "off",
    },
  },
  wae_CH: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    trans: {
      yes: "sì",
      Yes: "Sì",
      no: "no",
      No: "No",
      ok: "ok",
      on: "on",
      off: "off",
    },
  },
  tr_TR: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    trans: {
      yes: "evet",
      Yes: "Evet",
      no: "hayir",
      No: "Hayir",
      ok: "tamam",
      on: "acik",
      off: "kapali",
    },
  },
  hu_HU: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kph",
    ampm: { 0: "de", 1: "du" },
    datePattern: {
      0: "%Y. %b %-d.",
      1: "%Y.%m.%d.",
    },
    abmonth: "jan,feb,már,ápr,máj,jún,júl,aug,szep,okt,nov,dec",
    trans: {
      yes: "igen",
      Yes: "Igen",
      no: "nem",
      No: "Nem",
      ok: "ok",
      on: "be",
      off: "ki",
    },
  },
  oc_FR: {
    calendar: "gregory",
    numberingSystem: "latn",
    abmonth: "gen,feb,març,abr,mai,junh,jul,ago,set,oct,nov,dec",
    abday: "dg,dl,dm,dc,dj,dv,ds",
    trans: {
      yes: "òc",
      Yes: "Òc",
      no: "non",
      No: "Non",
      ok: "ok",
      on: "on",
      off: "off",
    },
  },
  pt_BR: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    datePattern: {
      0: "%-d. %b %Y",
      1: "%d/%m/%Y",
    },
    abmonth: "jan,fev,mar,abr,mai,jun,jul,ago,set,out,nov,dez",
    abday: "dom,seg,ter,qua,qui,sex,sáb",
    trans: {
      yes: "sim",
      Yes: "Sim",
      no: "não",
      No: "Não",
      ok: "confirmar",
      on: "ativado",
      off: "desativado",
    },
  },
  cs_CZ: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    ampm: { 0: "dop", 1: "odp" },
    trans: {
      yes: "ano",
      Yes: "Ano",
      no: "ne",
      No: "Ne",
      ok: "ok",
      on: "zap",
      off: "vyp",
    },
  },
  hr_HR: {
    calendar: "gregory",
    numberingSystem: "latn",
    ampm: { 0: "dop", 1: "pop" },
    datePattern: {
      0: "%-d. %b %Y.",
      1: "%d.%m.%Y.",
    },
    trans: {
      yes: "da",
      Yes: "Da",
      no: "ne",
      No: "Ne",
      ok: "ok",
      on: "Uklj.",
      off: "Isklj.",
      "< Back": "< Natrag",
    },
  },
  sl_SI: {
    calendar: "gregory",
    numberingSystem: "latn",
    ampm: { 0: "dop", 1: "pop" },
    abmonth: "jan,feb,mar,apr,maj,jun,jul,avg,sep,okt,nov,dec",
    abday: "ned,pon,tor,sre,čet,pet,sob",
    trans: {
      yes: "da",
      Yes: "Da",
      no: "ne",
      No: "Ne",
      ok: "ok",
      on: "Vklj.",
      off: "Izklj.",
      "< Back": "< Nazaj",
    },
  },
  pt_PT: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    ampm: { 0: "am", 1: "pm" },
    abmonth: "jan,fev,mar,abr,mai,jun,jul,ago,set,out,nov,dez",
    abday: "dom,seg,ter,qua,qui,sex,sáb",
    trans: {
      yes: "sim",
      Yes: "Sim",
      no: "não",
      No: "Não",
      ok: "ok",
      on: "on",
      off: "off",
    },
  },
  pl_PL: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    abday: "ndz,pon,wt,śr,czw,pt,sob",
    trans: {
      yes: "tak",
      Yes: "Tak",
      no: "nie",
      No: "Nie",
      ok: "ok",
      on: "on",
      off: "off",
      "< Back": "< Wstecz",
    },
  },
  lv_LV: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    ampm: { 0: "pri", 1: "pēc" },
    datePattern: {
      0: "%Y. %-d. %b",
      1: "%d.%m.%y",
    },
    abmonth: "jan,feb,mar,apr,mai,jūn,jūl,aug,sep,okt,nov,dec",
    abday: "sv,pr,ot,tr,ce,pk,se",
    trans: {
      yes: "jā",
      Yes: "Jā",
      no: "nē",
      No: "Nē",
      ok: "labi",
      on: "Ieslēgt",
      off: "Izslēgt",
      "< Back": "< Atpakaļ",
    },
  },
  nn_NO: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmt",
    ampm: { 0: "FM", 1: "EM" },
    trans: {
      yes: "ja",
      Yes: "Ja",
      no: "nei",
      No: "Nei",
      ok: "ok",
      on: "på",
      off: "av",
      "< Back": "< Tilbake",
      Delete: "Slett",
      "Mark Unread": "Merk som ulesen",
    },
  },
  nb_NO: {
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    ampm: { 0: "AM", 1: "PM" },
    abday: "søn,man,tir,ons,tor,fre,lør",
    trans: {
      yes: "ja",
      Yes: "Ja",
      no: "nei",
      No: "Nei",
      ok: "ok",
      on: "på",
      off: "av",
      "< Back": "< Tilbake",
      Delete: "Slett",
      "Mark Unread": "Merk som ulest",
    },
  },
  ca_ES: {
    icon: "🇪🇺",
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "kmh",
    ampm: { 0: "AM", 1: "PM" },
    abmonth: "gen,febr,març,abr,maig,juny,jul,ag,set,oct,nov,des",
    trans: {
      yes: "sí",
      Yes: "Sí",
      no: "no",
      No: "No",
      ok: "d'acord",
      on: "on",
      off: "off",
      "< Back": "< Enrere",
      Delete: "Esborra",
      "Mark Unread": "Marca com a no llegit",
    },
  },
  sq_AL: {
    calendar: "gregory",
    numberingSystem: "latn",
    ampm: { 0: "AM", 1: "PM" },
  },
  /*
  "he_IL": { // This won't work until we get a font - see https://github.com/espruino/BangleApps/issues/399
    codePage : "ISO8859-8",
    lang: "he_IL",
    calendar: "gregory",
    numberingSystem: "latn",
    speed: "קמ״ש",
    distance: { 0: "מ׳", 1: "ק״מ" },
    timePattern: { 0: "%HH:%MM:%SS", 1: "%HH:%MM" },
    datePattern: { 0: "%A, %B %d, %Y", "1": "%d/%m/%Y" }, //  Sunday, 1 March 2020  // 01/03/2020
    abmonth: "ינו,פבר,מרץ,אפר,מאי,יונ,יול,אוג,ספט,אוק,נוב,דצמ",
    month: "ינואר,פברואר,מרץ,אפריל,מאי,יוני,יולי,אוגוסט,ספטמבר,אוקטובר,נובמבר,דצמבר",
    abday: "א׳,ב׳,ג׳,ד׳,ה,ו׳,ש׳",
    day: "ראשון,שני,שלישי,רביעי,חמישי,שישי,שבת",
    trans: { yes: "כן", Yes: "כן", no: "לא", No: "לא", ok: "אישור", on: "פעיל", off: "כבוי" }
  }
*/
  /**
  * These test strings are designed to be as wide and tall as real locale strings can be.
  * All apps should be able to display them properly, to ensure that they work with all locales.
  * To make the strings as long as possible, wide characters like "w" and "m" is used,
  * and to make them taller, "k" and "g" are used together. 
  */
  "ts_TS test": {
    icon: "🐛",
    notes: "Produces the longest possible output. Useful for testing.",
    calendar: "gregory",
    numberingSystem: "latn",
    decimal_point: ",",
    thousands_sep: ",",
    speed: "km/h",
    distance: {
      0: "kmi",
      1: "kmi",
    },
    temperature: "°C",
    ampm: {
      0: "dop",
      1: "odp",
    },
    timePattern: {
      0: "%HHh%MM:%SS",
      1: "%HHh%MM",
    },
    datePattern: {
      0: "%b, %d, %Y",
      1: "%d. %m %Y",
    },
    abmonth: Array(12).fill("mgmk").join(","),
    month: Array(12).fill("megmmaskuum").join(","),
    abday: Array(7).fill("mgmk").join(","),
    day: Array(7).fill("megmavammkkom").join(","),
  },
};
