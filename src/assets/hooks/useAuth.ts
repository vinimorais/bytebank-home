import { useEffect, useState } from "react";
import { getUserName, isTokenValid, logout } from "../../services/authService";

export const useAuth = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (isTokenValid()) {
      setUsername(getUserName());
      setAuthenticated(true);
    } else {
      handleLogout();
    }
  }, []);

  const handleLogout = () => {
    logout();
    setUsername(null);
    setAuthenticated(false);
    window.location.reload();
  };

  return { username, authenticated, logout: handleLogout };
};
