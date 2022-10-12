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
import Select from "components/Select/Select";

const months = [
  {
    id: 1,
    name: "January",
  },
  {
    id: 2,
    name: "Feburary",
  },
  {
    id: 3,
    name: "March",
  },
  {
    id: 4,
    name: "April",
  },
  {
    id: 5,
    name: "May",
  },
  {
    id: 6,
    name: "June",
  },
  {
    id: 7,
    name: "July",
  },
  {
    id: 8,
    name: "August",
  },
  {
    id: 9,
    name: "September",
  },
  {
    id: 10,
    name: "October",
  },
  {
    id: 11,
    name: "November",
  },
  {
    id: 12,
    name: "December",
  },
];

const date = new Date();
let years = [];
let id = 1;
for (let i = 2000; i <= date.getFullYear(); i++) {
  years.push({
    id: id,
    name: i,
  });
  id++;
}

const SalaryReport = ({ handleBack }) => {
  const { auth } = useAuth();
  const { rows, columns, details, errors, onChange, generate_report } = useReport(URLS.salary.generate_report);

  return (
    <>
      <ViewTemplate
        reportRows={rows}
        columns={columns}
        permissions={auth.permissions.department}
        topHeading={<TopHeading title="Salary reports" />}
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

          <Grid item container justifyContent="space-between">
            <FormControl>
              <FormLabel id="status">Salary status</FormLabel>
              <RadioGroup row name="status" value={details?.status ?? ""} onChange={onChange}>
                <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
                <FormControlLabel value="Unpaid" control={<Radio />} label="Unpaid" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item container spacing={5}>
            <InputField
              colSpan={6}
              label="Month:"
              input={
                <Select
                  width="100%"
                  name="month"
                  error={errors?.month ?? ""}
                  value={details?.month ?? ""}
                  onChange={onChange}
                >
                  {months}
                </Select>
              }
            />
            <InputField
              colSpan={6}
              label="Year:"
              input={
                <Select
                  width="100%"
                  name="year"
                  error={errors?.year ?? ""}
                  value={details?.year ?? ""}
                  onChange={onChange}
                >
                  {years}
                </Select>
              }
            />
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

export default SalaryReport;
