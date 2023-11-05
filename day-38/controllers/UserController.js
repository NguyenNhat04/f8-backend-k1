const model = require("../models/index");
const User = model.User;
const Redis = require("ioredis");

const redis = new Redis();

module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(500).json({
        message: "Lỗi server",
      });
    }

    const cacheKey = "usersList";
    const cachedUsers = await redis.get(cacheKey);

    if (cachedUsers) {
      return res.json(JSON.parse(cachedUsers));
    } else {
      const users = await User.findAll();
      await redis.set(cacheKey, JSON.stringify(users), "EX", 10 * 60);
      res.json(users);
    }
  },
};
