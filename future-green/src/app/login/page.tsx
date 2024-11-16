import Image from 'next/image';
import React from 'react';
import energiaCL from '@/../public/energiaCL.jpg';

export default function Login() {
  return (
    <main>
      <div className="cadastroGeral">
        <div className="containerImg">
          <Image src={energiaCL} alt="TROCAR POR IMAGE" className="img-login" />
        </div>
        <div className="containerExternoForm">
          <div className="containerForm">
            <h1>Bem-vindo de volta :)</h1>
            <form className="form">
              <div className="linha">
                <input
                  type="text"
                  placeholder="CPF"
                  name="cpf"
                  pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  name="senha"
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
