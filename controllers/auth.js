const User = require('../models/User');
const asyncHandler = require('../middleware/async');

// @desc Register user
// @route POST /api/v1/auth/register
// @access Public
exports.register = asyncHandler(async (req, res, next, err) => {
    const {name, email, password} = req.body;

    // Create user
    const user = await User.create({
        name,
        email,
        password,
    });
});
