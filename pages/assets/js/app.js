import $ from 'jquery';

let petArray = [{
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
let imgArray = [
    "/assets/images/bacchus.jpg",
    "/assets/images/enzo.jpg",
];
function getPets() {
    $.get("/api/pets", function (data) {
        petArray = data;
    });
};
let chosenPet = petArray[0];
let chosenImg = imgArray[0];
let chosenId = 0;
const profile = (id) => {
    chosenId = id - 1;
    chosenPet = petArray[chosenId];
    chosenImg = imgArray[chosenId];
    console.log(chosenPet, chosenImg);
};

export { chosenImg, chosenPet, profile, petArray, imgArray };