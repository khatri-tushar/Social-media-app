//controller: a group of actions
const Post = require('../models/post')
const User = require('../models/user')
module.exports.home = function(req, res) {
    console.log(req.cookies);
    // Post.find({}, function(err, posts){
    //     return res.render ('home',{
    //         title:"Khapitar | Home",
    //         posts:posts
    //     });
    // })

    //populate the user of each post so that i can display the author
    Post.find({})
    .populate('user')//populates the user field of the post
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){
        User.find({}, function(err,users){
            return res.render ('home',{
                title:"Khapitar | Home",
                posts:posts,
                all_users:users
            });
        })
    });
}