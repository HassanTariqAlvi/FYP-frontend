import React from "react";
import { Grid, TextField, Hidden } from "@mui/material";

import Button from "components/Buttons/Button";
import FormTemplate from "../Template/FormTemplate";
import InputField from "components/InputField/InputField";
import { LoanTable } from "components/LoanTable/LoanTable";
import { DatePicker } from "components/DatePicker/DatePicker";
import { EmployeeTable } from "components/EmployeeTable/EmployeeTable";

const LoanRecoveryForm = ({ formProps, topHeading, saveButton }) => {
  const { details, errors, onChange, handleBack, handleSearch } = formProps;

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
          <LoanTable />
        </Grid>
        <Grid item container spacing={5}>
          <InputField
            label="Amount deduction:"
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
          <InputField
            label="Installment date:"
            input={
              <DatePicker
                name="recovery_date"
                error={errors?.recovery_date ?? ""}
                value={details?.recovery_date ?? ""}
                onChange={onChange}
              />
            }
          />
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default LoanRecoveryForm;
