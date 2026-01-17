import { getTag, loadRec, saveRec } from '../utils.js';
import { Trips } from "../data/trips.js";
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';

// Uppdatera profil sidan baserat på den cachade profilen från sessionStorage
window.addEventListener('load', () => {
  const fName = getTag('first-name');
  const lName = getTag('last-name');
  const street = getTag('street');
  const code = getTag('code');
  const city = getTag('city');

  const fields = [fName, lName, street, code, city];

  // Uppdater fält från profil-listan - list.length - 1 ignorerar det sista tomma elementet från listan
  const profile = loadRec(STORAGE.PROFILE) || '';
  if(profile) {
    const list = profile.split(',');
    for(let i = 0; i < list.length - 1; i++) {
      fields[i].value = list[i];
    }
  }

  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  // Spara temporärt profiländringarna i sessionStorage
  const next = () => {
    let details = fName?.value? fName.value + ',' : '';
    details += lName?.value? lName.value + ',' : '';
    details += street?.value? street.value + ',' : '';
    details += code?.value? code.value + ',' : '';
    details += city?.value? city.value + ',' : '';
    saveRec(STORAGE.PROFILE_TEMP, details);
    window.location.href = PATH.CHANGE;
  }
    
  // Lyssna efter händelser när bekräftande eller avrbytande knapp trycks
  tbar.wireActBtn(next);

});