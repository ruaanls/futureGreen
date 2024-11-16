import React from 'react'

export default function cadastro() {
  return (
    <main>
        <div className="cadastro-container">
                <div className="cadastro-img-container">
                    <img src="" alt="TROCAR PARA IMAGE" />
                </div>

                <div className="cadastro-form-container">
                    <div className="conteiner-form-cad">
                        <h1>Crie sua conta</h1>
                        

                        <form className="cadastro-form">
                            <div className="cadastro-row">
                                <div className="cadastro-field">
                                    <input 
                                        type="text" 
                                        placeholder="CPF" 
                                        
                                        
                                         
                                        name="cpf" 
                                    />
                                </div>
                                <div className="cadastro-field">
                                    <input 
                                        type="text" 
                                        placeholder="Nome Completo" 
                                         
                                        name="nome" 
                                    />
                                </div>
                            </div>
                            <div className="cadastro-row">
                                <div className="cadastro-field">
                                    <input 
                                        type="email" 
                                        placeholder="Email" 
                                        title="E-MAIL INVÁLIDO, use este padrão: aaaaa@aaaa.aaa.aa" 
                                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"  
                                         
                                        name="email" 
                                    />
                                </div>
                                <div className="cadastro-field">
                                    <input 
                                        type="password" 
                                        placeholder="Senha" 
                                        
                                        name="senha" 
                                    />
                                </div>
                            </div>
                            
                            <div className="cadastro-button-container">
                                <button type="submit" style={{ width: "50%" }} className="cadastro-button">Criar Conta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </main>
  )
}
