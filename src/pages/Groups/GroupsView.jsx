import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const GroupsView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      url={URLS.groups.api_address}
      columns={columns}
      permissions={auth.permissions?.group}
      topHeading={<TopHeading title="Groups" />}
      button={<SaveButton component={Link} to={URLS.groups.add} value="New group" />}
    />
  );
};

export default GroupsView;
