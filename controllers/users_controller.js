const User = require('../models/user')

module.exports.profile = function(req, res) {
    res.render("profile", {
        title: "Profile"
    });
}
module.exports.friends = function(req, res) {
    res.render("friends", {
        title: "Friends"
    });
}

//render the signUp page
module.exports.signUp = function(req, res) {
        return res.render("user-signup", {
            title: "Khapitar Club | SignUp"
        })
    }
    //render the signIn page
module.exports.signIn = function(req, res) {
    return res.render("user-signin", {
        title: "Khapitar Club | SignIn"
    })
}

//get the sign up data
module.exports.create = function(req, res) {

    // if (req.body.password != req.body.confirm_password) {
    //     return res.redirect('back');
    // }
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) { console.log('error'); return }

        if (!user) {
            User.create(req.body, function(err, user) {
                if (err) { console.log("error in creating user"); return; }

                return res.redirect('/users/sign-in');
            })
        }

        //user already exist
        else return res.redirect('/users/sign-in');
    })
}

module.exports.createSession = function(req, res) {

}