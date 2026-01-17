import { getTag, loadRec } from '../utils.js';
import { Trips } from "../data/trips.js";
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Trip } from '../data/trip.js';

// Hanterar logiken bakom confirmation.html sidan
window.addEventListener('load', () => {
  const diagMsg = getTag('dialog-msg');

  // Hämta resedata från sessionStorage
  const dest = loadRec(STORAGE.DESTINATION) || '';
  const calend = loadRec(STORAGE.CALENDAR) || '';
  const opts = loadRec(STORAGE.OPTS) || '';
  const details = loadRec(STORAGE.DETAILS) || '';
  const msg = 'Är du säker att du vill boka denna resa? ' +
    dest + '. ' + calend + '. ' + opts + '. ' + details + '. ';

  const modify = loadRec(STORAGE.TRIP_INDEX);

  // Ändra dialogrutans innehåll dynamiskt
  if(msg.length > 0) diagMsg.textContent = msg;

  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  // Lägg till resan till reselistan eller modifiera en resa om ändringsläget är på
  const next = () => {
    const trips = new Trips();
    let trip = new Trip(dest, calend, opts, details);
    if(modify) trips.modTrip(modify, trip);
    else trips.addTrip(trip);
    window.location.href = PATH.SUCCESS;
  }
  
  // Gå tillbaka till booking.html sidan
  const prev = () => {
    window.location.href = PATH.BOOKING;
  }
  
  // Lyssna efter händelser när bekräftande eller avrbytande knapp trycks
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});