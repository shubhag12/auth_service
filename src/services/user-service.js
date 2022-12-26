const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverconfig");
const bcrypt=require('bcrypt');
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async createUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log("error at service layer");
      throw { error };
    }
  }
  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
      return result;
    } catch (error) {
      console.log("something went wrong in token creation");
      throw { error };
    }
  }
  verifyToken(token) {
    try {
      const result = jwt.verify(token, JWT_KEY);
      return result;
    } catch (error) {
      console.log("something went wrong in token validation");
      throw { error };
    }
  }

  checkPassword(plainPassword,encryptedPassword)
  {
    try {
        return bcrypt.compareSync(plainPassword,encryptedPassword);
    } catch (error) {
        console.log("something went wrong in password comparison");
        throw error;
        
    }
  }
}
module.exports = UserService;
