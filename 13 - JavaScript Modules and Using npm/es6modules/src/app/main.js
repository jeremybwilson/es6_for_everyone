import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

import { apiKey, ages, url, sayHi, old, dog } from './config';
// import { sayHi, old, dog } from './config';

// console.log(apiKey, url);
// sayHi('Jeremy');

import User, { createURL, gravatar } from './user';

console.log(ages);

// const jeremy = new User('Jeremy Wilson', 'jeremybwilson@gmail.com', 'jeremywilson.com');
const user = new User('Jeremy Wilson', 'jeremybwilson@gmail.com', 'www.jeremywilson.com');
const profileUrl = createURL(user.name);
const gravatarImage = gravatar(user.email);

console.log(gravatarImage);
