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
    saveRec(STORAGE.TRIP,{
      name : name || '',
      from : from || '',
      to: to || '',
      date: date || '',
      opts: opts || ''
    });
  }

  addTrip = () => {
    const trip = loadRec(STORAGE.TRIP);
    this.list.push(trip);
    saveRec(STORAGE.TRIPS, this.list);
    this.cacheTrip();
  }

  remTrip = (position) => {
    this.list.splice(position, 1);
    saveRec(STORAGE.TRIPS, this.list);
    this.cacheTrip();
  }
}
