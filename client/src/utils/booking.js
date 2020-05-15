import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/booking");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/booking/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/booking/" + id);
  },
  // Saves a booking to the database
  saveBook: function(bookingData) {
    return axios.post("/api/booking", bookingData);
  }
};
