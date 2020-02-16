class MovieCollection extends Array {
  constructor(name, ...items) {
    super(...items);
    this.name = name;
  }
  add(movie) {
    this.push(movie);
  }
  topRated(limit = 10) {
    return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
  }
}

const movies = new MovieCollection('Jeremy\'s Favorite Movies',
  { name: 'Empire Strikes Back', stars: 10 },
  { name: 'Once Upon a Time', stars: 7 },
  { name: 'Star Wars Trek', stars: 1 },
  { name: 'Virgin Suicides', stars: 7 },
  { name: 'King of the Road', stars: 8 }
);

// const newMovie = movies.add({ name: 'Titanic', stars: 5 });  // this doesn't work
movies.add({ name: 'Titanic', stars: 5 });
console.table(movies.topRated());
