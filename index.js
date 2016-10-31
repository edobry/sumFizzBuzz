var sumFizzBuzz = require("./sumFizzBuzz");

var [,, n = 10, ...intervals ] = process.argv;
if(intervals.length == 0)
    intervals = [3, 5];

console.log(`Running SumFizzBuzz for ${intervals} up to ${n}...`);
console.log(sumFizzBuzz(n, intervals));
