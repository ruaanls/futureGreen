package br.com.fiap.DAO;

import br.com.fiap.model.Empresa;
import br.com.fiap.model.Login;

import java.sql.*;
import java.util.HashMap;
import java.util.Map;

public class LoginDAO
{
    public Map<String, Object> login(Login l) throws Exception
    {
        String sql = "SELECT cpf AS identificador,senha,'T_CLIENTES' AS origem FROM T_CLIENTES WHERE cpf = ?" +
                "UNION SELECT cnpj AS identificador,senha,'T_EMPRESA' AS origem FROM T_EMPRESA WHERE cnpj = ?";
        try(Connection con = new Conexao().getConexao(); PreparedStatement pstm = con.prepareStatement(sql))
        {
            pstm.setString(1,l.getLogin());
            pstm.setString(2, l.getLogin());
            ResultSet rs = pstm.executeQuery();
            if(rs.next())
            {
                String login = rs.getString("identificador");
                String senha = rs.getString("senha");
                String tabela = rs.getString("origem");
                if(senha.equals(l.getSenha()))
                {
                    System.out.println("LOGADO COM SUCESSO!!!");
                    return(exibirDados(tabela,login));
                }
                else
                {
                    System.out.println("LOGIN OU SENHA INVÁLIDAS");
                    throw new Exception("LOGIN OU SENHA INVÁLIDAS");
                }
            }
            else
            {
                System.out.println("USUÁRIO NÃO ENCONTRADO");
                throw new Exception("USUÁRIO NÃO ENCONTRADO");
            }


        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }
    }

    private Map<String, Object> exibirDados(String tabela, String login) throws SQLException
    {
        String sql;
        if("T_CLIENTES".equals(tabela))
        {
            sql = "SELECT * FROM T_CLIENTES WHERE cpf = ?";
        }
        else if ("T_EMPRESA".equals(tabela)) {
            sql = "SELECT * FROM T_EMPRESA WHERE cnpj = ?";
        } else {
            throw new IllegalArgumentException("Origem inválida: " + tabela);
        }

        try(Connection con = new Conexao().getConexao(); PreparedStatement pstm = con.prepareStatement(sql))
        {
            pstm.setString(1,login);
            ResultSet rs = pstm.executeQuery();
            if(rs.next())
            {
                ResultSetMetaData metaData = rs.getMetaData();
                Map<String, Object> detalhes = new HashMap<>();
                for (int i = 1; i <= metaData.getColumnCount(); i++) {
                    detalhes.put(metaData.getColumnName(i), rs.getObject(i));
                }
                detalhes.put("Tabela",tabela);
                return detalhes;
            }
            else
            {

                System.out.println("Detalhes não encontrados");
            }
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
        }
        return null;
    }

    public void alteraSenha(Login l) throws SQLException
    {
        String sql;
        if(l.getTabela().equals("T_EMPRESA"))
        {
            sql = "update T_EMPRESA set senha=? WHERE cnpj=?";
        }
        else
        {
            sql = "update T_CLIENTES set senha=? WHERE cpf=?";
        }

        try(Connection con = new Conexao().getConexao(); PreparedStatement pstm = con.prepareStatement(sql))
        {
            System.out.println("COMEÇOU BANCO");
            pstm.setString(1, l.getSenha());
            pstm.setString(2,l.getLogin());
            pstm.executeUpdate();
        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }

    }

    public void deletarConta(Login l ) throws SQLException
    {
        String sql;
        if(l.getTabela().equals("T_EMPRESA"))
        {
            sql = "Delete From T_EMPRESA WHERE cnpj=?";
        }
        else
        {
            sql = "Delete From T_CLIENTES WHERE cpf=?";
        }
        try(Connection con = new Conexao().getConexao(); PreparedStatement pstm = con.prepareStatement(sql))
        {
            System.out.println("COMEÇOU BANCO");
            pstm.setString(1, l.getSenha());
            pstm.executeUpdate();
        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }
    }



}
