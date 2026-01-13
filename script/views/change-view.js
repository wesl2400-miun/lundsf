import { getTag } from '../utils.js';
import { Trips } from "../data/trips.js";
import { PATH, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';

const params = new URLSearchParams(window.location.search);
const index = params.get('index') || null;
const trips = new Trips();

window.addEventListener('load', () => {
  const main = getTag('dialog');
  const tbar = new Toolbar(main, 'inside-dialog');
  tbar.wireActBtn(STR.BTN_DIAG_CHANGE, PATH.PROFILE, () => {
     
  });
  tbar.wireDecBtn(STR.BTN_DIAG_CANCEL, PATH.PROFILE);
});