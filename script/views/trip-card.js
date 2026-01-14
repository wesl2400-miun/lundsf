import { newSec, newH2, newH3, newP, newBtn, newDiv, saveRec } from '../utils.js';
import { PATH, STORAGE } from '../refs.js';

// Generar kort för resan
export class TripCard {
  constructor(trip, root) {
    this._main = root;
    this._root = newSec(this._main);
    const { name, from, to, time, repeat, help } = trip;
    newH2(`${to}`, this._root);
    newH3(`${time}`, this._root);
    newP(`${name}, ${from}, ${repeat} ${help}`, this._root);
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
      saveRec(STORAGE.CURRENT_TRIP, index);
      window.location.href = PATH.DESTINATION;
    });
  }
}
