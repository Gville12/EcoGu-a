const API_URL = "http://localhost:8080/api/objetos";

export const buscarObjetos = async (search, categoria) => {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (categoria && categoria !== "Todos") params.append("categoria", categoria);

  const response = await fetch(`${API_URL}?${params.toString()}`);
  
  if (!response.ok) {
    throw new Error("Error al conectar con el servidor");
  }
  return await response.json();
};