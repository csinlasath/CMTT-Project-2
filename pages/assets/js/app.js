var pullfiles = function(){ 
    // love the query selector
    var fileInput = document.querySelector("#myfiles");
    var files = fileInput.files;
    // cache files.length 
    var fl = files.length;
    var i = 0;

    while ( i < fl) {
        // localize file var in the loop
        var file = files[i];
        i++;
    }    
}

document.querySelector("#myfiles").onchange=pullfiles;
    
$("#pet-form-submit").on("click", () => {
    var petName = $("#pet-name").val().trim();
    console.log(petName);
});