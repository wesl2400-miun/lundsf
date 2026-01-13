import { getTag } from './utils.js';
import { Trips } from './trips.js';
import { PATH, STR } from './refs.js';
import { Toolbar } from './toolbar.js';

const trips = new Trips();

window.addEventListener('load', () => {
  const main = getTag('main');

  const addr = getTag('address');
  const code = getTag('code');
  const city = getTag('city');

  const tbar = new Toolbar(main);
  tbar.wireActBtn(STR.BTN_NEXT, PATH.CALENDAR, () => {
    const to = `Gatudadress: ${addr.value} | Postnummer: ${code.value} | Postort: ${city.value};`
    trips.cacheTrip(null, null, to, null, null);
  });
  tbar.wireDecBtn(STR.BTN_DEC, PATH.BOOKING);
});