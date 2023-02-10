
const _ = require('lodash');

function mult(a, b) {
    const aaaa = _.join(['a', 'b', 'c'], '~');
    return a * b;
}

function div(a, b) {
    return a / b;
}

module.exports = {
    mult: mult,
    div: div
};