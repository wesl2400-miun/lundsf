import { getTag, loadRec } from '../utils.js';
import { Trips } from "../data/trips.js";
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Trip } from '../data/trip.js';

// Generar dialogrutan för bekräftelse dynamiskt
window.addEventListener('load', () => {
  
  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  const next = () => {
    window.location.href = PATH.SUCCESS;
  }
  
  const prev = () => {
    window.location.href = PATH.BOOKING;
  }
    
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});