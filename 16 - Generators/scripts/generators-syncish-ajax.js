function ajax(url) {
  fetch(url).then(data => data.json()).then(data => dataGen.next(data));
}

function* steps() {
  console.log('fetching beers');
  const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
  console.log(beers);

  console.log('fetching jeremy');
  const jeremy = yield ajax('https://api.github.com/users/jeremybwilson');
  console.log(jeremy);

  console.log('fetching fat joe');
  const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
  console.log(fatJoe);
}

const dataGen = steps();
dataGen.next(); // kick it off
