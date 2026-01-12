import { newTag } from './utils.js';

export class InfoCard {
  constructor(vHolder, title, text) {
    this._root = newTag('section', 'card', null, vHolder);
    newTag('h2', null, title, this._root);
    newTag('p', null, text, this._root);
  }
}



export class OptsCard {
  constructor(vHolder) {
    this._root = newTag('section', 'card', null, vHolder);
  }
  
  addOpts = (title, opts, type, group) => {
    newTag('h2', null, title, this._root);
    const form = newTag('form', 'travel-btns', null, this._root);
    opts.forEach(opt => {
      this._addOpt(opt, form, type, group);
    });
  }

  _addOpt = (opt, form, type, group) => {
    const travOpt = newTag('div', 'travel-opt', null, form);
    const btn = newTag('input', 'travel-btn', null, travOpt);
    btn.type = type;
    btn.name = group;
    btn.id = opt;
    btn.value = opt; 
    const label = newTag('label', null, opt, travOpt); 
    label.setAttribute('for', opt);
    btn.addEventListener('change', () => {
      if(btn.checked) console.log(btn.id)
    });
  }
}

export class FieldCard {
  constructor(vHolder, title) {
    this._root = newTag('section', 'card', null, vHolder);
    newTag('h2', null, title, this._root);
  }

  addField = (title) => {
    const form = newTag('form', 'form', null, this._root);
    const label = newTag('label', 'label', title, form);
    label.setAttribute('for', title);
    const field = newTag('input', null, null, form);
    field.id = title;
    field.type = 'text;'
    field.placeHolder = title;
    field.addEventListener('change', () => {
      console.log(field.value);
    });
  }
}

export class CalCard {
  constructor(vHolder, title, text, dates) {
    this._root = newTag('section', 'card', null, vHolder);
    newTag('h2', null, title, this._root);
    if(text) newTag('p', null, text, this._root);
    this._renderBtns(dates);
  }

  _renderBtns(dates) {
    const bHolder = newTag('div', 'calendar-btns', null, this._root);
    bHolder.role = 'radiogroup';
    this._dates = dates.map(date => {
      return this._newBtn(date, bHolder);
    });
  }

  _newBtn = (date, bHolder) => {
    const current = newTag('button', 'calendar-btn', date, bHolder);
    current.role = 'radio';
    current.id = date;
    current.ariaChecked = false;
    current.ariaLabel = date;
    current.addEventListener('click', () => {
      current.ariaChecked = true;
      this._dates.forEach(btn => {
        if(btn.id !== current.id) btn.ariaChecked = false;
      });
    });
    return current;
  }
}