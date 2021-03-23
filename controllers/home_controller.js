//controller: a group of actions
const Post = require('../models/post')
const User = require('../models/user')
module.exports.home = async function(req, res) {

    try{
        //populate the user of each post so that i can display the author
        let posts = await Post.find({})
        .populate('user')//populates the user field of the post
        .populate({
            path:'comments',
            populate:{
                path:'user'
            }
        })

        let users = await User.find({});
        return res.render ('home',{
            title:"Khapitar | Home",
            posts:posts,
            all_users:users
        });
    }catch(err){
        console.log('Error' ,err)
        return;
    }

}