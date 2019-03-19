module.exports = function (server) {
    server.post("/api/token/verify", (req, res) => {
        var idToken = req.body.fbToken

        admin.auth().verifyIdToken(idToken)
            .then(function (decodedToken) {
                var uid = decodedToken.uid;
                console.log(uid);
            }).catch(function (error) {
                if (error) throw error;
            });
    });
}