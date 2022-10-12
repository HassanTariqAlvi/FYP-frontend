import React, { useMemo } from "react";
import { Grid } from "@mui/material";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import Card from "components/Card/Card";
import TopHeading from "components/TopHeading/TopHeading";
import PriceChangeIcon from "@mui/icons-material/PriceChange";

const AttendanceHome = () => {
  const { auth } = useAuth();

  const cardsData = useMemo(
    () => [
      {
        id: 1,
        title: "Mark Attendance",
        path: URLS.attendance.add,
        permission: auth?.permissions?.attendance?.includes("add"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 2,
        title: "Manual Attendance",
        path: URLS.attendance.add_manual_attendance,
        permission: auth?.permissions?.attendance?.includes("add"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 3,
        title: "Attendance details",
        path: URLS.attendance.details,
        permission: auth?.permissions?.attendance?.includes("view"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 4,
        title: "Over time",
        path: URLS.overtime.home,
        permission: auth?.permissions?.overtime?.includes("add"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
      {
        id: 5,
        title: "Attendance Reports",
        path: URLS.attendance.report,
        permission: auth?.permissions?.attendance?.includes("generateReport"),
        icon: <PriceChangeIcon fontSize="large" sx={{ color: "#ffc600" }} />,
      },
    ],
    []
  );

  return (
    <>
      <Grid container direction="column" rowSpacing={4}>
        <Grid item>
          <TopHeading title="Attendance management" />
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

export default AttendanceHome;
