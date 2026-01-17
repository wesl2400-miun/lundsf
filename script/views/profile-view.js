import { getTag, loadRec, saveRec } from '../utils.js';
import { Trips } from "../data/trips.js";
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Profile } from '../data/profile.js';

// Uppdatera profil sidan baserat på den cachade profilen från sessionStorage
window.addEventListener('load', () => {
  const main = getTag('main');
  const fName = getTag('first-name');
  const lName = getTag('last-name');
  const street = getTag('street');
  const code = getTag('code');
  const city = getTag('city');

  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  const next = () => {
    window.location.href = PATH.CHANGE;
  }
    
  tbar.wireActBtn(next);

});