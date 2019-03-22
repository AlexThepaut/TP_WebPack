const moment = require('moment');
import styles from './app.css'

function sayHelloToday() {
    let element = document.createElement('div');
    element.classList.add("hello", "hello--arial");
    let today = moment().format('dddd, MMMM Do YYYY');
    element.innerHTML = "Hello, today we are : " + today;
    return element;
}

function time(){
    let now = moment().hours();
}

document.body.appendChild(sayHelloToday());