import { getTag } from './utils.js';
import { Trips } from "./trips.js";
import { PATH, STR } from './refs.js';
import { Toolbar } from './toolbar.js';

const params = new URLSearchParams(window.location.search);
const index = params.get('index') || null;
const trips = new Trips();

window.addEventListener('load', () => {
  const main = getTag('main');
  const tbar = new Toolbar(main, 'single-choice');
  tbar.wireActBtn(STR.BTN_CHANGE, PATH.CHANGE, () => {
     
  });
});