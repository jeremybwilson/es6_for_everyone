const details = ['Jeremy Wilson', 123, 'jeremywilson.com'];
const [name, id, website] = details;
console.log(name, id, website);

const data = 'Skiing,Sports,90210,23,jeremy,wilson,cool';
const [itemName, category, sku, inventory] = data.split(',');
console.log(itemName, category, sku, inventory);

const team = ['Jeremy', 'Alex', 'Anika', 'Keegan', 'Riker'];

const [captain, assistant, ...players] = team;
