import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Typography, type SxProps, type Theme } from "@mui/material";
import { type Dayjs } from "dayjs";

interface DatePickerProps {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  label?: string | React.ReactElement;
  name: string;
  minDate?: Dayjs;
  disabled?: boolean;
  disablePast?: boolean;
  disableFuture?: boolean;
  format?: string;
  error?: Record<string, any>;
  touched?: Record<string, any>;
  maxDate?: Dayjs | undefined;
  hiddenLabel?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme> | undefined;
  variant?: "filled" | "standard" | "outlined";
}

const IDatePicker = ({
  onChange,
  value,
  error,
  name,
  label,
  minDate,
  maxDate,
  format = "DD/MM/YYYY",
  sx,
  hiddenLabel,
  disabled,
  touched,
  onBlur,
  variant,
  disablePast = false,
  disableFuture = false,
}: DatePickerProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (!disabled) {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  let hasError = false;
  let hasTouched = false;

  if (error?.[name]) {
    hasError = true;
  }

  if (touched?.[name]) {
    hasTouched = true;
  }

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker<Dayjs>
          label={label}
          value={value}
          open={open}
          onOpen={handleOpen}
          disabled={disabled}
          onClose={handleClose}
          onChange={onChange}
          maxDate={maxDate}
          minDate={minDate}
          format={format}
          disablePast={disablePast}
          disableFuture={disableFuture}
          slotProps={{ textField: { variant: variant || "filled" } }}
          sx={{
            borderRadius: "0.5rem",
            fontSize: "2rem",
            width: "100%",
            border: "1px solid #E4E6E8",
            "&:hover": {
              backgroundColor: "#fff",
            },
            "& .MuiInputBase-root-MuiOutlinedInput-root.Mui-error": {
              border: "2px solid #A73636",
            },
            "& .MuiFilledInput-root.Mui-error": {
              border: "2px solid #A73636",
            },
            "& .MuiFilledInput-root, .MuiInputBase-root": {
              backgroundColor: "#fff !important",
              fontSize: "1rem",
              overflow: "hidden",
              width: "100%",
              fontWeight: "700",
              textAlign: "left",
              borderRadius: "0.5rem",
              "&:hover": {
                backgroundColor: "#fff",
              },
              "&.Mui-focused": {
                borderRadius: "0.5rem",
                border: "2px solid #E77A0C",
                backgroundColor: "#fff",
              },
            },
            "& .MuiFilledInput-root:before": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root:after": {
              borderBottom: "none",
            },
            "&.MuiFormLabel-root MuiInputLabel-root.Mui-error": {
              color: "rgba(0, 0, 0, 0.6) !important",
            },
          }}
        />
      </LocalizationProvider>
      {error && hasError && hasTouched && <Typography sx={{ color: "#A73636", mt: 1, fontSize: "14px" }}>{error[name]}</Typography>}
    </Box>
  );
};

export default IDatePicker;
