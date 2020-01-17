// When you really need `this`
const button = document.querySelector('#pushy');
// button.addEventListener('click', () => { // this is not bound to the function
button.addEventListener('click', function () {  // use a regular function to allow this to be equal to button
  console.log(this);
  this.classList.toggle('on');
});

// When you need a method to bind to an object
const person = {
  points: 23,
  score() {   // instead of score: function() style method
    console.log(this);
    this.points++;
  },
  reduce() {    // instead of score: function() style method
    console.log(this);
    this.points--;
  }
}

// When you need to add a prototype method
class Car {
  constructor(make, colour, engine) {
    this.make = make;
    this.colour = colour;
    this.engine = engine;
  }
}

const beemer = new Car('bmw', 'blue', 3.8);
const subie = new Car('Subaru', 'white', 5.0);

Car.prototype.summarize = function () {
  return `This car is a ${this.make} in the colour ${this.colour} with a ${engine} engine.`;
};

// When you need arguments object
const orderChildren = function () {
  const children = Array.from(arguments);
  return children.map((child, i) => {
    return `${child} was child #${i + 1}`;
  })
  // console.log(arguments);
}
