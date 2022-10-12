import React from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
const UserRole = (props) => {
  const { details, onChange } = props;

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={details?.is_active ? true : false} name="is_active" onChange={onChange} />}
        label="Is active"
      />
      <FormControlLabel
        control={<Checkbox checked={details?.is_staff ? true : false} name="is_staff" onChange={onChange} />}
        label="Is staff"
      />
      <FormControlLabel
        control={<Checkbox checked={details?.is_superuser ? true : false} name="is_superuser" onChange={onChange} />}
        label="Is superuser"
      />
    </FormGroup>
  );
};

export default UserRole;
