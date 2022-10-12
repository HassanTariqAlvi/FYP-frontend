import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import Snackbar from "components/Snackbar/Snackbar";
import EmployeeDetailView from "./EmployeeDetailView";
import EmployeeDetailForm from "./EmployeeDetailForm";
import SaveButton from "components/Buttons/SaveButton";
import useEmployeeDetail from "hooks/useEmployeeDetail";
import TopHeading from "components/TopHeading/TopHeading";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 200 },
  { field: "department", headerName: "Department", flex: 1, minWidth: 150 },
  { field: "phone_no", headerName: "Phone #", flex: 1, minWidth: 150 },
  { field: "cnic", headerName: "CNIC", flex: 1, minWidth: 150 },
  { field: "gender", headerName: "Gender", flex: 1, minWidth: 150 },
  { field: "employee_type", headerName: "Category", flex: 1, minWidth: 150 },
  { field: "role", headerName: "Designation", flex: 1, minWidth: 150 },
  { field: "joining_date", headerName: "Joining date", flex: 1, minWidth: 150 },
  { field: "city", headerName: "City", flex: 1, minWidth: 150 },
  { field: "address", headerName: "Address", flex: 1, minWidth: 350 },
  { field: "imagePath", headerName: "Image path", flex: 1, minWidth: 350, hide: true },
  { field: "image", headerName: "Image", flex: 1, minWidth: 350, hide: true },
];

const EmployeeDetail = () => {
  const { auth } = useAuth();
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
    handleDelete,
    handleImageChange,
  } = useEmployeeDetail(URLS.employee_details);

  const formProps = {
    errors,
    details,
    onChange,
    handleBack,
    handleImageChange,
  };

  const columns = useMemo(() => {
    if (auth?.permissions?.employee?.includes("change") || auth?.permissions?.employee?.includes("delete")) {
      return [
        ...cols,
        actionsColumn({ handleEdit, handleDelete, permissions: auth?.permissions?.employee, mode: "buttons" }),
      ];
    }
    return cols;
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<EmployeeDetailView columns={columns} />} />
        <Route
          path="/add"
          element={
            <EmployeeDetailForm
              formProps={formProps}
              topHeading={<TopHeading title="New employee" />}
              saveButton={<SaveButton value="Save" onClick={post} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <EmployeeDetailForm
              formProps={formProps}
              topHeading={<TopHeading title="Change employee details" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this employee?" destroy={destroy} />
    </React.Fragment>
  );
};

export default EmployeeDetail;
