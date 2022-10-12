import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const UserView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      url={URLS.user.api_address}
      columns={columns}
      permissions={auth.permissions?.user}
      topHeading={<TopHeading title="System users" />}
      button={<SaveButton component={Link} to={URLS.user.add} value="Add new user" />}
    />
  );
};

export default UserView;
