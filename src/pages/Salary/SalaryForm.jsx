import React from "react";
import { Grid, TextField, Typography, Checkbox, FormGroup, FormControlLabel, Hidden } from "@mui/material";

import Button from "components/Buttons/Button";
import FormTemplate from "../Template/FormTemplate";
import InputField from "components/InputField/InputField";
import { SalaryTable } from "components/SalaryTable/SalaryTable";
import { EmployeeTable } from "components/EmployeeTable/EmployeeTable";

const SalaryForm = ({ formProps, topHeading, saveButton }) => {
  const { details, errors, onChange, handleBack, hasLoan, handleSearch } = formProps;

  return (
    <FormTemplate
      topHeading={topHeading}
      saveButton={saveButton}
      backButton={<Button value="Back" onClick={handleBack} />}
    >
      <Grid item container direction="column" rowSpacing={5}>
        <Grid item container={{ xs: "column", sm: "row" }} spacing={5}>
          <InputField
            colSpan={3}
            label="Employee id:"
            error={errors?.employee}
            input={
              <TextField
                fullWidth
                autoFocus
                name="employee"
                error={errors?.employee ? true : false}
                helperText={errors?.employee ?? ""}
                value={details?.employee ?? ""}
                onChange={onChange}
                onKeyDown={(event) => (event.keyCode === 13 ? handleSearch(event) : null)}
              />
            }
          />
          <Hidden mdUp>
            <Grid item>
              <Button value="Search" onClick={handleSearch} />
            </Grid>
          </Hidden>
        </Grid>
        <Grid item>
          <EmployeeTable />
        </Grid>
        <Grid item>
          <Typography variant="h6">Salary details</Typography>
        </Grid>
        <Grid item>
          <SalaryTable />
        </Grid>
        <Grid item container spacing={5}>
          {hasLoan && (
            <Grid item sm={12} alignSelf="flex-end">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={details?.is_deducted ? true : false} name="is_deducted" onChange={onChange} />
                  }
                  label="Want to deduct loan?"
                />
              </FormGroup>
            </Grid>
          )}
          {details?.is_deducted && (
            <InputField
              label="Loan deduction:"
              error={errors?.deducted_amount}
              input={
                <TextField
                  fullWidth
                  type="number"
                  name="deducted_amount"
                  error={errors?.deducted_amount ? true : false}
                  helperText={errors?.deducted_amount ?? ""}
                  value={details?.deducted_amount ?? ""}
                  onChange={onChange}
                />
              }
            />
          )}
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default SalaryForm;
