// nomor 1
let people = ["Greg", "Mary", "Devon", "James"];
console.log(people);    
for (let i = 0; i < people.length; i++) {
    console.log(people[i])};

// nomor 2
people.forEach(function (people){
    console.log(people);
});

// nomor 3
people.shift();
console.log(people);

// nomor 4
people.pop();
console.log(people);

// nomor 5
people.unshift("Matt");
console.log(people);

// nomor 6
people.push("Poetri");
console.log(people);

// nomor 7
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] == "Mary") {
      break;
    }
  }

// nomor 8
let people2 = people.slice(2);
console.log(people2);

// nomor 9
people.splice(2,1, "Elizabeth", "Artie");
console.log(people);

// nomor 10
let withBob = people.concat("Bob");
console.log(withBob);



// object exercise
let programming = {
  languages = ["JavaScript", "Python", "Ruby"]
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// nomor 11
programming.languages.push("Go");
console.log(programming);

// nomor 12
programming["difficulty"] = 7;
console.log(programming);

// nomor 13
delete programming.jokes;
console.log(programming);

// nomor 14
programming.isFun = true,
console.log(programming);

// nomor 15
programming.languages.map(function)(value, index) {
  console.log(index + " - " + value);
});
