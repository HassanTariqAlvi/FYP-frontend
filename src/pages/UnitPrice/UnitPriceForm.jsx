import React, { useEffect } from "react";
import { Grid, TextField } from "@mui/material";

import useUnit from "hooks/useUnit";
import useCriteria from "hooks/useCriteria";
import Select from "components/Select/Select";
import Button from "components/Buttons/Button";
import useDepartment from "hooks/useDepartment";
import FormTemplate from "../Template/FormTemplate";
import InputField from "components/InputField/InputField";

const UnitPriceForm = ({ formProps, topHeading, saveButton }) => {
  const { details, errors, onChange, handleBack } = formProps;

  const [units, fetchUnits, abortUnitController] = useUnit();
  const [criteria, fetchCriteria, abortCriteriaController] = useCriteria();
  const [departments, fetchDepartments, abortDepartmentsController] = useDepartment();

  useEffect(() => {
    fetchUnits();
    fetchCriteria();
    fetchDepartments();

    return () => {
      abortUnitController();
      abortCriteriaController();
      abortDepartmentsController();
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
            label="Unit name:"
            error={errors?.unit}
            input={
              <Select
                label="Unit name"
                name="unit"
                error={errors?.unit ?? ""}
                value={details?.unit ?? ""}
                onChange={onChange}
              >
                {units}
              </Select>
            }
          />
          <InputField
            label="Department:"
            error={errors?.department}
            input={
              <Select
                label="Departments"
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
            label="Measure criteria:"
            error={errors?.criteria}
            input={
              <Select
                label="Measure criteria"
                name="criteria"
                error={errors?.criteria ?? ""}
                value={details?.criteria ?? ""}
                onChange={onChange}
              >
                {criteria}
              </Select>
            }
          />
          <InputField
            label="Price:"
            error={errors?.price}
            input={
              <TextField
                fullWidth
                name="price"
                error={errors?.price ? true : false}
                helperText={errors?.price ?? ""}
                value={details?.price ?? ""}
                onChange={onChange}
              />
            }
          />
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default UnitPriceForm;
