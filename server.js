const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const helmet = require('helmet');

const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

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

// Set security headers
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100,
});

app.use(limiter);

// Prevent http Param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, './public')));

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
