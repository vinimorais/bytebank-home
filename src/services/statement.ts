export const fetchStatement = async (accountId: string) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token de autenticação não encontrado.");
    }

    const response = await fetch(
      `http://localhost:3000/account/${accountId}/statement`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar o extrato.");
    }

    const data = await response.json();
    return data.result.transactions;
  } catch (error) {
    console.error("Erro ao buscar extrato:", error);
    throw error;
  }
};
