import React, { useEffect } from "react";
import { Grid, TextField } from "@mui/material";

import Select from "components/Select/Select";
import Button from "components/Buttons/Button";
import FormTemplate from "../Template/FormTemplate";
import InputField from "components/InputField/InputField";

const RolesForm = ({ formProps, topHeading, saveButton }) => {
  const { details, errors, onChange, handleBack } = formProps;

  return (
    <FormTemplate
      topHeading={topHeading}
      saveButton={saveButton}
      backButton={<Button value="Back" onClick={handleBack} />}
    >
      <Grid container direction="column">
        <Grid item container spacing={5}>
          <InputField
            label="Name:"
            error={errors?.name}
            input={
              <TextField
                fullWidth
                name="name"
                error={errors?.name ? true : false}
                helperText={errors?.name ?? ""}
                value={details?.name ?? ""}
                onChange={onChange}
              />
            }
          />
          <InputField
            label="Salary:"
            error={errors?.salary}
            input={
              <TextField
                fullWidth
                name="salary"
                error={errors?.salary ? true : false}
                helperText={errors?.salary ?? ""}
                value={details?.salary ?? ""}
                onChange={onChange}
              />
            }
          />
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default RolesForm;
