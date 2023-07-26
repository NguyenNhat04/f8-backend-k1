/*
Bài 2
Mô phỏng hành động mở file theo các bước sau

Mở file
Hiển thị dòng chữ “File đã được mở”

Thời gian mở: 2s

Đọc file
Hiển thị dòng chữ “F8 - Học lập trình để đi làm”

Thời gian đọc: 1s

Đóng file
Hiển thị dòng chữ “File đã đóng”

Thời gian đóng: 1s

Viết chương trình mô phỏng các bước: Mở => Đọc => Đóng bằng các cách sau:

fn Function
Promise
*/

// Callback

var openFile = function (fn) {
  setTimeout(() => {
    console.log("File đã được mở");
    fn();
  }, 2000);
};

var readFile = function (fn) {
  setTimeout(() => {
    console.log("F8 - Học lập trình để đi làm");
    fn();
  }, 1000);
};

var closeFile = function () {
  setTimeout(() => {
    console.log("File đã đóng");
  }, 1000);
};

var result = openFile(() => readFile(() => closeFile()));

// Promise

var openFile = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("File đã được mở");
    }, 2000);
  });
};

var readFile = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("F8 - Học lập trình để đi làm");
    });
  }, 1000);
};

var closeFile = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("File đã được đóng");
    });
  }, 1000);
};

openFile()
  .then(function (response) {
    console.log(response);
    return readFile();
  })
  .then(function (response) {
    console.log(response);
    return closeFile();
  })
  .then(function (response) {
    console.log(response);
  });
