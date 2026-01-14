import { newSec, newH2, newBtn, newP, newDiv } from '../utils.js';

// Skapar kalender kort
export class CalCard {
  constructor(root, title, text) {
    this._root = newSec(root);
    newH2(title, this._root);
    if(text) newP(text, this._root);
    this.boxes = [];
  }

  // Generera knappar från string listan
  render(list) {
    const calendar = newDiv('calendar', this._root);
    calendar.role = 'radiogroup';
    list.forEach(label => {
      this.boxes.push(this._btn(label, calendar));
    });
  }

  // Lägg till och aktivera knapparna så att de går att boka av
  _btn = (label, calendar) => {
    const curnt = newBtn('calendar-btn', label, calendar);
    curnt.role = 'radio';
    curnt.id = label;
    curnt.ariaChecked = 'false';
    curnt.ariaLabel = label;
    curnt.value = label;
    curnt.addEventListener('click', () => {
      curnt.ariaChecked = 'true';
      this.boxes.forEach(btn => {
        if(btn.id !== curnt.id) btn.ariaChecked = 'false';
      });
    });
    return curnt;
  }
}