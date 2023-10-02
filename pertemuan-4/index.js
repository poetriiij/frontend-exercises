// JavaScript Function

// function greetings(){
//     return "Hello";
// }


















// const output = (function (){
//    return "Hello IIFE";
// })();

// console.log(output);

// Callback Function

function createGreetings (name, callback){
    const greetings = "Hello " + name;
    callback (greetings);
}

createGreetings ("Poetri", function (greetings) {
    console.log (greetings);
});