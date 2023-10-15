const model = require("../models/index");
const Role = model.Role;
const Permission = model.Permission;

module.exports = {
  index: async (req, res) => {
    const roles = await Role.findAll();

    res.render("role/index", { roles });
  },

  create: async (req, res) => {
    res.render("role/add_role");
  },

  handleCreate: async (req, res) => {
    const { role, permission } = req.body;

    const result = await Role.create({ name: role });
    const permissions = await Permission.findAll({
      where: { value: permission },
    });

    await result.addPermission(permissions);
    res.redirect("/role");
  },

  edit: async (req, res) => {
    const roleId = req.params.id;
    const role = await Role.findByPk(roleId);
    if (!role) {
      return res.status(404).send("Không tìm thấy Role");
    }
    const selectedPermissions = await role.getPermissions();

    const allPermissions = await Permission.findAll();

    res.render("role/edit", { role, selectedPermissions, allPermissions });
  },

  handleEdit: async (req, res) => {
    const { role, permission } = req.body;
    const roleId = req.params.id;
    const roles = await Role.findByPk(roleId);
    const permissions = await Permission.findAll({
      where: { value: permission },
    });
    if (!roles) {
      return res.status(404).send("Không tìm thấy Role");
    }
    await roles.setPermissions(permissions);
    await roles.update({ name: role }, { where: { id: roleId } });

    res.redirect("/role");
  },
};
