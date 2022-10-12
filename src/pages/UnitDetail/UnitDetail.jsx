import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import useComponent from "hooks/useComponent";
import Snackbar from "components/Snackbar/Snackbar";
import UnitDetailView from "./UnitDetailView";
import UnitDetailForm from "./UnitDetailForm";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "user", headerName: "Created by", flex: 1, minWidth: 150 },
];

const UnitDetail = () => {
  const { auth } = useAuth();
  const { put, post, errors, Delete, details, destroy, onChange, handleEdit, handleBack, handleDelete } = useComponent(
    URLS.units
  );

  const formProps = {
    errors,
    details,
    onChange,
    handleBack,
  };

  const columns = useMemo(() => {
    if (auth?.permissions?.unit?.includes("change") || auth?.permissions?.unit?.includes("delete")) {
      return [
        ...cols,
        actionsColumn({ handleEdit, handleDelete, permissions: auth.permissions?.unit, mode: "buttons" }),
      ];
    }
    return cols;
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<UnitDetailView columns={columns} />} />
        <Route
          path="/add"
          element={
            <UnitDetailForm
              formProps={formProps}
              topHeading={<TopHeading title="New unit" />}
              saveButton={<SaveButton value="Save" onClick={post} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <UnitDetailForm
              formProps={formProps}
              topHeading={<TopHeading title="Change unit" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this unit?" destroy={destroy} />
    </React.Fragment>
  );
};

export default UnitDetail;
