

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
  constructor(vHolder, title, dates) {
    this._root = newTag('section', 'card', null, vHolder);
    newTag('h2', null, title, this._root);
    const bHolder = newTag('div', 'calendar-btns', null, this._root);
    bHolder.role = 'radiogroup';
    this._dates = dates.map(date => {
      const calBtn = newTag('button', 'calendar-btn', date, bHolder);
      calBtn.role = 'radio';
      calBtn.ariaChecked = false;
      calBtn.ariaLabel = date;
      calBtn.addEventListener('click', () => {
        
      })
      return calBtn;
    });
    console.log(this._dates);
  }

  addInfo = (text) => {
    newTag('p', null, text, this._root);
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
    this.wireActBar(vHolder, actBar);
  } 

  wireActBar = (vHolder, actBar) => {
    const travBtn = newTag('button', 'prim-btn', 'Boka ny resa', actBar);
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
    const card = new CalCard(vHolder, 'Välj år', ['3000', '3001']);
    card.addInfo('Tralala');
    this.wireActBar(vHolder, actBar);
  } 

  wireActBar = (vHolder, actBar) => {
    const acceptBtn = newTag('button', 'prim-btn', 'Bekräfta', actBar);
    acceptBtn.addEventListener('click', () => {
      
    });

    const cancBtn = newTag('button', 'prim-var-btn', 'Avbryt', actBar);
    cancBtn.addEventListener('click', () => {
      new TravView(vHolder, actBar);
    });
  }
}

window.addEventListener('load', () => {
  const vHolder = tag('view-holder');
  const actBar = tag('action-bar');
  const travView = new TravView(vHolder, actBar);

});