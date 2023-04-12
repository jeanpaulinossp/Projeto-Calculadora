import React, { useState } from "react";
import { Container } from "./styles";

const Input = ({ label, name, value, onChange }) => {
  return (
    <Container>
      <input type="text" id={name} value={value} onChange={onChange} required />
    </Container>
  );
};

export default Input;
