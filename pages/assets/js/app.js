$(document).ready(() => {
    $(document).on("click", "#pet-form-submit", (event) => {
        event.preventDefault();

        const petName = $("#add-pet-name").val().toString().trim();
        const petBirth = $("#add-pet-birth").val().toString().trim();
        const petType = $("#add-pet-name").val().toString().trim();
        const petBreed = $("#add-pet-name").val().toString().trim();
        const petGender = $("#add-pet-name").val().toString().trim();
        
    });

});

