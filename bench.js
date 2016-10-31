var Suite = require("benchmark").Suite;
var sumFizzBuzz = require("./sumFizzBuzz");

var suite = new Suite;

suite.add("sumFizzBuzz", () => {
    sumFizzBuzz(10000, [3, 5]);
})
.on('cycle', function (event) {
    console.log(String(event.target));
}).run({ 'async': true });
