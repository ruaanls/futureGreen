import Image from 'next/image';
import React from 'react';
import energiaCL from '@/../public/energiaCL.jpg';
import Link from 'next/link';


export default function Cadastro() {
  return (
    <main>
      <div className="cadastroGeral cadastro">
        <div className="containerImg">
          <Image src={energiaCL} alt="Imagem de energia renovável" className="img-login" />
        </div>
        <div className="containerExternoForm">
          <div className="containerForm">
            <h1>Cadastre-se :)</h1>
            <form className="form">
              <div className="linha">
                <input type="text" placeholder="Nome Completo" name="nome" />
                <input type="email" placeholder="E-mail" name="email" />
                <input type="password" placeholder="Senha" name="senha" />
                <input
                  type="password"
                  placeholder="Confirme sua Senha"
                  name="confirmarSenha"
                />
              </div>
              <button type="submit">Cadastrar</button>
            </form>
            <Link href="/cadEmpresa"><p>aaaa</p></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
