import style from './index.css';
import scss from './index.scss';
import Icon from './courseImage.png';

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);

const { sum } = require('./sum');

console.log('Hello from webpack');
console.log(sum(40, 2));

let heading = document.querySelector("#demo");

heading.innerHTML = `10 + 5 = ${sum(10, 5)}`;
