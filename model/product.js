import products from "../data/product.json" assert { type: "json" };
import { writeDataToFile } from "../utils/index.js";

function findAll() {
  return new Promise((resolve, reject) => {
    try {
      resolve(products);
    } catch (error) {
      reject(error);
    }
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    product ? resolve(product) : reject("Product Not Found");
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    products.push(product);
    writeDataToFile("./data/product.json", products);
    resolve(product);
  });
}

function update(product) {
  const index = products.findIndex((p) => p.id === product.id);
  return new Promise((resolve, reject) => {
    try {
      products[index] = product;
      resolve(products[index]);
    } catch (error) {
      reject(error);
    }
  });
}

function remove(product) {
  let allProducts = [];
  return new Promise((resolve, reject) => {
    allProducts = products.filter((p) => p.id !== product.id);
    writeDataToFile("./data/product.json", allProducts);
    resolve(products);
  });
}

export default {
  findAll,
  findById,
  create,
  update,
  remove,
};
