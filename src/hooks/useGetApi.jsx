import { useDispatch, useSelector } from "react-redux";

import useAxiosPrivate from "./useAxiosPrivate";
import { setDataTable } from "features/DataTable/dataTableSlice";
import { useState } from "react";

const useGetApi = () => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const controller = new AbortController();

  const [loading, setLoading] = useState(false);
  const rows = useSelector((state) => state.dataTable);

  const fetchData = async (url) => {
    const response = await axiosPrivate.get(url, { signal: controller.signal });
    return response;
  };

  const abortController = () => {
    controller.abort();
  };

  const fetchTableData = async (url) => {
    setLoading(true);
    const response = await fetchData(url);
    if (response.status === 200) {
      dispatch(setDataTable(response.data));
      setLoading(false);
    }
  };
  return { rows, loading, fetchTableData, fetchData, abortController };
};

export default useGetApi;
