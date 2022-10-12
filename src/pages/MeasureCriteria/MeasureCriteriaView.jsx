import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const MeasureCriteriaView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      columns={columns}
      url={URLS.measure_criteria.api_address}
      permissions={auth.permissions?.measurecriteria}
      topHeading={<TopHeading title="Measure criteria" />}
      button={<SaveButton component={Link} to={URLS.measure_criteria.add} value="New criteria" />}
    />
  );
};

export default MeasureCriteriaView;
