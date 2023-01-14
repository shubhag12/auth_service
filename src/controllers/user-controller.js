const UserService = require("../services/user-service");
const userService = new UserService();
const create = async (req, res) => {
  try {
    const user = await userService.createUser({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: user,
      success: true,
      message: "successfully created a user",
      err: {},
    });
  } catch (error) {
    console.log("error at controllers user controllers.js");
    return res.status(201).json({
      data: {},
      success: false,
      message: "not able to create a user",
      err: error,
    }); 
  }
};
const signIn=async(req,res)=>{
  try {
    const user = await userService.signIn(
       req.body.email,
     req.body.password
    );
    return res.status(201).json({
      data: user,
      success: true,
      message: "successfully signed a user",
      err: {},
    });
  } catch (error) {
    console.log("error at controllers user controllers.js");
    return res.status(201).json({
      data: {},
      success: false,
      message: "not able to sign in",
      err: error,
    });
  }
}
const isAuthenticated=async(req,res)=>{
  try {
    const token=req.headers['x-access-token'];
    const response=await userService.isAuthenticate(token);
    return res.status(200).json({
      success:true,
      err:{},
      data:response,
      messge:"error is authenticated and the token is valid"
    })
  } catch (error) {
    console.log("error at controllers user controllers.js");
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to authenticated the process",
      err: error,
    });
    
  }
}
module.exports = {
  create,
  signIn,
  isAuthenticated
};
