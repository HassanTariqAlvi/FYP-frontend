import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import useComponent from "hooks/useComponent";
import EmployeeTypeForm from "./EmployeeTypeForm";
import EmployeeTypeView from "./EmployeeTypeView";
import Snackbar from "components/Snackbar/Snackbar";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "user", headerName: "Created by", flex: 1, minWidth: 150 },
];

const EmployeeType = () => {
  const { auth } = useAuth();
  const { put, post, errors, Delete, details, destroy, onChange, handleEdit, handleBack, handleDelete } = useComponent(
    URLS.employee_types
  );

  const formProps = {
    errors,
    details,
    onChange,
    handleBack,
  };

  const columns = useMemo(() => {
    if (auth?.permissions?.employeetype?.includes("change") || auth?.permissions?.employeetype?.includes("delete")) {
      return [
        ...cols,
        actionsColumn({ handleEdit, handleDelete, permissions: auth.permissions?.employeetype, mode: "buttons" }),
      ];
    }
    return cols;
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<EmployeeTypeView columns={columns} />} />
        <Route
          path="/add"
          element={
            <EmployeeTypeForm
              formProps={formProps}
              topHeading={<TopHeading title="New employee category" />}
              saveButton={<SaveButton value="Save" onClick={post} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <EmployeeTypeForm
              formProps={formProps}
              topHeading={<TopHeading title="Change employee category" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this category?" destroy={destroy} />
    </React.Fragment>
  );
};

export default EmployeeType;
