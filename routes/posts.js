
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts_controller')
const Passport = require('passport');
const passport = require('passport');

router.post('/create',passport.checkAuthentication ,posts.create);


module.exports = router;