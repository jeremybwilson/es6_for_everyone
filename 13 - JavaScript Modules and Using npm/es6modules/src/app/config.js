// Named export
export const apiKey = 'abc123';
// Named export
export const url = 'http://www.jeremywilson.com';

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

export const ages = [1, 2, 4, 5, 12, 15, 21, 44];
const age = 100;
const dog = 'snickers';

// Named export
// export const ages = [11, 12, 17, 21, 12, 12, 44, 45, 44];

export { age as old, dog };
