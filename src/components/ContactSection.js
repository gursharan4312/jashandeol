import React, { useState } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import Loader from "./Loader";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResoponse, setFormResponse] = useState({ color: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, message };
    setIsSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        setFormResponse({ color: "success", message: "Message Sent!" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        setFormResponse({ color: "error", message: "Someting went wrong" });
        setIsSubmitting(false);
      });
  };
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  return (
    <Container className="contact-section my-5" id="contact">
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
        {isSubmitting && <Loader />}
        {formResoponse.message !== "" && (
          <Alert color={formResoponse.color} className="m-2">
            {formResoponse.message}
          </Alert>
        )}
      </Form>
    </Container>
  );
}

export default ContactSection;
