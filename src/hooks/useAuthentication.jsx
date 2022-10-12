import axios from "api/axios";
import { useForm } from "./useForm";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import URLS from "services/Utils/urls";
import { failedSnackbar } from "features/Snackbar/snackbarSlice";
import { setAuth } from "features/Authentication/authenticationSlice";
import { setSelectedIndex } from "features/ListItemSelect/listItemSelectSlice";

const useAuthentication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location.state?.from?.pathname || "/";    // To redirect to last opened page after login
  const from = "/";

  const { details, onChange, errors } = useForm();

  const login = async () => {
    try {
      const response = await axios.post(URLS.account.login, details, {
        withCredentials: true,
      });
      if (response?.data.access_token) {
        dispatch(setAuth(response.data));
        navigate(from, { replace: true });
      }
    } catch (error) {
      if (!error?.response) {
        dispatch(failedSnackbar("No Server Response. Please try again."));
      } else if (error.response.status === 400) {
        dispatch(failedSnackbar(error.response.data.detail));
      } else if (error.response.status === 404) {
        dispatch(failedSnackbar("Login failed. Please try again."));
      }
    }
  };

  const logout = async () => {
    const response = await axios.post(
      URLS.account.logout,
      {},
      {
        withCredentials: true,
      }
    );
    if (response?.status === 200) {
      dispatch(setAuth({}));
      navigate("/login");
      dispatch(setSelectedIndex({ selectedIndex: 1 }));
    }
  };
  return {
    login,
    logout,
    errors,
    details,
    onChange,
  };
};

export default useAuthentication;
