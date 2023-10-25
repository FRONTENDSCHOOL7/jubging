import { ErrorMessage, InputField } from "./RoundInputStyle";

const RoundInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <>
      <InputField
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default RoundInput;
