//the main index file will send request to this files and this will route to other files

const express = require('express')
const router = express.Router();
const homeController = require('../controllers/home_controller')


console.log('Router Loaded')

router.get('/', homeController.home) //this is equivalent to below commented lines
    // router.get('/', function(req, res) {
    //     return res.end('<h1>Express is up</h1>')
    // })
module.exports = router;