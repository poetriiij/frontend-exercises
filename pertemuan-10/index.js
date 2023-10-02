// Rest Parameter and Spread Operator

//Tanpa Rest Parameter

// const penjumlahanArray = (a, b, c) => {
//     const array = [a, b, c];
//     let total = 0 ;
//     array.forEach(item => {
//         total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray (1, 2, 3);


// Menggunakan Rest Parameter; sisa
// const penjumlahanArray = (...params) => {
//     let total = 0 ;
//     params.forEach(item => {
//         total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Spread Operator; memisahkan atau memecahkan
// let array1 = [1, 2, 3, 4, 5];
// console.log(...array1);

// // 1. Duplikasi Array
// let array2 = [...array1];
// console.log(array2);
// array1.push(6);
// console.log(`Array 1 = ${array1}`);
// console.log(`Array 2 = ${array2}`);

//2. Menggabungkan Array
// let array1 = [1,2,3];
// let array2 = [5,6,7];
// let array3 = [8,9,10];

// let combineArray5 = array1.concat(4, array2, array3);
// console.log(combineArray5);

// let combineArray6 = [...array1, ...array2, ...array3];

// Pada Object
// let poetri = {
//     fullName: "Jhellytha Putri",
//     age: 20,
//     address: "Kaimana",
// };
// // Duplikasi Object
// let student = {...poetri};
// poetri = {...poetri, job: "Data Analyst"};
// console.log(poetri);

// // Menggabungkan Object
// let obj1 = {a:1, b:2};
// let obj2 = {c:3, d:4};
// let combineObj = {...obj1, ...obj2};

//Destructuring
let buah = ["mangga", "anggur", "pisang", "semangka", "durian"];
let [, ,buah3, ...buahLain] = buah;
console.log(buahLain);

let orang = {
    nama: "Jhellytha",
    umur: 20,
    sudahMenikah: false,
};
let {nama, umur, sudahMenikah} = orang;
console.log(nama, umur, sudahMenikah);