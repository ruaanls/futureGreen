export type TipoLogin = {
    login:string,
    senha:string
};

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

export type TipoCadastro = {
    nome:string,
    cpf:string,
    senha:string
}

export type TipoCadastroEmpresa = {
    cnpj:string,
    nomeEmpresa:string,
    razaoSocial:string,
    senha:string
  
}

export type TipoCarbono = {
    
    combustivelAno:string,
    tipoCombustivel:number,
    energiaMensal:number,
    temSolar:boolean,
    cpf:string
}

export type TipoCarbonoEmpresas = {
    cpf:string
    combustivelAno:string,
    tipoCombustivel:number,
    energiaMensal:number,
    temSolar:boolean,
    cnpj:string,
    pesoMedio:number,
    raioDistancia:number,
    numeroEntregas:number
}

export type RespostaCarbono = {
    cpf:string
    combustivelAno:string,
    tipoCombustivel:number,
    energiaMensal:number,
    temSolar:boolean,
    cnpj:string,
    pesoMedio:number,
    raioDistancia:number,
    numeroEntregas:number,
    totalCreditos: number,
    totalEmissao: number
}

