import { flowers, getFlowers } from "./ES6_module1.js";

console.log(flowers[0]);
console.log(getFlowers(3));

// import * as animals from "./ES6_module2.js";
// animals.showAnimals();

import { showAnimals, animals } from "./ES6_module2.js";
console.log(animals[1]);
showAnimals();

import sayHi from "./module.js";
sayHi();
