const API_URL = "http://localhost:3000/user";

interface User {
  username: string;
  email: string;
  password: string;
}

interface AuthResponse {
  message: string;
  result: {
    token: string;
  };
}

export const createUser = async (user: User): Promise<Response> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return response;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

export const authenticateUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
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

    return response.json();
  } catch (error) {
    console.error("Erro ao autenticar usuário:", error);
    throw error;
  }
};
