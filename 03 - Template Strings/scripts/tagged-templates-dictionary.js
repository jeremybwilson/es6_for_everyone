const dict = {
  HTML: 'Hyper Text Markup Language',
  CSS: 'Cascading Style Sheets',
  JS: 'JavaScript'
};

function addAbbreviations(strings, ...values) {
  const abbreviated = values.map(value => {
    if (dict[value]) {
      return `<abbr title="${dict[value]}">${value}</abbr>`;
    }
    return value;
  });

  return strings.reduce((sentence, string, i) => {
    return `${sentence}${string}${abbreviated[i] || ''}`;
    // return sentence + string + (abbreviated[i] || '');
  }, '');
}



const dict2 = {
  HTML: 'Hyper Text Markup Language',
  CSS: 'Cascading Style Sheets',
  JS: 'JavaScript'
};

function addAbbreviations2(strings, ...values) {
  const abbreviated = values.map(value => {
    if (dict2[value]) {
      return `<abbr title="${dict2[value]}">${value}</abbr>`
    }
    return value;
  })
  // console.log(abbreviated);
  return strings.reduce((sentence, string, index) => {
    return `${sentence}${string}${abbreviated[index] || ''}`;
  }, '');
}

const first = 'Jeremy';
const last = 'Wilson';
const sentence = addAbbreviations2`Hello my name is ${first} ${last} and I love to code ${'HTML'}, ${'CSS'}, and ${'JS'}`;

const bio = document.querySelector('.bio');
const p = document.createElement('p');
p.innerHTML = sentence;
bio.appendChild(p);
