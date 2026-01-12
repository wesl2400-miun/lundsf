import { getTag } from './utils.js';
import { Trips } from './trips.js';
import { PATH } from './refs.js';

const trips = new Trips();

window.addEventListener('load', () => {
  const addr = getTag('address');
  const code = getTag('code');
  const city = getTag('city');

  const actBtn = getTag('accept-btn');
  actBtn.addEventListener('click', () => {
    const to = `Gatudadress: ${addr.value} | Postnummer: ${code.value} | Postort: ${city.value};`
    trips.cacheTrip(null, null, to, null, null);
    window.location.href = `${PATH.YEAR}`;
  });
  
  const cancBtn = getTag('cancel-btn');
  cancBtn.addEventListener('click', () => {
    window.location.href = `${PATH.BOOKING}`;
  });
});