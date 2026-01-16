import { Trips } from '../data/trips.js';
import { TripCard } from './trip-card.js';
import { Toolbar } from './toolbar.js';
import { PATH, STR } from '../refs.js';
import { getTag, newSec, newH2, newP, newH1 } from '../utils.js';

// Genererar reslistan i form av kort
class TripView {
  constructor(trips, main) {
    this._trips = trips;
    this.update(main);
  }

  // Uppdatera listan
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
  }

  // Informationskort
  _addInfo = (text, main) => {
    newH1('Boka färdtjänst', main);
    const card = newSec(main);
    newH2(STR.BOOKING_TRIPS, card);
    newP(text, card);
  }
}

const trips = new Trips();

// Skapa reslistan när DOM element laddas klart
window.addEventListener('load', () => {
  // new TripView(trips, getTag('view-holder'));
});