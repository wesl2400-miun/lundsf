import { tagBy, tagsBy, remRec, saveRec } from '../utils.js';
import { PATH, STORAGE } from '../refs.js';
import { Toolbar } from './toolbar.js';

// Hanterar logiken bakom options.html sidan
window.addEventListener('load', () => {
  
  // Rensa cache, för att undvika att flera versioner av samma data skapas när 'Tillbaka' knappen klickas
  remRec(STORAGE.OPTS);
  let opts = '';

  const tbar = new Toolbar('act-btn', 'dec-btn');

  // Spara de markerade svar i sessionSotrage
  const next = () => {
    const repeat = tagBy('input[name="repeat"]:checked');
    opts += repeat?.value? 'Återkommande: ' + repeat.value + '. ' : '';
    const help = tagsBy('input[name="help"]:checked');
    opts += 'Övrigt: [';
    help.forEach(helper => opts += helper?.value? ' * ' + helper.value : '');
 
    opts += '] ';
    saveRec(STORAGE.OPTS, opts);
    window.location.href = PATH.DETAILS;
  }

  // Gå till calendar.html sidan och överför ett värde så att kalendervyn börjar från tid-vyn
  const prev = () => {
    window.location.href = `${PATH.CALENDAR}?back=true`;
  }
  
  // Lyssna efter händelser när bekräftande eller avrbytande knapp trycks
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});