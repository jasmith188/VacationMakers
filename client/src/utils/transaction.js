import axios from "axios";

export default {
  // Gets all transactions
  getBooks: function() {
    return axios.get("/api/transaction");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/transaction/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/transaction/" + id);
  },
  // Saves a booking to the database
  saveBook: function(transactionData) {
    return axios.post("/api/transaction", transactionData);
  }
};
