//every time i create a controller action, if i want it to be accessible it need a route

const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/users_controller');
const postsController = require('../controllers/posts_controller')

console.log('User Router working')

router.get('/user-profile', passport.checkAuthentication, userController.profile);
router.get('/friends', userController.friends);
router.get('/posts', postsController.posts);
router.get('/sign-in', userController.signIn);
router.get('/sign-up', userController.signUp);

router.post('/create', userController.create);
router.get('/sign-out', userController.deleteSession)

//creates sessions -> passport auth it -> if done than createSession , else failureRedirect 

router.post('/create-session', passport.authenticate( //use passport as a middleware to auth
    'local', { failureRedirect: '/users/sign-in' }
), userController.createSession);




module.exports = router; //no the index.js router and this router is not the same.
//ab is router ko accessible krna hai toh isko import krna pdega main index.js maii