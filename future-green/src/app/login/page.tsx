"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import energiaCL from '@/../public/energiaCL.jpg';
import { RespostaLogin, RespostaLoginEmpresa, TipoLogin} from '@/types/types';
import { useRouter } from 'next/navigation';

export default function Login() {

  const [login, setlogin] = useState<TipoLogin>(
    {
      login:"",
      senha:""
    });
    
    const router = useRouter();

    const [dados, setdados] = useState<RespostaLogin | RespostaLoginEmpresa | null>(null);
    const [mensagemErro, setmensagemErro] = useState<string |null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    const{name, value} = e.target;
    setlogin((prevState) => ({
      ...prevState,
      [name]:value
    }))
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulário enviado"); // Verificar se a função é chamada
    console.log("Dados enviados:", login); // Verificar os dados enviados
    
    try
    {
      const resposta = await fetch("http://localhost:8080/apiJava/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(login)
      });

      if(resposta.ok)
      {
        const dadosCapturados: RespostaLogin | RespostaLoginEmpresa = await resposta.json();
        setlogin({login:"", senha:""});
        setdados(dadosCapturados);
        setmensagemErro(null);
        localStorage.setItem("dadosLogin", JSON.stringify(dadosCapturados));
        router.push("/");
        console.log(dados)
        
      }
      else
      {
        setmensagemErro("LOGIN OU SENHA INVÁLIDOS");
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
          <Image src={energiaCL} alt="TROCAR POR IMAGE" className="img-login" />
        </div>
        <div className="containerExternoForm">
          <div className="containerForm">
            <h1>Bem-vindo de volta :)</h1>
            {mensagemErro && <h1 style={{ color: "red" }}>{mensagemErro}</h1>}
            <form className="form" onSubmit={handleSubmit}>
              <div className="linha">
                <input
                  type="text"
                  placeholder="CPF ou CNPJ"
                  name="login"
                  value={login.login}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Senha"
                  name="senha"
                  value={login.senha}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Entrar</button>
            </form>
            
          </div>
        </div>
      </div>
    </main>
  );
}
