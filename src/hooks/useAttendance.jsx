import { useDispatch } from "react-redux";

import useComponent from "./useComponent";
import useAxiosPrivate from "./useAxiosPrivate";
import { getEmployeeTable, resetEmployeeTable } from "features/EmployeeTable/employeeTableSlice";
import { getAttendanceTable, resetAttendanceTable } from "../features/AttendanceTable/attendanceTableSlice";

export const useAttendance = (url) => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { clearErrors, updateErrors, details, ...rest } = useComponent(url);

  const getData = async () => {
    if (details !== null && details?.employee !== "") {
      try {
        const response = await axiosPrivate.get(url.get_attendance_details.replace("id", details.employee));
        const { attendance_data, employee_details } = response.data;
        dispatch(getAttendanceTable(attendance_data));
        dispatch(getEmployeeTable(employee_details));
        clearErrors();
      } catch (error) {
        updateErrors({ employee: error.response.data.detail });
        dispatch(resetAttendanceTable());
      }
    }
  };

  const post_manual_attendance = (event) => {
    rest.post(event, null, false, () => {}, url.manual_attendance.replace("id", details?.employee));
  };

  const post_overtime = (event) => {
    rest.post(event, null, false, () => {}, url.add_overtime.replace("id", details?.employee));
  };

  return {
    ...rest,
    details,
    getData,
    clearErrors,
    updateErrors,
    post_overtime,
    post_manual_attendance,
  };
};
