import { newDiv, newTag } from '../utils.js';

export class OptCard {
  constructor(root) {
    this._root = root;
    this.boxes = [];
  }
  
  addOpts = (type, name, opts) => {
    opts.forEach(opt => {
      this.boxes.push(this._addOpt(type, name, opt));
    });
  }

  _addOpt = (type, name, opt) => {
    const group = newDiv('check-opt', this._root);
    const curnt = newTag('input', 'check-btn', null, group);
    curnt.type = type;
    curnt.name = name;
    curnt.id = opt;
    curnt.value = opt; 
    const label = newTag('label', null, opt, group); 
    label.setAttribute('for', opt);
    return curnt;
  }
}