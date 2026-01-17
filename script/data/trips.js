import { loadRec, saveRec } from '../utils.js';
import { STORAGE } from '../refs.js';

// Hanterar reselista
export class Trips {
  constructor() {
    const trips = loadRec(STORAGE.TRIPS);
    if(trips) this.list = JSON.parse(trips);
    else this.list = [];
  }

  _save = () => {
    const json = JSON.stringify(this.list);
    saveRec(STORAGE.TRIPS, json);
  }
  
  // Lägger till resan i reselistan och sparar den i sessionStorage i JSON-formatet
  addTrip = (trip) => {
    this.list.push(trip);
    this._save();
  }

  // Tar bort resan från reselistan
  remTrip = (index) => {
    this.list.splice(index, 1);
    this._save();
  }

  modTrip = (index, trip) => {
    this.list[Number(index)] = trip;
    this._save();
  }
}
