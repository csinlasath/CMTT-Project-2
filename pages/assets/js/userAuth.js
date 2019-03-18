$(document).ready(() => {
    var config = {
        apiKey: "AIzaSyDjkXALCW34tlzUum78_lpDSkytaTHHBnA",
        authDomain: "pet-track-63483.firebaseapp.com",
        databaseURL: "https://pet-track-63483.firebaseio.com",
        projectId: "pet-track-63483",
        storageBucket: "pet-track-63483.appspot.com",
        messagingSenderId: "697781297758"
    };
    firebase.initializeApp(config);

    if ("serviceWorker" in navigator) {
        // navigator.serviceWorker.register("/service-worker.js", {scope:"/"});
        console.log("Supported")
        navigator.serviceWorker.register("/static/service-worker.js").then((reg) => {
            console.log("Registered Service Worker");
        }).catch(err => {
            console.error(`Service Worker Error: ${err}`);
        });
    }

    var isUserSignedIn = false;
    var isRedirected = false;
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
            window.location.href = "/pets";
        });
    };

    const signInWithFacebook = () => {
        var facebookAuthProvider = new firebase.auth.FacebookAuthProvider;

        firebase.auth().signInWithPopup(facebookAuthProvider).then(firebaseUser => {
            console.log(data);
        }).catch(err => {
            console.error(err);
        }).then(() => {
            window.location.href = "/pets";
        });
    };

    const signInWithTwitter = () => {
        var twitterAuthProvider = new firebase.auth.TwitterAuthProvider;

        firebase.auth().signInWithPopup(twitterAuthProvider).then(firebaseUser => {
            console.log(data);
        }).catch(err => {
            console.error(err);
        }).then(() => {
            window.location.href = "/pets";
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
        }
        else {
            localStorage.clear()
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
        const email = $("#email-login-field").val().toString().toLowerCase().trim();
        const password = $("#password-login-field").val().toString().trim();

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(event => {
            console.log(event.message);
        }).then(() => {
            window.location.href = "/pets";
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
    $(document).on("click", "#change-first-name", () => {
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

    $(document).on("click", "#change-last-name", () => {
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


