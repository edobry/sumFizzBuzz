var flatten = list => list.reduce((arr, curr) => arr.concat(curr), []);

var numericSort = list => list.map(x => x).sort((a, b) => a - b);

var chain = (firstStep, ...steps) => (...args) => steps.reduce((prevResult, step) =>
    step(prevResult),
    firstStep(...args));

var combinationsOf2 = set => {
    if(set.length == 2)
        return [set];

    var [head, ...rest] = set;
    return [
        ...rest.map(x => [head, x]),
        ...combinationsOf2(rest)];
};

var findLCMs = list => combinationsOf2(list).map(([a, b]) => a * b);

var dividesEvenly = (dividend, divisor) => dividend % divisor == 0;
var isMultipleOf = n => x => dividesEvenly(n, x);
var isFactor = x => n => dividesEvenly(x, n);

var termial = n => (Math.pow(n, 2) + n) / 2;
var intQuotient = n => x => Math.floor(n / x);

var sumOfMultiplesUpTo = n => {
    var numMultiples = chain(
        intQuotient(n - 1),
        termial);

    return x => numMultiples(x) * x;
};

var collapseMultiples = list => numericSort(list).reduce((terms, currentTerm) => {
    if(!terms.some(isFactor(currentTerm)))
        terms.push(currentTerm);
    return terms;
}, []);

var totalMultipleSum = summer => list => list.map(summer).reduce((a, b) => a + b, 0)

var sumFizzBuzz = (n, terms) => {
    var collapsedTerms = collapseMultiples(terms);

    var multipleSummer = chain(
        sumOfMultiplesUpTo,
        totalMultipleSum
    )(n);

    var multipleSum = multipleSummer(collapsedTerms);

    var redundantMultipleSum = chain(
        findLCMs,
        multipleSummer
    )(collapsedTerms);

    return multipleSum - redundantMultipleSum;
};

module.exports = sumFizzBuzz;
