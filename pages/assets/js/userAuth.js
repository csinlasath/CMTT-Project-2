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
        navigator.serviceWorker.register("../../service-worker.js", { scope: "/" }).then((reg) => {
            console.log("Registered Service Worker");
        }).catch(err => {
            console.error(`Service Worker Error: ${err}`);
        });
    }

    var accountEmail;
    var accountName;
    var accountPhone;
    var accountPhoto;

    const signInWithGoogle = () => {
        var googleAuthProvider = new firebase.auth.GoogleAuthProvider;

        firebase.auth().signInWithPopup(googleAuthProvider).then(firebaseUser => {
            console.log(data);
        }).catch(err => {
            console.error(err);
        }).then(() => {
            var providerId = firebase.auth().currentUser.providerData[0].providerId;
            var googleFirstName = firebase.auth().currentUser.providerData[0].displayName.split(" ")[0];
            var googleLastName = firebase.auth().currentUser.providerData[0].displayName.split(" ")[1];
            var googleEmail = firebase.auth().currentUser.providerData[0].email;
            var googlePhone = firebase.auth().currentUser.providerData[0].phoneNumber;
            var googlePhoto = firebase.auth().currentUser.providerData[0].photoURL;

            $.ajax({
                type: "POST",
                url: "/api/users/add",
                data: {
                    provider: providerId,
                    firstName: googleFirstName,
                    lastName: googleLastName,
                    email: googleEmail,
                    phoneNumber: googlePhone,
                    photoURL: googlePhoto,
                    firebaseUID: firebase.auth().currentUser.uid
                }
            }).then((res) => {
                window.location.assign("/pets");
            });
        });
    };

    const signInWithFacebook = () => {
        var facebookAuthProvider = new firebase.auth.FacebookAuthProvider;

        firebase.auth().signInWithPopup(facebookAuthProvider).then(firebaseUser => {
            console.log(data);
        }).catch(err => {
            console.error(err);
        }).then(() => {
            var providerId = firebase.auth().currentUser.providerData[0].providerId;
            var facebookFirstName = firebase.auth().currentUser.providerData[0].displayName.split(" ")[0];
            var facebookLastName = firebase.auth().currentUser.providerData[0].displayName.split(" ")[1];
            var facebookEmail = firebase.auth().currentUser.providerData[0].email;
            var facebookPhone = firebase.auth().currentUser.providerData[0].phoneNumber;
            var facebookPhoto = firebase.auth().currentUser.providerData[0].photoURL;

            $.ajax({
                type: "POST",
                url: "/api/users/add",
                data: {
                    provider: providerId,
                    firstName: facebookFirstName,
                    lastName: facebookLastName,
                    email: facebookEmail,
                    phoneNumber: facebookPhone,
                    photoURL: facebookPhoto,
                    firebaseUID: firebase.auth().currentUser.uid
                }
            }).then((res) => {
                window.location.assign("/pets");
            });
        });
    };

    const signInWithTwitter = () => {
        var twitterAuthProvider = new firebase.auth.TwitterAuthProvider;

        firebase.auth().signInWithPopup(twitterAuthProvider).then(firebaseUser => {
            console.log(data);
        }).catch(err => {
            console.error(err);
        }).then(() => {
            var providerId = firebase.auth().currentUser.providerData[0].providerId;
            var twitterFirstName = firebase.auth().currentUser.providerData[0].displayName.split(" ")[0];
            var twitterLastName = firebase.auth().currentUser.providerData[0].displayName.split(" ")[1];
            var twitterEmail = firebase.auth().currentUser.providerData[0].email;
            var twitterPhone = firebase.auth().currentUser.providerData[0].phoneNumber;
            var twitterPhoto = firebase.auth().currentUser.providerData[0].photoURL;

            $.ajax({
                type: "POST",
                url: "/api/users/add",
                data: {
                    provider: providerId,
                    firstName: twitterFirstName,
                    lastName: twitterLastName,
                    email: twitterEmail,
                    phoneNumber: twitterPhone,
                    photoURL: twitterPhoto,
                    firebaseUID: firebase.auth().currentUser.uid
                }
            }).then((res) => {
                window.location.assign("/pets");
            });
        });
    };

    const signOutApp = () => {
        firebase.auth().signOut().then(() => {
            console.log("User signed-out");
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
            localStorage.setItem("dbCurrentPetId", 1);

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

    //Sign In Buttons
    $("#email-login-field").val(localStorage.getItem("email"));
    $(document).on("click", "#sign-in-button", (event) => {
        event.preventDefault();
        const email = $("#email-login-field").val().toString().toLowerCase().trim();
        const password = $("#password-login-field").val().toString().trim();


        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            if (document.getElementById("remember-login-check").checked) {
                localStorage.clear();
                localStorage.setItem("remember-signin-email", email);
            }
            window.location.assign("/pets");
        }).catch(event => {
            console.log(event.message);
        });


    });

    $(document).on("click", "#facebook-sign-in", () => {
        signInWithFacebook();

    });

    $(document).on("click", "#twitter-sign-in", () => {
        signInWithTwitter();
    });

    $(document).on("click", "#google-sign-in", () => {
        signInWithGoogle();
    });

    //Sign Up Buttons
    $(document).on("click", "#sign-up-button", (event) => {
        event.preventDefault();
        const email = $("#email-signup-field").val().toString().toLowerCase().trim();
        const password = $("#password-signup-field").val().toString().trim();

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(event => {
            console.log(event.message);
        }).then(() => {
            $.ajax({
                type: "POST",
                url: "/api/users/add",
                data: {
                    provider: firebase.auth().currentUser.providerData[0].providerId,
                    email: firebase.auth().currentUser.email,
                    firebaseUID: firebase.auth().currentUser.uid
                }
            }).then((res) => {
                window.location.assign("/pets");
            });

        });
    });

    $(document).on("click", "#facebook-sign-up", () => {
        signInWithFacebook();
    });

    $(document).on("click", "#twitter-sign-up", () => {
        signInWithTwitter();
    });

    $(document).on("click", "#google-sign-up", () => {
        signInWithGoogle();
    });

    //Log Off Button
    $(document).on("click", "#log-off-button", () => {
        firebase.auth().signOut().then(() => {
            window.location.href = "/";
        }).catch(err => {
            console.error(err)
        });
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