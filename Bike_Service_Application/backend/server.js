const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes')

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Routes
app.use('/api/', authRoutes);
app.use('/api/', bookingRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
