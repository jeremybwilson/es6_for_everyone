const person = {
  name: 'Jeremy',
  job: 'Web Developer',
  city: 'Seattle',
  age: 44,
  bio: 'Jeremy is a really cool guy that loves to teach web development!',
};

const markup = `
<div class="person">
  <h2>
    ${person.name}
    <span class="job">${person.job}</span>
  </h2>
  <p class="location">${person.city}</p>
  <p class="bio">${person.name} lives in ${person.city} and is ${person.age} years old.  ${person.bio}</p>
</div>
`;

console.log(markup);
document.body.innerHTML = markup;
