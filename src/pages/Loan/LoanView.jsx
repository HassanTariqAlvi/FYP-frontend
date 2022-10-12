import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "apply_date", headerName: "Apply date", flex: 1, minWidth: 150 },
  { field: "loan_amount", headerName: "Loan amount", flex: 1, minWidth: 150 },
  { field: "status", headerName: "Status", flex: 1, minWidth: 150 },
  { field: "user", headerName: "Created by", flex: 1, minWidth: 150 },
];

const LoanView = ({ handleEdit, handleDelete }) => {
  const { auth } = useAuth();

  const columns = useMemo(
    () => [...cols, actionsColumn({ handleEdit, handleDelete, permissions: auth?.permissions.loan, mode: "buttons" })],
    []
  );

  return (
    <ViewTemplate
      url={URLS.loan.api_address}
      columns={columns}
      permissions={auth?.permissions?.loan}
      topHeading={<TopHeading title="Loan application details" />}
      button={<SaveButton component={Link} to={URLS.loan.add} value="Apply for loan" />}
    />
  );
};

export default LoanView;
