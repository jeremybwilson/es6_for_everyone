// setInterval(() => console.log(Date.now()), 500);

function breathe(amount) {
  return new Promise((resolve, reject) => {
    if (amount < 500) {
      reject('That is too small of a value');
    }
    setTimeout(() => resolve(`Done for ${amount} ms`), amount);
  });
}

// creating a higher order function, a function that takes in a function called fn, basically any function
function catchErrors(fn){
  return function(...args){
    console.log(fn)
    return fn(...args).catch((err) => {
      console.error('There was an error');
      console.error(err);
    });
  }
}

// const go = async () => {}
// this function is the same as the above arrow function

// async function go(name, last){
//   try {
//     console.log(`Starting for ${name} ${last}!`);
//     console.log('start');
//     const res1 = await breathe(500);
//     console.log(res1);
//     const res2 = await breathe(600);
//     console.log(res2);
//     const res3 = await breathe(1000);
//     console.log(res3);
//     const res4 = await breathe(5000);
//     console.log(res4);
//     console.log('stop');
//   }
//   catch {
//     console.error('Ohhh nooo!!!');
//     console.error(err);
//   }
// }

async function go(name, last){
    console.log(`Starting for ${name} ${last}!`);
    console.log('start');
    const res1 = await breathe(500);
    console.log(res1);
    const res2 = await breathe(100);
    console.log(res2);
    const res3 = await breathe(1000);
    console.log(res3);
    const res4 = await breathe(5000);
    console.log(res4);
    console.log('stop');
}

const wrappedFunction = catchErrors(go);
wrappedFunction();

// wrappedFunction('Wes', 'Bos');
// go('Jeremy', 'Wilson');
