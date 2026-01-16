import { DayCard, MonthCard, TimeCard, YearCard } from './cal-card.js';
import { PATH, STORAGE, STR, CALENDAR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { getTag, tagBy, loadRec, saveRec } from '../utils.js';
import { Trip } from '../data/trip.js';

// Hanterar logiken bakom calendar.html sidan
window.addEventListener('load', () => {
  const params = new URLSearchParams(window.location.search);
  const back = params.get('back');
  const vHolder = getTag('view-holder');
  const tbar = new Toolbar('act-btn', 'dec-btn');

  const flow = [
    () => new YearCard(vHolder),
    () => new MonthCard(vHolder),
    () => new DayCard(vHolder),
    () => new TimeCard(vHolder),
  ];

  let time = [];
  const max = flow.length;
  const last = max - 1;

  let index = back? last : 0;
  flow[index]();

  // Spara de markerade knapparnas textinnehåll i en temporär array
  const save = () => {
    const checked = tagBy('button[aria-checked="true"]');
    if(checked) time.push(checked.value);
  }

  // Visa nästa vyn
  const next = () => {
    index++;
    if(index === max) {
      save();
      const data = encodeURIComponent(time.join(' '));
      window.location.href = `${PATH.OPTIONS}?data=${data}`;
    } else {
      save();
      flow[index]();
    }
    console.log(time)
  }

  // Visa föregående vyn
  const prev = () => {
    index--;
    if(index < 0)
      window.location.href = PATH.BOOKING;
    else {
      time.pop();
      flow[index]();
    }
  }

  // Lyssna efter 'Nästa' och 'Tillbaka' händelser
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});