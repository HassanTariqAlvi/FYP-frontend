import axios from "api/axios";
import useAuth from "./useAuth";
import URLS from "services/Utils/urls";
import { useDispatch } from "react-redux";
import { failedSnackbar } from "features/Snackbar/snackbarSlice";
import { setAuth } from "features/Authentication/authenticationSlice";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const { auth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.post(
        URLS.refreshToken,
        {
          refresh: auth.refresh_token,
        },
        { withCredentials: true }
      );
      dispatch(setAuth({ ...auth, access_token: response?.data.access }));
      return response.data.access;
    } catch (err) {
      if (!err?.response) {
        dispatch(failedSnackbar("No Server Response. Please try again."));
      } else if (err?.response?.data.code === "token_not_valid") {
        dispatch(failedSnackbar("Session expired. Please login again!"));
      }
    }
  };
  return refresh;
};

export default useRefreshToken;
