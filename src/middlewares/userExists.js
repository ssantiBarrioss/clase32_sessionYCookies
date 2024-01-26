const userExists = (req, res, next) =>{
    if(req.session.user){
        next()
    }else{
        res.send("Debes loguearte para ingresar")
    };
};

module.exports = userExists