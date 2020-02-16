// regular function
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  console.log(`Bark Bark! My name is ${this.name}`)
}

const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'Golden Doodle');

Dog.prototype.bark = function () {
  console.log(`Bark Bark🇨🇦🇨🇦🇨🇦! My name is ${this.name} and I'm a ${this.breed}`);
}

Dog.prototype.cuddle = function () {
  console.log(`I love you owner!`);
}
