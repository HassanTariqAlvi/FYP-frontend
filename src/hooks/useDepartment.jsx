import { useState } from "react";

import useGetApi from "./useGetApi";
import URLS from "services/Utils/urls";

const useDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const { fetchData, abortController } = useGetApi();

  const fetchDepartments = async () => {
    const response = await fetchData(URLS.departments.api_address);
    setDepartments(response.data);
  };

  const abortDepartmentsController = () => {
    abortController();
  };
  return [departments, fetchDepartments, abortDepartmentsController];
};

export default useDepartment;
