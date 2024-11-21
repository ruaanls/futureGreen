package br.com.fiap.util;

import br.com.fiap.model.Cliente;
import br.com.fiap.model.Empresa;

public class ClienteTO
{
    private String nome;
    private String cpf;

    private String senha;

    public Cliente toCliente()
    {
        Cliente c = new Cliente();
        c.setNome(nome);
        c.setCpf(cpf);

        c.setSenha(senha);


        return c;
    }


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }


}
