const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');

// load env vars
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();

// Initialize App
const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Route files
const auth = require('./routes/auth');

// Dev logging middleware (morgan)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Router
app.use('/api/v1/auth', auth);

const PORT = process.env.PORT || 5200;

app.listen(
    PORT,
    console.log(
        `server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
