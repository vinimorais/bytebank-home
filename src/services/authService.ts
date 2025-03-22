const API_URL = "http://localhost:3000/user";

interface AuthResponse {
  message: string;
  result: {
    token: string;
  };
}

export const authenticateUser = async (email: string, password: string): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Erro na autenticação");
    }

    const data: AuthResponse = await response.json();
    localStorage.setItem("token", data.result.token);
    return data.result.token;
  } catch (error) {
    console.error("Erro ao autenticar usuário:", error);
    throw error;
  }
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const isTokenValid = (): boolean => {
  const token = getToken();
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])); 
    return payload.exp * 1000 > Date.now(); 
  } catch (error) {
    console.error("Erro ao validar token:", error);
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};


export const getUserName = (): string | null => {
  const token = getToken();
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])); 
    return payload.username || null;
  } catch (error) {
    console.error("Erro ao decodificar token:", error);
    return null;
  }
};


export const fetchUserProfile = async () => {
  const token = getToken();
  if (!token) throw new Error("Usuário não autenticado");

  const response = await fetch(`${API_URL}/me`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  if (!response.ok) throw new Error("Erro ao buscar perfil do usuário");
  
  return await response.json();
};
