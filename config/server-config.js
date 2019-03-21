module.exports = {
    getEnvironment: function () {
        var dev = process.env.NODE_ENV !== 'production';
        var server = dev ? 'http://localhost:3000' : 'https://cmatt-project-2.herokuapp.com';
        return server;;
    }
}