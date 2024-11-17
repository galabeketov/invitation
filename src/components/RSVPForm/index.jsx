// src/components/RSVPForm.js

import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  margin: 50px auto;
  width: 80%;
  text-align: center;
`;

const Form = styled.form`
  max-width: 500px;
  margin: auto;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
`;

const Button = styled.button`
  padding: 12px 25px;
  background-color: #ff9a9e;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RSVPForm = () => (
  <FormWrapper>
    <h2>RSVP</h2>
    <Form
      action="https://formspree.io/f/your-form-id"
      method="POST">
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />
      <TextArea
        name="message"
        placeholder="Your Message"
        rows="4"
      />
      <Button type="submit">Send</Button>
    </Form>
  </FormWrapper>
);

export default RSVPForm;
