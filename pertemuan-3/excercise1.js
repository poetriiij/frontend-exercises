// Buatlah fungsi yang menerima 1 parameter angka
// dan mengembalikan string apakah angka yang dimasukkan
// adalah bilangan ganjil atau genap

function bilangan(numb){
    let modulus = numb%2;
    let isNumb = modulus == 0 ? "Bilangan Genap" : "Bilangan Ganjil"
    console.log(isNumb);
}

bilangan(17);