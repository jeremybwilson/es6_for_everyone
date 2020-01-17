const song = {
  name: 'Dying to live',
  artist: 'Tupac',
  featuring: 'Biggie Smalls'
};

const markup = `
  <div class="song">
    <p>
      ${song.name} — ${song.artist}
      ${song.featuring ? `(Featuring ${song.featuring})` : ''}  <!-- using ternary operator -->
    </p>
  </div>
`;

const createMarkup = () => {
  const song2 = {
    name: 'Humpty Hump',
    artist: 'Digital Underground',
    featuring: 'Shock G'
  };

  const markup2 = `
    <div class="song">
      <p>
        ${song2.name} — ${song2.artist}
        ${song2.featuring ? `(Featuring ${song2.featuring})` : ''}  <!-- using ternary operator -->
      </p>
    </div>
  `;
  // console.log(markup2);
  return document.body.innerHTML = markup2;
}

createMarkup();
