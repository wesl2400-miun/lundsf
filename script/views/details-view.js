import { getTag, loadRec, saveRec } from '../utils.js';
import { PATH, STR, STORAGE } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Profile } from '../data/profile.js';
import { Trip } from '../data/trip.js';

const profile = loadRec(STORAGE.PROFILE) || new Profile();
const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();

window.addEventListener('load', () => {
  const main = getTag('main');
  const fName = getTag('first-name');
  const lName = getTag('last-name');
  const street = getTag('street');
  const code = getTag('code');
  const city = getTag('city');
  
  fName.value = profile.fName;
  lName.value = profile.lName;
  street.value = profile.street;
  code.value = profile.code;
  city.value = profile.city;
  
  const tbar = new Toolbar(main);
  
  tbar.wireActBtn(STR.BTN_CONF, PATH.CONFIRMATION, () => {
    const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();
    trip.name = `${fName.value} ${lName.value}`;
    trip.from = `${street.value} ${code.value} ${city.value}`;
    saveRec(STORAGE.CACHED_TRIP, trip);
  });
  tbar.wireActBtn(STR.BTN_PREV, PATH.OPTIONS);
});