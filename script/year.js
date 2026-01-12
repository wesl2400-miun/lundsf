import { Calendar } from "./calendar.js";
import { PATH } from "./refs.js";
import { getTag } from "./utils.js";

window.addEventListener('load', () => {
  const temp = { value: ''};
  const calendar = new Calendar(
    getTag('main'), 
    'Välj år', 'Du får bara boka en resa ett år framåt',
  );
  calendar.render( ['2025', '2026'], temp);

  const actBtn = getTag('accept-btn');
  actBtn.addEventListener('click', () => {
    console.log(temp);
    
  });
    
  const cancBtn = getTag('cancel-btn');
  cancBtn.addEventListener('click', () => {
    window.location.href = `${PATH.DESTINATION}`;
  });
});