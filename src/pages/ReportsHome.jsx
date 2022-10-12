import React, { useMemo } from "react";
import { Grid } from "@mui/material";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import Card from "components/Card/Card";
import TopHeading from "components/TopHeading/TopHeading";
import PriceChangeIcon from "@mui/icons-material/PriceChange";

const ReportsHome = () => {
  const { auth } = useAuth();

  const cardsData = useMemo(
    () => [
      {
        id: 2,
        title: "Attendance report",
        path: URLS.attendance.report,
        permission: auth?.permissions?.attendance?.includes("generateReport"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 11,
        title: "Salaries report",
        path: URLS.salary.report,
        permission: auth?.permissions?.salary?.includes("generateReport"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 6,
        title: "Daily work report",
        path: URLS.daily_work.report,
        permission: auth?.permissions?.dailywork?.includes("generateReport"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
    ],
    []
  );

  return (
    <>
      <Grid container direction="column" rowSpacing={4}>
        <Grid item>
          <TopHeading title="Reports management" />
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
    </>
  );
};

export default ReportsHome;
