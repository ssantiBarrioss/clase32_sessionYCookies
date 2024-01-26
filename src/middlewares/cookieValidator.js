const cookieValidator = (req,res,next)=>{
    if(req.cookies.remember && req.cookies.user){
        req.session.user = req.cookies.user;
    }
    next();
};

module.exports = cookieValidator;