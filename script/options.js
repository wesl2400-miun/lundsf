import { PATH, STR } from "./refs.js";
import { Toolbar } from "./toolbar.js";
import { getTag } from "./utils.js";


window.addEventListener('load', () => {
  const main = getTag('main');
  const tbar = new Toolbar(main);
  tbar.wireActBtn(STR.BTN_NEXT, PATH.DETAILS, () => {

  });
  tbar.wireActBtn(STR.BTN_PREV, `${PATH.CALENDAR}?view=time`);
});