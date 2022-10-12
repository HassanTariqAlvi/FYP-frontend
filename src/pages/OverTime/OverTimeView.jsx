import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const OverTimeView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      url={URLS.overtime.api_address}
      columns={columns}
      permissions={auth.permissions?.overtime}
      topHeading={<TopHeading title="Over time record" />}
      button={<SaveButton component={Link} to={URLS.overtime.add} value="Add over time" />}
    />
  );
};

export default OverTimeView;
