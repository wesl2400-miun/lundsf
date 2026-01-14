import { newBtn, newDiv } from '../utils.js';

// Genererar dessa handlingsknappar - det är dessa stora mörka knappar
export class Toolbar {
  constructor(root, extStyle) {
    this._root = newDiv('toolbar', root);
    if(extStyle) this._root.classList.add(extStyle);
  }

  // Lyssna till bekräftande  händelser
  wireActBtn = (actLab, nxtSite, act) => {
    const actBtn = newBtn('prim-btn', actLab, this._root);
    actBtn.addEventListener('click', () => {
      if(act) act();
      if(nxtSite) window.location.href = nxtSite;
    });
  }

  // Lyssna till avbrytande händelser
  wireDecBtn = (decLab, prevSite, dec) => {
    const decBtn = newBtn('prim-var-btn', decLab, this._root);
    decBtn.addEventListener('click', () => {
      if(dec) dec();
      if(prevSite) window.location.href = prevSite;
    });
  }
}