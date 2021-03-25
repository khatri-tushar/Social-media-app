const Post = require('../models/post')
const Comment = require('../models/comments')

module.exports.create = async function(req, res) {
    try{
        let post = await Post.create({
            content:req.body.content,
            user:req.user._id
        });

        req.flash('success', 'Post Created')
        if(req.xhr){
            return res.status(200).json({
                data:{
                    post:post,
                },
                message:'post created'
            })
        }
        
        return res.redirect('back');

    }catch(err){
        req.flash("Error",err);
        return;
    }

}

module.exports.delete = async function(req, res){
    try{
        let post = await Post.findById(req.params.id)
        
        if(post.user == req.user.id){
            post.remove();

            await Comment.deleteMany({post : req.params.id})
            
            if(req.xhr){
                return res.status(200).json({
                    data:{
                        post_id:req.params.id,
                    },
                    message:'post created'
                })
            }

            
            return res.redirect('/')
        
        }
        else{
            return res.redirect('/')
        }

    }catch(err){
        console.log("Error", err);
        return;
    }
    
}