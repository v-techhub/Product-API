import { createServer } from "http";
import { routes } from "./routes/constants.js";
import Controller from "./controller/product.js";
const PORT = 8080;

const server = createServer((req, res) => {
  if (req.url === routes.products && req.method === "GET") {
    Controller.getAllProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9])+/) &&
    req.method === "GET"
  ) {
    Controller.getProductsById(req, res);
  } else if (req.url === routes.products && req.method === "POST") {
    Controller.createProduct(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9])+/) &&
    req.method === "PUT"
  ) {
    Controller.updateProduct(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9])+/) &&
    req.method === "DELETE"
  ) {
    Controller.deleteProduct(req, res);
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
5;
