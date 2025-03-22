import React, { useState } from "react";
import { Route } from "react-router-dom";
import { isTokenValid } from "../../../services/authService";
import LoginModal from "../../components/Login/Login";

const PrivateRoute: React.FC<{
  component: React.ComponentType<any>;
  path: string;
}> = ({ component: Component, ...rest }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(!isTokenValid());

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isTokenValid() ? (
            <Component {...props} />
          ) : (
            <LoginModal onClose={() => setIsLoginOpen(false)} />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
