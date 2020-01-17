// function calculateBill(total, tax, tip) {
//   console.log(tax);
//   return total + (total * tax) + (total * tip);
// }

// const totalBill = calculateBill(100, 0.12, 0.15);

function calculateBill(total, tax = 0.12, tip = 0.15) {
  return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100);
// const totalBill = calculateBill(100, undefined, 0.25);
console.log(totalBill);
