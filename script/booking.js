

// Hämta ett existerande HTML-element
const tag = (id) => {
  return document.getElementById(id);
}

// Skapar och returnerar nytt HTML-element
const newTag = (type, css, text, parent) => {
  const tag = document.createElement(type);
  if(css) tag.classList.add(css);
  if(text) tag.textContent = text;
  parent.appendChild(tag);
  return tag;
}

class InfoCard {
  constructor(vHolder, title, text) {
    this._root = newTag('section', 'card', null, vHolder);
    newTag('h2', null, title, this._root);
    newTag('p', null, text, this._root);
  }
}

class CalCard {
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

class TravView {
  constructor(vHolder, actBar) {
    vHolder.innerHTML = '';
    actBar.innerHTML = '';
    new InfoCard(
      vHolder,
      'Bokade resor', 
      'Nedan finns resor som du redan har bokat.'
    );
    this._wireActBar(vHolder, actBar);
  } 

  _wireActBar = (vHolder, actBar) => {
    const travBtn = newTag('button', 'prim-btn', 'Boka ny resa', actBar);
    travBtn.style.width = '90%';
    travBtn.addEventListener('click', () => {
      new YearView(vHolder, actBar);
    });
  }
}

class YearView {
  constructor(vHolder, actBar) {
    vHolder.innerHTML = '';
    actBar.innerHTML = '';
    new CalCard(vHolder, 'Välj år',
      'Du får bara boka en resa ett år framåt.',
      ['2025', '2026']
    );
    this._wireActBar(vHolder, actBar);
  } 

  _wireActBar = (vHolder, actBar) => {
    const acceptBtn = newTag('button', 'prim-btn', 'Nästa', actBar);
    acceptBtn.addEventListener('click', () => {
      new MonthView(vHolder, actBar);
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'Avbryt', actBar);
    cancBtn.addEventListener('click', () => {
      new TravView(vHolder, actBar);
    });
  }
}

class MonthView {
  constructor(vHolder, actBar) {
    vHolder.innerHTML = '';
    actBar.innerHTML = '';
    new CalCard(vHolder, 'Välj månad', null,
      ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'Maj', 'Jun.', 
        'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dec.']
    );
    this._wireActBar(vHolder, actBar);
  } 

  _wireActBar = (vHolder, actBar) => {
    const acceptBtn = newTag('button', 'prim-btn', 'Nästa', actBar);
    acceptBtn.addEventListener('click', () => {
      new DayView(vHolder, actBar);
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'Tillbaka', actBar);
    cancBtn.addEventListener('click', () => {
      new YearView(vHolder, actBar);
    });
  }
}

class DayView {
  constructor(vHolder, actBar) {
    vHolder.innerHTML = '';
    actBar.innerHTML = '';
    const days = Array.from({length: 20}, (_, num) => num + 1);
    new CalCard(vHolder, 'Välj dag', 'Nedan finns tillgängliga dagar.', days);
    this._wireActBar(vHolder, actBar);
  } 

  _wireActBar = (vHolder, actBar) => {
    const acceptBtn = newTag('button', 'prim-btn', 'Nästa', actBar);
    acceptBtn.addEventListener('click', () => {
      new HourView(vHolder, actBar);
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'Tillbaka', actBar);
    cancBtn.addEventListener('click', () => {
      new MonthView(vHolder, actBar);
    });
  }
}

class HourView {
  constructor(vHolder, actBar) {
    vHolder.innerHTML = '';
    actBar.innerHTML = '';
    new CalCard(vHolder, 'Välj dag', 'Nedan finns tillgängliga tider.',
      ['9.00', '9.30', '10.00', '12.30', '13.00', '13.30', '14.00', 
        '14.30', '16.00', '17.00', '17.30']
    );
    this._wireActBar(vHolder, actBar);
  } 

  _wireActBar = (vHolder, actBar) => {
    const acceptBtn = newTag('button', 'prim-btn', 'Nästa', actBar);
    acceptBtn.addEventListener('click', () => {
      
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'Tillbaka', actBar);
    cancBtn.addEventListener('click', () => {
      new DayView(vHolder, actBar);
    });
  }
}

window.addEventListener('load', () => {
  const vHolder = tag('view-holder');
  const actBar = tag('action-bar');
  const travView = new TravView(vHolder, actBar);

});