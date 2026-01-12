import { loadRec, saveRec } from './utils.js';
import { STORAGE } from './refs.js';

export class Trips {
  constructor() {
    const trips = loadRec(STORAGE.TRIPS);
    if(trips) {
      this.list = trips;
    } else {
      this.list = [];
    }
  }

  cacheTrip = (name, from, to, date, opts) => {
    const trip = loadRec(STORAGE.TRIP);
    const updated = {
      name: name || trip.name || '',
      from: from || trip.from || '',
      to: to || trip.to || '',   
      date: date || trip.date || '',
      opts: opts || trip.opts || '' 
    }
    saveRec(STORAGE.TRIP, updated);
    console.log(loadRec(STORAGE.TRIP));
  }

  _clearCache = () => {
    this.cacheTrip('', '', '', '', '');
  }

  addTrip = () => {
    const trip = loadRec(STORAGE.TRIP);
    this.list.push(trip);
    saveRec(STORAGE.TRIPS, this.list);
    this._clearCache();
  }

  remTrip = (position) => {
    this.list.splice(position, 1);
    saveRec(STORAGE.TRIPS, this.list);
    this._clearCache();
  }
}
