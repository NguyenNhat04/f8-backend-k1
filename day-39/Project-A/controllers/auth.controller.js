const bcrypt = require("bcrypt");

const model = require("../models/index");
const jwt = require("../utils/jwt");
const User = model.User;
const BlackList = model.BlackList;

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }
    const { password: hash } = user;
    const status = bcrypt.compareSync(password, hash);
    if (!status) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }

    const token = jwt.createToken({ userId: user.id });
    const refreshToken = jwt.createRefresh();

    const updateStatus = await User.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: {
          id: user.id,
        },
      }
    );

    if (!updateStatus) {
      res.status(500).json({
        status: "error",
        message: "Server Error",
      });
      return;
    }

    res.json({
      status: "success",
      accessToken: token,
      refreshToken,
    });
  },
  profile: async (req, res) => {
    const authorization = req.headers["authorization"];
    const token = authorization.replace("Bearer", "").trim();
    try {
      const decoded = jwt.decode(token);
      //Kiểm tra blacklist
      const blacklist = await BlackList.findOne({
        where: {
          token,
        },
      });
      if (blacklist) {
        res.json({
          status: "error",
          message: "Unauthorize",
        });
        return;
      }

      if (decoded) {
        const { userId } = decoded;
        const user = await User.findOne({
          where: {
            id: userId,
          },
          attributes: ["id", "name", "email", "createdAt", "updatedAt"],
        });
        if (!user) {
          res.json({
            status: "error",
            message: "User not exist",
          });
          return;
        }

        res.json({ status: "success", data: user });
      }
    } catch (e) {
      res.status(401).json({
        status: "error",
        message: "Unauthorize",
      });
    }
  },
  refreshToken: async (req, res) => {
    //Nhận: refreshToken
    const { refreshToken } = req.body;
    if (!refreshToken) {
      res.status(400).json({
        status: "error",
        message: "refreshToken required",
      });
      return;
    }

    try {
      jwt.decode(refreshToken);

      const user = await User.findOne({
        where: {
          refresh_token: refreshToken,
        },
      });

      if (!user) {
        res.status(401).json({
          status: "error",
          message: "Unauthorize",
        });
        return;
      }

      const token = jwt.createToken({ userId: user.id });
      const newRefreshToken = jwt.createRefresh();

      //Lưu refreshToken vào Database
      const updateStatus = await User.update(
        {
          refresh_token: refreshToken,
        },
        {
          where: {
            id: user.id,
          },
        }
      );

      if (!updateStatus) {
        res.status(500).json({
          status: "error",
          message: "Server Error",
        });
        return;
      }

      res.json({
        status: "success",
        accessToken: token,
        refreshToken: newRefreshToken,
      });
    } catch (e) {
      res.status(401).json({
        status: "error",
        message: "Unauthorize",
      });
      return;
    }
  },
  logout: async (req, res) => {
    const { accessToken } = req.body;
    try {
      const decoded = jwt.decode(accessToken);

      if (decoded) {
        await BlackList.create({
          token: accessToken,
        });
        await User.update(
          {
            refresh_token: null,
          },
          {
            where: {
              id: decoded.userId,
            },
          }
        );
        res.json({ status: "success" });
        return;
      }
    } catch (e) {
      res.status(401).json({
        status: "error",
        message: "Unauthorize",
      });
    }
  },
};
