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
import URLS from "services/Utils/urls";

const LoanDetailReport = ({ handleBack }) => {
  const { auth } = useAuth();
  const { rows, columns, details, errors, onChange, generate_report } = useReport(URLS.loan_detail.generate_report);

  return (
    <>
      <ViewTemplate
        reportRows={rows}
        columns={columns}
        permissions={auth.permissions.department}
        topHeading={<TopHeading title="Loan detail reports" />}
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

export default LoanDetailReport;
