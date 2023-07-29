/*
Cho trước biến url lưu trữ URL cần rút gọn link. Viết chương trình hiển thị ra link sau khi rút gọn

Khi truy cập vào link rút gọn sẽ tự động chuyển về URL gốc

Tham khảo API sau để hoàn thiện: https://shrtco.de/docs


 */

const api = "https://api.shrtco.de/v2/";
const shorten = "shorten?url=";

const url = "https://www.youtube.com/";

const getShortenedLink = async () => {
  try {
    const response = await fetch(`${api}${shorten}${url}`);

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();

    const shortLink = data.result.short_link;

    console.log(`Link sau khi rút gọn là: ${shortLink}`);
  } catch (error) {
    console.log(error);
  }
};

getShortenedLink();
