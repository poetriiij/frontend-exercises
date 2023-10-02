// (function(berat, tinggi){
//   berat = 50;
//   tinggi = 1.65;
//   const hitungBMI = berat / tinggi ** 2

//   console.log(hitungBMI);
// })()



function hitungBMI (berat, tinggi, callback){
  const bmi = berat / tinggi ** 2
  callback (bmi);
}

function hasil (bmi){
  console.log(bmi);
}

hitungBMI(50, 1.65, hasil);