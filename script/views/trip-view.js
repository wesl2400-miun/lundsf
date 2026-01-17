import { getTag } from '../utils.js';
import { TripCard } from './trip-card.js';

// Genererar reselistan i form av kort
export class TripView {
  constructor(vHolder, trips) {
    this._vHolder = getTag(vHolder);
    this._trips = trips.list;

    this._vHolder.innerHTML = '';
    const len = this._trips.length;
    if(len > 0) {
      for(let i = 0; i < len; i++) {
        const tripCard = new TripCard(
          this._vHolder, this._trips[i]);
        tripCard.addRemBtn(i);
        tripCard.addModBtn(i);
      }
    }
  }
}