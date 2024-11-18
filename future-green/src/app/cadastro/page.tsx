"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import energiaCL from '@/../public/energiaCL.jpg';

import Link from 'next/link';


import { TipoCadastro } from '@/types/types';
import { useRouter } from 'next/navigation';


export default function Cadastro() {
  const router = useRouter();
  const [cadastro, setcadastro] = useState<TipoCadastro>({
    nome:"",
    cpf:"",
    senha:""
  })

  const [dados, setdados] = useState<TipoCadastro>();
  const [mensagemErro, setmensagemErro] = useState<string |null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    const{name, value} = e.target;
    setcadastro((prevState) =>({
      ...prevState,
      [name]:value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try
    {
      const resposta = await fetch("http://localhost:8080/apiJava/cadastro",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cadastro)
      });

      if(resposta.ok)
      {
        const dadosCapturados: TipoCadastro = await resposta.json();
        setcadastro({nome:"",
          cpf:"",
          senha:""});
        setdados(dadosCapturados);
        setmensagemErro(null);
        router.push("/login");
        console.log(dados);
      }
      else
      {
        setmensagemErro("CPF JÁ CADASTRADO");
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
    }

    catch(Erro)
    {
      setmensagemErro("ERRO CONEXÃO API");
      console.error(Erro);
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  }
  return (
    <main>
      <div className="cadastroGeral cadastro">
        <div className="containerImg">
          <Image src={energiaCL} alt="Imagem de energia renovável" className="img-login" />
        </div>
        <div className="containerExternoForm">
          <div className="containerForm">
            <h1>Cadastro Pessoa Física </h1>
            {mensagemErro &&<h1 style={{ color: "red" }}>{mensagemErro}</h1> }
            <form className="form" onSubmit={handleSubmit}>
              <div className="linha">
                <input type="text" placeholder="CPF" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required value={cadastro.cpf} onChange={handleChange}/>
                <input type="text" placeholder="Nome Completo" name="nome" required value={cadastro.nome} onChange={handleChange}/>
                <input type="password" placeholder="Senha" name="senha"  required value={cadastro.senha} onChange={handleChange}/>
                
              </div>
              <button type="submit">Cadastrar</button>
              
            </form>

            <Link href="/cadEmpresa"><p>Cadastro para Empresas</p></Link>

          </div>
        </div>
      </div>
    </main>
  );
}
