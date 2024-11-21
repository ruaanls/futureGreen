package br.com.fiap.util;

import br.com.fiap.model.Empresa;

public class EmpresaTO
{
    private String cnpj;
    private String nomeEmpresa;
    private String razaoSocial;
    private String senha;

    public Empresa toEmpresa()
    {
        Empresa e = new Empresa();
        e.setCnpj(cnpj);
        e.setNomeEmpresa(nomeEmpresa);
        e.setRazaoSocial(razaoSocial);
        e.setSenha(senha);

        System.out.println("CPNJ: "+cnpj);
        System.out.println("NOME EMPRESA: "+nomeEmpresa);
        System.out.println("RAZAO_SOCIAL"+razaoSocial);
        System.out.println("SENHA: "+senha);
        return e;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getNomeEmpresa() {
        return nomeEmpresa;
    }

    public void setNomeEmpresa(String nomeEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
