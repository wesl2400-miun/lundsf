import { getTag } from './utils.js';
import { Trips } from "./trips.js";
import { PATH, STR } from './refs.js';
import { Toolbar } from './toolbar.js';

const params = new URLSearchParams(window.location.search);
const index = params.get('index');
const trips = new Trips();
const current  = trips.list[index];
const { name, from, to , date, opts } = current;

window.addEventListener('load', () => {
  const main = getTag('main');
  const mess = getTag('dialog-msg');
  const info = 'Är du säker på att du vill avboka denna resa? ' + name +
    '. Från: '+ from + '. Till: ' + to + '. Datum: ' + date + '. Övrigt: ' + opts; 
  mess.textContent = info;

  const tbar = new Toolbar(main);
  tbar.wireActBtn(STR.BTN_REMOVE_YES, PATH.BOOKING, () => {
     trips.remTrip(index);
  });
  tbar.wireDecBtn(STR.BTN_REMOVE_NO, PATH.BOOKING);
});