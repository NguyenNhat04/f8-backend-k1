const nodemailer = require("nodemailer");
const { User } = require("../models");
var jwt = require("jsonwebtoken");
module.exports = {
  index: async (req, res) => {
    const msg = req.flash("msg");
    res.render("auth/register", { msg });
  },

  handleRegister: async (req, res) => {
    const { email, password } = req.body;
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Đăng ký tài khoản
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      return res.status(400).json({ message: "Email đã tồn tại." });
    }

    // console.log(users);

    const newUser = new User({ email, password });
    await newUser.save();

    const token = jwt.sign({ email }, "secret-key", { expiresIn: "1h" });
    const tokenLink = `http://activate/${token}}`;

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Kích hoạt tài khoản",
      text: `Vui lòng nhấn vào đường dẫn sau để kích hoạt tài khoản: ${tokenLink}`,
    });

    res.redirect("/login");
  },
  active: async (req, res) => {
    const { token } = req.params;
    const decodedToken = jwt.verify(token, "secret-key");
    if (!decodedToken.email) {
      return res.status(400).json({ message: "Token không hợp lệ." });
    }
    const user = await User.findOne({ where: { email: decodedToken.email } });
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng." });
    }
    user.status = 1;
    await user.save();

    return res.redirect("/login");
  },
};
