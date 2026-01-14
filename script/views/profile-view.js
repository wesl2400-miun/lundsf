import { getTag, loadRec, saveRec } from '../utils.js';
import { Trips } from "../data/trips.js";
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Profile } from '../data/profile.js';

const profile = loadRec(STORAGE.PROFILE) || new Profile();

// Uppdatera profil sidan baserat på den cachade profilen från sessionStorage
window.addEventListener('load', () => {
  const main = getTag('main');
  const fName = getTag('first-name');
  const lName = getTag('last-name');
  const street = getTag('street');
  const code = getTag('code');
  const city = getTag('city');

  // Uppdatera fält med den cachade profildatan
  fName.value = profile.fName;
  lName.value = profile.lName;
  street.value = profile.street;
  code.value = profile.code;
  city.value = profile.city;

  // När 'Ändra' knappen klickas spara uppgifterna i sessionStorage som temporär data
  const tbar = new Toolbar(main, 'single-choice');
  tbar.wireActBtn(STR.BTN_CHANGE, PATH.CHANGE, () => {
     saveRec(STORAGE.CACHED_PROFILE, new Profile(
      fName.value,
      lName.value,
      street.value,
      code.value,
      city.value
     ));
  });
});