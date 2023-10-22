import React from "react";
import { InputField, ErrorMessage, Label, InputContainer } from "./InputStyle";

const Input = ({ label, type, name, value, onChange, placeholder, error }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
