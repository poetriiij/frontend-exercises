// IIFE

// (function (numb = 15 ){
//     let modulus = numb%2;
//     let isNumb = modulus == 0 ? "Bilangan Genap" : "Bilangan Ganjil"
//     console.log(isNumb);
// })()

// Callback

function ganjilGenap (numb, callback){
    const modulus = numb%2;
    const isNumb = modulus == 0 ? "Bilangan Genap." : "Bilangan Ganjil."
    callback (isNumb);
}

function logHasil (isNumb){
    console.log(isNumb);
}

ganjilGenap(18, logHasil);
