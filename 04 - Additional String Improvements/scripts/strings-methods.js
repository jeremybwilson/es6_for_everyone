const course = 'RFB2';
const flightNumber = '20-AC2018-jz';
const accountNumber = '825242631RT0001';

const make = 'BMW';
const model = 'x5';
const colour = 'Royal Blue';

// .startsWith()
const flightNum1 = flightNumber.startsWith('AC', 3)
console.log(flightNum1);

// .endsWith()
const flightNum2 = flightNumber.endsWith('jz');
console.log(flightNum2);

const accountNum = accountNumber.endsWith('RT', 11);
console.log(accountNum);

// .includes()
const flightNum3 = flightNumber.includes('ac');
console.log(flightNum3);
const accountNum2 = accountNumber.includes('RT');
console.log(accountNum2);


// .repeat()

function leftPad(str, length = 20) {
  // debugger;
  return `→ ${' '.repeat(length - str.length)}${str}`;
}

console.log(leftPad(make));
console.log(leftPad(model));
console.log(leftPad(colour));
