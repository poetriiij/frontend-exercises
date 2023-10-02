// Destructing Exercise

//Destructuring Array
// let Color = ["Green", "Blue", "White", "Grey", "Black"]

// let [Color1, Color2, Color3, Color4, Color5] = Color;

// console.log(Color1);
// console.log(Color2);
// console.log(Color3);
// console.log(Color4);
// console.log(Color5);

// Destructing Object
// let Asrama = {
//     namaAsrama: "Edelweiss",
//     jumlahAnakAsrama: 300,
//     perempuan: true,
// };

// let {namaAsrama, jumlahAnakAsrama, perempuan} = Asrama;
// console.log(namaAsrama);
// console.log(jumlahAnakAsrama);
// console.log(perempuan);

// Destructuring Object dengan Default Value
// let Asrama = {
//     namaAsrama: "Edelweiss",
//     perempuan: true,
// };

// let { namaAsrama, jumlahAnakAsrama = 0, perempuan } = Asrama;

// console.log(namaAsrama);       
// console.log(jumlahAnakAsrama); 
// console.log(perempuan);

// Destructuring rest operator
let Asrama = {
    namaAsrama: "Edelweiss",
    jumlahAnakAsrama: 300,
    perempuan: true,
};

let { namaAsrama, ...restProperties } = Asrama;

console.log(namaAsrama); 
console.log(restProperties); 