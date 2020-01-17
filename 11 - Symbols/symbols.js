const wes = Symbol('Wes');
const person = Symbol('Wes');

const classRoom = {
  [Symbol('Mark')] : { grade: 50, gender: 'male' },
  [Symbol('olivia')]: { grade: 80, gender: 'female' },
  [Symbol('olivia')]: { grade: 80, gender: 'female' },
};

for (const person in classRoom) {
  console.log(person);
}

const syms = Object.getOwnPropertySymbols(classRoom);
// console.log(syms);
const data = syms.map(sym => classRoom[sym]);
console.log(data);
