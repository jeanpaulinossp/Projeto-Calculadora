import React from "react";
import { Container } from "./styles";

const Button = ({ label, onClick }) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
