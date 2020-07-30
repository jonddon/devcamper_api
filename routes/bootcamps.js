const express = require('express');
const router = express.Router();
const {getBootCamps, 
    getBootCamp, 
    createBootCamp, 
    updateBootCamp, 
    deleteBootCamp} = require('../controller/bootcamps')

    //create the route and add the method for each request type
router.route('/').get(getBootCamps).post(createBootCamp)

router.route('/:id').get(getBootCamp).put(updateBootCamp).delete(deleteBootCamp)


module.exports = router;