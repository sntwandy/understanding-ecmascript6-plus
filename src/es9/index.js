// Rest property, which is extracted from an object that has not yet been built in ECMAScript 9

const obj = {
    name: 'Megan',
    age: 20,
    country: 'DOM',
};

let { name, ...all } = obj;

console.log(name, all);

// Propagation properties in ECMAScript 9

const obj2 = {
    name: 'Megan',
    age: 20,
};

const obj3 = {
    ...obj2,
    country: 'DOM',
};

console.log(obj3);


// promise.finally in ECMAScrip 9

const helloWorld = () => {
    return new Promise ( (resolve, reject) =>{
        (true) ? setTimeout( () => resolve('Hello World!!'), 3000 ) : reject(new Error('Opps!'));
    });
};

helloWorld()
    .then( response => console.log(response) )
    .catch(error => console.log(error))
    .finally( () => console.log('Finished'));

// regex in ECMAScript 9

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);