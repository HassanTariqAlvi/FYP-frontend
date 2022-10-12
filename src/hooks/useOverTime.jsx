import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useComponent from "./useComponent";
import useAxiosPrivate from "./useAxiosPrivate";
import { getEmployeeTable, resetEmployeeTable } from "features/EmployeeTable/employeeTableSlice";

export const useOverTime = (url) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const { clearErrors, updateErrors, details, ...rest } = useComponent(url);

  const handleEdit = (params) => {
    let start = new Date("1970-01-01 " + params.row.start).getTime();
    let end = new Date("1970-01-01 " + params.row.end).getTime();
    rest.updateDetails({ ...params.row, start, end });
    dispatch(getEmployeeTable(params.row.employee_data));
    navigate(url.edit);
  };

  const getData = async () => {
    if (details !== null && details?.employee !== "") {
      try {
        const response = await axiosPrivate.get(url.get_attendance_details.replace("id", details.employee));
        const { employee_details } = response.data;
        dispatch(getEmployeeTable(employee_details));
        clearErrors();
      } catch (error) {
        updateErrors({ employee: error.response.data.detail });
        dispatch(resetEmployeeTable());
      }
    }
  };

  return {
    ...rest,
    details,
    getData,
    clearErrors,
    updateErrors,
    handleEdit,
  };
};
