import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog } from '../config';

import User, { createURL, gravatar } from '../user';

const wes = new User('Jeremy Wilson', 'jeremybwilson@gmail.com', 'jeremywilson.com');
const profile = createURL(wes.name);
const image = gravatar(wes.email);
console.log(image);
