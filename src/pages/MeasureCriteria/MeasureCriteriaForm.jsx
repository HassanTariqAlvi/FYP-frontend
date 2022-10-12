import React from "react";
import { Grid, TextField } from "@mui/material";

import Button from "components/Buttons/Button";
import FormTemplate from "../Template/FormTemplate";
import InputField from "components/InputField/InputField";

const MeasureCriteriaForm = ({ formProps, topHeading, saveButton }) => {
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
            label="Criteria name:"
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
          <InputField
            label="Quantity:"
            error={errors?.quantity}
            input={
              <TextField
                fullWidth
                type="number"
                name="quantity"
                error={errors?.quantity ? true : false}
                helperText={errors?.quantity ?? ""}
                value={details?.quantity ?? ""}
                onChange={onChange}
              />
            }
          />
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default MeasureCriteriaForm;
