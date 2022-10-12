import { useDispatch } from "react-redux";

import useComponent from "./useComponent";
import useAxiosPrivate from "./useAxiosPrivate";
import { getLoanTable, resetLoanTable } from "../features/LoanTable/loanTableSlice";
import { getEmployeeTable, resetEmployeeTable } from "../features/EmployeeTable/employeeTableSlice";

export const useLoanRecovery = (url) => {
  const axiosPrivate = useAxiosPrivate();
  const {
    put,
    post,
    errors,
    Delete,
    details,
    destroy,
    onChange,
    handleEdit,
    handleBack,
    clearForm,
    clearErrors,
    handleDelete,
    updateErrors,
    updateDetails,
    handleImageChange,
  } = useComponent(url);
  const dispatch = useDispatch();

  const getData = async () => {
    if (details !== null && details?.employee !== "") {
      try {
        const response = await axiosPrivate.get(url.add_loan_recovery.replace("id", details.employee));
        const { employee_data, loan_detail } = response.data;
        dispatch(getEmployeeTable(employee_data));
        dispatch(getLoanTable(loan_detail));
        clearErrors();
      } catch (error) {
        updateErrors({ employee: error.response.data.detail });
        dispatch(resetEmployeeTable());
        dispatch(resetLoanTable());
      }
    }
  };

  return {
    put,
    post,
    errors,
    Delete,
    details,
    getData,
    destroy,
    onChange,
    handleEdit,
    handleBack,
    clearForm,
    clearErrors,
    handleDelete,
    updateErrors,
    updateDetails,
    handleImageChange,
  };
};
