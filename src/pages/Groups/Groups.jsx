import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import useAuth from "hooks/useAuth";
import GroupsView from "./GroupsView";
import GroupsForm from "./GroupsForm";
import URLS from "services/Utils/urls";
import useGroup from "hooks/useGroup";
import Snackbar from "components/Snackbar/Snackbar";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";
import actionsColumn from "components/DataTable/actionsColumn";

const cols = [{ field: "name", headerName: "Group name", flex: 1, minWidth: 150 }];

const Groups = () => {
  const { auth } = useAuth();
  const {
    put,
    post,
    Delete,
    errors,
    details,
    destroy,
    onChange,
    handleBack,
    permissions,
    handleEdit,
    handleDelete,
    setPermissions,
    fetchPermissions,
    abortPermissionsController,
  } = useGroup(URLS.groups);

  const formProps = {
    errors,
    details,
    onChange,
    handleBack,
    permissions,
    setPermissions,
    fetchPermissions,
    abortPermissionsController,
  };

  const columns = useMemo(() => {
    if (auth?.permissions?.group?.includes("change") || auth?.permissions?.group?.includes("delete")) {
      return [
        ...cols,
        actionsColumn({ handleEdit, handleDelete, permissions: auth.permissions?.group, mode: "buttons" }),
      ];
    }
    return cols;
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<GroupsView columns={columns} />} />
        <Route
          path="/add"
          element={
            <GroupsForm
              formProps={formProps}
              topHeading={<TopHeading title="New group" />}
              saveButton={<SaveButton value="Save" onClick={post} />}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <GroupsForm
              formProps={formProps}
              topHeading={<TopHeading title="Change group" />}
              saveButton={<SaveButton value="Save changes" onClick={put} />}
            />
          }
        />
      </Routes>
      <Snackbar />
      <Delete text="Do you want to delete this group?" destroy={destroy} />
    </React.Fragment>
  );
};

export default Groups;
