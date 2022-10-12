import { useState } from "react";

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const useTransferList = ({ permissions, setPermissions }) => {
  const [checked, setChecked] = useState([]);

  const allChecked = intersection(checked, permissions?.all);
  const allowedChecked = intersection(checked, permissions?.allowed);

  const handleToggle = (item) => () => {
    const currentIndex = checked.indexOf(item); //Return -1 if not found in checked array
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setPermissions({
      all: [],
      allowed: permissions.allowed.concat(permissions.all),
    });
  };

  const handleCheckedRight = () => {
    setPermissions((prev) => ({
      all: not(prev.all, allChecked),
      allowed: prev.allowed.concat(allChecked),
    }));
    setChecked(not(checked, allChecked));
  };

  const handleCheckedLeft = () => {
    setPermissions((prev) => ({
      all: prev.all.concat(allowedChecked),
      allowed: not(prev.allowed, allowedChecked),
    }));
    setChecked(not(checked, allowedChecked));
  };

  const handleAllLeft = () => {
    setPermissions({
      all: permissions.all.concat(permissions.allowed),
      allowed: [],
    });
  };
  return {
    checked,
    allChecked,
    allowedChecked,
    handleToggle,
    handleAllLeft,
    handleAllRight,
    handleCheckedLeft,
    handleCheckedRight,
  };
};

export default useTransferList;
