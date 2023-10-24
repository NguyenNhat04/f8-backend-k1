const { ShortenLink } = require("../models");
const randomstring = require("randomstring");
var createError = require("http-errors");

module.exports = {
  index: async (req, res) => {
    const links = await ShortenLink.findAll();

    res.render("index", { links });
  },
  handlePostLink: async (req, res) => {
    const { originLink } = req.body;
    const randomCode = randomstring.generate(7);
    console.log(randomCode);
    const path = "http://localhost:3000/srtlink/";
    const newLink = path + randomCode;
    await ShortenLink.create({
      fullVer: originLink,
      shortVer: newLink,
      code: randomCode,
    });
    res.redirect("/");
  },
  getShortedLink: async (req, res, next) => {
    const link = await ShortenLink.findOne({
      where: { code: req.params.urlcode },
    });
    if (link) {
      await link.update({ views: link.views + 1 });
      res.redirect(link.fullVer);
    } else {
      next(createError(404));
    }
  },
  deleteLink: async (req, res) => {
    console.log(req.params);
    await ShortenLink.destroy({
      where: {
        code: req.params.urlcode,
      },
    });

    res.redirect("/");
  },
  updateLink: async (req, res) => {
    const link = await ShortenLink.findOne({
      where: { code: req.params.urlcode },
    });
    res.render("update", { link });
  },
  handleUpdateLink: async (req, res) => {
    const link = await ShortenLink.findOne({
      where: { code: req.params.urlcode },
    });

    const { oldUrl, codeUrl } = req.body;
    await link.update({
      fullVer: oldUrl,
      shortVer: "http://localhost:3000/srtlink/" + codeUrl,
      code: codeUrl,
    });
    res.redirect("/update/" + link.code);
  },
};
