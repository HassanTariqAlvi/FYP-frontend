import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const UnitPriceView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      url={URLS.units_price.api_address}
      columns={columns}
      permissions={auth.permissions?.unitprice}
      topHeading={<TopHeading title="Unit prices" />}
      button={<SaveButton component={Link} to={URLS.units_price.add} value="New unit price" />}
    />
  );
};

export default UnitPriceView;
