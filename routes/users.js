//every time i create a controller action, if i want it to be accessible it need a route

const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');
const postsController = require('../controllers/posts_controller')

router.get('/profile', userController.profile)
router.get('/friends', userController.friends)
router.get('/posts', postsController.posts)

console.log('User Router working')

module.exports = router; //no the index.js router and this router is not the same.

//ab is router ko accessible krna hai toh isko import krna pdega main index.js maii