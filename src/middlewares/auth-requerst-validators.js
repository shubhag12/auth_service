const validateUserAuth=(req,res,nex)=>{
    if(!req.body.email||!req.body.password){
        return res.status(400).json({
            success:false,
            data:{},
            message:"something went wrong at midle wares",
            err:"email or password misiiing at signup"
        })
    }
    nex();
}

module.exports={
    validateUserAuth
}