// Booking means 'reserva'

const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,

    // Used to be approved or not
    approved: Boolean, 

    // User relationship
    user: { // user who booking a spot
        type: mongoose.Schema.Types.ObjectId, // this is the id in mongodb (ex,: {"_id": "5d95dbe45434b80af1c309f4", ...)
        ref: 'User' // just a reference
    },

    // Spot relationship
    spot: { // spot to be reserved
        type: mongoose.Schema.Types.ObjectId, // this is the id in mongodb (ex,: {"_id": "5d95dbe45434b80af1c309f4", ...)
        ref: 'Spot' // just a reference
    },
})

module.exports = mongoose.model('UseBookingSchemar', BookingSchema);