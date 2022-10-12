import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const UnitDetailView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      url={URLS.units.api_address}
      columns={columns}
      permissions={auth.permissions?.unit}
      topHeading={<TopHeading title="Units" />}
      button={<SaveButton component={Link} to={URLS.units.add} value="New unit" />}
    />
  );
};

export default UnitDetailView;
