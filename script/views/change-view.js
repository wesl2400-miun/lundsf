import { loadRec, saveRec } from '../utils.js';
import { PATH, STORAGE } from '../refs.js';
import { Toolbar } from './toolbar.js';

// Skapar dialog knapparna dynamiskt
window.addEventListener('load', () => {
  
  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  // Byt ut profildata mot data som har sparats temporärt, och rensa cachen. Också gå tillbaka till Mina sidor
  const next = () => {
    const profile = loadRec(STORAGE.PROFILE_TEMP) || '';
    saveRec(STORAGE.PROFILE, profile);
    window.location.href = PATH.PROFILE;
  }
  
  // Gå tillbaka till mina sidor
  const prev = () => {
    window.location.href = PATH.PROFILE;
  }
    
  // Lyssna efter händelser när bekräftande eller avrbytande knapp trycks
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});