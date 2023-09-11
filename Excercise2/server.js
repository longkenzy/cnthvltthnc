const http = require("http");

// Tạo một đối tượng server và xử lý yêu cầu
const server = http.createServer((req, res) => {
  // Thiết lập tiêu đề HTTP để xác định loại nội dung là văn bản plain
  res.setHeader("Content-Type", "text/plain");

  // Lấy ngày tháng năm và thời gian hiện tại
  const currentDate = new Date();
  const date = currentDate.toDateString();
  const time = currentDate.toLocaleTimeString();

  // Gửi phản hồi về trình duyệt
  res.end(`Ngày tháng năm: ${date}\nThời gian: ${time}\n`);
});

// Lắng nghe trên cổng 8080
const port = 8081;
server.listen(port, () => {
  console.log(`Server đang lắng nghe tại cổng ${port}`);
});
