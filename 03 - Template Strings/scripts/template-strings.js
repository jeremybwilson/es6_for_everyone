const name = 'Snickers';
const age = 2;
// const sentence = 'My dog' + name + ' is ' + ' + age * 7 + 'years old';
// const sentence = `My dog ${name} is ${age} years old.`;
// console.log(sentence);

const dogYears = ((name, age) => {
  const sentence = `My dog ${name} is ${age} years old.`;
  return sentence;
});

dogYears('Chewie', 3);
