class Dog {
  // constructor method, NOT a constructor function
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  // prototype method to make the dog bark
  bark() {
    console.log(`Bark Bark! My name is ${this.name}`);
  }
  // prototype method to make the dog cuddle
  cuddle() {
    console.log(`I love you owner!`);
  }
  static info() {
    console.log('A dog is better than a cat by 10 times');
  }
  get description() {
    return `${this.name} is a ${this.breed} type of dog`;
  }
  set nicknames(value) {
    this.nick = value.trim();
  }
  get nicknames() {
    return this.nick.toUpperCase();
  }
}


// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
// }

// Dog.prototype.bark = function() {
//   console.log(`Bark Bark! My name is ${this.name}`);
// };

// Dog.prototype.cuddle = function() {
//   console.log(`I love you owner!`);
// };

const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'Golden Doodle');
