import axios from "axios";

export default {
  // Gets all transactions
  getTransactions: function() {
    return axios.get("/api/transactions");
  },
  // Gets the book with the given id
  getTransaction: function(id) {
    return axios.get("/api/transactions/" + id);
  },
  // Deletes the book with the given id
  deleteTransaction: function(id) {
    return axios.delete("/api/transactions/" + id);
  },
  // Saves a booking to the database
  saveTransaction: function(transactionData) {
    return axios.post("/api/transactions", transactionData);
  }
};
