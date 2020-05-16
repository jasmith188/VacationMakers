import React from 'react'
import ReactDOM from 'react'

import { Button, Form } from 'react-bootstrap';

function Search() {

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search Cities</Form.Label>
                    <Form.Control type="email" placeholder="Cities" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );

}

export default Search