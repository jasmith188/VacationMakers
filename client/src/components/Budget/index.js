import React, { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table'
import transaction from "../../utils/transaction"
import { Col, Row, Container } from "../../components/TransactionGrid";
import { TransactionList, ListItem } from "../../components/TransactionList";
import { Input, TextArea, FormBtn } from "../../components/TransactionForm";
import TransactionJumbotron from "../../components/TransactionJumbotron";
import TransactionDeleteBtn from "../../components/TransactionDeleteBtn";
import "../Budget/index.css"

function Budget() {
  // Setting our component's initial state
  const [transactions, setTransactions] = useState([])
  const [formObject, setFormObject] = useState({})

  // // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadTransactions()
  // }, [])

  // Loads all books and sets them to books
  function loadTransactions() {
    transaction.getTransactions()
      .then(res =>
        setTransactions(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteTransaction(id) {
    transaction.deleteTransaction(id)
      .then(res => loadTransactions())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      transaction.saveBook({
        name: formObject.name,
        location: formObject.location,
        price: formObject.price
      })
        .then(res => loadTransactions())
        .catch(err => console.log(err));
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <TransactionJumbotron>
            <h1>What Should I do on Vacation?</h1>
          </TransactionJumbotron>
          <form>
            <Input
              onChange={() => { }}
              name="name"
              placeholder="Name"
            />
            <Input
              onChange={() => { }}
              name="location"
              placeholder="Location"
            />
            <TextArea
              onChange={() => { }}
              name="price"
              placeholder="Price"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={() => { }}
            >
              Submit
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <TransactionJumbotron>
            <h1>Things I Have Planned</h1>
          </TransactionJumbotron>
          {transactions.length ? (
            <TransactionList>
              {transactions.map(transaction => {
                return (
                  <ListItem key={transaction._id}>
                    <a href={"/transactions/" + transaction._id}>
                      <strong>
                        {transaction.name} by {transaction.location}
                      </strong>
                    </a>
                    <TransactionDeleteBtn onClick={() => { }} />
                  </ListItem>
                );
              })}
            </TransactionList>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  )
}

export default Budget