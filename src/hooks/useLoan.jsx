import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useComponent from "./useComponent";
import useAxiosPrivate from "./useAxiosPrivate";
import { getLoanTable, resetLoanTable } from "../features/LoanTable/loanTableSlice";
import { getEmployeeTable, resetEmployeeTable } from "../features/EmployeeTable/employeeTableSlice";

export const useLoan = (url) => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const {
    put,
    post,
    details,
    errors,
    Delete,
    destroy,
    onChange,
    handleBack,
    clearErrors,
    handleDelete,
    updateErrors,
    updateDetails,
    ...rest
  } = useComponent(url);
  const dispatch = useDispatch();

  const handleEdit = (params) => {
    dispatch(getEmployeeTable(params.row.employee_data));
    rest.handleEdit(params);
  };

  const getData = async (data = null) => {
    if (details !== null && details?.employee !== "") {
      try {
        const response = await axiosPrivate.get(
          url.add_loan.replace("id", data === null ? details.employee : data.employee)
        );
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
    handleDelete,
  };
};
