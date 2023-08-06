const fs = require("fs");

class Render {
  index = (req, res, path, data) => {
    try {
      let viewContent = fs.readFileSync(`./views/${path}.html`, "utf8");
      const result = viewContent.match(/{.+?}/g);

      if (result) {
        for (const item of result) {
          const itemKey = item.replace(/{|}/g, "");
          let replacement = data[itemKey];

          if (
            typeof replacement === "object" &&
            !Array.isArray(replacement) &&
            replacement !== null
          ) {
            replacement = Object.entries(replacement)
              .map(([key, value]) => `<li>${key}: ${value}</li>`)
              .join("");
          }

          viewContent = viewContent.replace(new RegExp(item, "g"), replacement);
        }
      }

      res.end(viewContent);
    } catch (err) {
      // Handle file read errors here
      console.error("Error reading file:", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  };
}

module.exports = new Render();
