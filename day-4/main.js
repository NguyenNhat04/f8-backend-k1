/*
Bài 1:
Hiển thị N số Fibonacci đầu tiên

Ví dụ: Gán n = 10 sẽ hiển thị danh sách 10 số fibonacci
*/

function fibonacciNumbers(n) {
  if (Number.isInteger(n)) {
    if (n < 0) {
      console.log("Số không thỏa mãn");
    } else {
      var num1 = 0;
      var num2 = 1;

      console.log(num1);

      console.log(num2);

      for (var i = 2; i < n; i++) {
        var nextNum = num1 + num2;
        console.log(nextNum);

        num1 = num2;
        num2 = nextNum;
      }
    }
  } else {
    console.log("Số không hợp lệ");
  }
}

fibonacciNumbers(10);

/*
Bài 2
Viết hàm đảo ngược số nguyên với tham số là số cần đảo ngược

Ví dụ: Khi gọi hàm và truyền đối số 12345 sẽ trả về kết quả 54321
*/

function reverseInteger(n) {
  var reverseNum = 0;
  if (Number.isInteger(n)) {
    if (n <= 0) {
      return `Số không thỏa mãn`;
    } else if (n >= 1 && n <= 9) {
      return n;
    } else {
      while (n > 0) {
        var digit = n % 10;

        reverseNum = reverseNum * 10 + digit;

        n = Math.floor(n / 10);
      }
    }

    return `Số sau khi đảo ngược là : ${reverseNum}`;
  } else {
    return `Số không hợp lệ`;
  }
}
console.log(reverseInteger(1243223534));

/*
Bài 3
Viết hàm chuyển số thành chữ

Ví dụ: Số 4298 sẽ chuyển thành: Bốn ngàn hai trăm chín tám

Ràng buộc: Số cần chuyển đổi có giá trị từ 0 đến 9999


*/
function numberToLetters(number) {
  var thousands = Math.floor(number / 1000);
  var hundreds = Math.floor((number % 1000) / 100);
  var tens = Math.floor((number % 100) / 10);
  var units = number % 10;

  var thousandsStr = numberToWords(thousands);
  var hundredsStr = numberToWords(hundreds);
  var tensStr = numberToWords(tens);
  var unitsStr = numberToWords(units);
  if (Number.isInteger(number) && number >= 0 && number <= 9999) {
    if (number >= 0 && number <= 9) {
      return unitsStr;
    } else if (number >= 10 && number <= 19) {
      tensStr = `Mười`;
      return `${tensStr} ${unitsStr}`;
    } else if (number >= 20 && number <= 99) {
      if (number % 10 === 0) {
        return `${tensStr} mươi`;
      } else {
        return `${tensStr} ${unitsStr}`;
      }
    } else if (number >= 100 && number <= 999) {
      if (number % 100 === 0) {
        return `${hundredsStr} trăm`;
      } else if (tens === 1) {
        tensStr = `mười`;
        return `${hundredsStr} trăm ${tensStr} ${unitsStr}`;
      } else {
        return `${hundredsStr} trăm ${tensStr} ${unitsStr}`;
      }
    } else if (number >= 1000 && number <= 9999) {
      if (number % 1000 === 0) {
        return `${thousandsStr} nghìn`;
      } else if (number % 10 === 0) {
        if (tens === 1) {
          tensStr = `mười`;
          return `${thousandsStr} nghìn ${hundredsStr} trăm ${tensStr}`;
        } else {
          return `${thousandsStr} nghìn ${hundredsStr} trăm ${tensStr} mươi`;
        }
      } else {
        return `${thousandsStr} nghìn ${hundredsStr} trăm ${tensStr} ${unitsStr}`;
      }
    }
  } else {
    return `Số không hợp lệ`;
  }
}

function numberToWords(number) {
  const words = {
    0: "không",
    1: "một",
    2: "hai",
    3: "ba",
    4: "bốn",
    5: "năm",
    6: "sáu",
    7: "bảy",
    8: "tám",
    9: "chín",
  };

  return words[number];
}
const number = 2000;
const result = numberToLetters(number);
console.log(result);
