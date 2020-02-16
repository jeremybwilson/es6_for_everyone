class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  barks = 0;

  bark() {
    console.log(`Bark Bark! My name is ${this.name}`);
    this.barks = this.barks + 1;
    console.log(this.barks);
  }
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

const chewie = new Dog('Chewie', 'Border Collie');
const sunny = new Dog('Sunny', 'Golden Doodle');
