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
        id: 1,
        title: "Loan application",
        path: URLS.loan.add,
        permission: auth?.permissions?.loan?.includes("add"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 2,
        title: "Loan approval",
        path: URLS.loan.filter,
        permission: auth?.permissions?.loan?.includes("approveLoan"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 3,
        title: "Return loan",
        path: URLS.loan_recovery.home,
        permission: auth?.permissions?.loanrecovery?.includes("add"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 4,
        title: "Loan details",
        path: URLS.loan.details,
        permission: auth?.permissions?.loan?.includes("view"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 5,
        title: "Loan recovery reports",
        path: URLS.loan_recovery.report,
        permission: auth?.permissions?.loanrecovery?.includes("generateReport"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 6,
        title: "Loan detail reports",
        path: URLS.loan_detail.report,
        permission: auth?.permissions?.loandetail?.includes("generateReport"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
    ],
    []
  );

  return (
    <>
      <Grid container direction="column" rowSpacing={4}>
        <Grid item>
          <TopHeading title="Loan management" />
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
