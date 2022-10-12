import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import URLS from "services/Utils/urls";
import DailyWorkView from "./DailyWorkView";
import DailyWorkForm from "./DailyWorkForm";
import DailyWorkHome from "./DailyWorkHome";
import IFrame from "components/IFrame/IFrame";
import DailyWorkPrint from "./DailyWorkPrint";
import DailyWorkReport from "./DailyWorkReport";
import { useDailyWork } from "hooks/useDailyWork";
import Snackbar from "components/Snackbar/Snackbar";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const cols = [
  { field: "employee_name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "date", headerName: "Date", type: "date", flex: 1, minWidth: 150 },
  { field: "unit_name", headerName: "Unit name", flex: 1, minWidth: 150 },
  { field: "total_pieces", headerName: "Total units", type: "number", flex: 1, minWidth: 150 },
  {
    field: "price_per_unit",
    headerName: "Price/Unit",
    type: "number",
    flex: 1,
    minWidth: 150,
  },
  { field: "total_amount", headerName: "Total amount", type: "number", flex: 1, minWidth: 150 },
  { field: "user", headerName: "Created by", flex: 1, minWidth: 150 },
];

const DailyWork = () => {
  const { put, post, errors, Delete, details, getData, destroy, units, criteria, onChange, handleBack } = useDailyWork(
    URLS.daily_work
  );

  const handleSearch = (e) => {
    if (details?.employee !== "") {
      getData();
    }
  };
  const formProps = {
    errors,
    details,
    units,
    criteria,
    onChange,
    handleBack,
    handleSearch,
  };

  const columns = useMemo(() => [...cols], []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<DailyWorkHome />} />
        <Route path="/details" element={<DailyWorkView columns={columns} />} />
        <Route
          path="/add"
          element={
            <DailyWorkForm
              formProps={formProps}
              topHeading={<TopHeading title="Daily work report" />}
              saveButton={<SaveButton value="Save" onClick={post} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <DailyWorkForm
              formProps={formProps}
              topHeading={<TopHeading title="Change employee details" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
        <Route path="/report" element={<DailyWorkReport handleBack={handleBack} />} />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this entry?" destroy={destroy} />
      <IFrame>
        <DailyWorkPrint />
      </IFrame>
    </React.Fragment>
  );
};

export default DailyWork;
