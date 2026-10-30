export const categories = [
  { id: "Todos", label: "Todos", short: "Todo", symbol: "ALL" },
  { id: "Envases", label: "Envases", short: "Envases", symbol: "ENV" },
  { id: "Papel", label: "Papel", short: "Papel", symbol: "PAP" },
  { id: "Vidrio", label: "Vidrio", short: "Vidrio", symbol: "VID" },
  { id: "Orgánico", label: "Orgánico", short: "Orgánico", symbol: "ORG" },
  { id: "Especiales", label: "Especiales", short: "Especial", symbol: "ESP" },
];

export const items = [
  { id: 1, name: "Botella de plástico", category: "Envases", bin: "Contenedor amarillo", tone: "yellow", symbol: "PET", desc: "Vacía, aplasta y deposita la botella sin líquidos." },
  { id: 2, name: "Caja de cartón", category: "Papel", bin: "Contenedor azul", tone: "blue", symbol: "CAR", desc: "Pliega la caja para que ocupe el menor espacio posible." },
  { id: 3, name: "Tarro de vidrio", category: "Vidrio", bin: "Contenedor verde", tone: "green", symbol: "VID", desc: "Retira la tapa y deposita el tarro vacío, sin bolsa." },
  { id: 4, name: "Pilas usadas", category: "Especiales", bin: "Punto de recogida", tone: "red", symbol: "PIL", desc: "Nunca las tires a la basura. Llévalas a un punto específico." },
  { id: 5, name: "Restos de fruta", category: "Orgánico", bin: "Contenedor marrón", tone: "brown", symbol: "ORG", desc: "Deposítalos en una bolsa compostable certificada." },
  { id: 6, name: "Lata de conserva", category: "Envases", bin: "Contenedor amarillo", tone: "yellow", symbol: "LAT", desc: "Vacía la lata. No es necesario lavarla antes de reciclar." },
];

export const points = [
  { id: 1, name: "Punto Limpio La Isleta", address: "C. Juan Rejón, 18", distance: "650 m", time: "8 min", open: true, types: ["Pilas", "Electrónica", "Aceite"] },
  { id: 2, name: "Punto de Recogida Mercado", address: "C. Albareda, 42", distance: "1,2 km", time: "15 min", open: true, types: ["Ropa", "Pilas"] },
  { id: 3, name: "Punto Limpio El Sebadal", address: "C. Sao Paulo, 28", distance: "2,8 km", time: "9 min", open: false, types: ["Todo tipo", "Muebles"] },
];