import { Calendar } from "./calendar.js";
import { PATH } from "./refs.js";
import { getTag } from "./utils.js";

const params = new URLSearchParams(window.location.search);
const prevData = params.get('temp') || '';

window.addEventListener('load', () => {
  const temp = { value: '' };
  const calendar = new Calendar(
    getTag('main'), 
    'Välj dag',
    'Nedan finns tillgängliga dagar.'
  );
  calendar.render(Array.from({length: 20}, (_, i) => i + 1), 
    temp
  );

  const actBtn = getTag('accept-btn');
  actBtn.addEventListener('click', () => {
    const value = temp.value;
    const data = encodeURIComponent(
      JSON.stringify({prevData, value}));
    window.location.href = `${PATH.TIME}?temp=${data}`;
  });
    
  const cancBtn = getTag('cancel-btn');
  cancBtn.addEventListener('click', () => {
    window.location.href = `${PATH.MONTH}`;
  });
});