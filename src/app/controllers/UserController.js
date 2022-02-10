const serviceLogin = require("../json/serviceLogin.json");
class UserController {
  loginGet(req, res) {
    return res.status(200).json({
      serviceLogin,
    });
  }
}
module.exports = new UserController();
