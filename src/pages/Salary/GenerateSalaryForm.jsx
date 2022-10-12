import React from "react";
import { Grid } from "@mui/material";

import Button from "components/Buttons/Button";
import FormTemplate from "../Template/FormTemplate";
import InputField from "components/InputField/InputField";
import { DatePicker } from "components/DatePicker/DatePicker";

const GenerateSalaryForm = ({ formProps, topHeading, saveButton }) => {
  const { details, errors, onChange, handleBack } = formProps;

  return (
    <FormTemplate
      topHeading={topHeading}
      saveButton={saveButton}
      backButton={<Button value="Back" onClick={handleBack} />}
    >
      <Grid item container columnSpacing={5}>
        <InputField
          colSpan={3}
          label="Salary generate date:"
          input={
            <DatePicker
              name="generate_date"
              error={errors?.generate_date ?? ""}
              value={details?.generate_date ?? ""}
              onChange={onChange}
            />
          }
        />
      </Grid>
    </FormTemplate>
  );
};

export default GenerateSalaryForm;
