import { getTag, loadRec, saveRec } from '../utils.js';
import { PATH, STR, STORAGE } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Profile } from '../data/profile.js';
import { Trip } from '../data/trip.js';

const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();

// Uppdatera 'Mina sidor' via den cachade profildata
window.addEventListener('load', () => {
  const main = getTag('main');
  const fName = getTag('first-name');
  const lName = getTag('last-name');
  const street = getTag('street');
  const code = getTag('code');
  const city = getTag('city');
  
  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  const next = () => {
    window.location.href = PATH.CONFIRMATION;
  }
  
  const prev = () => {
    window.location.href = PATH.OPTIONS;
  }
    
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});