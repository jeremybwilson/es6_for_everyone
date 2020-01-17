function convertCurrency(amount) {
  const converted = {
    USD: amount * 0.76,
    GPB: amount * 0.53,
    AUD: amount * 1.01,
    MEX: amount * 13.30
  };
  return converted;
}

function tipCalc({ total = 100, tip = 0.15, tax = 0.12 } = {}) {
  return total + (tip * total) + (tax * total);
}

const bill1 = tipCalc({ total: 200, tip: 0.20, tax: 0.15 });
const bill2 = tipCalc();
console.log(bill2);
