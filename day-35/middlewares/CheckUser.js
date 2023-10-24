const model = require("../models/index");

module.exports = {
  check: async (req, res, next) => {
    const { id } = req.params;

    const userStatus = await model.User_status.findOne({
      where: {
        user_id: id,
      },
    });

    if (userStatus && userStatus.active) {
      next();
    } else {
      res.status(403).json({ error: "Không cho phép sử dụng API" });
    }
  },
};
