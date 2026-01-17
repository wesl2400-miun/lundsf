import { Trips } from '../data/trips.js';
import { TripCard } from './trip-card.js';
import { Toolbar } from './toolbar.js';
import { PATH, STR } from '../refs.js';
import { getTag, newSec, newH2, newP, newH1 } from '../utils.js';

window.addEventListener('load', () => {
  
  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  const next = () => {
    window.location.href = PATH.DESTINATION;
  }
  
  tbar.wireActBtn(next);
});