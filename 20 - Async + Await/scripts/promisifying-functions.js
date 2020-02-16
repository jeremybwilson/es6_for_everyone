// navigator.geolocation.getCurrentPosition(function (pos) {
//   console.log('it worked');
//   console.log(pos);
// }, function (error) {
//   console.log('it failed');
//   console.error(err);
// });

function getCurrentPosition(...args){ // use a rest to capture all the arguments
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(...args, resolve, reject);   // use a spread to spread in the arguments
  });
}

async function go(){
  console.log('starting');
  const pos = await getCurrentPosition();
  console.log(pos);
    console.log('finished');
}

go();
