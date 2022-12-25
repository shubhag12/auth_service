const express = require("express");
const bodyparser=require('body-parser');
const { PORT } = require("./config/serverconfig");

const apiroutes=require('./routes/index')
const app = express();
const prepareAndStartServer = () => {

  app.use(bodyparser.json);
  app.use(bodyparser.urlencoded({extended:true}))
  app.use('/api',apiroutes);

  app.listen(PORT, () => {
    console.log(`server started ${PORT}`);
  });
};

prepareAndStartServer();
