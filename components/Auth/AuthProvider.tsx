import React, { useEffect } from "react";
import { getLoggedInUserFunction } from "../../services/auth";

const AuthProvider = (props: { children: React.ReactElement }) => {
  const { children } = props;

  useEffect(() => {
    const initialize = async () => {
      await getLoggedInUserFunction();
    };

    initialize();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
