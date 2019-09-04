import * as http from "http";

function cube(x: number) {
  return x * x;
}

const foo = Math.PI + Math.SQRT2;

var graph = {
  options: {
      color:'white',
      thickness:'2px'
  },
  draw: function() {
      return '[my-module.ts] From graph draw function';
  }
}

function doHttpGet() {
  http.get('https://jsonplaceholder.typicode.com/users', (res) => {
    console.log("##### [my-module.ts] doHttpGet: " + JSON.stringify(res));
    const { statusCode } = res;
    console.log(statusCode);
  });
}

export { cube, foo, graph, doHttpGet };