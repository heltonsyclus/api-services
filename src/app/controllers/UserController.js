const serviceLogin = require("../json/serviceLogin.json");
const seriveLayout = require("../json/serviceLayouts.json");
class UserController {
  loginGet(req, res) {
    return res.status(200).json({
      serviceLogin,
    });
  }
  layoutGet(req, res) {
    return res.status(200).json({
      seriveLayout,
    });
  }
}
module.exports = new UserController();
