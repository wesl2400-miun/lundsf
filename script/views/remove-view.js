import { getTag } from '../utils.js';
import { Trips } from "../data/trips.js";
import { PATH, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';

// Hämta index från parametrar - indexet överförs i föregående sidan
const params = new URLSearchParams(window.location.search);
const index = params.get('index');
const trips = new Trips();

// Hämta den valada resan baserat på indexet
const current  = trips.list[index] || '';
const { name, from, to , date, opts } = current;

// Genererar dialogrutan för avbokningar av resor
window.addEventListener('load', () => {
  const main = getTag('dialog');
  const mess = getTag('dialog-msg');
  const info = 'Är du säker på att du vill avboka denna resa? ' + name +
    '. Från: '+ from + '. Till: ' + to + '. Datum: ' + date + '. Övrigt: ' + opts; 
  mess.textContent = info;

  // Avboka resan när bekräftelse knappen klickas
  const tbar = new Toolbar(main, 'inside-dialog');
  tbar.wireActBtn(STR.BTN_DIAG_REMOVE, PATH.BOOKING, () => {
     trips.remTrip(index);
  });
  tbar.wireDecBtn(STR.BTN_DIAG_CANCEL, PATH.BOOKING);
});