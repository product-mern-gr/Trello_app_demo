import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
import './LoginInputForm.scss'

function LoginInputForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Form className='login__inputForm' noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="4" controlId="validationCustom01" className='inputForm__input'>
          <Form.Control
            required
            type="text"
            placeholder="Username..."
            defaultValue=""
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02" className='inputForm__input'>
          <Form.Control
            required
            type="password"
            placeholder="Password..."
            defaultValue=""
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>
        <Button className='inputForm_submitBtn' type="submit">Log in</Button>
      </Form>
    </div>
  );
}

export default LoginInputForm;