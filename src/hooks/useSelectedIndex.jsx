import { useSelector } from "react-redux";

const useSelectedIndex = () => {
  const selectedIndex = useSelector((state) => state.selectedIndex.selectedIndex);
  return selectedIndex;
};

export default useSelectedIndex;
