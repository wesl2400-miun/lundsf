import { getTag, loadRec, saveRec, remRec } from '../utils.js';
import { PATH, STORAGE } from '../refs.js';
import { Toolbar } from './toolbar.js';

// Uppdatera profil sidan baserat på den cachade profilen från sessionStorage
window.addEventListener('load', () => {
  const fName = getTag('first-name');
  const lName = getTag('last-name');
  const street = getTag('street');
  const code = getTag('code');
  const city = getTag('city');

  // Rensa cache, för att undvika att flera versioner av samma data skapas när 'Tillbaka' knappen klickas
  remRec(STORAGE.PROFILE_TEMP);

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