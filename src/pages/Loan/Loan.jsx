import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import LoanHome from "./LoanHome";
import LoanView from "./LoanView";
import LoanForm from "./LoanForm";
import URLS from "services/Utils/urls";
import { useLoan } from "hooks/useLoan";
import LoanStatusView from "./LoanStatusView";
import LoanDetailReport from "./LoanDetailReport";
import { useLoanDetail } from "hooks/useLoanDetail";
import Snackbar from "components/Snackbar/Snackbar";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const Loan = () => {
  const loan_detail = useSelector((state) => state.loanTable);
  const { approveLoan, rejectLoan } = useLoanDetail();
  const { put, post, errors, Delete, details, getData, destroy, onChange, handleEdit, handleBack, handleDelete } =
    useLoan(URLS.loan);

  const handleSearch = (e) => {
    if (details?.employee !== "") {
      getData();
    }
  };

  const formProps = {
    errors,
    details,
    onChange,
    handleBack,
    handleSearch,
  };

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LoanHome />} />
        <Route path="/details" element={<LoanView handleEdit={handleEdit} handleDelete={handleDelete} />} />
        <Route
          path="/add"
          element={
            <LoanForm
              formProps={formProps}
              topHeading={<TopHeading title="Loan application" />}
              saveButton={
                <SaveButton value="Save" onClick={post} disabled={loan_detail.Eligible === "Yes" ? false : true} />
              }
            />
          }
        />
        <Route
          path="/edit"
          element={
            <LoanForm
              formProps={formProps}
              topHeading={<TopHeading title="Change loan application details" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
        <Route path="/filter" element={<LoanStatusView approveLoan={approveLoan} rejectLoan={rejectLoan} />} />
        <Route path="/report" element={<LoanDetailReport handleBack={handleBack} />} />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this loan application?" destroy={destroy} />
    </React.Fragment>
  );
};

export default Loan;
