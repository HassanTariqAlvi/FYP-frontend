import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { Fragment, useState, useEffect } from "react";

import useAuth from "hooks/useAuth";
import useDate from "hooks/useDate";

const h5 = {
  margin: "0",
  fontSize: "0.8rem",
  fontFamily: "sans-serif",
  lineHeight: 1.6,
  letterSpacing: "0.0075em",
  fontWeight: 700,
};
const h6 = {
  margin: 0,
  fontSize: "0.7rem",
  fontFamily: "sans-serif",
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: "0.00938em",
};

const td = {
  fontFamily: "sans-serif",
  fontWeight: 500,
  lineHeight: "1.5rem",
  letterSpacing: "0.01071em",
  display: "table-cell",
  verticalAlign: "inherit",
  borderBottom: "1px solid rgba(224, 224, 224, 1)",
  textAlign: "left",
  padding: "16px",
  color: "rgba(0, 0, 0, 0.87)",
  fontSize: "0.7rem",
  paddingTop: "2px",
  paddingBottom: "2px",
  paddingLeft: 0,
};

const initialDetails = [
  {
    id: 1,
    title: "Employee ID:",
    value: "-",
    mt: 8,
  },
  {
    id: 2,
    title: "Employee Name:",
    value: "-",
  },
  {
    id: 3,
    title: "Department:",
    value: "-",
  },
];

const SalaryPrint = () => {
  const { auth } = useAuth();
  const current_date = useDate();
  const details = useSelector((state) => state.details);
  const salaryData = useSelector((state) => state.salaryTable);
  const employeeTable = useSelector((state) => state.employeeTable);

  const [employeeData, setEmployeeData] = useState(initialDetails);
  useEffect(() => {
    setEmployeeData([
      {
        id: 1,
        title: "Employee ID:",
        value: details?.employee ?? "-",
        mt: 8,
      },
      {
        id: 2,
        title: "Employee Name:",
        value: employeeTable?.Name ?? "-",
      },
      {
        id: 3,
        title: "Department:",
        value: employeeTable?.Department ?? "-",
      },
    ]);
  }, [employeeTable]);

  return (
    <Fragment>
      <div style={{ maxWidth: "340px" }}>
        <div style={{ textAlign: "center" }}>
          <h5 style={h5}>Rubbani Brothers Industry</h5>
          <h6 style={h6}>Contact No: 0314-9509065</h6>
          <h6 style={h6}>Sialkot, Pakistan</h6>
        </div>
        <Divider />
        <div style={{ textAlign: "center" }}>
          <h5 style={h5}>Salary slip</h5>
        </div>
        {employeeData.map((item) => (
          <div style={{ marginTop: item?.mt ? item.mt : 0 }} key={item.id}>
            <div style={{ display: "grid", gridTemplateColumns: "100px auto" }}>
              <h6 style={h6}>{item.title}</h6>
              <h6 style={h6}>{item.value}</h6>
            </div>
          </div>
        ))}
        <Divider />
        <div style={{ textAlign: "center" }}>
          <h5 style={{ ...h5, marginTop: 8, marginBottom: 8 }}>Salary details</h5>
        </div>

        {Object.entries(salaryData).map(([key, value], index) => (
          <div style={{ display: "grid", gridTemplateColumns: "75% auto" }} key={index}>
            <h6 style={{ ...h6, fontWeight: "bold" }}>{key}</h6>
            <h6 style={h6}>{value}</h6>
          </div>
        ))}
        <Divider />

        {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "50px auto" }}>
            <div item>
              <h6 style={{ ...h6, fontWeight: 700 }}>Total:</h6>
            </div>
            <div item>
              <h6 style={{ ...h6, fontWeight: 700 }}>Rs. 25,000/-</h6>
            </div>
          </div>
        </div> */}

        <div style={{ display: "grid", gridTemplateColumns: "70px auto" }}>
          <div item>
            <h6 style={{ ...h6, fontWeight: 700 }}>Created by:</h6>
          </div>
          <div item>
            <h6 style={h6}>{auth?.user}</h6>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "40px auto" }}>
          <div item>
            <h6 style={{ ...h6, fontWeight: 700 }}>Date:</h6>
          </div>
          <div item>
            <h6 style={h6}>{current_date}</h6>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SalaryPrint;
