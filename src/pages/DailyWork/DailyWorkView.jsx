import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const DailyWorkView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      columns={columns}
      url={URLS.daily_work.api_address}
      permissions={auth.permissions?.dailywork}
      topHeading={<TopHeading title="Daily work record" />}
      button={<SaveButton component={Link} to={URLS.daily_work.add} value="New daily work entry" />}
    />
  );
};

export default DailyWorkView;
