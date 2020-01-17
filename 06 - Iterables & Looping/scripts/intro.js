   /* eslint-disable */
   Array.prototype.shuffle = function () {
    var i = this.length, j, temp;
    if (i == 0) return this;
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
    return this;
  };

  const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

  cuts.shop = 'MM Meats';

  // for (let i = 0; i < cuts.length; i++) {
  //  console.log(cuts[i]);
  // }

  const getCuts = () => {
    cuts.forEach((cut) => {
      console.log(`Here is a ${cut}`);
      if (cut === 'Brisket') {
        // return `The cut is ${cut}`;  // return value if is equal to brisket
        // continue;     // => cannot use continue inside of a forEach loop
        // break;     // => cannot use break inside of a forEach loop
      }
    });
  }
  // getCuts();

  // this method iterates over absolutely everything in the array
  // including things added to the prototype
  // for (const index in cuts) {
  //   console.log(cuts[index]);
  // }

  const getCuts2 = () => {
    for (const cut of cuts) {
      if (cut === 'Brisket') {
        continue;
      }
      console.log(`Here is a ${cut}`);
    }
  }
  getCuts2();
  // console.log(getCuts2);
