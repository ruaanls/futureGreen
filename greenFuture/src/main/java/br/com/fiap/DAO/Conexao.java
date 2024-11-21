package br.com.fiap.DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao
{
    public Connection getConexao() throws SQLException
    {
        String jdbc = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:orcl";
        return DriverManager.getConnection(jdbc,"rm558775", "fiap24");
    }
}
