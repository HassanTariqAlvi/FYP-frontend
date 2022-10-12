import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import DepartmentView from "./DepartmentView";
import DepartmentForm from "./DepartmentForm";
import useComponent from "hooks/useComponent";
import Snackbar from "components/Snackbar/Snackbar";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "user", headerName: "Created by", flex: 1, minWidth: 150 },
];

const Department = () => {
  const { auth } = useAuth();
  const { put, post, errors, Delete, details, destroy, onChange, handleEdit, handleBack, handleDelete } = useComponent(
    URLS.departments
  );

  const formProps = {
    errors,
    details,
    onChange,
    handleBack,
  };

  const columns = useMemo(() => {
    if (auth?.permissions?.department?.includes("change") || auth?.permissions?.department?.includes("delete")) {
      return [
        ...cols,
        actionsColumn({ handleEdit, handleDelete, permissions: auth?.permissions?.department, mode: "buttons" }),
      ];
    }
    return cols;
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<DepartmentView columns={columns} />} />
        <Route
          path="/add"
          element={
            <DepartmentForm
              formProps={formProps}
              topHeading={<TopHeading title="Add new department" />}
              saveButton={<SaveButton value="Save" onClick={(e) => post(e)} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <DepartmentForm
              formProps={formProps}
              topHeading={<TopHeading title="Change department" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this department?" destroy={destroy} />
    </React.Fragment>
  );
};

export default Department;
