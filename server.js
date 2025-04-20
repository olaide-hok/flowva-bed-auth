const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');

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

// Prevent Cross Site Scripting
app.use(xss());

// Route files
const auth = require('./routes/auth');

// Dev logging middleware (morgan)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Router
app.use('/api/v1/auth', auth);

// Express Error handler middlewware
app.use(errorHandler);

const PORT = process.env.PORT || 5200;

app.listen(
    PORT,
    console.log(
        `server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
