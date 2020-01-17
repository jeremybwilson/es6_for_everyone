let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

let isBoy = 'Alex';
let isGirl = 'Anika';

console.log(isBoy, isGirl);
[isBoy, isGirl] = [isGirl, isBoy];
console.log(isBoy, isGirl);

// console.log(inRing, onSide);
console.log(`${inRing} versus ${onSide}`);
[inRing, onSide] = [onSide, inRing];
// console.log(inRing, onSide);
console.log(`${inRing} versus ${onSide}`);
