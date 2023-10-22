var express = require("express");
var router = express.Router();
const hash = require("../utils/hash");
const model = require("../models/index");
/* GET home page. */
router.get("/", async function (req, res, next) {
  if (req.user) {
    const { id } = req.user;

    const user = await model.User.findOne({
      where: {
        id,
      },
      include: {
        model: model.Role,
      },
    });
    const roles = user.Roles;
    //Lấy tất cả permission của từng Role

    let permissions = await Promise.all(
      roles.map(async ({ id }) => {
        const role = await model.Role.findOne({
          where: {
            id,
          },
          include: {
            model: model.Permission,
          },
        });
        return role.Permissions;
      })
    );

    permissions = permissions.map((item) => {
      return item.map(({ value }) => value);
    });

    permissions = [...new Set(permissions.flat(Infinity))];
    console.log(permissions);

    res.render("index", { title: "Express" });
  }
});

module.exports = router;
