function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

var graph = {
  options: {
      color:'white',
      thickness:'2px'
  },
  draw: function() {
      return '[my-module.js] From graph draw function';
  }
}

export { cube, foo, graph };