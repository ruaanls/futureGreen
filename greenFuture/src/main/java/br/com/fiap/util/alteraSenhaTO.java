package br.com.fiap.util;

import br.com.fiap.model.Login;

public class alteraSenhaTO
{
    private String login;
    private String senha;
    private String tabela;


    public Login toLogin()
    {
        Login l = new Login();
        l.setLogin(login);
        l.setSenha(senha);
        l.setTabela(tabela);
        return l;
    }
    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTabela() {
        return tabela;
    }

    public void setTabela(String tabela) {
        this.tabela = tabela;
    }
}
