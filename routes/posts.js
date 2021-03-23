
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts_controller')
const passport = require('passport');

router.post('/create',passport.checkAuthentication ,postsController.create);
//checkAuthenticaiton allow the req to send only if the user is logged in 
router.get('/destroy/:id', passport.checkAuthentication, postsController.delete )

module.exports = router;