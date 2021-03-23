//the main index file will send request to this files and this will route to other files

const express = require('express')
const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log('Router Loaded')

//request with / goes to homeController
router.get('/', homeController.home) //this is equivalent to below commented lines
    // router.get('/', function(req, res) {
    //     return res.end('<h1>Express is up</h1>')
    // })

//requests goes to other router that's why we are using 'use' from the user router the request goes to the userController 
router.use('/users', require('./users'))
router.use('/posts',require('./posts'))
router.use('/comments',require('./comments'))
module.exports = router;