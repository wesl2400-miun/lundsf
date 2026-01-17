import { getTag, loadRec, remRec, saveRec } from '../utils.js';
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Profile } from '../data/profile.js';

// Skapar dialog knapparna dynamiskt
window.addEventListener('load', () => {
  const main = getTag('dialog');
  
  const tbar = new Toolbar('act-btn', 'dec-btn');
  
  const next = () => {
    window.location.href = PATH.PROFILE;
  }
  
  const prev = () => {
   window.location.href = PATH.PROFILE;
  }
    
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});