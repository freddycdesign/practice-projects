/*
function captilize(text) {
    return console.log(text.toUpperCase());
}
  let captilize = function(text) {
    console.log(text.toUpperCase());
}
*/

let captilize = text => {
    console.log(text.toUpperCase());
}
captilize('hello');

function captilize2(text) {
    let upperCasedText = text.toUpperCase();
    console.log(upperCasedText);
}
captilize2('helloooo');


function length(text) {
    return console.log(text.length);
}
length('hello sadffsd asdf');


let length2 = string => {
    console.log(string.length);
}
length2('1234567')


function checkNumber(num) {
    if (num > 0) {
        console.log(num + ' is positive.')
    }
    else if (num < 0) {
        console.log(num + ' is negative.')
    }
    else {
        console.log(num + ' is zero.')
    }
};
checkNumber(5);
checkNumber(-3);
checkNumber(0);


function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(1, 1, 1)); // 6


let name = 'bob';
const log = () => {
    console.log(`hello it's me, my "name" is ${name}.`)
}
log();