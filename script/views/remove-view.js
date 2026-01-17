import { getTag } from '../utils.js';
import { Trips } from "../data/trips.js";
import { PATH, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';

// Genererar dialogrutan för avbokningar av resor
window.addEventListener('load', () => {
  const diagMsg = getTag('dialog-msg');

  // Hämta index från parametrar - indexet överförs i föregående sidan
  const params = new URLSearchParams(window.location.search);
  const index = params.get('index');
  const trips = new Trips();

  // Hämta den valada resan baserat på indexet
  const trip  = trips.list[index] || '';
  const { dest, calend, opts, details } = trip;

  const msg = 'Är du säler att du vill avboka denna resa?' 
    + dest + '. ' + calend + '. ' + opts + '. ' + details + '. ';

  // Ändra dialogrutans innehåll dynamiskt
  if(msg.length > 0) diagMsg.textContent = msg;

  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  // Ta bort resan från reselistan och gå tillbaka till booking.html sidan
  const next = () => {
    trips.remTrip(trip);
    window.location.href = PATH.BOOKING;
  }
  
  // Gå tillbaka till booking.html sidan 
  const prev = () => {
    window.location.href = PATH.BOOKING;
  }
    
  // Lyssna efter händelser när bekräftande eller avrbytande knapp trycks
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});