const posts = [
  { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Chris Coyier', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
  { title: 'I love Web Dev', author: 'Jeremy Wilson', id: 4 },
];

const authors = [
  { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
  { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
  { name: 'Jeremy Wilson', twitter: '@jeremybwilson', bio: 'Seattle Dev' },
];

// function getPostById(id) {
//   // create a new promise
//   return new Promise((resolve, reject) => {
//     // using a settimeout to mimick a databse
//     setTimeout(() => {
//       // find the post we want
//       const post = posts.find(post => post.id === id);
//       if(post) {
//         resolve(post); // send the post back
//       } else {
//         reject(Error('No Post Was Found!'));
//       }
//     }, 200);
//   });
// }

function getPostById(id) {
  // create a new promise
  return new Promise((resolve, reject) => {
    // using a settimeout to mimic a database
    setTimeout(() => {
      // find the post we want
      const post = posts.find(post => post.id === id);
      if (post) {
        resolve(post);  // send the post back
      } else {
        reject(Error('No post was found!'));
      }
    }, 200);
  });
}

function hydrateAuthor(post) {
  // create a new promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // find the author
      const authorDetails = authors.find(person => person.name === post.author);
      if (authorDetails) {
        // hydrate" the post object with the author object
        post.author = authorDetails;
        resolve(post);
      } else {
        console.log('Can not find the author');
        reject(Error('Author not Found!'));
      }
    }, 200);
  });
}

getPostById(4)
.then(post => {
  return hydrateAuthor(post);
})
.then(post => {
  console.log(post);
})
.catch(err => {
  console.error(err);
})

function getPostsByAuthor(name) {
  // create a new promise
  return new Promise((resolve, reject) => {
    // find the author we want
    const author = authors.find(author => author.name === name);
    if (author) {
      resolve(author); // send the author back
    } else {
      reject(Error('Author not found'))
    }
  })
}

function hydrateAuthorPosts(author) {
  // create a new promise
  return new Promise((resolve, reject) => {
    // find the post by the name of the author
    const authorPosts = posts.find(person => person.author === author.name);
    let postsArray = [];
    if (authorPosts) {
      // "hydrate" the author object with the posts object
      author.name = authorPosts;
      resolve(author);
    } else {
      reject(Error('Post(s) not found!'));
    }
  })
}

// getPostById(3)
//   .then(post => {
//     return hydrateAuthor(post);
//   })
//   .then(post => {
//     console.log(post);
//   })
//   .catch(err => {
//     console.error(err);
//   });

//getPostsByAuthor('Wes Bos')
//  .then(author => {
//    return hydrateAuthorPosts(author);
//  })
//  .then(author => {
//    console.log(author);
//  })
//  .catch(err => {
//    console.error(err);
//  })
