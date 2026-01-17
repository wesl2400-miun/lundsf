import { getTag, saveRec,remRec } from '../utils.js';
import { PATH, STORAGE } from '../refs.js';
import { Toolbar } from './toolbar.js';

// Sparar information från 'Välj destination' undersidan i sessionStorage
window.addEventListener('load', () => {
  
  const street = getTag('street');
  const code = getTag('code');
  const city = getTag('city');

  // Rensa cache, för att undvika att flera versioner av samma data skapas när 'Tillbaka' knappen klickas
  remRec(STORAGE.DESTINATION);
  let dest = '';

  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  // Spara data i sessionStorage
  const next = () => {
    dest = city?.value? city.value + ', ' : '';
    dest += street?.value? street.value + ', ' : '';
    dest += code?.value? code.value : '';
    saveRec(STORAGE.DESTINATION, dest);
    window.location.href = PATH.CALENDAR;
  }
  
  // Gå tillbaka till booking.html
  const prev = () => {
    window.location.href = PATH.BOOKING;
  }
    
  // Lyssna efter händelser när bekräftande eller avrbytande knapp trycks
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});