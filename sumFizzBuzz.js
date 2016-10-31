var isMultipleOf = n => x => x % n == 0;

var sumFizzBuzz = (n, intervals) => {
    var multipleChecks = intervals.map(isMultipleOf);
    var isMultiple = x => multipleChecks.some(check => check(x));
    var total = 0;
    for(var i = 1; i < n; i++) {
        if(isMultiple(i))
            total += i;
    }

    return total;
};

module.exports = sumFizzBuzz;
