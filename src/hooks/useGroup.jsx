import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import usePermissions from "./usePermissions";
import useComponent from "./useComponent";
import useGetApi from "./useGetApi";
import useAxiosPrivate from "./useAxiosPrivate";
import { successSnackbar } from "features/Snackbar/snackbarSlice";

const useGroup = (url) => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    errors,
    Delete,
    details,
    destroy,
    onChange,
    clearForm,
    handleBack,
    clearErrors,
    handleDelete,
    updateErrors,
    updateDetails,
  } = useComponent(url);
  const [permissions, setPermissions, fetchPermissions, abortPermissionsController] = usePermissions();

  const [groups, setGroups] = useState([]);
  const { fetchData, abortController } = useGetApi();

  const fetchGroups = async () => {
    const response = await fetchData(url.api_address);
    setGroups(response.data);
  };

  const abortGroupsController = () => {
    abortController();
  };

  const handleEdit = async (params) => {
    navigate(url.edit);
    try {
      const response = await axiosPrivate.get(url.edit_group.replace("id", params.row.id));
      const { allowed_permissions, other_permissions } = response.data;
      updateDetails(params.row);
      setPermissions({ all: other_permissions, allowed: allowed_permissions });
      clearErrors();
    } catch (error) {
      updateErrors({ employee: error.response.data.detail });
      updateDetails(null);
    }
  };

  const post = async () => {
    try {
      const response = await axiosPrivate.post(url.api_address, {
        ...details,
        user_permissions: permissions.allowed,
      });
      clear();
      clearForm();
      dispatch(successSnackbar(response.data.message));
      navigate(url.home);
    } catch (err) {
      updateErrors(err.response.data);
    }
  };

  const put = async () => {
    try {
      const response = await axiosPrivate.put(url.api_address + `${details.id}/`, {
        ...details,
        user_permissions: permissions.allowed,
      });
      clear();
      clearForm();
      dispatch(successSnackbar(response.data.message));
      navigate(url.home);
    } catch (err) {
      updateErrors(err.response.data);
    }
  };

  const clear = () => {
    setPermissions({
      all: [],
      allowed: [],
    });
  };

  return {
    clear,
    post,
    Delete,
    destroy,
    put,
    errors,
    details,
    onChange,
    handleBack,
    permissions,
    handleEdit,
    handleDelete,
    setPermissions,
    groups,
    fetchGroups,
    abortGroupsController,
    fetchPermissions,
    abortPermissionsController,
  };
};

export default useGroup;
