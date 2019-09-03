import Vue from "vue";
//var Vue = require('vue');
import { cube, foo, graph } from './my-module';
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
