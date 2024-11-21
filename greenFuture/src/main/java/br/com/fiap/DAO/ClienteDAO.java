package br.com.fiap.DAO;

import br.com.fiap.model.Cliente;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class ClienteDAO
{
    public void insereCliente(Cliente c) throws Exception
    {
        String sql = "insert into T_CLIENTES(NOME, CPF, SENHA) values(?,?,?)";
        try(Connection con = new Conexao().getConexao(); PreparedStatement pstm = con.prepareStatement(sql))
        {
            System.out.println("COMEÇOU BANCO");
            pstm.setString(1, c.getNome());
            pstm.setString(2,c.getCpf());
            pstm.setString(3,c.getSenha());

            pstm.executeUpdate();
        }
        catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

}
