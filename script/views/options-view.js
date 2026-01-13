import { getTag, loadRec, saveRec } from '../utils.js';
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Trip } from '../data/trip.js';
import { OptCard } from './opt-card.js';

window.addEventListener('load', () => {
  const main = getTag('main');
  const tOpt = getTag('trip-opts');
  const hOpt = getTag('help-opts');

  const tripOpt = new OptCard(tOpt);
  tripOpt.addOpts('radio', 'trip', 
    ['Nej', 'Varje vecka', 'Varannan vecka', 'Varje månad']);

  const helpOpt = new OptCard(hOpt);
  helpOpt.addOpts('checkbox', 'help', 
    ['Jag har ledarhund', 'Jag har rullstol']);
  
  const tbar = new Toolbar(main);
  tbar.wireActBtn(STR.BTN_NEXT, PATH.DETAILS, () => {
    const trip = loadRec(STORAGE.CACHED_TRIP) || new Trip();
    trip.repeat = 'Återkommande: ';
    tripOpt.boxes.forEach(box => {
      if(box.checked) trip.repeat += box.value;
    });
    trip.help = 'Övrigt: ';
    helpOpt.boxes.forEach(box => {
      if(box.checked) trip.help += box.value + ' * ';
    });
    saveRec(STORAGE.CACHED_TRIP, trip);
  });
  tbar.wireActBtn(STR.BTN_PREV, `${PATH.CALENDAR}?view=time`);
});