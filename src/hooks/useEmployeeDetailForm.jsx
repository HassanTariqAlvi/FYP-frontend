import { useEffect, useState } from "react";

import useRole from "hooks/useRole";
import useDepartment from "hooks/useDepartment";
import useEmployeeType from "hooks/useEmployeeType";

const useEmployeeDetailForm = (details) => {
  const [disabled, setDisabled] = useState(true);
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [roles, setRoles, fetchRoles, abortRolesController] = useRole();
  const [departments, fetchDepartments, abortDepartmentsController] = useDepartment();
  const [employeeTypes, fetchEmployeeTypes, abortEmployeeTypesController] = useEmployeeType();

  useEffect(() => {
    fetchRoles();
    filterRoles();
    fetchDepartments();
    fetchEmployeeTypes();
    return () => {
      abortRolesController();
      abortDepartmentsController();
      abortEmployeeTypesController();
    };
  }, []);

  useEffect(() => {
    if (details !== null) {
      if (details?.employee_type !== "Contract") {
        filterRoles();
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [details?.employee_type]);

  const filterRoles = () => {
    let filtered_roles = roles.filter((item) => item.name !== "Hour rate");
    setRoles(filtered_roles);
  };

  return { roles, filteredRoles, departments, employeeTypes, disabled };
};

export default useEmployeeDetailForm;
