import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useComponent from "./useComponent";
import useAxiosPrivate from "./useAxiosPrivate";
import { successSnackbar, failedSnackbar } from "features/Snackbar/snackbarSlice";
import { getEmployeeTable, resetEmployeeTable } from "features/EmployeeTable/employeeTableSlice";

const password = require("secure-random-password");

const useUser = (url) => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    errors,
    post,
    Delete,
    details,
    destroy,
    onChange,
    clearForm,
    handleBack,
    clearErrors,
    handleDelete,
    updateErrors,
    updateDetails,
  } = useComponent(url);
  const [permissions, setPermissions] = useState({
    all: [],
    allowed: [],
  });

  const handleEdit = async (params) => {
    navigate(url.edit);
    try {
      const response = await axiosPrivate.get(url.edit_user.replace("id", params.row.employee));
      const { employee_data, account_data, allowed_permissions, other_permissions } = response.data;
      dispatch(getEmployeeTable(employee_data));
      setPermissions({ all: other_permissions, allowed: allowed_permissions });
      updateDetails(account_data);
      clearErrors();
    } catch (error) {
      updateErrors({ employee: error.response.data.detail });
      dispatch(resetEmployeeTable());
      updateDetails(null);
    }
  };

  const getData = async () => {
    if (details !== null && details?.employee !== "") {
      try {
        const response = await axiosPrivate.get(url.add_user.replace("id", details.employee));
        const { employee_data, permissions_list } = response.data;
        dispatch(getEmployeeTable(employee_data));
        setPermissions({ ...permissions, all: permissions_list });
        updateDetails({ ...details, username: employee_data.CNIC });
        clearErrors();
      } catch (error) {
        updateErrors({ employee: error.response.data.detail });
        dispatch(resetEmployeeTable());
        updateDetails(null);
      }
    }
  };

  const generate_password = () => {
    let new_password = password.randomPassword({
      length: 10,
      characters: [password.lower, password.upper, password.digits],
    });
    updateDetails({ ...details, password: new_password });
  };

  const put = async () => {
    try {
      const response = await axiosPrivate.put(url.api_address + `${details.id}/`, {
        ...details,
      });
      clear();
      clearForm();
      dispatch(successSnackbar(response.data.message));
      navigate(url.home);
    } catch (error) {
      updateErrors(error.response.data);
      if (!error?.response) {
        dispatch(failedSnackbar("No server response. Please try again."));
      } else if ("non_field_errors" in error.response.data) {
        dispatch(failedSnackbar(error.response.data.non_field_errors));
      } else if ("detail" in error.response.data) {
        dispatch(failedSnackbar(error.response.data.detail));
      } else {
        updateErrors(error.response.data);
      }
    }
  };

  const clear = () => {
    setPermissions({
      all: [],
      allowed: [],
    });
  };

  return {
    clear,
    post,
    Delete,
    destroy,
    put,
    errors,
    details,
    getData,
    onChange,
    handleBack,
    permissions,
    handleEdit,
    handleDelete,
    setPermissions,
    generate_password,
  };
};

export default useUser;
