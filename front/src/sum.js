// sum.js
export function sum(a, b) {
  return a + b;
}

let counter = 0;
export function countDisplay() {
  const el = document.getElementById("counter-display");
  el.innerHTML = counter;
}
