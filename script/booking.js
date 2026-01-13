import { Trips } from './trips.js';
import { TripCard } from './trip-card.js';
import { Toolbar } from './toolbar.js';
import { PATH, STR } from './refs.js';
import { getTag, newSec, newH2, newP } from './utils.js';


class TripView {
  constructor(trips, main) {
    this._trips = trips;
    this.update(main);
  }

  update = (main) => {
    main.innerHTML = '';
    const list = this._trips.list;
    if(list.length > 0) {
      this._addInfo(STR.BOOKING_LIST, main);
      for(let i = 0; i < list.length; i++) {
        const tripCard = new TripCard(list[i], main);
        tripCard.addRemBtn(i);
        tripCard.addModBtn(i, list, this._trips);
      }
    } else {
      this._addInfo(STR.BOOKING_EMPTY, main);
    }
    this._addTbar(main);
  }

  _addInfo = (text, main) => {
    const card = newSec(main);
    newH2(STR.BOOKING_TRIPS, card);
    newP(text, card);
  }

  _addTbar = (main) => {
    const tbar = new Toolbar(main, 'single-choice');
    tbar.wireActBtn(STR.BOOKING_NEW, PATH.DESTINATION);
  }
}

const trips = new Trips();

window.addEventListener('load', () => {
  new TripView(trips, getTag('main'));
});