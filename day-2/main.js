/*
BÀI 1 : 
    Tính tiền taxi
    Tính tiền cước taxi dựa vào các điều kiện sau :
        Số km ≤ 1 giá 15000đ
        1 < số km ≤ 5 giá 13500đ
        Số km > 5 giá 11000đ
        Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
*/

var distance = 10,
  price,
  discount,
  total;
if (distance > 0) {
  if (distance <= 1) {
    price = 15000;
    total = price * distance;
  } else if (distance > 1 && distance <= 5) {
    price = 13500;
    total = 15000 + price * (distance - 1);
  } else {
    price = 11000;
    total = 15000 + 13500 * 4 + price * (distance - 5);
    if (distance > 120) {
      discount = 10 / 100;
      total = total - total * discount;
    }
  }
  console.log(`Đi quãng đường ${distance} km hết ${total} đồng `);
} else {
  console.log("Quãng đường ko xác định ");
}

/*
BÀI 2 :
    Tính tiền điện
    Học viên viết chương trình tiền điện hàng tháng theo yêu cầu sau

    Input: Số điện tiêu thụ hàng tháng

    Output: Hiển thị số tiền phải đóng
*/

var kWh = 100,
  prices,
  total;
if (kWh >= 0 && kWh === parseInt(kWh)) {
  if (kWh <= 50) {
    prices = 1678;
    total = kWh * price;
  } else if (kWh >= 51 && kWh <= 100) {
    prices = 1734;
    total = 1678 * 50 + prices * (kWh - 50);
  } else if (kWh >= 101 && kWh <= 200) {
    prices = 2014;
    total = 1678 * 50 + 1734 * 50 + prices * (kWh - 100);
  } else if (kWh >= 201 && kWh <= 300) {
    prices = 2536;
    total = 1678 * 50 + 1734 * 50 + 2014 * 100 + prices * (kWh - 200);
  } else if (kWh >= 301 && kWh <= 400) {
    prices = 2834;
    total =
      1678 * 50 + 1734 * 50 + 2014 * 100 + 2834 * 100 + prices * (kWh - 300);
  } else if (kWh >= 401) {
    prices = 2927;
    total =
      1678 * 50 +
      1734 * 50 +
      2014 * 100 +
      2834 * 100 +
      2927 * 100 +
      prices * (kWh - 400);
  }
  console.log(`Số tiền phải trả là : ${total} đồng`);
} else {
  console.log("Không thể tính toán . Vui lòng nhập số kWh hợp lệ");
}

/*
BÀI 3 :
Tính giai thừa
Học viên tìm hiểu về vòng lặp để tính giai thừa của 1 số nguyên N
*/

var N = 5,
  giaiThua = 1;
if (N >= 0 && N === parseInt(N)) {
  for (let i = 1; i <= N; i++) {
    giaiThua *= i;
  }
}
console.log(`Kết quả : ${N}! = ${giaiThua} `);

/*
BÀI 4 :
Kiểm tra số nguyên tố
Viết chương trình kiểm tra 1 số có phải số nguyên tố hay không?
*/

var number = 11;
var isSoNguyenTo = true;

if (!Number.isInteger(number)) {
  console.log(`${number} không là số nguyên`);
} else {
  if (number <= 1) {
    isSoNguyenTo = false;
  } else {
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i === 0) {
        isSoNguyenTo = false;
        break;
      }
    }
  }

  if (isSoNguyenTo) {
    console.log(`${number} là số nguyên tố`);
  } else {
    console.log(`${number} không là số nguyên tố`);
  }
}
