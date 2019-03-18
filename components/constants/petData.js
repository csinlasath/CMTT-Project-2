var petArray = [{
    petName: "Bacchus",
    id: "1",
    sex: "Male",
    dob: "05/25/2004",
    vetFirstName: "Bruce",
    vetLastName: "Baker",
    vetPhone: "913-469-1377",
    nextVet: "04/02/19",
    weight: "65",
    lastFed: "Friday 3:15pm"
},
{
    petName: "Enzo",
    id: "2"
},
{
    petName: "Rizzy",
    id: "3"
},
{
    petName: "Casey",
    id: "4"
}];
var imgArray = [
    "/static/images/bacchus.jpg",
    "/static/images/enzo.jpg",
];
// function getPets() {
//     $.get("/api/pets", function (data) {
//         petArray = data;
//     });
// };
var chosenPet = petArray[0];
var chosenImg = imgArray[0];
var chosenId = 0;
const profile = (id) => {
    chosenId = id - 1;
    chosenPet = petArray[chosenId];
    chosenImg = imgArray[chosenId];
    console.log(chosenPet, chosenImg);
};

export { profile, petArray, imgArray };