import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "hooks/useAuth";
import RolesView from "./RolesView";
import RolesForm from "./RolesForm";
import URLS from "services/Utils/urls";
import useComponent from "hooks/useComponent";
import Snackbar from "components/Snackbar/Snackbar";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "salary", headerName: "Salary", flex: 1, minWidth: 150 },
];

const Roles = () => {
  const { auth } = useAuth();
  const { put, post, errors, Delete, details, destroy, onChange, handleEdit, handleBack, handleDelete } = useComponent(
    URLS.roles
  );

  const formProps = {
    errors,
    details,
    onChange,
    handleBack,
  };

  const columns = useMemo(() => {
    if (auth?.permissions?.role?.includes("change") || auth?.permissions?.role?.includes("delete")) {
      return [
        ...cols,
        actionsColumn({ handleEdit, handleDelete, permissions: auth.permissions?.role, mode: "buttons" }),
      ];
    }
    return cols;
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<RolesView columns={columns} />} />
        <Route
          path="/add"
          element={
            <RolesForm
              formProps={formProps}
              topHeading={<TopHeading title="New employee role" />}
              saveButton={<SaveButton value="Save" onClick={post} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <RolesForm
              formProps={formProps}
              topHeading={<TopHeading title="Change employee role" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this employee role?" destroy={destroy} />
    </React.Fragment>
  );
};

export default Roles;
