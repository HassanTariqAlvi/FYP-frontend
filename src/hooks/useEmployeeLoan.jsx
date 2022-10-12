import React, { useState } from "react";
import { useEmployeeData } from "./useEmployeeData";
import { useForm } from "./useForm";
import { useAPI } from "./useAPI";
import URLS from "services/Utils/urls";

const initialLoanDetailTable = {
  "Issue date": "-",
  "Loan amount": "-",
  "Issued by": "-",
};

export const useEmployeeLoan = (initialDetails) => {
  const [loanDetailTable, setLoanDetailTable] = useState(initialLoanDetailTable);
  const { retrieveAPI } = useAPI();
  const { employeeData, fetchEmployee, clearEmployee, employeeToTable } = useEmployeeData();
  const { details, setDetails, errors, setErrors, onChange, clearForm } = useForm(initialDetails);

  const getLoanDetail = async () => {
    const response = await fetchEmployee(details.employee);
    const { success, result } = response;
    if (success) {
      employeeToTable(response, setErrors);
      retrieveAPI(URLS.loan, 3).then((response) => {
        setLoanDetailTable(response.result[0]);
      });
    } else {
      setErrors(result);
    }
  };

  return {
    errors,
    details,
    onChange,
    employeeData,
    getLoanDetail,
    loanDetailTable,
  };
};
