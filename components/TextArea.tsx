import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";

interface TextAreaProps {
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  style?: CSSProperties;
  disabled?: boolean;
  rows?: number;
  value: string | number | undefined;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  errors?: Record<string, any>;
  touched?: Record<string, any>;

  minHeight?: string;
  autoFocus?: boolean;
  ariaLabel?: string;
}

const getValueFromPath = (object: any, path: string) => {
  return path.split(".").reduce((result, key) => result?.[key], object);
};

const TextArea = ({
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
  rows = 6,
  errors,
  touched,
}: TextAreaProps) => {
  let TextAreaError = false;
  let TextAreaTouched = false;
  const deepErrorValue = getValueFromPath(errors, name);
  if (errors && (errors[name] || deepErrorValue)) {
    TextAreaError = true;
  }
  const deepTouchedValue = getValueFromPath(touched, name);
  if (touched && (touched[name] || deepTouchedValue)) {
    TextAreaTouched = true;
  }

  return (
    <Box width="100%">
      <textarea
        rows={rows}
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
      {TextAreaError && TextAreaTouched && <Typography sx={{ color: "#E22828", pl: 3 }}>{errors?.[name] || getValueFromPath(errors, name)}</Typography>}
    </Box>
  );
};

export default TextArea;
