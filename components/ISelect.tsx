import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";

interface selectProps {
  id: string;
  name: string;
  options: { name: string; value: string }[];
  placeholder?: string;
  required?: boolean;
  style?: CSSProperties;
  disabled?: boolean;
  value: string | number | undefined;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLSelectElement>) => void;
  errors?: Record<string, any>;
  touched?: Record<string, any>;
  minHeight?: string;
  autoFocus?: boolean;
  ariaLabel?: string;
}

const getValueFromPath = (object: any, path: string) => {
  return path.split(".").reduce((result, key) => result?.[key], object);
};

const Select = ({
  id,
  name,
  placeholder,
  required = false,
  style = {},
  disabled = false,
  autoFocus = false,
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  options,
  errors,
  touched,
}: selectProps) => {
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
      {label && <Box>{label}</Box>}
      <select
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autoFocus}
        placeholder={placeholder}
        style={{
          color: "#302F2F",
          padding: "4px 8px",
          height: "40px",
          borderRadius: "4px 0px 0px 4px",
          outline: "none",
          border: "none",
          width: "100%",
          fontSize: "1.25rem",
          fontFamily: "Cormorant Garamond",
          backgroundColor: "#f4f7fd",
          ...style,
        }}
      >
        {options?.map((option) => {
          return (
            <option style={{ color: "#2C2C2C" }} value={option?.value}>
              {option?.name}
            </option>
          );
        })}
      </select>
      {inputError && inputTouched && <Typography sx={{ color: "#E22828", pl: 3 }}>{errors?.[name] || getValueFromPath(errors, name)}</Typography>}
    </Box>
  );
};

export default Select;
