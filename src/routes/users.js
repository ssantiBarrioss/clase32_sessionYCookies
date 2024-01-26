var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/saludo', userController.saludoUser);
router.post('/saludo', userController.processSaludo)

module.exports = router;
