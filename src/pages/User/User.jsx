import React, { useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import UserView from "./UserView";
import UserForm from "./UserForm";
import useUser from "hooks/useUser";
import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import Snackbar from "components/Snackbar/Snackbar";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import BooleanIcon from "components/BooleanIcon/BooleanIcon";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [
  { field: "username", headerName: "Username", flex: 1, minWidth: 150 },
  { field: "employee", headerName: "Employee ID", flex: 1, minWidth: 150, hide: true },
  { field: "employee_name", headerName: "Employee name", flex: 1, minWidth: 150 },
  {
    field: "is_active",
    headerName: "Is active",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => <BooleanIcon status={params.row.is_active} />,
  },
  {
    field: "is_staff",
    headerName: "Is staff",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => <BooleanIcon status={params.row.is_staff} />,
  },
  {
    field: "is_superuser",
    headerName: "Is superuser",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => <BooleanIcon status={params.row.is_superuser} />,
  },
  { field: "group", headerName: "Group name", flex: 1, minWidth: 150 },
];

const User = () => {
  const { auth } = useAuth();
  const {
    post,
    errors,
    details,
    getData,
    onChange,
    handleBack,
    permissions,
    handleEdit,
    handleDelete,
    Delete,
    destroy,
    put,
    setPermissions,
    generate_password,
  } = useUser(URLS.user);

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
    permissions,
    handleSearch,
    setPermissions,
    generate_password,
  };
  useEffect(() => {}, []);

  const columns = useMemo(() => {
    if (auth?.permissions.user?.includes("change") || auth.permissions?.user?.includes("delete")) {
      return [
        ...cols,
        actionsColumn({ handleEdit, handleDelete, permissions: auth.permissions?.user, mode: "buttons" }),
      ];
    }
    return cols;
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<UserView columns={columns} />} />
        <Route
          path="/add"
          element={
            <UserForm
              formProps={formProps}
              topHeading={<TopHeading title="Add new user" />}
              saveButton={<SaveButton value="Create user" onClick={post} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <UserForm
              formProps={formProps}
              topHeading={<TopHeading title="Change user details" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this user account?" destroy={destroy} />
    </React.Fragment>
  );
};

export default User;
