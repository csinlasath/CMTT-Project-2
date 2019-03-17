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
    
    const signInWithGoogle = () => {
        var googleAuthProvider = new firebase.auth.GoogleAuthProvider;
    
        firebase.auth().signInWithPopup(googleAuthProvider).then( firebaseUser => {
            console.log(data)
        }).catch(err => {
            console.error(err);
        });
    };
    
    const signInWithFacebook = () => {
        var facebookAuthProvider = new firebase.auth.FacebookAuthProvider;
    
        firebase.auth().signInWithPopup(facebookAuthProvider).then( firebaseUser => {
            console.log(data)
        }).catch(err => {
            console.error(err);
        });
    };
    
    const signInWithTwitter = () => {
        var twitterAuthProvider = new firebase.auth.TwitterAuthProvider;
    
        firebase.auth().signInWithPopup(twitterAuthProvider).then( firebaseUser => {
            console.log(data)
        }).catch(err => {
            console.error(err);
        });
    };

    const signOutApp = () => {
        firebase.auth().signOut().then(() => {
            window.location.href = "/";
        });
    }

    firebase.auth().onAuthStateChanged(petAppUser => {
        if (petAppUser) {
            console.log("logged in");
            console.log(petAppUser);
            console.log(firebase.auth().currentUser);
        }
        else {
            console.error("not logged in");
        }
    });

    //Sign In/Login Buttons
    $(document).on("click", "#sign-in-button", () => {
        const email = $("#email-login-field").val().toString().toLowerCase().trim();
        const password = $("#password-login-field").val().toString().toLowerCase().trim();

        firebase.auth().signInWithEmailAndPassword(email, password).catch(event => {
            console.log(event.message);
        });
    });

    $(document).on("click", "#facebook-sign-in", () => {
        signInWithFacebook();
        window.location.href = "/pets";
    });

    $(document).on("click", "#twiiter-sign-in", () => {
        signInWithTwitter();
        window.location.href = "/pets";
    });

    $(document).on("click", "#google-sign-in", () => {
        signInWithGoogle();
        window.location.href = "/pets";
    });

    $(document).on("click", "#sign-up-button", () => {
        const email = $("#email-login-field").val().toString().toLowerCase().trim();
        const password = $("#password-login-field").val().toString().toLowerCase().trim();

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(event => {
            console.log(event.message);
        });
    });

    $(document).on("click", "#facebook-sign-up", () => {
        signInWithFacebook();
        window.location.href = "/pets";
    });

    $(document).on("click", "#twiiter-sign-up", () => {
        signInWithTwitter();
        window.location.href = "/pets";
    });

    $(document).on("click", "#google-sign-up", () => {
        signInWithGoogle();
        window.location.href = "/pets";
    });

    //Log Off Button
    $(document).on("click", "#log-off-button", () => {
        firebase.auth().signOut().then(() => {
            window.location.href = "/";
        }).catch(err => {
            console.error(err)
        });
    });
});


