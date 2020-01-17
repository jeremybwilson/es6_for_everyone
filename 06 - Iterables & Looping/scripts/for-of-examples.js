const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

for (const cut of cuts.entries()) {
  console.log(cut);
}

for (const [i, cut] of cuts.entries()) {
  console.log(`${cut} is the ${i + 1} item`);
}

function addUpNumbers() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  // console.log(total);
  return 'The total is ' + total;
}

addUpNumbers(10, 23, 52, 34, 12, 13, 123);

const name = 'Jeremy Wilson';

const iterateCharacters = () => {
  for (const char of name) {
    console.log(char);
  }
}
iterateCharacters(name);

const ps = document.querySelectorAll('p');
for (const paragraph of ps) {
  paragraph.addEventListener('click', function () {
    console.log(this.textContent);
  });
}
