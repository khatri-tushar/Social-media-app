const Comment = require('../models/comments')
const Post = require('../models/post')

module.exports.createComment = function(req,res){
    Post.findById(req.body.post, function(err,post){
        if(post){
            Comment.create({
                content:req.body.content,
                post:post,
                user:req.user._id
            }, function(err,comment){
                post.comments.push(comment);
                post.save();
                res.redirect('/')
            })
        }
    })
}

module.exports.delete = function(req,res){
    Comment.findById(req.params.id, function(err, comment){
        if(comment.user == req.user.id){
            let postId = comment.post
            
            comment.remove();
            Post.findByIdAndUpdate(postId,{ $pull:{comment:req.params}} , function(err, post){
                return res.redirect('/')
            })
        }
        else{
            return res.redirect('/')
        }
    })
}