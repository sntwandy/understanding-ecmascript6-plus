// flat in ECMAScript 10
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

// flat map in ECMAScript 10

let  array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap(value => [value, value * 2]));

// delete spaces in a string in ECMAScript 10

let hello = '         hello world!!'

console.log(hello);

console.log(hello.trimStart());

let hello2 = 'Hello World       ';

console.log(hello2);
console.log(hello2.trimEnd());

// using error to another way inside the try catch in ECMAScript 10

try {

} catch {
    error;
}

// from entries in ECMAScript 10

let entries = [ ["name", "Megan"], ["age", 20] ];

console.log(Object.fromEntries(entries));

// object symbol in ECMAScript 10

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);