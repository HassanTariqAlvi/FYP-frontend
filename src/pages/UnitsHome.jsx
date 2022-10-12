import React, { useMemo } from "react";
import { Grid } from "@mui/material";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import Card from "components/Card/Card";
import TopHeading from "components/TopHeading/TopHeading";
import PriceChangeIcon from "@mui/icons-material/PriceChange";

const LoanHome = () => {
  const { auth } = useAuth();

  const cardsData = useMemo(
    () => [
      {
        id: 2,
        title: "Unit details",
        path: URLS.units.home,
        permission: auth?.permissions?.unit?.includes("add"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 11,
        title: "Measure criteria",
        path: URLS.measure_criteria.home,
        permission: auth?.permissions?.measurecriteria?.includes("add"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 6,
        title: "Unit prices",
        path: URLS.units_price.home,
        permission: auth?.permissions?.loanrecovery?.includes("add"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      // {
      //   id: 15,
      //   title: "Loan details",
      //   path: URLS.loan.details,
      //   permission: auth?.permissions?.loan?.includes("view"),
      //   icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      // },
    ],
    []
  );

  return (
    <>
      <Grid container direction="column" rowSpacing={4}>
        <Grid item>
          <TopHeading title="Units management" />
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

export default LoanHome;
