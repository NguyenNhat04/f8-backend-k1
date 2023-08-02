/*
 Bài 2: Tính khoảng cách giữa 2 ngày
Cho trước 2 ngày, tính khoảng cách giữa 2 ngày đó

const startDate = "2020-01-01";
const endDate = "2020-01-22";
Kết quả trả về: 21
*/

const gapDay = function (startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let distanceDay;
  if (end >= start) {
    const distanceTime = end - start;
    distanceDay = distanceTime / (1000 * 86400);
  } else {
    return `Không hợp lệ`;
  }

  return `Kết quả : ${distanceDay} days`;
};

console.log(gapDay("2020-01-01", "2020-01-22"));
console.log(gapDay("2020-01-02", "2020-01-01"));
