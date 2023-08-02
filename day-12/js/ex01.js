/*
Bài 1: Chuyển đổi mili giây
Viết hàm chuyển đổi mili giây thành chuỗi đọc được như sau

1001 => 1 second, 1 millisecond

34325055574 => 397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds
 */

function convertMilliseconds(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingMilliseconds = milliseconds % 1000;
  const remainingSeconds = seconds % 60;
  const remainingMinutes = minutes % 60;
  const remainingHours = hours % 24;

  const timeParts = [];

  if (!isNaN(milliseconds) && milliseconds > 0) {
    if (days > 0) timeParts.push(`${days} ${days === 1 ? "day" : "days"}`);
    if (remainingHours > 0)
      timeParts.push(
        `${remainingHours} ${remainingHours === 1 ? "hour" : "hours"}`
      );
    if (remainingMinutes > 0)
      timeParts.push(
        `${remainingMinutes} ${remainingMinutes === 1 ? "minute" : "minutes"}`
      );
    if (remainingSeconds > 0)
      timeParts.push(
        `${remainingSeconds} ${remainingSeconds === 1 ? "second" : "seconds"}`
      );
    if (remainingMilliseconds > 0)
      timeParts.push(
        `${remainingMilliseconds} ${
          remainingMilliseconds === 1 ? "millisecond" : "milliseconds"
        }`
      );
  } else {
    return `Số không hợp lệ `;
  }

  return timeParts.join(", ");
}

console.log(convertMilliseconds(1001));
console.log(convertMilliseconds("sffg"));
