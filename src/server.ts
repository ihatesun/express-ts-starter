import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    return res.end();
  }

  res.write("Hello World");
  return res.end();
});

server.listen(8080, () => {
  console.log("Server is running on port 8080.");
});
