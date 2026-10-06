const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

const products = [
  {
    id: 1,
    title: "Notebook",
    price: 3499.99,
    description: "Notebook moderno para trabalho, estudos e entretenimento.",
    category: "eletrônicos",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    rating: {
      rate: 4.8,
      count: 245,
    },
  },
  {
    id: 2,
    title: "Smartphone",
    price: 2499.99,
    description: "Smartphone com excelente desempenho e câmera de alta qualidade.",
    category: "eletrônicos",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    rating: {
      rate: 4.6,
      count: 389,
    },
  },
  {
    id: 3,
    title: "Fone de Ouvido",
    price: 299.99,
    description: "Fone de ouvido sem fio com som de alta qualidade.",
    category: "áudio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    rating: {
      rate: 4.5,
      count: 172,
    },
  },
  {
    id: 4,
    title: "Câmera Fotográfica",
    price: 4299.99,
    description: "Câmera digital profissional para fotos e vídeos.",
    category: "fotografia",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    rating: {
      rate: 4.9,
      count: 98,
    },
  },
  {
    id: 5,
    title: "Tênis Esportivo",
    price: 399.99,
    description: "Tênis confortável para corrida, academia e atividades esportivas.",
    category: "esportes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    rating: {
      rate: 4.7,
      count: 214,
    },
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
