import { newSec, newH2, newBtn, newP, newDiv } from './utils.js';

export class Calendar {
  constructor(root, title, text) {
    this._root = newSec(root);
    newH2(title, this._root);
    if(text) newP(text, this._root);
  }

  render(list, temp) {
    const calendar = newDiv('calendar', this._root);
    calendar.role = 'radiogroup';
    this._btns = list.map(label => {
      return this._btn(label, calendar, temp);
    });
  }

  _btn = (label, calendar, temp) => {
    const curnt = newBtn('calendar-btn', label, calendar);
    curnt.role = 'radio';
    curnt.id = label;
    curnt.ariaChecked = false;
    curnt.ariaLabel = label;
    curnt.addEventListener('click', () => {
      curnt.ariaChecked = true;
      temp.value = label;
      this._btns.forEach(btn => {
        if(btn.id !== curnt.id) btn.ariaChecked = false;
      });
    });
    return curnt;
  }
}