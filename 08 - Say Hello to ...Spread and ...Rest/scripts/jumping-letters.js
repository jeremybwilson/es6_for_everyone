    // create a variable for container with .jump class
    const heading1 = document.querySelector('.jump');
    const headingContent = heading1.textContent;

    // use innerHTML to replace/add to element the text content from the heading variable
    // heading1.innerHTML = sparanWrap(heading1.textContent);
    heading1.innerHTML = sparanWrap(headingContent);

    function sparanWrap(word) {
      // console.log(word);
      // return the array values into array named word,
      // then map all individual letters into <span> tags
      return [...word].map(letter => `<span>${letter}</span>`).join('');
    }


    const heading2 = document.querySelector('.bounce');

    heading2.innerHTML = bounceLetters(heading2.textContent);

    function bounceLetters(word) {
      // console.log(word);
      // return the array values into array named word,
      // then map all individual letters into <span> tags
      return [...word].map(letter => `<span>${letter}</span>`).join('');
    }
