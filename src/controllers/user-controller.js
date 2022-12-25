const UserService=require('../services/user-service');
const userService=new UserService();
const create=async(req,res)=>{
try {
    const user= await userService.createUser({
        email:req.body.email,
        password:req.body.password,
    });
    return res.status(201).json({
      data: user,
      success: true,
      message: "successfully created a user",
      err: {},
    })
} catch (error) {
    console.log("error at controllers user controllers.js");
    return res.status(201).json({
      data: {},
      success: false,
      message: "not able to create a user", 
      err: error,
    });
}
}
module.exports = {
    create,
  };
  