const names = ["Alex", "Anika", "Jeremy"];

const fullNames = names.map(function (name) {
  return `${name} Wilson`;
});

const fullNames2 = names.map((name) => {
  return `${name} Wilson`;
});

const fullNames3 = names.map(name => {
  return `${name} Wilson`;
});

const fullNames4 = names.map(name => `${name} Wilson`);

const fullNames5 = names.map(() => `cool Wilson`);

const sayMyName = (name) => {
  console.log(`Hello ${name}!`);
}

sayMyName('Jeremy');
