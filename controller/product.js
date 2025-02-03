import Product from "../model/product.js";
import { getData } from "../utils/index.js";
import products from "../data/product.json" assert { type: "json" };

// @desc Get all products
// @route GET /api/products
async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        count: products.length,
        data: products,
      })
    );
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Products not found" }));
  }
}

// @desc Get product by id
// @route GET /api/products/:id
async function getProductsById(req, res) {
  const productId = req.url.split("/")[3];
  try {
    const product = await Product.findById(productId);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Product not found" }));
  }
}

// @desc create new product
// @route POST /api/products/:id
async function createProduct(req, res) {
  try {
    const data = await getData(req);
    const { name, description, price } = JSON.parse(data);
    const product = {
      id: (products.length + 1).toString(),
      name,
      description,
      price,
    };
    await Product.create(product);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Error creating Product" }));
  }
}

// @desc update products by id
// @route POST /api/products/:id
async function updateProduct(req, res) {
  const id = req.url.split("/")[3];
  try {
    const product = await Product.findById(id);
    const data = await getData(req);
    const parsedData = JSON.parse(data);
    const productData = {
      id,
      name: parsedData.name || product.name,
      description: parsedData.description || product.description,
      price: parsedData.price || product.price,
    };
    const updatedProduct = await Product.update(productData);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(updatedProduct));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Product Not Found" }));
  }
}

async function deleteProduct(req, res) {
  const id = req.url.split("/")[3];
  try {
    const product = await Product.findById(id);
    await Product.remove(product);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: `Product ${id} removed from DB` }));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Product Not Found" }));
  }
}

export default {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
