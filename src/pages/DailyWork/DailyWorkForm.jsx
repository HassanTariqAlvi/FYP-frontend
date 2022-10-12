import React from "react";
import { Grid, TextField, Hidden } from "@mui/material";

import Select from "components/Select/Select";
import Button from "components/Buttons/Button";
import FormTemplate from "../Template/FormTemplate";
import InputField from "components/InputField/InputField";
import { DatePicker } from "components/DatePicker/DatePicker";
import { EmployeeTable } from "components/EmployeeTable/EmployeeTable";

const DailyWorkForm = ({ formProps, topHeading, saveButton }) => {
  const { details, errors, onChange, handleBack, handleSearch, units, criteria } = formProps;

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
            label="Emloyee id:"
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
        <Grid item container spacing={5}>
          <InputField
            label="Date:"
            input={
              <DatePicker name="date" error={errors?.date ?? ""} value={details?.date ?? ""} onChange={onChange} />
            }
          />
          <InputField
            label="Unit name:"
            error={errors?.unit}
            input={
              <Select
                label="Unit name"
                name="unit"
                error={errors?.unit ?? ""}
                value={details?.unit ?? ""}
                onChange={onChange}
              >
                {units}
              </Select>
            }
          />
          <InputField
            label="Measure criteria:"
            error={errors?.criteria}
            input={
              <Select
                label="Measure criteria"
                name="criteria"
                error={errors?.criteria ?? ""}
                value={details?.criteria ?? ""}
                onChange={onChange}
              >
                {criteria}
              </Select>
            }
          />
          <InputField
            label="Price per unit:"
            error={errors?.price}
            input={
              <TextField
                disabled
                fullWidth
                name="price_per_unit"
                error={errors?.price_per_unit ? true : false}
                helperText={errors?.price_per_unit ?? ""}
                value={details?.price_per_unit ?? ""}
                onChange={onChange}
              />
            }
          />
          <InputField
            label="Quantity:"
            error={errors?.total_pieces}
            input={
              <TextField
                fullWidth
                name="total_pieces"
                error={errors?.total_pieces ? true : false}
                helperText={errors?.total_pieces ?? ""}
                value={details?.total_pieces ?? ""}
                onChange={onChange}
              />
            }
          />
          <InputField
            label="Total amount:"
            error={errors?.total_amount}
            input={
              <TextField
                disabled
                fullWidth
                name="total_amount"
                error={errors?.total_amount ? true : false}
                helperText={errors?.total_amount ?? ""}
                value={details?.total_amount ?? ""}
                onChange={onChange}
              />
            }
          />
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default DailyWorkForm;
