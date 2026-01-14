import { getTag, loadRec, saveRec } from '../utils.js';
import { PATH, STORAGE, STR } from '../refs.js';
import { Toolbar } from './toolbar.js';
import { Trip } from '../data/trip.js';
import { OptCard } from './opt-card.js';

// Generar vyn för check-boxar
window.addEventListener('load', () => {
  const main = getTag('main');
  const tOpt = getTag('trip-opts');
  const hOpt = getTag('help-opts');

  // Skapar alternativ för återkommande resa
  const tripOpt = new OptCard(tOpt);
  tripOpt.addOpts('radio', 'trip', 
    ['Nej', 'Varje vecka', 'Varannan vecka', 'Varje månad']);

  // Skapar extra alternativ
  const helpOpt = new OptCard(hOpt);
  helpOpt.addOpts('checkbox', 'help', 
    ['Jag har ledarhund', 'Jag har rullstol']);
  
  // Sätt upp händelse-knapparna
  const tbar = new Toolbar(main);

  // Kolla vilka checkboxar som är markerade och spara de i sessionStorage
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

  // Gå tillbaka till kalender vyn, när 'Tillbaka' knappen klickas
  tbar.wireActBtn(STR.BTN_PREV, `${PATH.CALENDAR}?view=time`);
});