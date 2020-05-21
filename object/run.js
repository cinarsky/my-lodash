var run = require('./findKey')

var object = {
    'barney': { 'age': 36, 'active': true },
    'fred': { 'age': 40, 'active': false },
    'pebbles': { 'age': 1, 'active': true }
};

console.log(
    run(object, function (o) { return o.age < 40; })
)
