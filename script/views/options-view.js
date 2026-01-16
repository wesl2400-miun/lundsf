import { tagBy, tagsBy, getTag, loadRec, saveRec } from '../utils.js';
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Trip } from '../data/trip.js';

// Hanterar logiken bakom options.html sidan
window.addEventListener('load', () => {
  const params = new URLSearchParams(window.location.search);
  let data = params.get('data') || '';

  const tbar = new Toolbar('act-btn', 'dec-btn');

  const next = () => {
    const reTrip = tagBy('input[name="repeat"]:checked');
    data += reTrip? ` * ${reTrip.value}` : '';
    data += ' '
    const help = tagsBy('input[name="help"]:checked');
    help.forEach(helper => {
      const helpVal = helper.value;
      data += helpVal? ` * ${helpVal}` : '';
    } ); 
    console.log(data);
    window.location.href = PATH.DETAILS;
  }

  const prev = () => {
    window.location.href = `${PATH.CALENDAR}?back=true`;
  }
  
  tbar.wireActBtn(next);
  tbar.wireDecBtn(prev);
});