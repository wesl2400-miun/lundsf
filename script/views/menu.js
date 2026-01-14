import { ICON } from '../refs.js';
import { getTag } from '../utils.js';

// Hjälpfunktioner
const hide = (tag) => {
  tag.style.display = 'none';
}

const show = (tag) => {
  tag.style.display = 'flex';
}

// Kör logiken för den hopfällbara menyn
window.addEventListener('load', () => {

  const menu = getTag('menu');
  const routes = getTag('routes');
  const main = getTag('main');

  const menuBtn = getTag('menu-btn');
  const icon = menuBtn.firstElementChild;
  let closed = true;

  // Ändra meny ikonen baserat på closed-flaggan
  const changIco = () => {
    icon.src = closed? ICON.MENU_CLOSED : ICON.MENU_OPEN;
    icon.alt = closed? 'Öppna menyn' : 'Stäng menyn';
  }

  // Visa eller dölj menyn baserat på closed flaggan
  menuBtn.addEventListener('click', () => {
    if(closed) {
      hide(main);
      show(routes);;
    } else {
      show(main);
      hide(routes);
    }
    closed = !closed;
    changIco();
  });

  // Dölj menyraden
  const hideMenu = () => {
    hide(menu);
    show(routes);
    show(main);
  }

  // Visa menyraden
  const showMenu = () => {
    open = true;
    changIco(open);
    show(menu);
    hide(routes);
    show(main);
  }

  // Uppdatera UI-versionen baserat på skärmbredden
  const updVers= () => {
    if(window.innerWidth <= 750) {
      showMenu();
      closed = true;
      changIco();
    } else {
      hideMenu()
    }
  }

  updVers();

  // Uppdatera UI-versionen när skärmbdimensioner ändras
  window.addEventListener('resize', () => {
    updVers();
  });
});