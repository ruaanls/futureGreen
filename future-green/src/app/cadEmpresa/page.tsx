import Image from 'next/image';
import React from 'react';
import energiaCL from '@/../public/energiaCL.jpg';

export default function CadastroEmpresa() {
  return (
    <main>
      <div className="cadastroGeral">
        <div className="containerImg">
          <Image src={energiaCL} alt="Imagem de cadastro" className="img-login" />
        </div>
        <div className="containerExternoForm">
          <div className="containerForm">
            <h1>Cadastro de Empresa</h1>
            <form className="form">
              <div className="linha">
                <input
                  type="text"
                  placeholder="CNPJ"
                  name="cnpj"
                  pattern="\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}" /* Padrão de CNPJ */
                />
                <input
                  type="text"
                  placeholder="Nome da Empresa"
                  name="nomeEmpresa"
                />
                <input
                  type="text"
                  placeholder="Razão Social"
                  name="razaoSocial"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  name="senha"
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
