import { getTag, loadRec, remRec } from '../utils.js';
import { PATH, STR, STORAGE } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Trip } from '../data/trip.js';

const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();

window.addEventListener('load', () => {
  const main = getTag('dialog');
  const mess = getTag('dialog-msg');
  const info = 'Du har bokat följande resa. ' +
  `${trip.name} ${trip.from} ${trip.to} ${trip.time} ${trip.repeat} ${trip.help}`;
  mess.textContent = info;

  const tbar = new Toolbar(main, 'inside-dialog');
  tbar.wireActBtn(STR.BTN_OK, PATH.BOOKING, () => {
    remRec(STORAGE.CACHED_TRIP);
  });
});