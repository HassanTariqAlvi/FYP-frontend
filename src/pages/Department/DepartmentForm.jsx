import React from "react";
import { Grid, TextField } from "@mui/material";

import Button from "components/Buttons/Button";
import InputField from "components/InputField/InputField";
import FormTemplate from "../Template/FormTemplate";

const DepartmentForm = ({ formProps, topHeading, saveButton }) => {
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
            label="Department name:"
            error={errors?.name}
            input={
              <TextField
                fullWidth
                autoFocus
                name="name"
                error={errors?.name ? true : false}
                helperText={errors?.name ?? ""}
                value={details?.name ?? ""}
                onChange={onChange}
              />
            }
          />
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default DepartmentForm;
