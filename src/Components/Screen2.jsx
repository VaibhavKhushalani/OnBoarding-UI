import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
const Screen2 = ({ setStep }) => {
  return (
    <>
      <h3>Let's set up a home for all your work</h3>
      <p className="text">You can always create another workspace later.</p>

      <Form className="form-main">
        <Form.Group className="mb-3">
          <Form.Label>Workspace Name</Form.Label>
          <Form.Control type="text" placeholder="Eden" />
        </Form.Group>

        <Form.Label>
          <div className="d-flex">
            {" "}
            Workspace URL <h6> (optional) </h6>
          </div>
        </Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>www.eden.com/</InputGroup.Text>
          <Form.Control type="text" placeholder="Example" />
        </InputGroup>

        <Button className="btn" onClick={() => setStep(3)} type="button">
          Create Workspace
        </Button>
      </Form>
    </>
  );
};

export default Screen2;
