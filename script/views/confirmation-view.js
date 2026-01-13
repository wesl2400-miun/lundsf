import { getTag } from '../utils.js';
import { Trips } from "../data/trips.js";
import { PATH, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';

const params = new URLSearchParams(window.location.search);
const index = params.get('index') || null;
const trips = new Trips();

window.addEventListener('load', () => {
  const main = getTag('dialog');
  const mess = getTag('dialog-msg');
  const info = ''
  mess.textContent = info;

  const tbar = new Toolbar(main, 'inside-dialog');
  tbar.wireActBtn(STR.BTN_DIAG_CONFIRM, PATH.SUCCESS, () => {
     
  });
  tbar.wireDecBtn(STR.BTN_DIAG_CANCEL, PATH.BOOKING);
});