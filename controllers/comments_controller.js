const Comment = require('../models/comments')
const Post = require('../models/post')

module.exports.createComment = async function(req,res){
    try{
        let post = await Post.findById(req.body.post)
        
        if(post){
            let comment = await Comment.create({
                content:req.body.content,
                post:post,
                user:req.user._id
            })
    
            post.comments.push(comment);
            post.save();
            
            res.redirect('/')
        }
    }catch(err){
        console.log("Error", err)
        return;
    }
}

module.exports.delete = async function(req,res){
    try{
        
        let comment = await Comment.findById(req.params.id)
        
        if(comment.user == req.user.id){
            let postId = comment.post
            
            comment.remove();
            let post = await Post.findByIdAndUpdate(postId,{ $pull:{comment:req.params}})
            return res.redirect('/')
        }
        else{
            return res.redirect('/')
        }

    }catch(err){
        console.log("Error", err)
        return;
    }
}