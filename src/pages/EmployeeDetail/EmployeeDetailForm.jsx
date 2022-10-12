import React from "react";
import { Grid, TextField } from "@mui/material";

import Image from "./Image";
import Select from "components/Select/Select";
import Button from "components/Buttons/Button";
import FormTemplate from "../Template/FormTemplate";
import InputField from "components/InputField/InputField";
import { DatePicker } from "components/DatePicker/DatePicker";
import useEmployeeDetailForm from "hooks/useEmployeeDetailForm";

const genders = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
];

const EmployeeDetailForm = ({ formProps, topHeading, saveButton }) => {
  const { details, errors, onChange, handleBack, handleImageChange } = formProps;
  const { roles, filteredRoles, departments, employeeTypes, disabled } = useEmployeeDetailForm(details);

  return (
    <FormTemplate
      topHeading={topHeading}
      saveButton={saveButton}
      backButton={<Button value="Back" onClick={handleBack} />}
    >
      <Grid item container direction="column">
        <Grid item alignSelf="flex-end">
          <Image image={details?.imagePath} />
        </Grid>

        <Grid item container spacing={5}>
          <InputField
            label="Emloyee name:"
            input={
              <TextField
                fullWidth
                autoFocus
                name="name"
                error={errors?.name ? true : false}
                helperText={errors?.name ?? ""}
                value={details?.name ?? ""}
                onChange={onChange}
              />
            }
          />
          <InputField
            label="CNIC:"
            input={
              <TextField
                fullWidth
                name="cnic"
                error={errors?.cnic ? true : false}
                helperText={errors?.cnic ?? ""}
                value={details?.cnic ?? ""}
                onChange={onChange}
              />
            }
          />
          <InputField
            label="Phone no:"
            input={
              <TextField
                fullWidth
                name="phone_no"
                error={errors?.phone_no ? true : false}
                helperText={errors?.phone_no ?? ""}
                value={details?.phone_no ?? ""}
                onChange={onChange}
              />
            }
          />
          <InputField
            label="City:"
            input={
              <TextField
                fullWidth
                name="city"
                error={errors?.city ? true : false}
                helperText={errors?.city ?? ""}
                value={details?.city ?? ""}
                onChange={onChange}
              />
            }
          />
          <InputField
            label="Department:"
            input={
              <Select
                width="100%"
                name="department"
                error={errors?.department ?? ""}
                value={details?.department ?? ""}
                onChange={onChange}
              >
                {departments}
              </Select>
            }
          />
          <InputField
            label="Employee category:"
            input={
              <Select
                width="100%"
                name="employee_type"
                error={errors?.employee_type ?? ""}
                value={details?.employee_type ?? ""}
                onChange={onChange}
              >
                {employeeTypes}
              </Select>
            }
          />

          <InputField
            label="Employee role:"
            input={
              <Select
                disabled={disabled}
                width="100%"
                name="role"
                error={errors?.role ?? ""}
                value={details?.role ?? ""}
                onChange={onChange}
              >
                {roles}
              </Select>
            }
          />

          <InputField
            label="Gender:"
            input={
              <Select
                width="100%"
                name="gender"
                error={errors?.gender ?? ""}
                value={details?.gender ?? ""}
                onChange={onChange}
              >
                {genders}
              </Select>
            }
          />

          <InputField
            label="Joining date:"
            input={
              <DatePicker
                name="joining_date"
                error={errors?.joining_date ?? ""}
                value={details?.joining_date ?? ""}
                onChange={onChange}
              />
            }
          />

          <InputField
            label="Image:"
            input={
              <TextField
                fullWidth
                name="image"
                type="file"
                error={errors?.image ? true : false}
                helperText={errors?.image ?? ""}
                onChange={(e) => {
                  handleImageChange(e);
                }}
              />
            }
          />

          <InputField
            colSpan={12}
            label="Address:"
            input={
              <TextField
                fullWidth
                multiline
                rows={3}
                name="address"
                error={errors?.address ? true : false}
                helperText={errors?.address ?? ""}
                value={details?.address ?? ""}
                onChange={onChange}
              />
            }
          />
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default EmployeeDetailForm;
