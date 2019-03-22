var moment = require('moment');
import styles from './app.css'

function sayHelloToday() {
    var element = document.createElement('div');
    element.classList.add("hello");
    var today = moment().format('dddd, MMMM Do YYYY');
    element.innerHTML = "Hello, today we are : " + today;
    return element;
}

document.body.appendChild(sayHelloToday());