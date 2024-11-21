package br.com.fiap.business;

import br.com.fiap.DAO.CarbonoDAO;
import br.com.fiap.DAO.ClienteDAO;
import br.com.fiap.DAO.EmpresaDAO;
import br.com.fiap.DAO.LoginDAO;
import br.com.fiap.model.Carbono;
import br.com.fiap.model.Cliente;
import br.com.fiap.model.Empresa;
import br.com.fiap.model.Login;

import java.util.Map;

public class GreenBM
{
    public void cadastro(Cliente c) throws  Exception
    {
        ClienteDAO cadastro = new ClienteDAO();
        cadastro.insereCliente(c);
    }

    public void cadastroEmpresa(Empresa e) throws  Exception
    {
        EmpresaDAO cadastroEmpresa = new EmpresaDAO();
        cadastroEmpresa.insereCliente(e);
        Empresa em = new Empresa();
        em.setTemEmpresa(true);

    }


    public void calculaCarbono(Carbono c) throws Exception
    {
        CarbonoDAO carbonoBanco = new CarbonoDAO();
        carbonoBanco.insereCalculoCarbono(c);
    }

    public Map<String, Object> login(Login l) throws Exception
    {
        LoginDAO banco = new LoginDAO();
        return banco.login(l);
    }

    public void alteraSenha(Login l) throws Exception
    {
        LoginDAO banco = new LoginDAO();
        banco.alteraSenha(l);

    }

    public void deletarConta(Login l) throws  Exception
    {
        LoginDAO banco = new LoginDAO();
        banco.deletarConta(l);
    }



}
