const model = require("../models/index");
const File = model.File;

module.exports = {
  upload: async (req, res) => {
    try {
      const { userId } = req.user;
      const { filename, path } = req.file;
      const file = await File.create({
        name: filename,
        url: path,
        user_id: userId,
      });
      res.json({ file });
    } catch (error) {
      res.status(500).json({ status: "error", message: "Upload failed" });
    }
  },

  getFiles: async (req, res) => {
    try {
      const { userId } = req.user;
      if (!userId) {
        res.status(403).json({
          status: "error",
          message: "Forbidden",
        });
      }
      const files = await File.findAll({
        where: { user_id: userId },
      });

      res.json({ status: "success", data: files });
    } catch (error) {
      res.status(500).json({ status: "error", message: "không tìm thấy file" });
    }
  },
};
