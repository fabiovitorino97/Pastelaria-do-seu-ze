import type { Metadata } from "next";
import styles from "./styles.module.css";
import Home from "./home";

export const metadata: Metadata = {
  title: "Pastelaria do Seu Zé",
  description: "O melhor pastel da cidade!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Home />
        {children}
      </body>
    </html>
  );
}
