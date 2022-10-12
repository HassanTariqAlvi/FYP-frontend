import React from "react";
import { Routes, Route } from "react-router-dom";

import URLS from "services/Utils/urls";
import AttendanceView from "./AttendanceView";
import AttendanceForm from "./AttendanceForm";
import AttendanceHome from "./AttendanceHome";
import AttendanceReport from "./AttendanceReport";
import Snackbar from "components/Snackbar/Snackbar";
import { useAttendance } from "hooks/useAttendance";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import ManualAttendanceForm from "./ManualAttendanceForm";

const columns = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "emp_in", headerName: "In", flex: 1, minWidth: 150 },
  { field: "emp_out", headerName: "Out", flex: 1, minWidth: 150 },
  { field: "worked_hours", headerName: "Total hours", flex: 1, minWidth: 150 },
  { field: "date", headerName: "Date", flex: 1, minWidth: 150 },
];

const Attendance = () => {
  const { post, errors, Delete, details, destroy, onChange, handleBack, getData, post_manual_attendance } =
    useAttendance(URLS.attendance);

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
        <Route path="/" element={<AttendanceHome />} />
        <Route path="/details" element={<AttendanceView columns={columns} />} />
        <Route
          path="/add"
          element={
            <AttendanceForm
              formProps={formProps}
              topHeading={<TopHeading title="Mark attendance" />}
              saveButton={<SaveButton value="Mark attendance" onClick={post} />}
            />
          }
        />
        <Route
          path="/add_manual_attendance"
          element={
            <ManualAttendanceForm
              formProps={formProps}
              topHeading={<TopHeading title="Mark attendance" />}
              saveButton={<SaveButton value="Mark attendance" onClick={post_manual_attendance} />}
            />
          }
        />
        <Route path="/report" element={<AttendanceReport handleBack={handleBack} />} />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this attendance record?" destroy={destroy} />
    </React.Fragment>
  );
};

export default Attendance;
