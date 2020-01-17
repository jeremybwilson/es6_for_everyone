const first = 'Chewie';
const last = 'Wilson';
const age = 2;
const breed = 'Border Collie';
const dog = {
  first,
  last,
  age,
  breed,
  pals: ['Paulina', 'Jet']
};
console.log(dog);

const modal = {
  create(selector) {

  },
  open(content) {

  },
  close(goodbye) {

  }
}

function invertColor(color) {
  return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1), 16)).toString(16)).slice(-6);
}

const key = 'pocketColor';
const value = '#ffc600';

const tShirt = {
  [key]: value,
  [`${key}Opposite`]: invertColor(value)
};

const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];

const shirt = {
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
}
console.log(shirt);
