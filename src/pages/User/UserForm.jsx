import React, { useEffect } from "react";
import { Grid, TextField, Hidden } from "@mui/material";

import UserRole from "./UserRole";
import useGroup from "hooks/useGroup";
import URLS from "services/Utils/urls";
import Select from "components/Select/Select";
import Button from "components/Buttons/Button";
import FormTemplate from "../Template/FormTemplate";
import InputField from "components/InputField/InputField";
import TopHeading from "components/TopHeading/TopHeading";
import { EmployeeTable } from "components/EmployeeTable/EmployeeTable";

const UserForm = ({ formProps, topHeading, saveButton }) => {
  const { details, errors, onChange, handleBack, handleSearch } = formProps;
  const { groups, fetchGroups, abortGroupsController } = useGroup(URLS.groups);

  useEffect(() => {
    fetchGroups();
    return () => {
      abortGroupsController();
    };
  }, []);

  return (
    <FormTemplate
      topHeading={topHeading}
      saveButton={saveButton}
      backButton={<Button value="Back" onClick={handleBack} />}
    >
      <Grid item container direction="column" rowSpacing={5}>
        <Grid item container={{ xs: "column", sm: "row" }} spacing={5}>
          <InputField
            colSpan={3}
            label="Employee id:"
            error={errors?.employee}
            input={
              <TextField
                fullWidth
                autoFocus
                name="employee"
                error={errors?.employee ? true : false}
                helperText={errors?.employee ?? ""}
                value={details?.employee ?? ""}
                onChange={onChange}
                onKeyDown={(event) => (event.keyCode === 13 ? handleSearch(event) : null)}
              />
            }
          />
          <Hidden mdUp>
            <Grid item>
              <Button value="Search" onClick={handleSearch} />
            </Grid>
          </Hidden>
        </Grid>
        <Grid item>
          <EmployeeTable />
        </Grid>
        <Grid item container spacing={5}>
          <InputField
            label="Username:"
            error={errors?.username}
            input={
              <TextField
                disabled
                fullWidth
                name="username"
                error={errors?.username ? true : false}
                helperText={errors?.username ?? ""}
                value={details?.username ?? ""}
                onChange={onChange}
              />
            }
          />
          <InputField
            label="Password:"
            error={errors?.total_pieces}
            input={
              <TextField
                fullWidth
                name="password"
                error={errors?.password ? true : false}
                helperText={errors?.password ?? ""}
                value={details?.password ?? ""}
                onChange={onChange}
              />
            }
          />
          {/* <Grid item alignSelf="flex-end">
            <SaveButton value="Generate password" onClick={generate_password} />
          </Grid> */}
          <Grid item xs={12}>
            <UserRole details={details} onChange={onChange} />
          </Grid>
          <Grid item xs={12}>
            <TopHeading title="User Roles" />
          </Grid>
          <Grid item container spacing={5}>
            <InputField
              label="Select user role:"
              input={
                <Select
                  width="100%"
                  name="user_group"
                  error={errors?.user_group ?? ""}
                  value={details?.user_group ?? ""}
                  onChange={onChange}
                >
                  {groups}
                </Select>
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default UserForm;
