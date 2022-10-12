import React from "react";
import { useSelector } from "react-redux";
import { RowsTable, RowTable } from "../Table/Table";

export const LoanTable = () => {
  const data = useSelector((state) => state.loanTable);
  return <RowTable data={data} />;
};
