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
      logout();
    }
  }, []);

  return { username, authenticated };
};
