const model = require("../models/index");
const { User, Role, Permission } = model;

module.exports = {
  get: (data, permission) => {
    const permissionData = data.find(({ value }) => value === permission);
    if (permissionData) {
      return permissionData.value;
    }
  },

  isRole: (roleData, roleId) => {
    return roleData.find((role) => {
      return +role.id === +roleId;
    });
  },

  hasPermission: async (req) => {
    if (!req.user) {
      return [];
    }

    const { id } = req.user;
    // console.log(id);

    const user = await User.findOne({
      where: { id },
      include: {
        model: Role,
        include: {
          model: Permission,
          attributes: ["value"],
        },
      },
    });

    console.log(user);

    // lấy tất cả permission của từng role
    const permissions = await Promise.all(
      user.Roles.map(async (role) => {
        return role.Permissions.map(({ value }) => value);
      })
    );

    // Sử dụng flat và Set để loại bỏ trùng lặp
    return [...new Set(permissions.flat())];
  },
};
