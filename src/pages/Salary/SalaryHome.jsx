import React, { useMemo } from "react";
import { Grid } from "@mui/material";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import Card from "components/Card/Card";
import TopHeading from "components/TopHeading/TopHeading";
import PriceChangeIcon from "@mui/icons-material/PriceChange";

const SalaryHome = () => {
  const { auth } = useAuth();

  const cardsData = useMemo(
    () => [
      {
        id: 1,
        title: "Calculate salaries",
        path: URLS.salary.generate_salary_form,
        permission: auth?.permissions?.salary?.includes("add"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 2,
        title: "Salaries details",
        path: URLS.salary.details,
        permission: auth?.permissions?.salary?.includes("view"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 3,
        title: "Salary reports",
        path: URLS.salary.report,
        permission: auth?.permissions?.salary?.includes("generateReport"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
    ],
    []
  );

  return (
    <>
      {auth?.permissions?.salary ? (
        <Grid container direction="column" rowSpacing={4}>
          <Grid item>
            <TopHeading title="Salaries management" />
          </Grid>

          <Grid item container direction={{ xs: "column", sm: "row" }} spacing={3} justifyContent="flex-start">
            {cardsData.map((card) =>
              card.permission ? (
                <Grid item key={card.id} sm={6} lg="auto">
                  <Card card={card} />
                </Grid>
              ) : undefined
            )}
          </Grid>
        </Grid>
      ) : (
        <h3>Access denied</h3>
      )}
    </>
  );
};

export default SalaryHome;
