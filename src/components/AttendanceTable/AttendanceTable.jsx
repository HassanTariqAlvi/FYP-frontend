import React from "react";
import { useSelector } from "react-redux";
import { RowTable } from "../Table/Table";

export const AttendanceTable = () => {
  const data = useSelector((state) => state.attendanceTable);
  return <RowTable data={data} />;
};
