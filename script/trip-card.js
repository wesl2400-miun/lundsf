import { newSec, newH2, newH3, newP, newBtn, newDiv } from './utils.js';
import { PATH } from './refs.js';

export class TripCard {
  constructor(trip, root) {
    this._main = root;
    this._root = newSec(this._main);
    const { name, from, to, date, opts } = trip;
    newH2(`${to}`, this._root);
    newH3(`${date}`, this._root);
    newP(`${name}, från: ${from}, övrigt: ${opts}`, this._root);
    this._btns = newDiv('trip-btns', this._root);
  }

  addRemBtn = (index) => {
    const remBtn = newBtn('trip-btn', 'Avboka', this._btns);
    remBtn.addEventListener('click', () => {
      window.location.href = `${PATH.REMOVE}?index=${index}`;
    });
  }

  addModBtn = (index, list, trips) => {
    const modBtn = newBtn('trip-btn', 'Ändra', this._btns);
    modBtn.addEventListener('click', () => {
      const current = list[index];
      const { name, from, to, date, opts } = current;
      trips.cacheTrip(name, from, to, date, opts);
    });
  }
}
