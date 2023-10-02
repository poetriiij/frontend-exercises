// Array
// const students = ["john", "petter", "jack", "jane"];
// const numbers = [1, 2, 3, 4, 5];
// const john = ["john", "doe", 33, true];

// console.log(students);
// console.log(numbers);
// console.log(john);

// console.log(students[2]);
// students[2] = "Bob";
// console.log(students);
// console.log(students.length);

// console.log(students[students.length - 1]);

// // Mengakses seluruh element array
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// // Array Method
// // to string()
// console.log(john.toString());

// // Join()
// console.log(john.join(" "));
// console.log(john.join("#"));
// console.log(john.join("..."));

// // Pop() = hapus paling belakang
// john.pop();
// console.log(john);

// // Push()
// john.push("good morning");
// console.log(john);

// // Shift () = hapus yang paling depan
// john.shift();
// console.log(john);

// // unshift ()
// john.unshift("Hello");
// console.log(john);

// // Splice (index, jumlah, item1, ..., itemX)
// john.splice(3, 0, true);
// console.log(john);

// // Slice = pindah data ke variable baru
// let john2 = john.slice(2, 4);
// console.log(john2);

// // Concat
// let output = john.concat(numbers);
// console.log(output);

// OBJECT
let john = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
  isMarried: true,
  grade: [80, 90, 100],
  address: {
    city: "Manado",
    province: "Sulawesi Utara",
    postalCode: "95371",
  },
  sayGreetings: function () {
    console.log("Hello my name is " + this.firstName);
  },
};

// Dot notation
// console.log(john.firstName);
// console.log(john.grade[2]);
// console.log(john.address.city);
// console.log(john.sayGreetings());

// Bracket Notation
// console.log(john["firstName"]);
// console.log(john["grade"][2]);
// console.log(john["address"]["city"]);
// console.log(john["sayGreetings"]());

// john.job = "Teacher";
// console.log(john);

// Array Object
let students = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jack",
  },
  {
    id: 3,
    name: "Peter",
  },
];

// forEach() sama sperti splice
// students.forEach(function (item) {
//   console.log(item.name);
// });

// map() sama sperti slice
// let output = students.map(function (item) {
//   return item.name;
// });
// console.log(output);

//filter() cari nilai yang kita perlu (banyak)
// let output = students.filter(function (item) {
//   return item.name === "John";
// });
// console.log(output);

// find() cari nilai yang kita perlu (satu data saja)
let output = students.find(function (item) {
  return item.name === "John";
});
console.log(output);