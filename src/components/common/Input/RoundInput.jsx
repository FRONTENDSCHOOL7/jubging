import { Label } from "./InputStyle";
import { ErrorMessage, InputField } from "./RoundInputStyle";

const RoundInput = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  hidden,
}) => {
  return (
    <>
      <Label htmlFor={id} hidden={hidden}>
        {label}
      </Label>
      <InputField
        id={id}
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
