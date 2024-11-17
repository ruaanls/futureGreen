export type TipoLogin = {
    login:string,
    senha:string
}

export type RespostaLogin = {
    SENHA: string;
    CPF: string;
    Tabela: string;
    NOME: string;
  };
  
  export type RespostaLoginEmpresa = {
    RAZAO_SOCIAL: string;
    SENHA: string;
    Tabela: string;
    CNPJ: string;
    NOME_EMPRESA: string;
  };