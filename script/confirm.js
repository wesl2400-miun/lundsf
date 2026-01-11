
const tag = (id) => {
  return document.getElementById(id);
};

window.addEventListener('load', () => {
  const actBtn = tag('accept-btn');
  actBtn.addEventListener('click', () => {
    window.location.href = './success.html';
  });

  const cancBtn = tag('cancel-btn');
  cancBtn.addEventListener('click', () => {
    console.log('hallo')
    window.location.href = './booking.html';
  });
});