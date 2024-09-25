
const mongoose = require('mongoose');


const UserBookingSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid E-mail'
        ]
    },
    phoneNumber: { 
        type: Number, 
        required: true 
    },
    vehicleNumber: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    userSelectedServices: { 
        type: [String], 
        required: true 
    },
},{ timestamps: true });



module.exports = mongoose.model("Booking", UserBookingSchema)

