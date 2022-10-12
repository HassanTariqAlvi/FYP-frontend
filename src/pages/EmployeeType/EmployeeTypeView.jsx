import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const EmployeeTypeView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      columns={columns}
      url={URLS.employee_types.api_address}
      permissions={auth.permissions.employeetype}
      topHeading={<TopHeading title="Employee catogories" />}
      button={<SaveButton component={Link} to={URLS.employee_types.add} value="New employee category" />}
    />
  );
};

export default EmployeeTypeView;
