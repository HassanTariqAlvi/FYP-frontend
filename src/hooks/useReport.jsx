import { useState } from "react";
import { useForm } from "./useForm";
import URLS from "services/Utils/urls";
import { useDispatch } from "react-redux";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { failedSnackbar } from "features/Snackbar/snackbarSlice";

const useReport = (url) => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const { details, setDetails, errors, setErrors, onChange } = useForm();

  const generate_report = async () => {
    try {
      const response = await axiosPrivate.post(url, details);
      const { status_code, columns, data } = response.data;
      if (status_code === 200) {
        setErrors(null);
        setRows(data);
        setColumns(columns);
      }
    } catch (error) {
      if (!error?.response) {
        dispatch(failedSnackbar("No server response. Please try again."));
      } else if ("non_field_errors" in error?.response?.data) {
        dispatch(failedSnackbar(error.response.data.non_field_errors));
      } else {
        setErrors(error.response.data);
        if ("detail" in error.response.data) {
          dispatch(failedSnackbar(error.response.data.detail));
        }
      }
    }
  };
  return { rows, columns, details, setDetails, errors, onChange, generate_report };
};

export default useReport;
