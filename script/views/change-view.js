import { getTag, loadRec, remRec, saveRec } from '../utils.js';
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Profile } from '../data/profile.js';

// Skapar dialog knapparna dynamiskt
window.addEventListener('load', () => {
  const main = getTag('dialog');
  const tbar = new Toolbar(main, 'inside-dialog');
  
  // När första knappen klickas, gå till profil sidan och spara pofil uppgifterna
  tbar.wireActBtn(STR.BTN_DIAG_CHANGE, PATH.PROFILE, () => {
    const profile = loadRec(STORAGE.CACHED_PROFILE) || new Profile();
    saveRec(STORAGE.PROFILE, profile);
  });

  // Ta bort den cachade profilen och gå tillbaka till profilsidan
  tbar.wireDecBtn(STR.BTN_DIAG_CANCEL, PATH.PROFILE, () => {
    remRec(STORAGE.CACHED_PROFILE);
  });
});