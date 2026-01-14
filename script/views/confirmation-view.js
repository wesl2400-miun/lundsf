import { getTag, loadRec } from '../utils.js';
import { Trips } from "../data/trips.js";
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Trip } from '../data/trip.js';

const trips = new Trips();
const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();

// Generar dialogrutan för bekräftelse dynamiskt
window.addEventListener('load', () => {
  const main = getTag('dialog');
  const mess = getTag('dialog-msg');
  const info = 'Är du säker på att du vill boka denna resa?' +
  `${trip.name} ${trip.from} ${trip.to} ${trip.time} ${trip.repeat} ${trip.help}`;
  mess.textContent = info;

  // Lägg resan till reslistan som spara i sessionStorage
  const tbar = new Toolbar(main, 'inside-dialog');
  tbar.wireActBtn(STR.BTN_DIAG_CONFIRM, PATH.SUCCESS, () => {
     trips.addTrip();
  });
  tbar.wireDecBtn(STR.BTN_DIAG_CANCEL, PATH.BOOKING);
});