const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' //refer to user schema

    },
    // include the id's of all comments on that post
    comments:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
        }
    ]
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;