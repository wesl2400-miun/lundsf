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

  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  const next = () => {
      window.location.href = PATH.CALENDAR;
  }
  
  const prev = () => {
   window.location.href = PATH.BOOKING;
  }
    
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});