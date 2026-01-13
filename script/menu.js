import { ICON } from './refs.js';
import { getTag } from './utils.js';

const hide = (tag) => {
  tag.style.display = 'none';
}

const show = (tag) => {
  tag.style.display = 'flex';
}

window.addEventListener('load', () => {

  const menu = getTag('menu');
  const routes = getTag('routes');
  const main = getTag('main');

  const menuBtn = getTag('menu-btn');
  const icon = menuBtn.firstElementChild;
  let closed = true;

  const changIco = () => {
    icon.src = closed? ICON.MENU_CLOSED : ICON.MENU_OPEN;
    icon.alt = closed? 'Öppna menyn' : 'Stäng menyn';
  }

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

  const hideMenu = () => {
    hide(menu);
    show(routes);
    show(main);
  }

  const showMenu = () => {
    open = true;
    changIco(open);
    show(menu);
    hide(routes);
    show(main);
  }

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

  window.addEventListener('resize', () => {
    updVers();
  });
});