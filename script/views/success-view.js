import { getTag, loadRec, remRec } from '../utils.js';
import { PATH, STR, STORAGE } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Trip } from '../data/trip.js';

const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();

// Generar dialogrutan för en utförd bokning
window.addEventListener('load', () => {
  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  const next = () => {
    window.location.href = PATH.BOOKING;
  }
  
  tbar.wireActBtn(next);
});