var jwt = require("jsonwebtoken");
const md5 = require("md5");
var flash = require("connect-flash");
const nodemailer = require("nodemailer");
const model = require("../models/index");
const Login_token = model.Login_token;
const User = model.User;

const generateToken = () => md5(new Date().getTime() + Math.random());
const sendOtpEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: ` Name <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Mã OTP của bạn",
    html: `<p>Mã OTP của bạn là: <b>${otp}</b></p><p>Mã này có hiệu lực trong 5 phút.</p>`,
  };

  await transporter.sendMail(mailOptions);
};
module.exports = {
  login: async (req, res) => {
    const { redirect } = req.query;

    res.render("auth/login", { redirect });
  },

  handleLogin: async (req, res) => {
    const token = generateToken();

    // Xóa tất cả token cũ và tạo token mới
    await Login_token.destroy({ where: { user_id: req.user.id } });
    await Login_token.create({ user_id: req.user.id, token });

    // Gửi OTP qua email
    const otp = Math.floor(100000 + Math.random() * 900000);
    req.session.otp = otp;
    req.session.token = token;
    if (!otp) {
      await sendOtpEmail(req.user.email, otp);
      res.redirect("/auth/otp");
    }

    res.redirect("/");
  },

  otp: async (req, res) => {
    res.render("auth/otp");
  },

  handleOtp: async (req, res) => {
    const userOtp = req.body.otp;
    if (userOtp === req.session.otp) {
      // Lưu token vào cookie và xóa OTP từ session
      res.cookie("token", req.session.token, { httpOnly: true });
      delete req.session.otp;
      delete req.session.token;

      res.redirect("/");
    } else {
      res.redirect("/auth/otp");
    }
  },
};
