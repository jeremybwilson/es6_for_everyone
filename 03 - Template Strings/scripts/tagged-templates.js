function highlight(strings, ...values) {
  // debugger;
  let htmlStr = '';
  strings.forEach((string, i) => {
    // htmlStr += string + (values[i] || '');
    htmlStr += `${string} <span contenteditable class="hl">${values[i] || ''}</span>`;
  });
  return htmlStr;

}

const name = 'Snickers';
const age = 100;

const sentence = highlight`My dog's name is ${name} and he is ${age} years old`;
document.body.innerHTML = sentence;
console.log(sentence);
