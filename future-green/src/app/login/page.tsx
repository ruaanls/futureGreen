import React from 'react'

export default function login() {
  return (
    <main>
        <div className="cadastroGeral">
                <div className="containerImg">
                    <img src="" alt="TROCAR POR IMAGE" />
                </div>
                <div className="containerExternoForm" style={{ height: "100% !important" }}>
                    <div className="containerForm">
                        <h1 className="text-[1.5rem] mb-[1rem]">Bem-vindo de volta :)</h1>
                        <form className="form">
                            <div className="linha">
                                <input
                                    type="text"
                                    placeholder="CPF"
                                    name="cpf"
                                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                                    className="cpf"
                                />
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    name="senha"
                                />
                            </div>
                            <button type='submit'>Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
    </main>
  )
}
