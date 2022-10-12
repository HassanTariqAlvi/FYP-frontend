import { useState } from "react";

import useGetApi from "./useGetApi";
import URLS from "services/Utils/urls";

const useCriteria = () => {
  const [criteria, setCriteria] = useState([]);
  const { fetchData, abortController } = useGetApi();

  const fetchCriteria = async () => {
    const response = await fetchData(URLS.measure_criteria.api_address);
    setCriteria(response.data);
  };

  const abortCriteriaController = () => {
    abortController();
  };
  return [criteria, fetchCriteria, abortCriteriaController];
};

export default useCriteria;
