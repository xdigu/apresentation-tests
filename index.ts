import server from "./src/server";

const PORT = process.env?.PORT || 8080;

server.listen(PORT, () => {
  console.log(`server runing on ${PORT}`);
});
