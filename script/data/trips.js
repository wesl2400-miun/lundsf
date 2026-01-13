import { loadRec, saveRec } from '../utils.js';
import { STORAGE } from '../refs.js';

export class Trips {
  constructor() {
    const trips = loadRec(STORAGE.TRIPS);
    if(trips) {
      this.list = trips;
    } else {
      this.list = [];
    }
  }

  addTrip = () => {
    const trip = loadRec(STORAGE.CACHED_TRIP);
    this.list.push(trip);
    saveRec(STORAGE.TRIPS, this.list);
  }

  remTrip = (position) => {
    this.list.splice(position, 1);
    saveRec(STORAGE.TRIPS, this.list);
  }
}
