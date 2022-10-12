import React from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const date_to_target = (newDate, name) => {
  return {
    target: {
      name: name,
      value: newDate,
      type: "datePicker",
    },
  };
};

export const DatePicker = (props) => {
  const { disabled, label, error, value, name, onChange } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        disabled={disabled}
        sx={{ fontSize: "1rem" }}
        label={label}
        value={value}
        inputFormat="P"
        onChange={(newDate) => {
          const e = date_to_target(newDate, name);
          onChange(e);
        }}
        renderInput={(params) => (
          <TextField {...params} helperText={error} error={error ? true : false} sx={{ minWidth: "100%" }} />
        )}
      />
    </LocalizationProvider>
  );
};
