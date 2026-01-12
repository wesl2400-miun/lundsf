import { getTag } from './utils.js';
import { Trips } from "./trips.js";
import { PATH } from './refs.js';

const params = new URLSearchParams(window.location.search);
const index = params.get('index');
const trips = new Trips();
const current  = trips.list[index];
const { name, from, to , date, opts } = current;

window.addEventListener('load', () => {
  const mess = getTag('dialog-msg');
  const info = 'Är du säker på att du vill avboka denna resa? ' + name +
    '. Från: '+ from + '. Till: ' + to + '. Datum: ' + date + '. Övrigt: ' + opts; 
  mess.textContent = info;

  const actBtn = getTag('accept-btn');
  actBtn.addEventListener('click', () => {
    trips.remTrip(index);
    window.location.href = `${PATH.BOOKING}`;
  });

  const cancBtn = getTag('cancel-btn');
  cancBtn.addEventListener('click', () => {
    window.location.href = `${PATH.BOOKING}`;
  });
});