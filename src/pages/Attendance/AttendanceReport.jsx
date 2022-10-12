import React from "react";

import useAuth from "hooks/useAuth";
import { Grid, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import useReport from "hooks/useReport";
import { TextField } from "@mui/material";
import Button from "components/Buttons/Button";
import ViewTemplate from "../Template/ViewTemplate";
import Snackbar from "components/Snackbar/Snackbar";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import InputField from "components/InputField/InputField";
import { DatePicker } from "components/DatePicker/DatePicker";
import URLS from "services/Utils/urls";

const AttendanceReport = ({ handleBack }) => {
  const { auth } = useAuth();
  const { rows, columns, details, errors, onChange, generate_report } = useReport(URLS.attendance.generate_report);

  return (
    <>
      <ViewTemplate
        reportRows={rows}
        columns={columns}
        permissions={auth.permissions.department}
        topHeading={<TopHeading title="Attendance reports" />}
      >
        <Grid container direction="column" mt={3} rowSpacing={3}>
          <Grid item container justifyContent="space-between">
            <FormControl>
              <FormLabel id="employee_selection">Employee Selection</FormLabel>
              <RadioGroup row name="employee_selection" value={details?.employee_selection ?? ""} onChange={onChange}>
                <FormControlLabel value="One employee" control={<Radio />} label="One employee" />
                <FormControlLabel value="All employees" control={<Radio />} label="All employees" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {details?.employee_selection === "One employee" ? (
            <Grid item container>
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
                  />
                }
              />
            </Grid>
          ) : undefined}

          {details?.report_type === "Salaries report" ? (
            <Grid item container justifyContent="space-between">
              <FormControl>
                <FormLabel id="status">Salary status</FormLabel>
                <RadioGroup row name="status" value={details?.status ?? ""} onChange={onChange}>
                  <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
                  <FormControlLabel value="Unpaid" control={<Radio />} label="Unpaid" />
                </RadioGroup>
              </FormControl>
            </Grid>
          ) : undefined}

          <Grid item container justifyContent="space-between">
            <FormControl>
              <FormLabel id="report_days">Select days</FormLabel>
              <RadioGroup row name="report_days" value={details?.report_days ?? ""} onChange={onChange}>
                <FormControlLabel value="Last 7 days" control={<Radio />} label="Last 7 days" />
                <FormControlLabel value="Last 15 days" control={<Radio />} label="Last 15 days" />
                <FormControlLabel value="Last month" control={<Radio />} label="Last month" />
                <FormControlLabel value="Custom" control={<Radio />} label="Custom" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {details?.report_days === "Custom" ? (
            <Grid item container spacing={5}>
              <InputField
                colSpan={3}
                label="From:"
                input={
                  <DatePicker
                    name="from_date"
                    error={errors?.from_date ?? ""}
                    value={details?.from_date ?? ""}
                    onChange={onChange}
                  />
                }
              />
              <InputField
                colSpan={3}
                label="To:"
                input={
                  <DatePicker
                    name="to_date"
                    error={errors?.to_date ?? ""}
                    value={details?.to_date ?? ""}
                    onChange={onChange}
                  />
                }
              />
            </Grid>
          ) : undefined}
          <Grid item container columnSpacing={3}>
            <Grid item>
              <Button value="Back" onClick={handleBack} />
            </Grid>
            <Grid item>
              <SaveButton value="Generate report" onClick={generate_report} />
            </Grid>
          </Grid>
        </Grid>
      </ViewTemplate>
      <Snackbar />
    </>
  );
};

export default AttendanceReport;
