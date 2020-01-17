import { sum, kebabCase } from 'npm:lodash';
import { addTax } from './checkout';

console.log(kebabCase('Jeremy is so coool, hey it works!'));
// console.log('Hey it works!');
console.log(addTax(100, 0.15));
