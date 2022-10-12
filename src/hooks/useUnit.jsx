import { useState } from "react";

import useGetApi from "./useGetApi";
import URLS from "services/Utils/urls";

const useUnit = () => {
  const [units, setUnits] = useState([]);
  const { fetchData, abortController } = useGetApi();

  const fetchUnits = async () => {
    const response = await fetchData(URLS.units.api_address);
    setUnits(response.data);
  };

  const abortUnitController = () => {
    abortController();
  };
  return [units, fetchUnits, abortUnitController];
};

export default useUnit;
