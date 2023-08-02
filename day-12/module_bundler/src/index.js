import _ from "lodash";

// Object users
const users = [
  { id: "name1", age: 40, height: 1 },
  { id: "name2", age: 39, height: 2 },
  { id: "name3", age: 38, height: 2 },
  { id: "name4", age: 40, height: 2 },
];

// Group users by age using lodash's groupBy function
const groupedUsers = _.groupBy(users, "age");

// Log the result
console.log(groupedUsers);
