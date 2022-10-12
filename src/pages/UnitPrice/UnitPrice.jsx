import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import useComponent from "hooks/useComponent";
import UnitPriceView from "./UnitPriceView";
import UnitPriceForm from "./UnitPriceForm";
import Snackbar from "components/Snackbar/Snackbar";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "unit", headerName: "Unit name", flex: 1, minWidth: 150 },
  { field: "department", headerName: "Department", flex: 1, minWidth: 150 },
  { field: "criteria", headerName: "Criteria", flex: 1, minWidth: 150 },
  { field: "price", headerName: "Price", flex: 1, minWidth: 150 },
  { field: "user", headerName: "Created by", flex: 1, minWidth: 150 },
];

const UnitPrice = () => {
  const { auth } = useAuth();
  const { put, post, errors, Delete, details, destroy, onChange, handleEdit, handleBack, handleDelete } = useComponent(
    URLS.units_price
  );

  const formProps = {
    errors,
    details,
    onChange,
    handleBack,
  };

  const columns = useMemo(() => {
    if (auth?.permissions?.unitprice?.includes("change") || auth?.permissions?.unitprice?.includes("delete")) {
      return [
        ...cols,
        actionsColumn({ handleEdit, handleDelete, permissions: auth.permissions?.unitprice, mode: "buttons" }),
      ];
    }
    return cols;
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<UnitPriceView columns={columns} />} />
        <Route
          path="/add"
          element={
            <UnitPriceForm
              formProps={formProps}
              topHeading={<TopHeading title="New unit price" />}
              saveButton={<SaveButton value="Save" onClick={post} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <UnitPriceForm
              formProps={formProps}
              topHeading={<TopHeading title="Change unit price" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this unit price?" destroy={destroy} />
    </React.Fragment>
  );
};

export default UnitPrice;
