//Chuyển đổi mảng 1 chiều thành dạng lồng (nested)

var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

// console.log(categories);

var getCategories = function (categories, parentId = 0) {
  var result = [];
  if (categories.length) {
    categories.forEach(function (category) {
      if (category.parent === parentId) {
        var newCategory = {
          id: category.id,
          name: category.name,
          parent: category.parent,
        };

        var children = getCategories(categories, category.id);
        if (children.length) {
          newCategory["children"] = children;
        }
        result.push(newCategory);
      }
    });
  }
  return result;
};

console.log(getCategories(categories));
