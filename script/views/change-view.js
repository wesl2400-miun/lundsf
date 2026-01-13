import { getTag, loadRec, remRec, saveRec } from '../utils.js';
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Profile } from '../data/profile.js';

window.addEventListener('load', () => {
  const main = getTag('dialog');
  const tbar = new Toolbar(main, 'inside-dialog');
  tbar.wireActBtn(STR.BTN_DIAG_CHANGE, PATH.PROFILE, () => {
    const profile = loadRec(STORAGE.CACHED_PROFILE) || new Profile();
    saveRec(STORAGE.PROFILE, profile);
  });
  tbar.wireDecBtn(STR.BTN_DIAG_CANCEL, PATH.PROFILE, () => {
    remRec(STORAGE.CACHED_PROFILE);
  });
});