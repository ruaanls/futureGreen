package br.com.fiap.DAO;

import br.com.fiap.model.Cliente;
import br.com.fiap.model.Empresa;
import br.com.fiap.model.Login;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmpresaDAO
{

    public void insereCliente(Empresa e) throws Exception
    {
        String sql = "insert into T_EMPRESA(cnpj, nome_empresa, razao_social, senha) values(?,?,?,?)";
        try(Connection con = new Conexao().getConexao(); PreparedStatement pstm = con.prepareStatement(sql))
        {
            System.out.println("COMEÇOU BANCO");
            pstm.setString(1, e.getCnpj());
            pstm.setString(2,e.getRazaoSocial());
            pstm.setString(3,e.getRazaoSocial());
            pstm.setString(4,e.getSenha());

            pstm.executeUpdate();
        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }
    }


    public List<Empresa> recuperaEmpresas() throws SQLException
    {
        String sql = "SELECT * FROM T_EMPRESA";
        List<Empresa> lista = new ArrayList<>();
        try(Connection con = new Conexao().getConexao(); PreparedStatement pstm = con.prepareStatement(sql))
        {
            ResultSet rs = pstm.executeQuery();
            while(rs.next())
            {
                Empresa e = new Empresa();
                e.setCnpj(rs.getString("cnpj"));
                e.setNomeEmpresa(rs.getString("NOME_EMPRESA"));
                e.setRazaoSocial(rs.getString("RAZAO_SOCIAL"));
                e.setSenha(rs.getString("SENHA"));
                lista.add(e);
            }
        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }

        return lista;

    }
}
