$(document).ready(() => {
    if (localStorage.getItem("dbCurrentPetId") === null) {
        $("#signed-in-toggler").hide()
    }
    else {
        $("#signed-in-toggler").show();
    }

    $(document).on("change", "#add-pet-picture-btn", (event) => {
        event.preventDefault();
        console.log("Changed Button");
        var file = event.target.files[0];
        var storage = firebase.storage().ref("/pet-pictures/" + file.name);
        var task = storage.put(file);
        var petProgressbar = document.getElementById("add-pet-progress");
        task.on("state_changed", function (snapshot) {
            var progressPercent = snapshot.bytesTransferred / snapshot.totalBytes;
            $("#add-pet-progress").attr("value", progressPercent);
            },
            function error(err) {
                console.error(err);
            },
            function complete() {
                $("#add-pet-progress").attr("value", 100);
                var gsReference = firebase.storage().refFromURL("gs://pet-track-63483.appspot.com/pet-pictures/" + file.name);
                gsReference.getDownloadURL().then(function (url) {
                    console.log(url);
                    localStorage.setItem("firebase_uploadURL", url);
                }).catch(function (error) {
                    console.error(error);
                });
            });
    });


    //Add Pet
    $(document).on("click", "#pet-form-submit", (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();

        const petName = $("#add-pet-name").val().toString().trim();
        const petBirth = $("#add-pet-birth").val().toString().trim();
        const petType = $("#add-pet-type").val().toString().trim();
        const petBreed = $("#add-pet-breed").val().toString().trim();
        const petGender = $("#add-pet-gender").val().toString().trim();

        console.log(`Pet Name: ${petName}`);
        console.log(`Pet Birthday: ${petBirth}`);
        console.log(`Pet Type: ${petType}`);
        console.log(`Pet Breed: ${petBreed}`);
        console.log(`Pet Gender: ${petGender}`);

        $.ajax({
            type: "POST",
            url: "/api/pets/add/" + localStorage.getItem("dbUserId"),
            data: {
                petName: petName,
                petType: petType,
                breed: petBreed,
                gender: petGender,
                dob: petBirth,
                imageId: localStorage.getItem("firebase_uploadURL"),
                userId: localStorage.getItem("dbUserId")
            }
        }).then((res) => {
            window.location.assign("/pets");
        });
    });

    //Add Appointment
    $(document).on("click", "#appt-form-submit", (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();

        const date = $("#add-appt-date").val().toString().trim();
        const time = $("#add-appt-time").val().toString().trim();

        $.ajax({
            type: "POST",
            url: "/api/appointments/add/" + localStorage.getItem("dbCurrentPetId"),
            data: {
                date: date,
                time: time,
                petId: localStorage.getItem("dbCurrentPetId")
            }
        }).then((res) => {
            window.location.assign("/petprofile?id=" + localStorage.getItem("dbCurrentPetId"));
        });
    });

    //Log Food
    $(document).on("click", "#food-submit", (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();

        var foodName = $("#food-activity-field").val();
        var foodNumber = $("#food-amount-field").val().toString();
        var foodNumberType = $("#food-measurement").val();
        var concatFoodNumber = `${foodNumber} ${foodNumberType}`;
        var foodMeal = $("#food-meal-type").val();
        var foodNotes = $("#food-notes").val();

        $.ajax({
            type: "POST",
            url: "/api/log/add/" + localStorage.getItem("dbCurrentPetId"),
            data: {
                logType: 0,
                foodName: foodName,
                foodMeasure: concatFoodNumber,
                foodMeal: foodMeal,
                foodNotes: foodNotes,
                petId: localStorage.getItem("dbCurrentPetId")
            }
        }).then((res) => {
            window.location.assign("/log");
        });
    });

    //Log Water
    $(document).on("click", "#water-submit", (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();

        var waterNumber = $("#water-amount-field").val().toString();
        var waterNumberType = $("#water-measurement").val();
        var concatWaterNumber = `${waterNumber} ${waterNumberType}`;
        var waterTime = $("#water-meal-type").val();
        var waterNotes = $("#water-notes").val();

        $.ajax({
            type: "POST",
            url: "/api/log/add/" + localStorage.getItem("dbCurrentPetId"),
            data: {
                logType: 1,
                waterMeasure: concatWaterNumber,
                waterMeal: waterTime,
                waterNotes: waterNotes,
                petId: localStorage.getItem("dbCurrentPetId")
            }
        }).then((res) => {
            window.location.assign("/log");
        });
    });

    //Log Medicine
    $(document).on("click", "#medicine-submit", (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();

        var medicine = $("#medicine-activity-field").val();
        var medicineNumber = $("#medicine-amount-field").val().toString();
        var medicineNumberType = $("#medicine-measurement").val();
        var concatMedicine = `${medicineNumber} ${medicineNumberType}`;
        var medicineTime = $("#medicine-meal-type").val();
        var medicineNotes = $("#medicine-notes").val();

        $.ajax({
            type: "POST",
            url: "/api/log/add/" + localStorage.getItem("dbCurrentPetId"),
            data: {
                logType: 2,
                medicineName: medicine,
                medicineMeasure: concatMedicine,
                medicineMeal: medicineTime,
                medicineNotes: medicineNotes,
                petId: localStorage.getItem("dbCurrentPetId")
            }
        }).then((res) => {
            window.location.assign("/log");
        });
    });

    //Log Weight
    $(document).on("click", "#weight-submit", (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();

        var weightNumber = $("#weight-activity-field").val();
        var weightType = $("#weight-measurement").val();
        var weightNotes = $("#weight-notes").val();
        var concatWeight = `${weightNumber} ${weightType}`;

        $.ajax({
            type: "POST",
            url: "/api/log/add/" + localStorage.getItem("dbCurrentPetId"),
            data: {
                logType: 3,
                weight: concatWeight,
                weightNotes: weightNotes,
                petId: localStorage.getItem("dbCurrentPetId")
            }
        }).then((res) => {
            window.location.assign("/log");
        });
    });

    //Log Exercise
    $(document).on("click", "#exercise-submit", (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();

        var exerciseType = $("#exercise-activity-select").val();
        var exerciseHours = $("#exercise-time-hours").val();
        var exerciseMin = $("#exercise-time-minutes").val();
        var exerciseNotes = $("#exercise-notes").val();

        if (exerciseHours === "-") {
            exerciseHours = "0";
        }

        if (exerciseMin === "-") {
            exerciseMin = "0";
        }

        $.ajax({
            type: "POST",
            url: "/api/log/add/" + localStorage.getItem("dbCurrentPetId"),
            data: {
                logType: 4,
                exerciseType: exerciseType,
                exerciseTimeMinutes: exerciseMin,
                exerciseTimeHours: exerciseHours,
                exerciseNotes: exerciseNotes,
                petId: localStorage.getItem("dbCurrentPetId")
            }
        }).then((res) => {
            window.location.assign("/log");
        });
    });

    //Log Potty Breaks
    $(document).on("click", "#stool-submit", (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();

        var didUrinate = $("#urine-activity-select").val();
        var urineColor = $("#urine-color-select").val();
        var didDefecate = $("#stool-activity-select").val();
        var stoolColor = $("#stool-color-select").val();
        var pottyNotes = $("#stool-notes").val();

        $.ajax({
            type: "POST",
            url: "/api/log/add/" + localStorage.getItem("dbCurrentPetId"),
            data: {
                logType: 5,
                urine: didUrinate,
                urineMeasure: urineColor,
                stool: didDefecate,
                stoolColor: stoolColor,
                stoolNotes: pottyNotes,
                petId: localStorage.getItem("dbCurrentPetId")
            }
        }).then((res) => {
            window.location.assign("/log");
        });
    });


});

