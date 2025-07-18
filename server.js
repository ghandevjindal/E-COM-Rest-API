// 1. Import express
import express from 'express';
// import bodyParser from 'body-parser';
import productRouter from './src/features/product/product.routes.js';
// 2. Create Server
const server = express();

// server.use(bodyParser.json());
// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use("/api/products", productRouter);

// 3. Default request handler
server.get('/', (req, res)=>{
    res.send("Welcome to Ecommerce APIs");
});

const PORT = process.env.PORT || 3200; // fallback for local dev

server.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});

