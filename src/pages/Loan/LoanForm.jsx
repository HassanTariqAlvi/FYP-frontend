import React from "react";
import { Grid, TextField, Hidden } from "@mui/material";

import Button from "components/Buttons/Button";
import FormTemplate from "../Template/FormTemplate";
import TopHeading from "components/TopHeading/TopHeading";
import InputField from "components/InputField/InputField";
import { LoanTable } from "components/LoanTable/LoanTable";
import { DatePicker } from "components/DatePicker/DatePicker";
import { EmployeeTable } from "components/EmployeeTable/EmployeeTable";

const LoanForm = ({ formProps, topHeading, saveButton }) => {
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
        <Grid item sm={12}>
          <TopHeading title="Loan details" />
        </Grid>
        <Grid item>
          <LoanTable />
        </Grid>
        <Grid item container spacing={5}>
          <InputField
            label="Amount:"
            error={errors?.loan_amount}
            input={
              <TextField
                fullWidth
                type="number"
                name="loan_amount"
                error={errors?.loan_amount ? true : false}
                helperText={errors?.loan_amount ?? ""}
                value={details?.loan_amount ?? ""}
                onChange={onChange}
              />
            }
          />
          <InputField
            label="Apply date:"
            input={
              <DatePicker
                name="apply_date"
                error={errors?.apply_date ?? ""}
                value={details?.apply_date ?? ""}
                onChange={onChange}
              />
            }
          />
          <InputField
            colSpan={12}
            label="Description:"
            error={errors?.description}
            input={
              <TextField
                multiline
                rows={3}
                fullWidth
                name="description"
                error={errors?.description ? true : false}
                helperText={errors?.description ?? ""}
                value={details?.description ?? ""}
                onChange={onChange}
              />
            }
          />
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default LoanForm;
