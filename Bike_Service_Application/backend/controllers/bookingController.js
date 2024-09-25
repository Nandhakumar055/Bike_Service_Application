
const UserBooking = require('../models/UserBooking');

const bookingController = async (req, res) => {
    try {
        const { name, email, phoneNumber, date, vehicleNumber, userSelectedServices } = req.body;
    
        // Create a new booking
        const newBooking = new UserBooking({
          name,
          email,
          phoneNumber,
          date,
          vehicleNumber,
          userSelectedServices,
        });
    
        // Save the booking in the database
        await newBooking.save();
    
        res.status(201).json({ message: 'Booking Successfully!' });
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Booking Error', error });
    }
}

module.exports  = bookingController