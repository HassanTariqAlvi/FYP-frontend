import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import OverTimeView from "./OverTimeView";
import OverTimeForm from "./OverTimeForm";
import Snackbar from "components/Snackbar/Snackbar";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import { useOverTime } from "hooks/useOverTime";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "date", headerName: "Date", flex: 1, minWidth: 150 },
  { field: "start", headerName: "Start", flex: 1, minWidth: 150 },
  { field: "end", headerName: "End", flex: 1, minWidth: 150 },
  { field: "worked_hours", headerName: "Total hours", flex: 1, minWidth: 150 },
];

const Attendance = () => {
  const { auth } = useAuth();
  const { put, post, errors, Delete, details, destroy, onChange, handleEdit, handleDelete, handleBack, getData } =
    useOverTime(URLS.overtime);
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

  const columns = useMemo(() => {
    if (auth?.permissions?.overtime?.includes("change") || auth?.permissions?.overtime?.includes("delete")) {
      return [
        ...cols,
        actionsColumn({ handleEdit, handleDelete, permissions: auth?.permissions?.overtime, mode: "buttons" }),
      ];
    }
    return cols;
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<OverTimeView columns={columns} />} />
        <Route
          path="/add"
          element={
            <OverTimeForm
              formProps={formProps}
              topHeading={<TopHeading title="Add over time" />}
              saveButton={<SaveButton value="Save" onClick={post} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <OverTimeForm
              formProps={formProps}
              topHeading={<TopHeading title="Change over time" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this over time record?" destroy={destroy} />
    </React.Fragment>
  );
};

export default Attendance;
