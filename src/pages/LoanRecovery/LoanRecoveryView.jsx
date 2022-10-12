import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const cols = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "recovery_date", headerName: "Date", flex: 1, minWidth: 150 },
  { field: "deducted_amount", headerName: "Deducted amount", flex: 1, minWidth: 150 },
  { field: "user", headerName: "Created by", flex: 1, minWidth: 150 },
];

const LoanRecoveryView = () => {
  const { auth } = useAuth();

  const columns = useMemo(() => [...cols], []);

  return (
    <ViewTemplate
      columns={columns}
      url={URLS.loan_recovery.api_address}
      permissions={auth.permissions?.loanrecovery}
      topHeading={<TopHeading title="Loan recovery details" />}
      button={<SaveButton component={Link} to={URLS.loan_recovery.add} value="Pay loan" />}
    />
  );
};

export default LoanRecoveryView;
