const http = require("http");

// Tạo một đối tượng server và xử lý yêu cầu
const server = http.createServer((req, res) => {
  // Thiết lập tiêu đề HTTP để xác định loại nội dung là văn bản HTML
  res.setHeader("Content-Type", "text/html");

  // Gửi phản hồi "Hello world!" về trình duyệt
  res.end("Hello world!\n");
});

// Lắng nghe trên cổng 8080
const port = 8080;
server.listen(port, () => {
  console.log(`Server đang lắng nghe tại cổng ${port}`);
});
