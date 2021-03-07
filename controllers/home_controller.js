//controller: a group of actions

module.exports.home = function(req, res) {
    res.cookie("user_id", "1");
    console.log(req.cookies);

    return res.render('home', {
        title: "home"
    })
}