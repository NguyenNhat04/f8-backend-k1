const nodemailer = require("nodemailer");
const { SendEmail } = require("../models");

const fs = require("fs");
const path = require("path");
const { text } = require("express");

module.exports = {
  getSendEmail: async (req, res) => {
    res.render("email/send-email");
  },

  sendEmail: async (req, res) => {
    const { email, subject, content } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // console.log(transporter);
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: subject,
      text: content,
    });

    await SendEmail.create({
      email: email,
      subject: subject,
      status: "Đã gửi",
      sentAt: new Date(),
      content: content,
    });

    res.redirect("/email/email-history");
  },

  getHistory: async (req, res) => {
    const emailHistory = await SendEmail.findAll();
    res.render("email/history", { emailHistory });
  },

  getEmailDetail: async (req, res) => {
    const emailId = req.params.id;
    const email = await SendEmail.findByPk(emailId);
    console.log(email);
    if (!email) {
      res.status(404).json({ error: "Email không tồn tại" });
      return;
    }
    res.render("email/detail", { email });
  },
};
