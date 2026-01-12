import { 
  newTag,
  getTag
} from './utils.js';

import {
  InfoCard,
  TravCard,
  OptsCard,
  FieldCard,
  CalCard
} from './cards.js';

class TravView {
  constructor(vHolder, actBar) {
    vHolder.innerHTML = '';
    actBar.innerHTML = '';
    new InfoCard(
      vHolder,
      'Bokade resor', 
      'Nedan finns resor som du redan har bokat.'
    );

    new TravCard(vHolder, actBar, 'Lund', 'Gata 19', 'Info');
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
  const vHolder = getTag('view-holder');
  const actBar = getTag('action-bar');
  const travView = new TravView(vHolder, actBar);

});