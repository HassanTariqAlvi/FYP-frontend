import React from "react";
import { MenuItem, FormControl, FormHelperText, Select } from "@mui/material";

function SelectField({ children, error, width, ...rest }) {
  return (
    <FormControl variant="standard" sx={{ width: width ? width : "100%" }}>
      <Select {...rest}>
        {children?.map((option, index) => (
          <MenuItem key={index} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}

export default React.memo(SelectField);
