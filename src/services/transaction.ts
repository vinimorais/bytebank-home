export const createTransaction = async (transactionData: object) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token de autenticação não encontrado.");
    }

    const response = await fetch("http://localhost:3000/account/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(transactionData),
    });

    if (!response.ok) {
      throw new Error("Erro ao processar a transação.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao criar transação:", error);
    throw error;
  }
};
