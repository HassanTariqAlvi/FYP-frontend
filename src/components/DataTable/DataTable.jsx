import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid-pro";
import LinearProgress from "@mui/material/LinearProgress";

const defaultColumns = [{ field: "id", headerName: "ID", type: "number", width: 90 }];

export default function DataTable({ rows, columns, loading }) {
  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={[...defaultColumns, ...columns]}
        // columns={[]}
        pageSize={20}
        rowsPerPageOptions={[20]}
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar, LoadingOverlay: LinearProgress }}
        loading={loading}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
  );
}
