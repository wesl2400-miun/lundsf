import { getTag } from '../utils.js';

// Genererar de stora mörka handlingsknappar som ligger ovanför Tillgänglighetsredogörelsen-lönken
export class Toolbar {
  constructor(actId, decId) {
    this._actBtn = getTag(actId);
    if(decId) this._decBtn = getTag(decId);
  }
  
  // Lyssna till bekräftande händelser
  wireActBtn = (act) => {
    this._actBtn.addEventListener('click', act);
  }

  // Lyssna till avbrytande händelser
  wireDecBtn = (dec) => {
    this._decBtn.addEventListener('click', dec);
  }
}