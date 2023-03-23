// Your code here
function moveDodgerLeft() {
  const left = parseInt(dodger.style.left, 10);
  if (left > 0) {
    dodger.style.left = `${left - 4}px`;
  }
}
function moveDodgerRight() {
  const left = parseInt(dodger.style.left, 10);
  if (left < 360) {
    dodger.style.left = `${left + 4}px`;
  }
}
