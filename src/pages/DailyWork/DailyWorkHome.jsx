import React, { useMemo } from "react";
import { Grid } from "@mui/material";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import Card from "components/Card/Card";
import TopHeading from "components/TopHeading/TopHeading";
import PriceChangeIcon from "@mui/icons-material/PriceChange";

const DailyWorkHome = () => {
  const { auth } = useAuth();

  const cardsData = useMemo(
    () => [
      {
        id: 1,
        title: "Add daily work",
        path: URLS.daily_work.add,
        permission: auth?.permissions?.dailywork?.includes("add"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 2,
        title: "Daily work details",
        path: URLS.daily_work.details,
        permission: auth?.permissions?.dailywork?.includes("view"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 3,
        title: "Daily work reports",
        path: URLS.daily_work.report,
        permission: auth?.permissions?.dailywork?.includes("generateReport"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
    ],
    []
  );

  return (
    <>
      {auth?.permissions?.dailywork ? (
        <Grid container direction="column" rowSpacing={4}>
          <Grid item>
            <TopHeading title="Daily work management" />
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

export default DailyWorkHome;
