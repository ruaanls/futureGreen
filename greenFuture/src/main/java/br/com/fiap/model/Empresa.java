package br.com.fiap.model;



public class Empresa
{
    private String cnpj;
    private String nomeEmpresa;
    private String razaoSocial;
    private String senha;
    private Boolean temEmpresa;


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

    public Boolean getTemEmpresa() {
        return temEmpresa;
    }

    public void setTemEmpresa(Boolean temEmpresa) {
        this.temEmpresa = temEmpresa;
    }
}
