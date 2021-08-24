import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Results } from "../Results";

export const Lookup = () => {
  return <div>
    <h1>VTS Demo App</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter an address</Form.Label>
        <Form.Control type="text" placeholder="Enter an address..." />
        <Form.Text className="text-muted">
          Ex. 123 Elm st,  ... New York, NY
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Lookup
  </Button>
    </Form>
    <hr/>
    <Results />
  </div>;
};
