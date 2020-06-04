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

// ******************************************

// async, await in ECMAScript 8

const helloWorld = () => {
    return new Promise( (resolve, reject) => {
        (false) ? setTimeout(() => resolve('Hello World!'), 3000) : reject(new Error(' Test error'));
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

// other way to use async, await

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();