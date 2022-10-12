import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const EmployeeDetailView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      columns={columns}
      url={URLS.employee_details.api_address}
      permissions={auth.permissions.employee}
      topHeading={<TopHeading title="Employees" />}
      button={<SaveButton component={Link} to={URLS.employee_details.add} value="New employee" />}
    />
  );
};

export default EmployeeDetailView;
