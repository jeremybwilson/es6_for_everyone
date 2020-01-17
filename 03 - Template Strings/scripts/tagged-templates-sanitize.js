function sanitize(strings, ...values) {
  const dirty = strings.reduce((prev, next, i) => `${prev}${next}${values[i] || ''}`, '');
  return DOMPurify.sanitize(dirty);
}

const first = 'Jeremy';
const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('you got hacked');" />`;

const sanitizeFunc = () => {

  const html = sanitize`
    <h3>${first}</h3>
    <p>${aboutMe}</p>
  `;
  let htmlStr = '';
  htmlStr += html;
  console.log(htmlStr);

  const bio = document.querySelector('.bio');
  bio.innerHTML = html;
}
sanitizeFunc();
