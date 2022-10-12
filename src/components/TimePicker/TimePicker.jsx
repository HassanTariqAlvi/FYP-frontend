import React from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const time_to_target = (newDate, name) => {
  return {
    target: {
      name: name,
      value: newDate,
      type: "timePicker",
    },
  };
};

export const TimePicker = (props) => {
  const { disabled, label, error, value, name, onChange } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiTimePicker
        disabled={disabled}
        sx={{ fontSize: "1rem" }}
        label={label}
        value={value}
        inputFormat="p"
        onChange={(newDate) => {
          const e = time_to_target(newDate, name);
          onChange(e);
        }}
        renderInput={(params) => (
          <TextField {...params} helperText={error} error={error ? true : false} sx={{ minWidth: "100%" }} />
        )}
      />
    </LocalizationProvider>
  );
};
