import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import { Grid } from "@mui/material";

const SalaryView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      url={URLS.salary.api_address}
      columns={columns}
      permissions={auth?.permissions?.salary}
      topHeading={<TopHeading title="Salaries record" />}
    >
      {auth?.permissions?.salary?.includes("generate") ? (
        <Grid container>
          <Grid item marginTop={2} marginBottom={-4}>
            <SaveButton component={Link} to={URLS.salary.generate_salary} value="Generate salaries" />
          </Grid>
        </Grid>
      ) : null}
    </ViewTemplate>
  );
};

export default SalaryView;
