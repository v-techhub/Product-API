import fs from "fs/promises";

export async function writeDataToFile(filename, data) {
  await fs.writeFile(filename, JSON.stringify(data), "utf-8", (err) => {
    throw new Error(err);
  });
}

export function getData(req) {
  let body = "";
  return new Promise((resolve, reject) => {
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      resolve(body);
    });
  });
}
