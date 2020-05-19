import React, { useState, useEffect } from "react"
import transaction from "../../utils/transaction"
import { Link } from "react-router-dom";
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

  // Load all transactions and store them with setBooks
  useEffect(() => {
    loadTransactions()
  }, [])

  // Loads all transactions and sets them to transactions
  function loadTransactions() {
    transaction.getTransactions()
      .then(res =>{
        console.log("TEST" + res.data);
        setTransactions(res.data)}
       
      )
      .catch(err => console.log(err));
  };

  // Deletes a transaction from the database with a given id, then reloads transactions from the db
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

  // When the form is submitted, use the API.saveBook method to save the transaction data
  // Then reload transactions from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.location) {
      transaction.saveTransaction({
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
              onChange= {handleInputChange}
              name="name"
              placeholder="Name"
            />
            <Input
              onChange= {handleInputChange}
              name="location"
              placeholder="Location"
            />
            <Input
              onChange={handleInputChange }
              name="price"
              placeholder="Price"
            />
            <FormBtn
              disabled={!(formObject.name && formObject.location)}
              onClick={handleFormSubmit}
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
              {transactions.map(transaction => (
                <ListItem key={transaction._id}>
                    <Link to={"/transaction/" + transaction._id}>
                      <strong>
                        {transaction.name} in {transaction.location} for {transaction.price}
                      </strong>
                    </Link>
                    <TransactionDeleteBtn onClick={() =>  deleteTransaction(transaction._id)} />
                  </ListItem>
                ))}
            </TransactionList>
          ) : (
              <h3>Nothing Planned Yet...</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}

export default Budget