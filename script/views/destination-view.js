import { getTag, saveRec, loadRec, remRec } from '../utils.js';
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Trip } from '../data/trip.js';

// Sparar information från 'Välj destination' undersidan i sessionStorage
window.addEventListener('load', () => {
  const main = getTag('main');
  
  const street = getTag('street');
  const code = getTag('code');
  const city = getTag('city');

  const tbar = new Toolbar(main);
  tbar.wireActBtn(STR.BTN_NEXT, PATH.CALENDAR, () => {
    const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();
    trip.to = `${street.value}, ${code.value}, ${city.value}`;
    saveRec(STORAGE.CACHED_TRIP, trip);
  });

  // Ta bort den cachade resan från sessionStorage
  tbar.wireDecBtn(STR.BTN_DEC, PATH.BOOKING, () => {
    remRec(STORAGE.CACHED_TRIP);
  });
});