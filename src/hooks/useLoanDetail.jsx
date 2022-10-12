import { useDispatch } from "react-redux";

import URLS from "services/Utils/urls";
import useAxiosPrivate from "./useAxiosPrivate";
import { failedSnackbar, successSnackbar } from "features/Snackbar/snackbarSlice";

export const useLoanDetail = () => {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  const approveLoan = async (params) => {
    try {
      const response = await axiosPrivate.put(URLS.loan_detail.approve_loan.replace("id", params.id), {
        id: params.id,
      });
      const { message } = response.data;
      dispatch(successSnackbar(message));
    } catch (error) {
      dispatch(failedSnackbar("Something went wrong. Please try again."));
    }
  };

  const rejectLoan = async (params) => {
    try {
      const response = await axiosPrivate.put(URLS.loan_detail.reject_loan.replace("id", params.id), { id: params.id });
      const { message } = response.data;
      dispatch(successSnackbar(message));
    } catch (error) {}
  };
  return {
    approveLoan,
    rejectLoan,
  };
};
