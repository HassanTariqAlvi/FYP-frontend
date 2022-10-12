import React from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import URLS from "services/Utils/urls";
import ViewTemplate from "../Template/ViewTemplate";
import SaveButton from "components/Buttons/SaveButton";
import TopHeading from "components/TopHeading/TopHeading";

const AttendanceView = ({ columns }) => {
  const { auth } = useAuth();

  return (
    <ViewTemplate
      url={URLS.attendance.api_address}
      columns={columns}
      permissions={auth.permissions?.attendance}
      topHeading={<TopHeading title="Attendance record" />}
      button={<SaveButton component={Link} to={URLS.attendance.add} value="Mark attendance" />}
    />
  );
};

export default AttendanceView;
