import { useState } from "react";

import useGetApi from "./useGetApi";
import URLS from "services/Utils/urls";

const useRole = () => {
  const [roles, setRoles] = useState([]);
  const { fetchData, abortController } = useGetApi();

  const fetchRoles = async () => {
    const response = await fetchData(URLS.roles.api_address);
    setRoles(response.data);
  };

  const abortRolesController = () => {
    abortController();
  };
  return [roles, setRoles, fetchRoles, abortRolesController];
};

export default useRole;
