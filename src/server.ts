import http from "http";

const server = http.createServer();

server.listen(8080, () => {
  console.log("Server is running on port 8080.");
});
