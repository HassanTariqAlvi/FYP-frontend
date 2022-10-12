import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import useComponent from "hooks/useComponent";
import Snackbar from "components/Snackbar/Snackbar";
import SaveButton from "components/Buttons/SaveButton";
import MeasureCriteriaView from "./MeasureCriteriaView";
import MeasureCriteriaForm from "./MeasureCriteriaForm";
import TopHeading from "components/TopHeading/TopHeading";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "quantity", headerName: "Quantity", flex: 1, minWidth: 150 },
  { field: "user", headerName: "Created by", flex: 1, minWidth: 150 },
];

const EmployeeType = () => {
  const { auth } = useAuth();
  const { put, post, errors, Delete, details, destroy, onChange, handleEdit, handleBack, handleDelete } = useComponent(
    URLS.measure_criteria
  );

  const formProps = {
    errors,
    details,
    onChange,
    handleBack,
  };

  const columns = useMemo(() => {
    if (
      auth?.permissions?.measurecriteria?.includes("change") ||
      auth?.permissions?.measurecriteria?.includes("delete")
    ) {
      return [
        ...cols,
        actionsColumn({ handleEdit, handleDelete, permissions: auth.permissions?.measurecriteria, mode: "buttons" }),
      ];
    }
    return cols;
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MeasureCriteriaView columns={columns} />} />
        <Route
          path="/add"
          element={
            <MeasureCriteriaForm
              formProps={formProps}
              topHeading={<TopHeading title="New measure criteria" />}
              saveButton={<SaveButton value="Save" onClick={post} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <MeasureCriteriaForm
              formProps={formProps}
              topHeading={<TopHeading title="Change measure criteria" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this criteria?" destroy={destroy} />
    </React.Fragment>
  );
};

export default EmployeeType;
