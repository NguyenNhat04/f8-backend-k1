var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const secret = process.env.JWT_SECRET || "jsonwebtoken-secret";
const { User } = require("../models");
module.exports = {
  showForm: async (req, res) => {
    res.render("auth/forgot-password");
  },

  SendResetEmail: async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      const token = jwt.sign({ email: email }, secret, { expiresIn: "900s" });

      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
      });

      const info = await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: email,
        subject: "Đặt lại mật khẩu",
        html: `<p>Linh reset mật khẩu :</p> <a href="http://localhost:3000/auth/reset-password/:token">http://localhost:3000/auth/reset-password</a>`,
      });
      res.redirect("/auth/login");
    }
  },

  resetPassword: async (req, res) => {
    const { token } = req.params;
    console.log(token);
    jwt.verify(token, secret, async (err, decoded) => {
      console.log(decoded);
      if (err) {
        return res.send("Liên kết không hợp lệ!");
      } else {
        const user = await User.findOne({ where: { email: decoded.email } });
        console.log(user);

        if (user) {
          res.render("auth/reset-password");
        }
      }
    });
  },

  handleReset: async (req, res) => {
    const { token } = req.params;
    const decodeToken = jwt.verify(token, secret);
    const user = await User.findOne({
      where: { email: decodeToken.email },
    });
    const salt = 10;
    const { password } = req.body;
    bcrypt.hash(password, salt, async function (err, hash) {
      user.update({ password: hash });
    });
    res.redirect("/auth/login");
  },
};
