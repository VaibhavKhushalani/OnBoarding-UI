import React from "react";
import { Form, Button } from "react-bootstrap";
const Screen1 = ({ setStep }) => {
  return (
    <>
      <h3>Welcome! First things first...</h3>
      <p className="text">You can always change them later</p>

      <Form className="form-main">
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Steve Jobs" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Display Name</Form.Label>
          <Form.Control type="text" placeholder="Steve" />
        </Form.Group>
        <Button className="btn" onClick={() => setStep(2)} type="button">
          Create Workspace
        </Button>
      </Form>
    </>
  );
};

export default Screen1;
