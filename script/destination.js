import { getTag } from './utils.js';
import { Trips } from './trips.js';
import { PATH } from './refs.js';

const trips = new Trips();

window.addEventListener('load', () => {
  const actBtn = getTag('accept-btn');
  const addr = getTag('address');
  const code = getTag('code');
  const city = getTag('city');

  actBtn.addEventListener('click', () => {
    const to = `Gatudadress: ${addr.value} | Postnummer: ${code.value} | Postort: ${city.value};`
    trips.cacheTrip(null, null, to, null, null);
  });
  
  const cancBtn = getTag('cancel-btn');
  cancBtn.addEventListener('click', () => {
    window.location.href = `${PATH.BOOKING}`;
  });
});