import React from "react";
import { Form, Button } from "react-bootstrap";
const Screen3 = ({ setStep }) => {
  return (
    <>
      <h3>How are you planning to use Eden?</h3>
      <p className="text">We'll streamline your experience accordingly.</p>

      <Form className="form-main">
        <div className="select-box row">
          <div className="col">
            <img src="./user.png" alt="user" />
            <h4> For myself</h4>
            <p>Write better.Think more clearly.Stay organized.</p>
          </div>
          <div className="col">
            <img src="./multipleuser.png" alt="multipleuser" />
            <h4> With my team</h4>
            <p>Wikis, docs, tasks {`&`} projects, all in one place.</p>
          </div>
        </div>
        <Button className="btn" onClick={() => setStep(4)} type="button">
          Create Workspace
        </Button>
      </Form>
    </>
  );
};

export default Screen3;
