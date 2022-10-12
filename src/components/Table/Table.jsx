import React from "react";
import { Table as MuiTable, TableBody, TableRow, TableCell, TableHead, TableContainer } from "@mui/material";

export const RowTable = ({ data }) => {
  return (
    <TableContainer>
      <MuiTable>
        <TableBody>
          {data &&
            Object.entries(data).map(([key, value], index) => (
              <TableRow key={key}>
                <TableCell sx={{ fontWeight: 700 }}>{key !== "image" ? key : ""}</TableCell>
                <TableCell>{key === "image" ? <img src={value} alt="EmployeeImage" width={120} /> : value}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export const ColumnTable = ({ data }) => {
  return (
    <TableContainer>
      <MuiTable>
        <TableHead>
          <TableRow>
            {data &&
              Object.keys(data).map((value, index) => (
                <TableCell key={index}>{value !== "image" ? value : ""}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {data &&
              Object.values(data).map((value, index) => (
                <TableCell key={index}>
                  {value.includes("http") ? <img src={value} alt="EmployeeImage" width={90} /> : value}
                </TableCell>
              ))}
          </TableRow>
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
