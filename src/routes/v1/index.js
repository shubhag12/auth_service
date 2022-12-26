const express = require("express");

const router = express.Router();

const { AuthRequestValidator } = require("../../middlewares/index");

const UserController = require("../../controllers/user-controller");

router.post(
  "/signup",
  AuthRequestValidator.validateUserAuth,
  UserController.create
);
router.post(
  "/signin",
  AuthRequestValidator.validateUserAuth,
  UserController.signIn
);

module.exports = router;
