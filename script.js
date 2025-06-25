//commit 1
function add(a, b) {
  return a + b;
}
//commit 2
function subtract(a, b) {
  return a - b;
}
//commit 3
function multiply(a, b) {
  return a * b;
}

function calculateAndDisplay(fn) {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = fn(a, b);
}

document.getElementById('btn-add')
  .addEventListener('click', () => calculateAndDisplay(add));

document.getElementById('btn-subtract')
  .addEventListener('click', () => calculateAndDisplay(subtract));

document.getElementById('btn-multiply')
  .addEventListener('click', () => calculateAndDisplay(multiply));
