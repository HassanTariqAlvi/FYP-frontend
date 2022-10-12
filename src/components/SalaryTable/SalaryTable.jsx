import React from "react";
import { useSelector } from "react-redux";
import { RowTable } from "../Table/Table";

export const SalaryTable = () => {
  const data = useSelector((state) => state.salaryTable);
  return <RowTable data={data} />;
};
