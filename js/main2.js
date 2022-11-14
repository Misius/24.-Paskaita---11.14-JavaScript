import { username as uname, town } from './modules/vars.js';
import { sum } from './modules/sum.js';
import { avarage } from './modules/avg.js';
// import { fetch } from './modules/fetch';
import user from './modules/vars.js';
// 'use strict';

console.log('main2.js');

console.log('town ===', town);
console.log('username ===', uname);
console.log('user ===', user);



const a = 10;
const b = 140;
const c = 100;
const s1 = sum(a,b);
const suma = sum(s1, 400)
console.log('s1 ===', s1);
console.log('suma ===', suma);
const s2 = avarage(a,b,c);
console.log('s2 ===', s2);
// console.log('fetch ===', fetch);


// 1. Sukurti avg.js *
// 2. sukurti funkcija kuri grazina ir atspaussdina 3 argumentu vidurki*
// 3. exportuoti funkcija is avg.js*
// 4. importuoti ir panaudoti ja main2.js su 3 skaiciais*
// 5. aprasyti fetch parsiuntimo funkcija atskirame faile ir panaudoti ja main js kad parsiusti userius is https://reqres.in/api/users?page=1
// 6. exportuoti 2uzduoti is praktiniu uzduociu ir importavus i main.js panaudoti patikrinti ar veikia.

