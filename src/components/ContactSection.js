import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="contact-section my-5">
      <h1 className="text-center">Contact me!</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name :</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email :</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@xyz.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="message">Message :</Label>
          <Input
            type="textarea"
            name="text"
            id="message"
            placeholder="Enter your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormGroup>

        <Button color="outline-dark" size="lg">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactSection;
