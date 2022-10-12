import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useForm } from "./useForm";
import useGetApi from "./useGetApi";
import { useDelete } from "./useDelete";
import useAxiosPrivate from "./useAxiosPrivate";
import { resetLoanTable } from "../features/LoanTable/loanTableSlice";
import { resetSalaryTable } from "../features/SalaryTable/salaryTableSlice";
import { resetEmployeeTable } from "../features/EmployeeTable/employeeTableSlice";
import { successSnackbar, failedSnackbar } from "../features/Snackbar/snackbarSlice";
import { resetAttendanceTable } from "../features/AttendanceTable/attendanceTableSlice";
import { resetDailyWorkData } from "features/DailyWorkPrintData/dailyWorkPrintDataSlice";

const useComponent = (url) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fetchTableData } = useGetApi();
  const axiosPrivate = useAxiosPrivate();
  const {
    details,
    errors,
    setDetails,
    setErrors,
    onChange,
    clearForm,
    updateErrors,
    updateDetails,
    clearErrors,
    handleImageChange,
  } = useForm();
  const { Delete, setOpenDelete } = useDelete(clearForm);

  useEffect(() => {
    return () => {
      clearForm();
      dispatch(resetLoanTable());
      dispatch(resetSalaryTable());
      dispatch(resetEmployeeTable());
      dispatch(resetDailyWorkData());
      dispatch(resetAttendanceTable());
    };
  }, []);

  const handleBack = () => {
    clearForm();
    dispatch(resetLoanTable());
    dispatch(resetSalaryTable());
    dispatch(resetEmployeeTable());
    dispatch(resetDailyWorkData());
    dispatch(resetAttendanceTable());
    navigate(url.home);
  };

  const handleEdit = (params) => {
    setDetails(params.row);
    navigate(url.edit);
  };

  const handleDelete = (params) => {
    setDetails(params.row);
    setOpenDelete(true);
  };

  const post = async (event, formData = null, modified_request = false, callback = () => {}, modified_url = null) => {
    try {
      let response;
      if (modified_request) {
        response = await axiosPrivate.post(modified_url !== null ? modified_url : url.api_address, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        response = await axiosPrivate.post(modified_url !== null ? modified_url : url.api_address, details);
      }
      const { status_code, message } = response.data;
      if (status_code === 201) {
        callback();
        clearForm();

        navigate(url.home);
        dispatch(resetLoanTable());
        dispatch(resetSalaryTable());
        dispatch(resetEmployeeTable());
        dispatch(resetAttendanceTable());
        dispatch(successSnackbar(message));
      }
    } catch (error) {
      if (!error?.response) {
        dispatch(failedSnackbar("No server response. Please try again."));
      } else if ("non_field_errors" in error.response.data) {
        dispatch(failedSnackbar(error.response.data.non_field_errors));
      } else {
        setErrors(error.response.data);
        if ("detail" in error.response.data) {
          dispatch(failedSnackbar(error.response.data.detail));
        }
      }
    }
  };

  const put = async (event, formData = null, modified_request = false, callback = () => {}, modified_url = null) => {
    try {
      let response;
      if (modified_request) {
        response = await axiosPrivate.put(url.api_address + `${details.id}/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        response = await axiosPrivate.put(url.api_address + `${details.id}/`, details);
      }
      const { status_code, message } = response.data;
      if (status_code === 200) {
        callback();
        clearForm();

        navigate(url.home);
        dispatch(successSnackbar(message));
        dispatch(resetEmployeeTable());
        dispatch(resetLoanTable());
      }
    } catch (error) {
      if (!error?.response) {
        dispatch(failedSnackbar("No server response. Please try again."));
      } else if ("non_field_errors" in error.response.data) {
        dispatch(failedSnackbar(error.response.data.non_field_errors));
      } else if ("detail" in error.response.data) {
        dispatch(failedSnackbar(error.response.data.detail));
      } else {
        setErrors(error.response.data);
      }
    }
  };

  const destroy = async () => {
    try {
      const response = await axiosPrivate.delete(url.api_address + `${details.id}/`, details);
      const { status_code, message } = response.data;
      if (status_code === 204) {
        dispatch(successSnackbar(message));
        fetchTableData(url.api_address);
      }
    } catch (error) {
      if (!error?.response) {
        dispatch(failedSnackbar("No server response. Please try again."));
      } else if ("detail" in error.response.data) {
        dispatch(failedSnackbar(error.response.data.detail));
      }
    } finally {
      clearForm();
    }
  };
  return {
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
  };
};

export default useComponent;
