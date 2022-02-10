const serviceLogin = require("../json/serviceLogin.json");
class UserController {
  index(req, res) {
    return res.status(200).json({
      error: false,
      serviceLogin,
    });
  }
}
module.exports = new UserController();
