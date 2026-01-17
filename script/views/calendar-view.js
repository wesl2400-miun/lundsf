import { DayCard, MonthCard, TimeCard, YearCard } from './cal-card.js';
import { PATH, STORAGE } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { getTag, tagBy, saveRec, remRec } from '../utils.js';

// Hanterar logiken bakom calendar.html sidan
window.addEventListener('load', () => {
  const params = new URLSearchParams(window.location.search);
  const back = params.get('back');
  const vHolder = getTag('view-holder');
  const tbar = new Toolbar('act-btn', 'dec-btn');

  // Rensa cache, för att undvika att flera versioner av samma data skapas när 'Tillbaka' knappen klickas
  remRec(STORAGE.CALENDAR);
  let calend = '';
  const time = [];

  const flow = [
    () => new YearCard(vHolder),
    () => new MonthCard(vHolder),
    () => new DayCard(vHolder),
    () => new TimeCard(vHolder),
  ];

  const max = flow.length;
  const last = max - 1;

  let index = back? last : 0;
  flow[index]();

  // Lägg till de markerade knapparnas textinnehåll i en temporär array
  const addTime = () => {
    const checked = tagBy('button[aria-checked="true"]');
    if(checked) time.push(checked.value);
  }

  // Spara bokningstiden i sessionStorage
  const save = () => {
    if(time.length > 0) {
      calend = time.join(' ');
      saveRec(STORAGE.CALENDAR, calend);
    }
  }

  // Visa nästa vyn
  const next = () => {
    index++;
    if(index === max) {
      addTime();
      save();
      window.location.href = PATH.OPTIONS;
    } else {
      addTime();
      flow[index]();
    }
  }

  // Visa föregående vyn
  const prev = () => {
    index--;
    if(index < 0)
      window.location.href = PATH.DESTINATION;
    else {
      time.pop();
      flow[index]();
    }
  }

  // Lyssna efter 'Nästa' och 'Tillbaka' händelser
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});