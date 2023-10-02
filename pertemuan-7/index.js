// string literal
//-------------

    let fullName = "John Doe";
    let age = 33;
    let address = "Manado";

// // Halo nama saya John Doe, umur saya 33 tahun
// // dan saya tinggal di Manado

let kalimat5 = "Hallo nama saya " + fullName + ", umur saya " + age + " tahun dan saya tinggal di " + address;
console.log(kalimat5);

let kalimat6 = `Hallo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
console.log(kalimat6);

// Arrow function
// -----------------

function sayGreeting(nama){
    return `Hello ${nama}`;
}
console.log(sayGreeting("John"));

const sayGreeting6 = (nama) => {
    return `Hello ${nama}`;
}
console.log(sayGreeting6("John"));

// implicit return value
const sayGreeting6 = (nama) => `Hello ${nama}`;
console.log(sayGreeting6("Poetri"));

// Pada IIFE
(() => {
    console.log("Hello");
})();


let output1 = (() => `Hello`)();
console.log(output1);

// // Pada callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map ((item) => item);
console.log(output2);

// Default Parameter
// --------------

const sayGreeting5 = (fullName, age) => {
    if (fullName === undefined) {
        fullName = "John Doe";
    }
    if (age === undefined) {
        age = 30;
    }
    console.log(`Hello ${fullName}`);
};
sayGreetings5();

const sayGreeting6 = (fullName = "John Doe", age = 30) => {
console.log(`Hello ${fullName}, ${age}`);
};
sayGreeting6("Peter");