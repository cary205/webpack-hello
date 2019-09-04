import Vue from "vue";
//var Vue = require('vue');
import { cube, foo, graph, doHttpGet } from './my-module';
import * as classExample from './classExample';
import * as http from 'http';

console.log("12345");


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

