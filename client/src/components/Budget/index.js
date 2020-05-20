import React, { useState, useEffect } from "react"
import transaction from "../../utils/transaction"
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { TransactionList, ListItem } from "../../components/TransactionList";
import { Input, TextArea, FormBtn } from "../../components/TransactionForm";
import TransactionDeleteBtn from "../../components/TransactionDeleteBtn";
import "../Budget/index.css"

function Budget() {
  // Setting our component's initial state
  const [transactions, setTransactions] = useState([])
  const [formObject, setFormObject] = useState({})
  const [totalPrice, setTotalPrice] = useState(0)

  // Load all transactions and store them with setBooks
  useEffect(() => {
    loadTransactions()
  }, [])

  // Loads all transactions and sets them to transactions
  function loadTransactions() {
    transaction.getTransactions()
      .then(res => {
        let total = 0;
        console.log("TEST" + res.data);
        res.data.forEach(item => {
          total += parseInt(item.price)
        })
        console.log(total)
        setTotalPrice(total)

        setTransactions(res.data)
      }

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
    <div>
      <div className="row">
        <div className="col-lg-5">
          <Card style={{ width: '18rem' }}>
            <Card.Title>What Should I do on Vacation?</Card.Title>
            <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name"
              />
              <Input
                onChange={handleInputChange}
                name="location"
                placeholder="Location"
              />
              <Input
                onChange={handleInputChange}
                name="price"
                placeholder="Price"
              />
              <Input
                onChange={handleInputChange}
                name="dates"
                placeholder="Dates (Optional)"
              />
              <FormBtn
                disabled={!(formObject.name && formObject.location)}
                onClick={handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Card>
        </div>
        <div className="col-lg-5">
          <Card style={{ width: '18rem' }}>
            <Card.Title>Things I Have Planned</Card.Title>

            {transactions.length ? (
              <TransactionList>
                {transactions.map(transaction => (
                  <ListItem key={transaction._id}>
                    <Link to={"/transaction/" + transaction._id}>
                      <strong>
                        {transaction.name} in {transaction.location} for {transaction.price} on {transaction.dates}
                      </strong>

                    </Link>
                    <TransactionDeleteBtn onClick={() => deleteTransaction(transaction._id)} />
                  </ListItem>
                ))}
              </TransactionList>
            ) : (
                <h5>Nothing Planned Yet...</h5>
              )}
          </Card>
        </div>
        <div className="col-lg-2">
          <Card style={{ width: '18rem' }}>
            <Card.Title>Total Cost </Card.Title>
            <p> Total Cost: ${totalPrice} </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Budget