const box = document.querySelector('.box');
// box.addEventListener('click', () => { // 'this' inherits the parent scope of div.box, which is window
box.addEventListener('click', function() {
  let first = 'opening';
  let second = 'open';

  if (this.classList.contains(first)) {
    // switch them
    [first, second] = [second, first];
  }

  this.classList.toggle(first);
  setTimeout(() => {
    this.classList.toggle(second);
  }, 500);
});
