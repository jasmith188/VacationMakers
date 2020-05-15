const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    guestName: {
        type: String,
        required: true
    },
    guestNumber: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    synopsis: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;

