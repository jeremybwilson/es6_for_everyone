const p = new Promise((resolve, reject) => {
  resolve('Jeremy is cool');

  setTimeout(() => {
    reject(Error('Err Jeremy isn\'t cool'));
  }, 1000);
});

p
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
