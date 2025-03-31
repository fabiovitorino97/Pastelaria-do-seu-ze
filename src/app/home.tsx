'use client';
import { useState } from "react";
import styles from "./styles.module.css";

type Pastel = {
  nome: string;
  preco: string;
  disponivel: boolean;
};

export default function Home() {
  const [pasteis, setPasteis] = useState<Pastel[]>([
    { nome: "Mussarela com Tomate", preco: "R$ 12,50", disponivel: true },
    { nome: "Frango com Bacon", preco: "R$ 15,00", disponivel: false },
    { nome: "Peperoni", preco: "R$ 14,00", disponivel: true },
    { nome: "Lombo Canadense", preco: "R$ 16,00", disponivel: true },
    { nome: "Camembert com Nozes", preco: "R$ 18,00", disponivel: false },
    { nome: "Brócolis com Alho", preco: "R$ 13,00", disponivel: true },
    { nome: "Banana com Canela", preco: "R$ 11,00", disponivel: true },
    { nome: "Morango com Creme", preco: "R$ 14,50", disponivel: false },
  ]);

  const toggleDisponibilidade = (index: number) => {
    setPasteis((prev) =>
      prev.map((p, i) =>
        i === index ? { ...p, disponivel: !p.disponivel } : p
      )
    );
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>Pastelaria do Seu Zé</h1>
        <img src="/pastel.png" alt="Ícone Pastel" className={styles.icon} />
      </div>
      <div className={styles.grid}>
        {pasteis.map((pastel, i) => (
          <div 
            key={i} 
            className={`${styles.pastelCard} ${pastel.disponivel ? styles.disponivel : styles.indisponivel}`}
            onClick={() => toggleDisponibilidade(i)}
          >
            <p className={styles.nome}>{pastel.nome}</p>
            <img src="/pastel.jpg" alt={pastel.nome} className={styles.pastelImage} />
            <p className={styles.preco}>{pastel.preco}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
