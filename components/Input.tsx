import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";

interface inputProps {
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  style?: CSSProperties;
  disabled?: boolean;
  value: string | number | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  errors?: Record<string, any>;
  touched?: Record<string, any>;

  minHeight?: string;
  autoFocus?: boolean;
  ariaLabel?: string;
}

const getValueFromPath = (object: any, path: string) => {
  return path.split(".").reduce((result, key) => result?.[key], object);
};

const Input = ({
  type,
  id,
  name,
  placeholder,
  required = false,
  style = {},
  disabled = false,
  autoFocus = false,
  value,
  onChange,
  onFocus,
  onBlur,

  errors,
  touched,
}: inputProps) => {
  let inputError = false;
  let inputTouched = false;
  const deepErrorValue = getValueFromPath(errors, name);
  if (errors && (errors[name] || deepErrorValue)) {
    inputError = true;
  }
  const deepTouchedValue = getValueFromPath(touched, name);
  if (touched && (touched[name] || deepTouchedValue)) {
    inputTouched = true;
  }

  return (
    <Box width="100%">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autoFocus}
        style={{
          color: "#302F2F",
          padding: "4px 24px",
          height: "52px",
          borderRadius: "4px 0px 0px 4px",
          outline: "none",
          border: "none",
          fontSize: "1.25rem",
          width: "100%",
          fontFamily: "Cormorant Garamond",
          backgroundColor: "#f4f7fd",
          ...style,
        }}
      />
      {inputError && inputTouched && <Typography sx={{ color: "#E22828", pl: 3 }}>{errors?.[name] || getValueFromPath(errors, name)}</Typography>}
    </Box>
  );
};

export default Input;
