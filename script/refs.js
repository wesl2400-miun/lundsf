
// Referenser till projektets ikoner
export const ICON = Object.freeze({
  MENU_CLOSED: './assets/menu-closed.svg',
  MENU_OPEN: './assets/menu-open.svg'
});

// Refererar till data som sparas i sessionStorage
export const STORAGE = Object.freeze({
  CACHED_TRIP: 'CACHED_TRIP',
  CACHED_PROFILE: 'CACHED_PROFILE',
  PROFILE: 'PROFILE',
  TRIPS: 'TRIPS'
});

// Referar till alla undersior
export const PATH = Object.freeze({
  REMOVE: './remove.html',
  BOOKING: './booking.html',
  DESTINATION: './destination.html',
  CALENDAR: './calendar.html',
  OPTIONS: './options.html',
  DETAILS: './details.html',
  CONFIRMATION: './confirmation.html',
  SUCCESS: './success.html',
  CHANGE: './change.html',
  PROFILE: './profile.html'
});

// Refererar till visa texter som är synliga som kort och knappar
export const STR = Object.freeze({
  BOOKING_H1: 'Boka färdtjänst',
  BOOKING_TRIPS: 'Bokade resor', 
  BOOKING_LIST: 'Nedan finns resor som du redan har bokat.',
  BOOKING_EMPTY: 'Du har för närvarande inga bokade resor.',
  BOOKING_NEW: 'BOKA NY RESA',
  YEAR_TITLE: 'Välj år',
  YEAR_INFO: 'Du kan bara boka en resa ett år framåt.',
  MONTH_TITLE: 'Välj månad',
  DAY_TITLE: 'Välj dag',
  DAY_INFO: 'Nedan finns tillgängliga dagar.',
  TIME_TITLE: 'Välj tid',
  TIME_INFO: 'Nedan finns tillgängliga tider.',
  BTN_CHANGE: 'ÄNDRA',
  BTN_OK: 'OK',
  BTN_NEXT: 'NÄSTA',
  BTN_DEC: 'AVBRYT',
  BTN_CONF: 'BEKRÄFTA',
  BTN_PREV: 'TILLBAKA',
  BTN_DIAG_CHANGE: 'JA, ÄNDRA',
  BTN_DIAG_REMOVE: 'JA, AVBOKA',
  BTN_DIAG_CONFIRM: 'JA, BOKA',
  BTN_DIAG_CANCEL: 'NEJ, AVBRYT'
});

export const CALENDAR = Object.freeze({
  YEAR: 'year',
  MONTH: 'month',
  DAY: 'day',
  TIME: 'time'
});