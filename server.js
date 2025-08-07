require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mashudu_ecom',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test database connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
    connection.release();
});

// API Endpoints

// Get dashboard statistics
app.get('/api/dashboard/stats', (req, res) => {
    const stats = {
        totalSales: 35850,
        totalUsers: 2156,
        totalOrders: 264,
        salesData: [4500, 5200, 4800, 6100, 7300, 8500, 9200]
    };
    res.json(stats);
});

// Get all products
app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM products';
    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching products:', error);
            return res.status(500).json({ error: 'Failed to fetch products' });
        }
        res.json(results);
    });
});

// Add new product
app.post('/api/products', (req, res) => {
    const { name, description, price, category, stock, image } = req.body;
   
    const query = `
        INSERT INTO products (name, description, price, category, stock_quantity, image_url)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
   
    pool.query(query, [name, description, price, category, stock, image], (error, results) => {
        if (error) {
            console.error('Error adding product:', error);
            return res.status(500).json({ error: 'Failed to add product' });
        }
       
        res.status(201).json({
            message: 'Product added successfully',
            productId: results.insertId
        });
    });
});

// Update product
app.put('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const { name, description, price, category, stock, image } = req.body;
   
    const query = `
        UPDATE products
        SET name = ?, description = ?, price = ?, category = ?, stock_quantity = ?, image_url = ?
        WHERE id = ?
    `;
   
    pool.query(query, [name, description, price, category, stock, image, productId], (error) => {
        if (error) {
            console.error('Error updating product:', error);
            return res.status(500).json({ error: 'Failed to update product' });
        }
       
        res.json({ message: 'Product updated successfully' });
    });
});

// Delete product
app.delete('/api/products/:id', (req, res) => {
    const productId = req.params.id;
   
    const query = 'DELETE FROM products WHERE id = ?';
   
    pool.query(query, [productId], (error) => {
        if (error) {
            console.error('Error deleting product:', error);
            return res.status(500).json({ error: 'Failed to delete product' });
        }
       
        res.json({ message: 'Product deleted successfully' });
    });
});

// Serve index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve admin dashboard
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});