import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const DepartmentView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      columns={columns}
      url={URLS.departments.api_address}
      permissions={auth.permissions.department}
      topHeading={<TopHeading title="Departments" />}
      button={<SaveButton component={Link} to={URLS.departments.add} value="New department" />}
    />
  );
};

export default DepartmentView;
