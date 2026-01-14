import { CalCard } from './cal-card.js';
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { getTag, loadRec, newH1, saveRec } from '../utils.js';
import { Trip } from '../data/trip.js';

// Skapar kalender vyn för tider
class TimeView {
  constructor(root) {
    root.innerHTML = '';
    newH1(STR.BOOKING_H1, root);
    this._card = new CalCard(
      root,
      STR.TIME_TITLE, 
      STR.TIME_INFO
    );
    this._card.render(['09.30', '10.00', '10.30', 
      '11.00', '13.30', '14.00', '14.30',
      '15.00', '15.30', '16.00', '17.00', 
      '17.30', '18.00', '18.30']);
    this._wire(root);
  }

  // Sätt upp 'Nästa' och 'Tillbaka' knapparna
  _wire = (root) =>  {
    const tbar = new Toolbar(root);
    tbar.wireActBtn(STR.BTN_NEXT, PATH.OPTIONS, () => {
      this._card.boxes.forEach(box => {
        if(box.ariaChecked === 'true') {
          const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();
          trip.time += 'kl.' + box.value;
          saveRec(STORAGE.CACHED_TRIP, trip);
        }
      });
    });
    tbar.wireDecBtn(STR.BTN_PREV, null, () => {
      new DayView(root);
    });
  }
}

// Skapa kalendervyn för dag
class DayView {
  constructor(root) {
    root.innerHTML = '';
    newH1(STR.BOOKING_H1, root);
    this._card = new CalCard(
      root,
      STR.DAY_TITLE, 
      STR.DAY_INFO
    );
    this._card.render(Array.from(
      { length: 20}, (_, i) => i + 1));
    this._wire(root);
  }

  
  // Sätt upp 'Nästa' och 'Tillbaka' knapparna
  _wire = (root) =>  {
    const tbar = new Toolbar(root);
    tbar.wireActBtn(STR.BTN_NEXT, null, () => {
      this._card.boxes.forEach(box => {
        if(box.ariaChecked === 'true') {
          const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();
          trip.time += box.value + ', ';
          saveRec(STORAGE.CACHED_TRIP, trip);
        }
      });
      new TimeView(root);
    });
    tbar.wireDecBtn(STR.BTN_PREV, null, () => {
      new MonthView(root);
    });
  }
}

// Skapa kalendervyn för månad
class MonthView {
  constructor(root) {
    root.innerHTML = '';
    newH1(STR.BOOKING_H1, root);
    this._card = new CalCard(
      root,STR.MONTH_TITLE);
    this._card.render([
      'Jan.', 'Feb.', 'Mar.', 'Apr.',
      'Maj', 'Jun.', 'Jul.', 'Aug.', 
      'Sep.', 'Okt.', 'Nov.', 'Dec.'
    ]);
    this._wire(root);
  }
  
  // Sätt upp 'Nästa' och 'Tillbaka' knapparna
  _wire = (root) =>  {
    const tbar = new Toolbar(root);
    tbar.wireActBtn(STR.BTN_NEXT, null, () => {
       this._card.boxes.forEach(box => {
        if(box.ariaChecked === 'true') {
          const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();
          trip.time += box.value + ' ';
          saveRec(STORAGE.CACHED_TRIP, trip);
        }
      });
     new DayView(root);
    });
    tbar.wireDecBtn(STR.BTN_PREV, null, () => {
      new YearView(root);
    });
  }
}

// Skapa kalender vyn för år
class YearView {
  constructor(root) {
    root.innerHTML = '';
    newH1(STR.BOOKING_H1, root);
    this._card = new CalCard(root, 
      STR.YEAR_TITLE, STR.YEAR_INFO);
    this._card.render(['2026', '2027']);
    this._wire(root);
  }

  
  // Sätt upp 'Nästa' och 'Tillbaka' knapparna
  _wire = (root) =>  {
    const tbar = new Toolbar(root);
    tbar.wireActBtn(STR.BTN_NEXT, null, () => {
      this._card.boxes.forEach(box => {
        if(box.ariaChecked === 'true') {
          const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();
          trip.time += box.value + ' ';
          saveRec(STORAGE.CACHED_TRIP, trip);
        }
      });
      new MonthView(root);
    });
    tbar.wireDecBtn(STR.BTN_PREV, PATH.DESTINATION);
  }
}

const params = new URLSearchParams(window.location.search);
const view = params.get('view');

// Skapa lämplig vy baserat på typen som överförs mellan sidorna via parametrar
window.addEventListener('load', () => {
  const main = getTag('main');
  if(view) new DayView(main);
  else new YearView(main);
});