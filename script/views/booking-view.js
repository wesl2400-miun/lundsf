import { Trips } from '../data/trips.js';
import { Toolbar } from './toolbar.js';
import { PATH, STORAGE } from '../refs.js';
import { remRec } from '../utils.js';
import { TripView } from './trip-view.js';

// Hanterar logiken bakom booking.html sidan
window.addEventListener('load', () => {
  
  // Rensa det cachade indexet för resan som är markerad för ändring.
  remRec(STORAGE.TRIP_INDEX);

  // Genererar vyn med reselistan
  const trips = new Trips();
  new TripView('view-holder', trips);


  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  // Gå till destination.html sidan
  const next = () => {
    window.location.href = PATH.DESTINATION;
  }
  
  // Lyssna efter händelser när bekräftande knapp trycks
  tbar.wireActBtn(next);
});