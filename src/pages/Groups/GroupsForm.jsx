import React, { useEffect } from "react";
import { Grid, TextField } from "@mui/material";

import Button from "components/Buttons/Button";
import FormTemplate from "../Template/FormTemplate";
import TopHeading from "components/TopHeading/TopHeading";
import InputField from "components/InputField/InputField";
import TransferList from "components/TransferList/TransferList";

const GroupsForm = ({ formProps, topHeading, saveButton }) => {
  const {
    errors,
    details,
    onChange,
    handleBack,
    permissions,
    setPermissions,
    fetchPermissions,
    abortPermissionsController,
  } = formProps;

  useEffect(() => {
    fetchPermissions();
    return () => {
      abortPermissionsController();
    };
  }, []);

  return (
    <FormTemplate
      topHeading={topHeading}
      saveButton={saveButton}
      backButton={<Button value="Back" onClick={handleBack} />}
    >
      <Grid container direction="column">
        <Grid item container spacing={5}>
          <InputField
            label="Name:"
            error={errors?.name}
            input={
              <TextField
                fullWidth
                name="name"
                error={errors?.name ? true : false}
                helperText={errors?.name ?? ""}
                value={details?.name ?? ""}
                onChange={onChange}
              />
            }
          />
        </Grid>
        <Grid item xs={12} mt={3}>
          <TopHeading title="User permissions" />
        </Grid>
        <Grid item>
          <TransferList permissions={permissions} setPermissions={setPermissions} />
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default GroupsForm;
