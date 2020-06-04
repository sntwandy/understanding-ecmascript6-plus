// object.entries in ECMAScript 8

const data = {
    frontend: 'Wandy',
    backend: 'Megan',
    desginer: 'Zeus',
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

// object values in ECMAScript 8

const data = {
    frontend: 'Wandy',
    backend: 'Megan',
    desginer: 'Zeus',
};

const values = Object.values(data);

console.log(values);
console.log(values.length);

// padding in ECMAScript 8

const string = 'Hello';

console.log(string.padStart(9, 'Hey '));

console.log(string.padEnd(9, ' *_*'));

// trailing commas in ECMAScript 8

const obj = {
    name: 'Megan',
}