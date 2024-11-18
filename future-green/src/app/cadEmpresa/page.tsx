"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import energiaCL from '@/../public/energiaCL.jpg';
import { useRouter } from 'next/navigation';
import { TipoCadastroEmpresa } from '@/types/types';
export default function CadastroEmpresa() {

  const router = useRouter();
  const [cadastro, setcadastro] = useState<TipoCadastroEmpresa>({
    cnpj:"",
    nomeEmpresa:"",
    razaoSocial:"",
    senha:""
  })

  const [dados, setdados] = useState<TipoCadastroEmpresa>();
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
      const resposta = await fetch("http://localhost:8080/apiJava/cadastroEmpresa",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cadastro)
      });
  
      if(resposta.ok)
      {
          const dadosCapturados: TipoCadastroEmpresa = await resposta.json();
          setcadastro({
            cnpj:"",
            nomeEmpresa:"",
            razaoSocial:"",
            senha:""
          })
          setdados(dadosCapturados);
          setmensagemErro(null);
          router.push("/login");
          console.log(dados);
      }
      else
      {
        setmensagemErro("CNPJ JÁ CADASTRADO");
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
      <div className="cadastroGeral">
        <div className="containerImg">
          <Image src={energiaCL} alt="Imagem de cadastro" className="img-login" />
        </div>
        <div className="containerExternoForm">
          <div className="containerForm">
            <h1>Cadastro para Empresas</h1>
            {mensagemErro &&<h1 style={{ color: "red" }}>{mensagemErro}</h1> }
            <form className="form" onSubmit={handleSubmit}>
              <div className="linha">
                <input
                  type="text"
                  placeholder="CNPJ"
                  name="cnpj"
                  value={cadastro.cnpj}
                  onChange={handleChange}
                  pattern="\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}" /* Padrão de CNPJ */
                />
                <input
                  type="text"
                  placeholder="Nome da Empresa"
                  name="nomeEmpresa"
                  value={cadastro.nomeEmpresa}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Razão Social"
                  name="razaoSocial"
                  value={cadastro.razaoSocial}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  name="senha"
                  value={cadastro.senha}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
