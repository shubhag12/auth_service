const express = require("express");
const bodyparser=require('body-parser');
const { PORT } = require("./config/serverconfig");
const {User}=require('./models/index');
const apiroutes=require('./routes/index')
const app = express();
const bcrypt=require('bcrypt');
const prepareAndStartServer = () => {

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({extended:true}))
  app.use('/api',apiroutes);

  app.listen(PORT, async() => {
    console.log(`server started ${PORT}`);
    const incomingpassword='1234567';
    const user=await User.findByPk(4); 
    const response =bcrypt.compareSync(incomingpassword,user.password);
    console.log(response);
  });
};

prepareAndStartServer();
