import { getTag } from '../utils.js';
import { Trips } from "../data/trips.js";
import { PATH, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';

// Hämta index från parametrar - indexet överförs i föregående sidan
const params = new URLSearchParams(window.location.search);
const index = params.get('index');
const trips = new Trips();

// Hämta den valada resan baserat på indexet
const current  = trips.list[index] || '';
const { name, from, to , date, opts } = current;

// Genererar dialogrutan för avbokningar av resor
window.addEventListener('load', () => {
  
  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  const next = () => {
      
  }
  
  const prev = () => {
   
  }
    
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});