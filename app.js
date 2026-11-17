const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const reset = document.getElementById('reset');
let count = 0;

increment.addEventListener('click', () => {
  count += 1;
  counter.textContent = String(count);
});

reset.addEventListener('click', () => {
  count = 0;
  counter.textContent = String(count);
});
