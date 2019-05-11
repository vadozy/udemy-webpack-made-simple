import url from './index.css';

const { sum } = require('./sum');

console.log('Hello from webpack');
console.log(sum(40, 2));

let heading = document.querySelector("#demo");

heading.innerHTML = `10 + 5 = ${sum(10, 5)}`;
