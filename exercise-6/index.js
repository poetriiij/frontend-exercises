// import helloWorld from "./helloWorld.js";
// import ambilDataUser from "./ambilDataUser.js";
import ambilDataUserAsnyc from "./ambilDatauserAsync.js";

//.1
// const messages = async () => {
//     let msg = await helloWorld();
//     console.log(msg);
// }; 
// messages();

//.2
// ambilDataUser()
// .then((users) => {
//     console.log(users);
// })
// .catch ((error) => {
//     console.log(error);
// })
// ambilDataUser();

//.3
ambilDataUserAsnyc()
.then((data) => {
    console.log(data);
})
.catch ((error) => {
    console.log(error);
});

ambilDataUserAsnyc();