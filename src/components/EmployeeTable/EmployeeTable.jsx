import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { ColumnTable, RowTable } from "../Table/Table";
import useMediaQuery from "@mui/material/useMediaQuery";

export const EmployeeTable = () => {
  const theme = useTheme();
  const data = useSelector((state) => state.employeeTable);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return matches ? <ColumnTable data={data} /> : <RowTable data={data} />;
};
