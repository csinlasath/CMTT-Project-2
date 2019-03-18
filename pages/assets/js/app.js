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
// function getPets() {
//     $.get("/api/pets", function (data) {
//         petArray = data;
//     });
// };
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

// var pullfiles = function(){ 
//     // love the query selector
//     var fileInput = document.querySelector("#myfiles");
//     var files = fileInput.files;
//     // cache files.length 
//     var fl = files.length;
//     var i = 0;

//     while ( i < fl) {
//         // localize file var in the loop
//         var file = files[i];
//         i++;
//     }    
// }

// if (pullfiles === null) {
//     document.querySelector("#myfiles").onchange=pullfiles;
// }

    
// $("#pet-form-submit").on("click", () => {
//     var petName = $("#pet-name").val().trim();
//     console.log(petName);
// });

