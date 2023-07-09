var content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor, velit nemo dolores dignissimos quis animi. Et eos hic in tempora inventore obcaecati veritatis esse recusandae, harum incidunt aliquid est?";
var keywords = content.split(" ");

var currentIndex = 0;

var colorKeywords = function () {
  var highlightedKeywords = keywords.map(function (keyword, index) {
    if (index === currentIndex) {
      return "<span>" + keyword + "</span>";
    } else {
      return keyword;
    }
  });

  document.getElementById("id").innerHTML = highlightedKeywords.join(" ");

  currentIndex = (currentIndex + 1) % keywords.length;
};

setInterval(colorKeywords, 1500);
