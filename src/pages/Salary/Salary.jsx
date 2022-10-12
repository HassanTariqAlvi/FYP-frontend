import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "hooks/useAuth";
import SalaryView from "./SalaryView";
import SalaryForm from "./SalaryForm";
import URLS from "services/Utils/urls";
import SalaryPrint from "./SalaryPrint";
import SalaryHome from "./SalaryHome";
import SalaryReport from "./SalaryReport";
import { useSalary } from "hooks/useSalary";
import IFrame from "components/IFrame/IFrame";
import Snackbar from "components/Snackbar/Snackbar";
import GenerateSalaryForm from "./GenerateSalaryForm";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import BooleanIcon from "components/BooleanIcon/BooleanIcon";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "employee_id", headerName: "Employee id", type: "number", flex: 1, minWidth: 150 },
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "from_date", headerName: "From", type: "date", flex: 1, minWidth: 150 },
  {
    field: "to_date",
    headerName: "To",
    flex: 1,
    minWidth: 150,
  },
  { field: "net_salary", headerName: "Net salary", flex: 1, minWidth: 150 },
  { field: "total_salary", headerName: "Total salary", flex: 1, minWidth: 150 },
  {
    field: "paid",
    headerName: "Paid",
    flex: 1,
    type: "boolean",
    minWidth: 150,
    renderCell: (params) => <BooleanIcon status={params.row.paid} />,
  },
  { field: "paid_by", headerName: "Paid by", flex: 1, minWidth: 150 },
  { field: "user", headerName: "Created by", flex: 1, minWidth: 150 },
];

const Salary = () => {
  const { auth } = useAuth();
  const { put, errors, Delete, details, getData, destroy, hasLoan, onChange, handleEdit, handleBack, generate_salary } =
    useSalary(URLS.salary);
  const handleSearch = (e) => {
    if (details?.employee !== "") {
      getData();
    }
  };
  const formProps = {
    errors,
    details,
    hasLoan,
    onChange,
    handleBack,
    handleSearch,
  };

  const columns = useMemo(() => {
    if (auth?.permissions?.salary?.includes("pay")) {
      return [...cols, actionsColumn({ handleEdit, mode: "salary_buttons" })];
    }
    return cols;
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SalaryHome />} />
        <Route path="/details" element={<SalaryView columns={columns} />} />
        <Route
          path="/add"
          element={
            <SalaryForm
              formProps={formProps}
              topHeading={<TopHeading title="Salary calculation" />}
              saveButton={<SaveButton value="Save" onClick={put} />}
            />
          }
        />
        <Route
          path="/generate_salary"
          element={
            <GenerateSalaryForm
              formProps={formProps}
              topHeading={<TopHeading title="Generate salaries" />}
              saveButton={<SaveButton value="Generate" onClick={generate_salary} />}
            />
          }
        />
        <Route path="/report" element={<SalaryReport handleBack={handleBack} />} />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this salary slip?" destroy={destroy} />
      <IFrame>
        <SalaryPrint />
      </IFrame>
    </React.Fragment>
  );
};

export default Salary;
