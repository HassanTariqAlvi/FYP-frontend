import React from "react";
import { Grid, TextField, Hidden } from "@mui/material";

import Button from "components/Buttons/Button";
import FormTemplate from "../Template/FormTemplate";
import InputField from "components/InputField/InputField";
import TopHeading from "components/TopHeading/TopHeading";
import { TimePicker } from "components/TimePicker/TimePicker";
import { AttendanceTable } from "components/AttendanceTable/AttendanceTable";

const ManualAttendanceForm = ({ formProps, topHeading, saveButton }) => {
  const { details, errors, onChange, handleBack, handleSearch } = formProps;

  return (
    <FormTemplate
      topHeading={topHeading}
      saveButton={saveButton}
      backButton={<Button value="Back" onClick={handleBack} />}
    >
      <Grid container direction="column">
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
        <Grid item sm={12} mt={3}>
          <TopHeading title="Attendance details" />
        </Grid>
        <Grid item sm={12}>
          <AttendanceTable />
        </Grid>
        <Grid item container spacing={5} mt={0.5}>
          {/* <InputField
            label="Date:"
            input={
              <DatePicker name="date" error={errors?.date ?? ""} value={details?.date ?? ""} onChange={onChange} />
            }
          /> */}
          {/* <Grid item colSpan={6}></Grid> */}
          <InputField
            label="In:"
            input={
              <TimePicker
                name="emp_in"
                error={errors?.emp_in ?? ""}
                value={details?.emp_in ?? ""}
                onChange={onChange}
              />
            }
          />
          <InputField
            label="Out:"
            input={
              <TimePicker
                name="emp_out"
                error={errors?.emp_out ?? ""}
                value={details?.emp_out ?? ""}
                onChange={onChange}
              />
            }
          />
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default ManualAttendanceForm;
