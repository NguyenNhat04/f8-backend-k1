const model = require("../models/index");
const User = model.User;
const Role = model.Role;

const { hasPermission } = require("../utils/permisson");

const checkPermission = (permission) => {
  return async (req, res, next) => {
    const permissions = await hasPermission(req);
    if (!permissions.includes(permission)) {
      if (permission === "users.read") {
        res.redirect("/");
      } else {
        res.redirect("/users");
      }
    } else {
      next();
    }
  };
};

const isAdmin = async (req, res, next) => {
  if (!req.user) return;
  const { id } = req.user;
  const currentUser = await User.findOne({
    where: { id },
    include: { model: Role },
  });
  const rolesObj = await currentUser.getRoles();
  const rolesName = rolesObj.map((role) => role.name);
  if (!rolesName.includes("Admin")) {
    res.redirect("/users");
  } else {
    next();
  }
};

module.exports = {
  add: checkPermission("users.add"),
  update: checkPermission("users.update"),
  delete: checkPermission("users.delete"),
  read: checkPermission("users.read"),
  isAdmin,
};
