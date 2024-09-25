const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// SignUp Logic
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists, please login', success: false });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Save user to database
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(200).json({ message: 'Signup Successfully', success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

// SignIn Logic
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email and password presence
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Email', success: false });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Password', success: false });
        }

        // Generate JWT Token
        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(200).json({
            message: 'Signin Successfully',
            success: true,
            token,
            name: user.name
        });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};
