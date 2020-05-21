import React, { useState, useEffect } from "react"
import transaction from "../../utils/transaction"
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from "react-router-dom";
import { TransactionList, ListItem } from "../../components/TransactionList";
import { Input, TextArea, FormBtn } from "../../components/TransactionForm";
import TransactionDeleteBtn from "../../components/TransactionDeleteBtn";
import "../Budget/index.css"

function Budget(props) {
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
        price: formObject.price,
        departure: formObject.departure,
        arrival: formObject.arrival,
        origin: formObject.origin,
        destination: formObject.destination

      })
        .then(res => loadTransactions())
        .catch(err => console.log(err));
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-5">

          <div className="card">
            <Form className="budget-form">

              <Form.Group controlId="formBasicEmail">
                <Form.Label as="h4">Type in the correct information from above</Form.Label>
                <Input
                  onChange={handleInputChange}
                  name="departure"
                  placeholder="Date of Departure e.g.: 06-20-20"
                />
                
                
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Input
                  onChange={handleInputChange}
                  name="arrival"
                  placeholder="Date of Arrival e.g.: 06-27-20"
                />
                
                
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
               
                <Input
                  onChange={handleInputChange}
                  name="name"
                  placeholder="Name of hotel, restaurant, airport or attraction"
                />
                
                
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                
                <Input
                  onChange={handleInputChange}
                  name="location"
                  placeholder="Location of where your activity is"
                />
                
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                
                <Input
                  onChange={handleInputChange}
                  name="origin"
                  placeholder="Departure of Flight (Flights only)"
                />
                
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                
                <Input
                  onChange={handleInputChange}
                  name="destination"
                  placeholder="Destination of Flight (Flights only)"
                />
                
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Input
                  onChange={handleInputChange}
                  name="price"
                  placeholder="Price of what you chose"
                />
                <Form.Text className="text-muted">
                  (Restaurant prices are an estimate of two guests including gratuity).
    </Form.Text>
              </Form.Group>

              
              <FormBtn
                disabled={!(formObject.name && formObject.location)}
                onClick={handleFormSubmit}
              >
                Submit
              </FormBtn>
            </Form>
          </div>
        </div>
        <div className="col-lg-4">
        <Card style={{ width: '18rem' }}>
        <Card.Header as="h4">Things I have planned for this vacation</Card.Header>
        <ListGroup variant="flush">
            {transactions.length ? (
              <TransactionList>
                {transactions.map(transaction => (
                  <ListItem key={transaction._id}>
                    <div to={"/transaction/" + transaction._id}>
                     
                        On {transaction.departure} at {transaction.arrival} {transaction.name} in {transaction.location} to {transaction.destination} for ${transaction.price}  
                     

                    </div>
                    <TransactionDeleteBtn onClick={() => deleteTransaction(transaction._id)} />
                  </ListItem>
                ))}

                <div>
                  {props.userAddedRestaurant}
                </div>
              </TransactionList>

            ) : (
                <h5>Nothing Planned Yet...</h5>
              )}
              </ListGroup>
          </Card>
        </div>
        <div className="col-3">
          <div className="card">
            <h4>The Total Cost Of Your Trip  </h4>
            <p> Total Cost: ${totalPrice} </p>
          </div>
        </div>

      </div>
    </div >
  );
}

export default Budget