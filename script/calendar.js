import { CalCard } from './cal-card.js';
import { PATH, STR } from './refs.js';
import { Toolbar } from './toolbar.js';
import { getTag, newH1 } from './utils.js';

class TimeView {
  constructor(root) {
    root.innerHTML = '';
    newH1(STR.BOOKING_H1, root);
    const card = new CalCard(
      root,
      STR.TIME_TITLE, 
      STR.TIME_INFO
    );
    card.render(['09.30', '10.00', '10.30', 
      '11.00', '13.30', '14.00', '14.30',
      '15.00', '15.30', '16.00', '17.00', 
      '17.30', '18.00', '18.30']);
    this._wire(root);
  }

  _wire = (root) =>  {
    const tbar = new Toolbar(root);
    tbar.wireActBtn(STR.BTN_NEXT, PATH.OPTIONS);
    tbar.wireDecBtn(STR.BTN_PREV, null, () => {
      new DayView(root);
    });
  }
}

class DayView {
  constructor(root) {
    root.innerHTML = '';
    newH1(STR.BOOKING_H1, root);
    const card = new CalCard(
      root,
      STR.DAY_TITLE, 
      STR.DAY_INFO
    );
    card.render(Array.from(
      { length: 20}, (_, i) => i + 1));
    this._wire(root);
  }

  _wire = (root) =>  {
    const tbar = new Toolbar(root);
    tbar.wireActBtn(STR.BTN_NEXT, null, () => {
      new TimeView(root);
    });
    tbar.wireDecBtn(STR.BTN_PREV, null, () => {
      new MonthView(root);
    });
  }
}

class MonthView {
  constructor(root) {
    root.innerHTML = '';
    newH1(STR.BOOKING_H1, root);
    const card = new CalCard(
      root,STR.MONTH_TITLE);
    card.render([
      'Jan.', 'Feb.', 'Mar.', 'Apr.',
      'Maj', 'Jun.', 'Jul.', 'Aug.', 
      'Sep.', 'Okt.', 'Nov.', 'Dec.'
    ]);
    this._wire(root);
  }

  _wire = (root) =>  {
    const tbar = new Toolbar(root);
    tbar.wireActBtn(STR.BTN_NEXT, null, () => {
      new DayView(root);
    });
    tbar.wireDecBtn(STR.BTN_PREV, null, () => {
      new YearView(root);
    });
  }
}

class YearView {
  constructor(root) {
    root.innerHTML = '';
    newH1(STR.BOOKING_H1, root);
    const card = new CalCard(root, 
      STR.YEAR_TITLE, STR.YEAR_INFO);
    card.render(['2026', '2027']);
    this._wire(root);
  }

  _wire = (root) =>  {
    const tbar = new Toolbar(root);
    tbar.wireActBtn(STR.BTN_NEXT, null, () => {
      new MonthView(root);
    });
    tbar.wireDecBtn(STR.BTN_PREV, PATH.DESTINATION);
  }
}

const params = new URLSearchParams(window.location.search);
const view = params.get('view');

window.addEventListener('load', () => {
  const main = getTag('main');
  if(view) new DayView(main);
  else new YearView(main);
});