import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const RolesView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      url={URLS.roles.api_address}
      columns={columns}
      permissions={auth.permissions?.role}
      topHeading={<TopHeading title="Employee roles" />}
      button={<SaveButton component={Link} to={URLS.roles.add} value="New role" />}
    />
  );
};

export default RolesView;
