"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RespostaLogin, RespostaLoginEmpresa } from "@/types/types";
import logo from "@/../public/Logo.png";
import { useRouter } from "next/navigation";

export default function Header() {
  const [nome, setNome] = useState<string | null>(null);
  const router = useRouter();
  // Carregar os dados do localStorage quando o componente for montado
  useEffect(() => {
    const dadosArmazenados = localStorage.getItem("dadosLogin");
    if (dadosArmazenados) {
      const dadosParseados = JSON.parse(dadosArmazenados);

      // Verificar qual tipo foi recebido e armazenar o nome
      if ("CPF" in dadosParseados) {
        setNome(dadosParseados.NOME); // Nome do cliente
      } else if ("CNPJ" in dadosParseados) {
        setNome(dadosParseados.NOME_EMPRESA); // Nome da empresa
      }
      
    }
  }, []);

  // Função para deslogar
  const handleLogout = () => {
    localStorage.removeItem("dadosLogin"); // Remove o item do localStorage
    setNome(null);
    router.push("/login");
     // Atualiza o estado para deslogado
  };

  return (
    <header className="header">
      <div className="caixa-logo">
        <Link href="/">
          <Image src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav className="menu">
        <Link href="/carbono">
          <p>Carbono</p>
        </Link>
        <Link href="/integrantes">
          <p>Integrantes</p>
        </Link>
        <Link href="#sobreNos">
          <p>Sobre Nós</p>
        </Link>
      </nav>
      <div className="loginHeader">
        {nome ? (
          <>
            <p>Bem-vindo, {nome}</p>
            <button onClick={handleLogout} className="botao-logout">
              Sair
            </button>
          </>
        ) : (
          <>
            <button className="botao">
              <Link href="/cadastro">
                <p>Abra sua conta</p>
              </Link>
            </button>
            <Link href={"/login"}>
              <p>Login</p>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}