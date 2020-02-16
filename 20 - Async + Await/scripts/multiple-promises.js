    async function go() {
      // const p1 = fetch('https://api.github.com/users/jeremybwilson').then(r =>r.json());
      // const p2 = fetch('https://api.github.com/users/stolinski').then(r => r.json());
      const p1 = fetch('https://api.github.com/users/jeremybwilson');
      const p2 = fetch('https://api.github.com/users/stolinski');
      // Wait for both of them to come back
      const res = await Promise.all([p1, p2]);
      const dataPromises = res.map(r => r.json());
      const [jeremy, scott] = await Promise.all(dataPromises);
      console.log(jeremy, scott);
    }

    go();

    async function getData(names) {
      // debugger;
      const promises = names.map(name => fetch(`https://api.github.com/users/${name}`).then(r => r.json()));
      const people = await Promise.all(promises);
      console.log(people);
    }

    getData(['jeremybwilson', 'stolinski', 'darcyclarke']);
