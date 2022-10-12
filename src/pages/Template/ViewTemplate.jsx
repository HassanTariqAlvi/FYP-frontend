import React, { useEffect } from "react";
import { Grid } from "@mui/material";

import useGetApi from "hooks/useGetApi";
import { useDispatch } from "react-redux";
import DataTable from "components/DataTable/DataTable";
import { setDataTable } from "features/DataTable/dataTableSlice";

const ViewTemplate = ({ url, reportRows, columns, topHeading, children, button, permissions }) => {
  const dispatch = useDispatch();
  const { rows, loading, fetchTableData, abortController } = useGetApi();

  useEffect(() => {
    if (!reportRows) {
      fetchTableData(url);
      return () => {
        abortController();
        dispatch(setDataTable([]));
      };
    }
  }, []);

  return (
    <React.Fragment>
      {permissions?.includes("view") || permissions?.includes("add") || permissions?.includes("approveLoan") ? (
        <Grid container direction="column" rowSpacing={4}>
          <Grid item>{topHeading}</Grid>

          {children}

          <Grid item alignSelf="flex-end">
            {permissions?.includes("add") ? button : null}
          </Grid>

          {permissions?.includes("view") || permissions.includes("viewLoanApplicationStatus") ? (
            <Grid item>
              <DataTable loading={loading} rows={reportRows ? reportRows : rows} columns={columns} />
            </Grid>
          ) : null}
        </Grid>
      ) : (
        <h3>Access denied</h3>
      )}
    </React.Fragment>
  );
};

export default ViewTemplate;
