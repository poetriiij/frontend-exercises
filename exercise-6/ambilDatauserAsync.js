async function ambilDataUserAsnyc() {
try {
    const response = await fetch ("https://reqres.in/api/users");
    const data = await response.json();
    return console.log(data.data);
} catch (error) {
    console.error(error);
    throw error;
}
};

export default ambilDataUserAsnyc;