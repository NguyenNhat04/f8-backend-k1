/**
 Bài tập 1:
Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, age và address.

Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng để khởi tạo ra
 một mảng mới chứa các đối tượng có cấu trúc như trên.

Kết quả trả về là một mảng chứa tất cả thông tin của các đối tượng đó được sắp xết tăng dần theo tuổi
 và thêm một thuộc tính mới là shortName của mỗi đối tượng.
 */

function Users(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

function createUsers(user) {
  const arrUser = user.map(function (user) {
    return new Users(user.name, user.age, user.address);
  });

  arrUser.sort(function sortUsers(userA, userB) {
    return userA.age - userB.age;
  });
  for (i in user) {
    var arr = user[i].name.split(" ");
    var str = arr[0].concat(" " + arr[arr.length - 1]);
    arrUser[i].shortname = str;
  }

  return arrUser;
}

var people = [
  { name: "Nguyễn Văn A", age: 25, address: "Nam Định" },
  { name: "Nguyễn Văn B", age: 20, address: "Hà Nội" },
  { name: "Nguyễn Văn C", age: 40, address: "Vĩnh Phúc" },
];

console.log(createUsers(people));

/*
Bài tập 2:
Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, password và email.

Tạo một hàm register nhận vào nhiều tham số để khởi tạo ra một mảng chứa các đối tượng có cấu trúc như trên.

Yêu cầu:

Kiểm tra tất cả thông tin có đầy đủ không, nếu không đủ, báo lỗi và dừng chương trình.

Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người.

Tự động thêm role là user cho mỗi đối tượng.

Tạo một hàm login nhận vào 2 tham số email và password.

Yêu cầu:

Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký, trả về thông tin của đối tượng đó.

Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.
*/

function Accounts(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
  this.role = "user";
}

var data = [];
function register(name, password, email) {
  if (name === undefined || password === undefined || email === undefined) {
    return `Thông tin không đầy đủ`;
  }

  if (data.find((user) => user.email === email)) {
    return "Email đã tồn tại";
  }

  const newUser = new Accounts(name, password, email);
  data.push(newUser);
  return data;
}

register("Nguyễn Văn A", 123456, "A@gmail.com");
register("Nguyễn Văn B", 1234567, "B@gmail.com");
register("Nguyễn Văn C", 12345678, "C@gmail.com");
register("Nguyễn Văn D", 123456789, "D@gmail.com");
console.log(data);

function login(email, password) {
  for (i in data) {
    if (email === data[i].email && password === data[i].password) {
      return data[i];
    }
  }
  return "Thông tin không hợp lệ";
}

console.log(login("A@gmail.com", 123456));
console.log(login("E@gmail.com", 123456));
