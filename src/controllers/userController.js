const { validationResult } = require("express-validator");
const{readFile, saveFile} = require('../data/dbLogica')

const userController = {
    index: (req,res,next)=>{
        res.render('index', {title: 'clase32'})
    },
    processIndex: (req, res, next)=>{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            res.render('index', {errors: errors.mapped(),old:req.body, title:'Clase32',})
        };

        const user = req.body
        req.session.user = user
        
        if(user.remember){
            res.cookie('user', user, {maxAge: 1000*60*10});
            res.cookie('remember', user.remember, {maxAge: 1000*60*10})
            
        }

        console.log('esto es sesion', req.session.user);
        res.render('index', {title:'Clase32', user: req.session.user})
    },
    saludoUser: (req,res,next) =>{
        res.render('saludoUser', {title:'Saludos!', user:req.session.user})
    },

    logout: (req,res,next)=>{
        req.session.destroy();
        if(req.cookies.user){
            res.clearCookie('user');
            res.clearCookie('remember');
        };
        res.redirect('/')
    }
}

module.exports= userController;