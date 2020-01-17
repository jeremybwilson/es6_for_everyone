const postsPromise = fetch('http://www.jeremywilson.com/wp/wp-json/wp/v2/posts/');

postsPromise
  .then(data => data.json)
  .then(data => { console.log(data) })
  .catch((err) => {
    console.error(err);
    console.log(err);
  })

  postsPromise
  .then(data => data.json())
  .then(data => { console.log(data) })
  .catch((err) => {
    console.error(err);
  })

const postsPromise1 = fetch('http://www.jeremywilson.com/wp/wp-json/wp/v2/posts/');

postsPromise1
  .then(data => data.json())
  .then(data => { console.log(data) })
  .catch((err) => {
    console.error(err);
  })

const postsPromise2 = fetch('http://www.jeremywilson.com/wp/wp-json/wp/v2/posts/');

postsPromise2
  .then(data => data.json())
  .then(data => { console.log(data) })
  .catch((err) => {
    console.error(err);
    console.log(err);
  })

// const postsPromise3 = fetch('https://wesbos.com/wp-json/wp/v2/posts');
// const postsPromise4 = fetch('https://wesbos.com/wp-json/wp/v2/posts');
