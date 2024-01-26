const {body} = require('express-validator');

const userValidation = [
    body('name').notEmpty().withMessage('El campo no puede estar vacío').bail(),
    body('email').notEmpty().withMessage('Debe ser un email válido por ej.: example@gmail.com').bail(),
    body('color').notEmpty().withMessage('Debes elegir un color').bail(),
    body('age').notEmpty().withMessage('El campo no puede estar vacío').bail()
    .isInt().withMessage('Debes ingresar un numero entero').bail()
    .isInt({min: 18}).withMessage('Debe ser mayor de 18').bail()
];
   
module.exports = userValidation;