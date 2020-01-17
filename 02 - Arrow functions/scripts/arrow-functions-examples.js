const race = '100m Dash';
const winners = ['Mutha Trucka', 'Singa Song', 'Imma Boss'];

const win = winners.map((winner, i) => ({ name: winner, race, place: i + 1 }));

const ages = [23, 62, 45, 234, 2, 15, 12, 62, 234, 62, 34];

const senior_citizens = ages.filter(age => age >= 60);
console.log(`These are the ages above 60:`, senior_citizens);

const kids = ages.filter(age => age <= 18);
console.table(`These are the ages younger than 18:`, kids);
