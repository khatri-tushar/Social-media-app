const Post = require('../models/post')
const Comment = require('../models/comments')
module.exports.create = function(req, res) {
    Post.create({
        content:req.body.content,
        user:req.user._id
    },function(err,post){
        if(err) console.log("Error in creating post",err)
        
        return res.redirect('back');
    })
}

module.exports.delete = function(req, res){
    Post.findById(req.params.id, function(err, post){
        //.id converts object id to string
        if(post.user == req.user.id){
            post.remove();
            
            Comment.deleteMany({post : req.params.id}, function(err){
                return res.redirect('/')
            })
        }
        else{
            return res.redirect('/')
        }
    })
}