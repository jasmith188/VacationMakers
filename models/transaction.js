const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    location: {
      type: String,
      required: "Enter a place"
    },
    price: {
      type: String,
      required: "Enter a price"
    },
    departure: {
      type: String,
      required: "Enter a price"
    },
    arrival: {
      type: String,
      required: "Enter a price"
    },
    origin: {
      type: String,
      required: "Enter a price"
    },
    destination: {
      type: String,
      required: "Enter a price"
    },
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
