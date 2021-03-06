module.exports.profile = function(req, res) {
    res.end('<h1>User Profile</h1>');
}
module.exports.friends = function(req, res) {
    res.end('<h1>these are your friends </h1>')
}