# CRUD Backend API

This is a simple CRUD (Create, Read, Update, Delete) backend API built with Node.js Only.

## Features

- Create a new product
- Read all products
- Read a single product by ID
- Update an existing product
- Delete a product

## Technologies Used

- Node.js
- nodemon (for development server restart)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/v-techhub/Product-API.git
   ```
2. Navigate to the project directory:
   ```sh
   cd crud-backend-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Server

To start the development server, run:

```sh
npm run dev
```

For production, use:

```sh
npm start
```

## API Endpoints

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products`     | Get all products     |
| GET    | `/api/products/:id` | Get product by ID    |
| POST   | `/api/products`     | Create a new product |
| PUT    | `/api/products/:id` | Update product by ID |
| DELETE | `/api/products/:id` | Delete product by ID |

## Example Request (POST)

```sh
curl -X POST http://localhost:5000/api/products \
     -H "Content-Type: application/json" \
     -d '{"name": "Sample Item", description: "Sample Description", "price": 100}'
```

## License

This project is licensed under the MIT License.
