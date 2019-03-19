var config = {
    apiKey: "AIzaSyDjkXALCW34tlzUum78_lpDSkytaTHHBnA",
    authDomain: "pet-track-63483.firebaseapp.com",
    databaseURL: "https://pet-track-63483.firebaseio.com",
    projectId: "pet-track-63483",
    storageBucket: "pet-track-63483.appspot.com",
    messagingSenderId: "697781297758"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

$(document).ready(() => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
            for (let registration of registrations) {
                registration.unregister();
                console.log("Unregistered Service Workers");
            }
        })
    }
    var accountEmail;
    var accountName;
    var accountPhone;
    var accountPhoto;

    const signOutApp = () => {
        firebase.auth().signOut().then(() => {
            console.log("User Signed Out.");
            window.location.href = "/";
        }).catch(err => {
            console.error(err)
        });
    }

    firebase.auth().onAuthStateChanged(petAppUser => {
        if (petAppUser) {
            console.log("logged in");
            console.log(firebase.auth().currentUser);
            isUserSignedIn = true;

            const firebaseUserId = firebase.auth().currentUser.uid;
            const firebaseEmail = firebase.auth().currentUser.email;
            const firebaseDisplayName = firebase.auth().currentUser.displayName;
            const firebasePhoneNumber = firebase.auth().currentUser.phoneNumber;
            const firebasePhotoURL = firebase.auth().currentUser.photoURL;

            localStorage.setItem("firebase_userId", firebaseUserId);
            localStorage.setItem("firebase_email", firebaseEmail);
            localStorage.setItem("firebase_displayName", firebaseDisplayName);
            localStorage.setItem("firebase_phoneNumber", firebasePhoneNumber);
            localStorage.setItem("firebase_photoURL", firebasePhotoURL);

            $.ajax({
                type: "GET",
                url: "/api/users/firebase/" + localStorage.getItem("firebase_userId")
            }).then((res) => {
                localStorage.setItem("dbUserId", res.id);
                localStorage.setItem("dbFirstName", res.firstName);
                localStorage.setItem("dbLastName", res.lastName);
            });

        }
        else {
            console.error("not logged in");
        }
    });

    //Log Off Button
    $(document).on("click", "#log-off-button", () => {
        signOutApp();
    });

    //Account Profile Buttons
    $(document).on("click", "#account-settings", () => {
        if (accountName === null) {
            //Show input field and button to save.
        }
        if (accountEmail === null) {
            //Show input field and button to save.
        }
        if (accountPhone === null) {
            //Show input field and button to save.
        }
        if (accountPhoto === null) {
            //Show input field and button to save.
        }
    });

    //Account Update Info Buttons
    $(document).on("click", "#account-name-update-btn", () => {
        //Show Current
        //Show Input Field
        //Send info to firebase Auto
        var newFirstName;
        var existingLastName;
        var fullName = `${newFirstName} ${existingLastName}`;

        firebase.auth().currentUser.updateProfile({
            displayName: fullName
        }).then(() => {
            window.location.href = "/updateprofile";
        }).catch((err) => {
            console.error(err)
        });
    });

    $(document).on("click", "#account-name-update-btn", () => {
        //Show Current
        //Show Input Field
        //Send info to firebase Auto
        var existingFirstName;
        var newLastName;
        var fullName = `${existingFirstName} ${newLastName}`;

        firebase.auth().currentUser.updateProfile({
            displayName: fullName
        }).then(() => {
            window.location.href = "/updateprofile";
        }).catch((err) => {
            console.error(err)
        });
    });

    $(document).on("click", "#change-email", () => {
        //Show Current
        //Show Input Field
        //Send info to firebase Auto
        var newEmail;

        firebase.auth().currentUser.updateProfile({
            email: newEmail
        }).then(() => {
            window.location.href = "/updateprofile";
        }).catch((err) => {
            console.error(err)
        });
    });

    $(document).on("click", "#change-photo", () => {
        //Upload Picture
        //Get Picture URL
        //Show Button
        var pictureURL;

        firebase.auth().currentUser.updateProfile({
            photoURL: pictureURL
        }).then(() => {
            window.location.href = "/updateprofile";
        }).catch((err) => {
            console.error(err)
        });
    });

    $(document).on("click", "#change-password", () => {
        //Show Input 1
        //Show Input 2 for confirmation
        //Show button
        var newPasswordVal;
        var newPasswordConfirm;
        if (newPasswordVal === newPasswordConfirm) {
            firebase.auth().currentUser.updateProfile({
                password: newPasswordConfirm
            }).then(() => {
                window.location.href = "/updateprofile";
            }).catch((err) => {
                console.error(err)
            });
        }
    });





});


