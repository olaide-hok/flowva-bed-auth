const express = require('express');
const dotenv = require('dotenv');

// load env vars
dotenv.config({path: './config/config.env'});

// Initialize App
const app = express();

// Route files
const auth = require('./routes/auth');

// Router
app.use('/api/v1/auth', auth);

const PORT = process.env.PORT || 5200;

app.listen(
    PORT,
    console.log(
        `server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
