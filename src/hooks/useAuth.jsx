import { useSelector } from "react-redux";

const useAuth = () => {
  const auth = useSelector((state) => state.authentication);
  return { auth };
};

export default useAuth;
