const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

// make a new array
// let pizzas = [];
// pizzas = pizzas.concat(featured);   // concat the featured array to the new array variable
// pizzas.push('veg');                 // push 'veg' to the new array
// pizzas = pizzas.concat(specialty);  // concat to the end of the new array the specialty array
// console.log(pizzas);                // this is a big headache, use the spread operator

const pizzas = [...featured, 'veg', ...specialty];
const fridayPizzas = [...pizzas];

const deepDish = {
  pizzaName: 'Deep Dish',
  size: 'Medium',
  ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};
