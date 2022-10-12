import { useState } from "react";

import useGetApi from "./useGetApi";
import URLS from "services/Utils/urls";

const usePermissions = () => {
  const [permissions, setPermissions] = useState({
    all: [],
    allowed: [],
  });
  const { fetchData, abortController } = useGetApi();

  const fetchPermissions = async () => {
    const response = await fetchData(URLS.permissions);
    const { permissions_list } = response.data;
    setPermissions({ ...permissions, all: permissions_list });
  };

  const abortPermissionsController = () => {
    abortController();
  };
  return [permissions, setPermissions, fetchPermissions, abortPermissionsController];
};

export default usePermissions;
