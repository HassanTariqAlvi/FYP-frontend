import React from "react";
import useAuthentication from "hooks/useAuthentication";
import Button from "components/Buttons/Button";

const Logout = () => {
  const { logout } = useAuthentication();
  return <Button value="Logout" onClick={logout} />;
};

export default Logout;
