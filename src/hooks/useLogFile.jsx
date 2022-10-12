import URLS from "services/Utils/urls";
import { useDispatch } from "react-redux";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { successSnackbar, failedSnackbar } from "features/Snackbar/snackbarSlice";

const useLogFile = () => {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const generateLogFile = async () => {
    const response = await axiosPrivate.get(URLS.log_files);
    const { message, status_code } = response.data;
    try {
      if (status_code === 200) {
        dispatch(successSnackbar(message));
      }
    } catch (error) {
      dispatch(failedSnackbar("Something went wrong. Please try again"));
    }
  };
  return { generateLogFile };
};

export default useLogFile;
