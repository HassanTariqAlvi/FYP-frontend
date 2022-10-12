import React, { useMemo } from "react";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import TopHeading from "components/TopHeading/TopHeading";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "apply_date", headerName: "Apply date", flex: 1, minWidth: 150 },
  { field: "loan_amount", headerName: "Loan amount", flex: 1, minWidth: 150 },
  { field: "status", headerName: "Status", flex: 1, minWidth: 150 },
];

const LoanStatusView = ({ approveLoan, rejectLoan }) => {
  const { auth } = useAuth();

  const columns = useMemo(() => [...cols, actionsColumn({ approveLoan, rejectLoan, mode: "loan_buttons" })], []);

  return (
    <ViewTemplate
      url={URLS.loan.api_address + "?status=Pending"}
      columns={columns}
      permissions={auth?.permissions?.loan}
      topHeading={<TopHeading title="Loan application approval" />}
    />
  );
};

export default LoanStatusView;
