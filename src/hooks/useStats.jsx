import { useState } from "react";

import useGetApi from "./useGetApi";
import URLS from "services/Utils/urls";

const useStats = () => {
  const [stats, setStats] = useState([33, 33, 33]);
  const { fetchData, abortController } = useGetApi();

  const fetchStats = async () => {
    const response = await fetchData(URLS.stats);
    setStats(response.data);
  };

  const abortStatsController = () => {
    abortController();
  };
  return [stats, fetchStats, abortStatsController];
};

export default useStats;
