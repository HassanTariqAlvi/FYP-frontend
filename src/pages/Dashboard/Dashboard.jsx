import React, { useMemo } from "react";
import { Typography, Grid } from "@mui/material";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import Card from "components/Card/Card";
import useLogFile from "hooks/useLogFile";

import Button from "components/Buttons/Button";
import Snackbar from "components/Snackbar/Snackbar";
import PaymentsIcon from "@mui/icons-material/Payments";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

const Dashboard = () => {
  const { auth } = useAuth();
  const { generateLogFile } = useLogFile();
  const cardsData = useMemo(
    () => [
      {
        id: 1,
        title: "Daily Work",
        path: URLS.daily_work.home,
        permission: auth?.permissions?.dailywork,
        icon: <PendingActionsIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 2,
        title: "Salaries management",
        path: URLS.salary.home,
        permission: auth?.permissions?.salary,
        icon: <PaymentsIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 3,
        title: "Attendance",
        path: URLS.attendance.home,
        permission: auth?.permissions?.attendance,
        icon: <FactCheckIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 4,
        title: "Units management",
        path: URLS.units_home,
        permission: auth?.permissions?.unitprice,
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 5,
        title: "Loan management",
        path: URLS.loan.home,
        permission: auth?.permissions?.loan || auth?.permissions?.loanrecovery,
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 6,
        title: "Employees",
        path: URLS.employee_details.home,
        permission: auth?.permissions?.employee,
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 7,
        title: "Reports",
        path: URLS.reports,
        permission:
          auth?.permissions?.attendance?.includes("generateReport") ||
          auth?.permissions?.salary?.includes("generateReport") ||
          auth?.permissions?.dailywork?.includes("generateReport"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 8,
        title: "Users",
        path: URLS.user.home,
        permission: auth?.permissions?.user,
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
    ],
    []
  );
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h5" sx={{ marginY: "1.5em", color: "company.main" }}>
          Dashboard
        </Typography>
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
      {auth?.is_superuser ? (
        <Grid item mt={3}>
          <Button value="Generate log file" onClick={generateLogFile} />
        </Grid>
      ) : undefined}
      <Snackbar />
    </Grid>
  );
};

export default Dashboard;
