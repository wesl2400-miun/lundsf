import { getTag, remRec, saveRec, loadRec } from '../utils.js';
import { PATH, STORAGE } from '../refs.js';
import { Toolbar } from './toolbar.js';

// Hanterar logiken bakom details.html sidan
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
  
  // Rensa cache, för att undvika att flera versioner av samma data skapas när 'Tillbaka' knappen klickas
  remRec(STORAGE.DETAILS);
  let details = '';
  
  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  // När 'Nästa' knappen trycks, spara alla fält i session.storage och gå till nästa sida
  const next = () => {
    details += fName?.value? fName.value + ' ' : '';
    details += lName?.value? lName.value + ', ' : '';
    details += street?.value? 'från: ' + street.value + ', ' : '';
    details += code?.value? code.value + ', ' : '';
    details += city?.value? city.value : '';
    saveRec(STORAGE.DETAILS, details);
    window.location.href = PATH.CALENDAR;
  }
  
  // Gå till options.html sidan när 'Tillbaka' knappen trycks
  const prev = () => {
    window.location.href = PATH.DESTINATION;
  }
  
  // Lyssna efter händelser när bekräftande eller avrbytande knapp trycks
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});