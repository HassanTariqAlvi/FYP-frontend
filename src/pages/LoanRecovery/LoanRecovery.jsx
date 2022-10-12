import React from "react";
import { Routes, Route } from "react-router-dom";

import URLS from "services/Utils/urls";
import LoanRecoveryForm from "./LoanRecoveryForm";
import LoanRecoveryView from "./LoanRecoveryView";
import Snackbar from "components/Snackbar/Snackbar";
import LoanRecoveryReport from "./LoanRecoveryReport";
import SaveButton from "components/Buttons/SaveButton";
import { useLoanRecovery } from "hooks/useLoanRecovery";
import TopHeading from "components/TopHeading/TopHeading";

const LoanRecovery = () => {
  const { put, post, errors, Delete, details, getData, destroy, onChange, handleBack } = useLoanRecovery(
    URLS.loan_recovery
  );

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
        <Route path="/" element={<LoanRecoveryView />} />
        <Route
          path="/add"
          element={
            <LoanRecoveryForm
              formProps={formProps}
              topHeading={<TopHeading title="Loan recovery application" />}
              saveButton={<SaveButton value="Save" onClick={post} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <LoanRecoveryForm
              formProps={formProps}
              topHeading={<TopHeading title="Change loan installment details" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
        <Route path="/report" element={<LoanRecoveryReport handleBack={handleBack} />} />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this record?" destroy={destroy} />
    </React.Fragment>
  );
};

export default LoanRecovery;
