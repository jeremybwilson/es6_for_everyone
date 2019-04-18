import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog } from './src/config';

import User, { createURL, gravatar } from './src/user';

const jeremy = new User('Jeremy Wilson', 'jeremybwilson@gmail.com', 'jeremywilson.com');
const profile = createURL(jeremy.name);
const image = gravatar(jeremy.email);
console.log(image);
