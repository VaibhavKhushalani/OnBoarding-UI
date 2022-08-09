import React from "react";
import { Form, Button } from "react-bootstrap";
const Screen4 = ({ setStep }) => {
  return (
    <>
      <div className="check">✔</div>
      <h3>Congratulations, Eren!</h3>
      <p className="text mb-5">
        You have completed onboarding, you can start using the Eden!
      </p>

      <Form className="form-main">
        <Button className="btn" onClick={() => setStep(1)} type="button">
          Launch Eden
        </Button>
      </Form>
    </>
  );
};

export default Screen4;
