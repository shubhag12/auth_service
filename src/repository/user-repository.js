const { User } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("some thing wrong at user repository");
      throw { error };
    }
  }
  async destroyUser(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      console.log("some thing wrong at user repository");
      throw { error };
    }
  }
  async getById(userId) {
    try {
      const user = await User.findByPk(userId,{
        attributes:['email','id']
      });
      return user;
    } catch (error) {
      console.log("some went wrong on the users repository");
      throw { error };
    }
  }
}
module.exports = UserRepository;
