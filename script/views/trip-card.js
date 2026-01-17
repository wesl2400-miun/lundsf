import { newSec, newH2, newH3, newP, newBtn, newDiv, saveRec } from '../utils.js';
import { PATH, STORAGE } from '../refs.js';

// Generar kort för resan
export class TripCard {
  constructor(vHolder, trip) {
    this._root = newSec(vHolder);
    const { dest, calend, opts, details } = trip;
    newH2(dest, this._root);
    newH3(calend, this._root);
    newP(details, this._root);
    newP(opts, this._root);
    this._btns = newDiv('trip-btns', this._root);
  }

  // Lägg till 'Avboka' knappen
  addRemBtn = (index) => {
    const remBtn = newBtn('trip-btn', 'Avboka', this._btns);
    remBtn.addEventListener('click', () => {
      window.location.href = `${PATH.REMOVE}?index=${index}`;
    });
  }

  // Lägg till ändra knappen
  addModBtn = (index) => {
    const modBtn = newBtn('trip-btn', 'Ändra', this._btns);
    modBtn.addEventListener('click', () => {
      saveRec(STORAGE.TRIP_INDEX, index);
      window.location.href = PATH.DESTINATION;
    });
  }
}
