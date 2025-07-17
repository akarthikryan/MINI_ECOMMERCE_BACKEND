const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./backend/config/connectDatabase');
// Load environment variables from config.env
const result = dotenv.config({ path: path.join(__dirname,'backend', 'config', 'config.env') });
console.log(result)
// Set port and mode from env or defaults
const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || 'development';

// Log loaded env variables
console.log("PORT is:", process.env.PORT);
console.log("NODE_ENV is:", process.env.NODE_ENV);
connectDatabase();
// Body parser middleware
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.send('API is working fine');
});

// Import routes
const products = require('./routes/product');
const orders = require('./routes/order');

// Use routes
app.use('/api/v1/products', products);
app.use('/api/v1/order', orders);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${MODE} mode`);
});
