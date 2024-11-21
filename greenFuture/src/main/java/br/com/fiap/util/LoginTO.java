package br.com.fiap.util;

import br.com.fiap.model.Login;

public class LoginTO
{
    private String login;
    private String senha;

    public Login toLogin()
    {
        Login l = new Login();
        l.setLogin(login);
        l.setSenha(senha);
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
}
