const express = require("express");
const bodyparser = require("body-parser");
const { PORT } = require("./config/serverconfig");
const { User } = require("./models/index");
const apiroutes = require("./routes/index");
const app = express();
const db = require("./models/index");
const bcrypt = require("bcrypt");
//  const UserRepository=require('./repository/user-repository');
const prepareAndStartServer = async () => {
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use("/api", apiroutes);
  app.listen(PORT, async () => {
    console.log(`server started ${PORT}`);

    try {
      if (process.env.DB_SYNC) {
        db.sequelize.sync({ alter: true });
      }
    } catch (error) {
      console.log(error);
      
    }
    // const repo=new UserRepository();
    // const response =await   repo.getById(2);
    // console.log(response);
    // const incomingpassword = "1234567";
    // const user = await User.findByPk(4);
    // const response = bcrypt.compareSync(incomingpassword, user.password);
    // console.log(response);
  });
};
prepareAndStartServer();
