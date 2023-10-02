export let fullName = "Jhellytha Putri";
export let numbers = [1, 2, 3, 4, 5];

export let poetri = {
    fullName: "Jhellytha Putri Kalantow",
    age: 20,
    address: "Universitas Klabat",
};

let hello = () => {
    console.log("Hello Module");
}

export { fullName, numbers, poetri };
export default hello;