const express = require('express');
const router = express.Router();
const { save } = require('../controller/Save'); 
const {get} =require('../controller/Get');


// POST route for form submission
router.post('/save', save);
router.get('/get', get)
module.exports = router;