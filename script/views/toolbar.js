import { newBtn, newDiv } from '../utils.js';

export class Toolbar {
  constructor(root, extStyle) {
    this._root = newDiv('toolbar', root);
    if(extStyle) this._root.classList.add(extStyle);
  }

  wireActBtn = (actLab, nxtSite, act) => {
    const actBtn = newBtn('prim-btn', actLab, this._root);
    actBtn.addEventListener('click', () => {
      if(act) act();
      if(nxtSite) window.location.href = nxtSite;
    });
  }

  wireDecBtn = (decLab, prevSite, dec) => {
    const decBtn = newBtn('prim-var-btn', decLab, this._root);
    decBtn.addEventListener('click', () => {
      if(dec) dec();
      if(prevSite) window.location.href = prevSite;
    });
  }
}