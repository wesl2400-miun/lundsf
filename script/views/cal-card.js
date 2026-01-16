import { newH2, newBtn, newP, newDiv } from '../utils.js';
import { STR } from '../refs.js';

// Skapar kalender kort
class CalCard {
  constructor(root, title, text) {
    this._root = root;
    newH2(title, this._root);
    if(text) newP(text, this._root);
    this._btns = [];
  }

  // Generera knappar från string listan
  render(list, prefix) {
    const calendar = newDiv('calendar', this._root);
    calendar.role = 'radiogroup';
    list.forEach(label => {
      this._btns.push(this._btn(label, calendar, prefix));
    });
  }

  // Lägg till och aktivera knapparna så att de går att boka av
  _btn = (label, calendar, prefix) => {
    const curnt = newBtn('calendar-btn', label, calendar);
    curnt.role = 'radio';
    curnt.id = label;
    curnt.ariaChecked = 'false';
    curnt.ariaLabel = prefix? `${prefix} ${label}` : label;
    curnt.value = prefix? `${prefix} ${label}` : label;
    curnt.addEventListener('click', () => {
      curnt.ariaChecked = 'true';
      this._btns.forEach(btn => {
        if(btn.id !== curnt.id) btn.ariaChecked = 'false';
      });
    });
    return curnt;
  }
}

// Skapar kalenderkort för tider
export class TimeCard {
  constructor(root) {
    root.innerHTML = '';
    new CalCard(
      root,
      STR.TIME_TITLE, 
      STR.TIME_INFO
    ).render(['09.30', '10.00', '10.30', 
      '11.00', '13.30', '14.00', '14.30',
      '15.00', '15.30', '16.00', '17.00', 
      '17.30', '18.00', '18.30'], 'kl.');   
  }
}

// Skapar kalenderkort för dag
export class DayCard {
  constructor(root) {
    root.innerHTML = '';
    new CalCard(
      root,
      STR.DAY_TITLE, 
      STR.DAY_INFO
    ).render(Array.from(
      { length: 20}, (_, i) => i + 1));
  }
}

// Skapa kalenderkort för månad
export class MonthCard {
  constructor(root) {
    root.innerHTML = '';
    new CalCard(
      root,STR.MONTH_TITLE).render([
      'Januari', 'Februari.', 'Mars', 'April',
      'Maj', 'Juni', 'Juli', 'Augusti', 
      'September', 'Oktober', 'November', 'December'
    ]);
  }
}

// Skapa kalenderkort för år
export class YearCard {
  constructor(root) {
    root.innerHTML = '';
    this._card = new CalCard(root, 
      STR.YEAR_TITLE, STR.YEAR_INFO);
    this._card.render(['2026', '2027']);
  }
}