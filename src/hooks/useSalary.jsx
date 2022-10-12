import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useComponent from "./useComponent";
import useAxiosPrivate from "./useAxiosPrivate";
import { getDetails } from "features/Details/detailsSlice";
import { getEmployeeTable, resetEmployeeTable } from "../features/EmployeeTable/employeeTableSlice";
import { getSalaryTable, resetSalaryTable, updateSalaryTable } from "../features/SalaryTable/salaryTableSlice";

export const useSalary = (url) => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const {
    errors,
    Delete,
    details,
    destroy,
    onChange,
    clearErrors,
    handleDelete,
    updateErrors,
    updateDetails,
    ...component
  } = useComponent(url);
  const [hasLoan, setHasLoan] = useState(false);

  useEffect(() => {
    if (details !== {}) {
      dispatch(getDetails(details));
    }
  }, [details]);

  useEffect(() => {
    if (hasLoan) {
      dispatch(updateSalaryTable(details));
    }
  }, [details?.deducted_amount, details?.is_deducted]);

  const handleEdit = (params) => {
    getData(params.row.employee_id, params.row.id);
    navigate(url.add);
  };

  const handleBack = () => {
    component.handleBack();
    setHasLoan(false);
  };

  const getData = async (employee = null, salary = null) => {
    try {
      const response = await axiosPrivate.post(url.get_salary_details, { employee, salary });
      const { employee_data, salary_table, salary_details } = response.data;
      dispatch(getEmployeeTable(employee_data));
      dispatch(getSalaryTable(salary_table));
      updateDetails(salary_details);
      if (salary_table["Previous loan"] !== 0) {
        setHasLoan(true);
      }
      clearErrors();
    } catch (error) {
      updateErrors({ employee: error.response.data.detail });
      dispatch(resetEmployeeTable());
      dispatch(resetSalaryTable());
    }
  };

  const put = (event) => {
    component.put(event, null, false, () => {
      window.frames[0].print();
    });
  };

  const generate_salary = (event) => {
    component.post(event, null, false, () => {}, url.api_address_generate_salary);
  };

  return {
    put,
    errors,
    Delete,
    details,
    destroy,
    getData,
    hasLoan,
    onChange,
    handleEdit,
    handleBack,
    clearErrors,
    handleDelete,
    updateErrors,
    updateDetails,
    generate_salary,
  };
};
