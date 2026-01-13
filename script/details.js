import { PATH, STR } from "./refs.js";
import { Toolbar } from "./toolbar.js";
import { getTag } from "./utils.js";


window.addEventListener('load', () => {
  const main = getTag('main');
  const tbar = new Toolbar(main);
  tbar.wireActBtn(STR.BTN_CONF, PATH.CONFIRMATION, () => {

  });
  tbar.wireActBtn(STR.BTN_PREV, PATH.OPTIONS);
});