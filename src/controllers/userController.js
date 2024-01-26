

const userController = {
    saludoUser : (req,res,next)=>{
        res.render('saludoUser', {title: 'clase32'})
    },
    processSaludo: (req, res, next)=>{
        
    }
}

module.exports= userController;