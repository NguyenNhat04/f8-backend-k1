const axios = require("axios");

async function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];

  try {
    const response = await axios.get(
      "http://localhost/project-a/users/profile",
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (response.data.valid) {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
}

module.exports = authenticateToken;
