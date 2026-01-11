

// Hämta ett existerande HTML-element
const tag = (id) => {
  return document.getElementById(id);
}

// Skapar och returnerar nytt HTML-element
const newTag = (type, css, text, parent) => {
  const tag = document.createElement(type);
  if(css) tag.classList.add(css);
  if(text) tag.textContent = text;
  if(parent) parent.appendChild(tag);
  return tag;
}

class InfoCard {
  constructor(vHolder, title, text) {
    this._root = newTag('section', 'card', null, vHolder);
    newTag('h2', null, title, this._root);
    newTag('p', null, text, this._root);
  }
}

class OptsCard {
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

class FieldCard {
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
    const travBtn = newTag('button', 'prim-btn', 'BOKA NY RESA', actBar);
    travBtn.style.width = '90%';
    travBtn.addEventListener('click', () => {
      new DestView(vHolder, actBar);
    });
  }
}

class DestView {
  constructor(vHolder, actBar) {
    vHolder.innerHTML = '';
    actBar.innerHTML = '';
    const card = new FieldCard(vHolder, 'Välj destination');
    card.addField('Gatuadress');
    card.addField('Postnummer');
    card.addField('Postort');
    this._wireActBar(vHolder, actBar);
  } 

  _wireActBar = (vHolder, actBar) => {
    const acceptBtn = newTag('button', 'prim-btn', 'NÄSTA', actBar);
    acceptBtn.addEventListener('click', () => {
      new YearView(vHolder, actBar)
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'AVBRYT', actBar);
    cancBtn.addEventListener('click', () => {
      new TravView(vHolder, actBar);
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
    const acceptBtn = newTag('button', 'prim-btn', 'NÄSTA', actBar);
    acceptBtn.addEventListener('click', () => {
      new MonthView(vHolder, actBar);
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'TILLBAKA', actBar);
    cancBtn.addEventListener('click', () => {
      new DestView(vHolder, actBar);
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
    const acceptBtn = newTag('button', 'prim-btn', 'NÄSTA', actBar);
    acceptBtn.addEventListener('click', () => {
      new DayView(vHolder, actBar);
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'TILLBAKA', actBar);
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
    const acceptBtn = newTag('button', 'prim-btn', 'NÄSTA', actBar);
    acceptBtn.addEventListener('click', () => {
      new HourView(vHolder, actBar);
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'TILLBAKA', actBar);
    cancBtn.addEventListener('click', () => {
      new MonthView(vHolder, actBar);
    });
  }
}

class HourView {
  constructor(vHolder, actBar) {
    vHolder.innerHTML = '';
    actBar.innerHTML = '';
    new CalCard(vHolder, 'Välj tid', 'Nedan finns tillgängliga tider.',
      ['9.00', '9.30', '10.00', '12.30', '13.00', '13.30', '14.00', 
        '14.30', '16.00', '17.00', '17.30']
    );
    this._wireActBar(vHolder, actBar);
  } 

  _wireActBar = (vHolder, actBar) => {
    const acceptBtn = newTag('button', 'prim-btn', 'NÄSTA', actBar);
    acceptBtn.addEventListener('click', () => {
      new ExtrasView(vHolder, actBar);
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'TILLBAKA', actBar);
    cancBtn.addEventListener('click', () => {
      new DayView(vHolder, actBar);
    });
  }
}

class ExtrasView {
  constructor(vHolder, actBar) {
    vHolder.innerHTML = '';
    actBar.innerHTML = '';
    const card = new OptsCard(vHolder);
    card.addOpts(
      'Är resa återkommande?', 
      ['Nej', 'Varje vecka', 'Varannan vecka', 'Varje månad'], 
      'radio',
      'tripOpts'
    );
    card.addOpts(
      'Är resa återkommande?', 
      ['Jag har rullstol', 'Jag har ledarhund'], 
      'checkbox',
      'extraOpts'
    );
    this._wireActBar(vHolder, actBar);
  }

  _wireActBar = (vHolder, actBar) => {
    const acceptBtn = newTag('button', 'prim-btn', 'NÄSTA', actBar);
    acceptBtn.addEventListener('click', () => {
      new DetailView(vHolder, actBar);
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'TILLBAKA', actBar);
    cancBtn.addEventListener('click', () => {
      new HourView(vHolder, actBar);
    });
  }
}

class DetailView {
  constructor(vHolder, actBar) {
    vHolder.innerHTML = '';
    actBar.innerHTML = '';
    const card = new FieldCard(vHolder, 'Detaljer');
    card.addField('Förnamn');
    card.addField('Efternamn');
    card.addField('Gatuadress');
    card.addField('Postnummer');
    card.addField('Postort');
    this._wireActBar(vHolder, actBar);
  } 

  _wireActBar = (vHolder, actBar) => {
    const acceptBtn = newTag('button', 'prim-btn', 'BEKRÄFTA', actBar);
    acceptBtn.addEventListener('click', () => {
      
      window.location.href = `./confirm.html`;
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'TILLBAKA', actBar);
    cancBtn.addEventListener('click', () => {
      new ExtrasView(vHolder, actBar);
    });
  }
}

window.addEventListener('load', () => {
  const vHolder = tag('view-holder');
  const actBar = tag('action-bar');
  const travView = new TravView(vHolder, actBar);

});