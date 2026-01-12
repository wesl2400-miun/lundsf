import { getTag, newSec, newH2, newH3, newP, newBtn, newDiv } from './utils.js';
import { Trips } from './trips.js';

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
      window.location.href = `./remove.html?index=${index}`;
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

export class TripView {
  constructor(trips, main) {
    this._trips = trips;
    this.update(main);
  }

  update = (main) => {
    main.innerHTML = '';
    const list = this._trips.list;
    if(list.length > 0) {
      this._addInfo('Nedan finns resor som du redan har bokat.', main);
      for(let i = 0; i < list.length; i++) {
        const tripCard = new TripCard(list[i], main);
        tripCard.addRemBtn(i);
        tripCard.addModBtn(i, list, this._trips);
      }
    } else {
      this._addInfo('Du har för närvarande inga bokade resor.', main);
    }
    this._addTbar(main);
  }

  _addInfo = (text, main) => {
    const card = newSec(main);
    newH2('Bokade resor', card);
    newP(text, card);
  }

  _addTbar = (main) => {
    const tbar = newDiv('toolbar', main);
    tbar.classList.add('single-choice');
    const btn = newBtn('prim-btn', 'BOKA NY RESA', tbar);
    btn.addEventListener('click', () => {
    
    });
  }
}

const trips = new Trips();

window.addEventListener('load', () => {
  new TripView(trips, getTag('main'));
});