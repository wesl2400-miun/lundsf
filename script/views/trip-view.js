import { STR } from '../refs.js';
import { TripCard } from './trip-card.js';

// Genererar reslistan i form av kort
export class TripView {
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