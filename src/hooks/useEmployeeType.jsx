import { useState } from "react";

import useGetApi from "./useGetApi";
import URLS from "services/Utils/urls";

const useEmployeeType = () => {
  const [employeeTypes, setEmployeeTypes] = useState([]);
  const { fetchData, abortController } = useGetApi();

  const fetchEmployeeTypes = async () => {
    const response = await fetchData(URLS.employee_types.api_address);
    setEmployeeTypes(response.data);
  };

  const abortEmployeeTypesController = () => {
    abortController();
  };
  return [employeeTypes, fetchEmployeeTypes, abortEmployeeTypesController];
};

export default useEmployeeType;
