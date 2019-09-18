import Vue from "vue";
//var Vue = require('vue');
import { cube, foo, graph, doHttpGet } from './my-module';
import * as classExample from './classExample';
import * as http from 'http';
import STYLES from './style.css';
import SASS_STYLE from './style.sass';
import SCSS_STYLE from './style.scss';

console.log("12345");
console.log("STYLES" + STYLES);
console.log("SASS_STYLE" + SASS_STYLE);
console.log("SCSS_STYLE" + SCSS_STYLE);


new Vue({
    el: '#app',
    data: {
        message: foo + ' Hello Vue! JOJOHOHO ' + cube(2) + graph.draw()
    },
    mounted : function(){
        console.log('Hello Webpack and Vue !');  
    }
});


http.get('https://jsonplaceholder.typicode.com/users', (res) => {
  console.log("##### http res: " + JSON.stringify(res));
});


doHttpGet();


var animal = new classExample.Animal(123, "Cat", "aaa", "bbb");
console.log(">>> animal.name: " + animal.name); //Cat
console.log(">>> animal.id: " + animal.id); //no restrict by javascript => 123
console.log(">>> animal.color: " + animal.color); //undefined


var dog = new classExample.Dog("blue");
console.log(">>> dog.name: " + dog.name); //Dog
console.log(">>> dog.id: " + dog.id); //no restrict by javascript => 1
console.log(">>> dog.color: " + dog.color); //blue

