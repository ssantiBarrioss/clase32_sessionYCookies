var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const userValidation = require('../validations/userValidation')
const userExists = require('../middlewares/userExists')
/* GET users listing. */
router.get('/', userController.index);
router.post('/',userValidation, userController.processIndex);
router.get('/saludo', userExists, userController.saludoUser);
router.get('/logout', userController.logout)

module.exports = router;
