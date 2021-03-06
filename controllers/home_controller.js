//controller: a group of actions

module.exports.home = function(req, res) {
    return res.end('<h1>Express is up</h1>')
}