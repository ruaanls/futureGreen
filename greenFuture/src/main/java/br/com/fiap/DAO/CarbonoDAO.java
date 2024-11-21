package br.com.fiap.DAO;

import br.com.fiap.model.Carbono;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class CarbonoDAO
{

    public void insereCalculoCarbono(Carbono c) throws Exception
    {
        String sql = "insert into T_CARBONO(combustivel_anual, tipo_combustivel, energia_mensal, energia_solar, numeroEntregas, peso_medio, raio_distancia, total_emissao, total_creditos, cpf, cnpj)"
                + "values(?,?,?,?,?,?,?,?,?,?,?)";
        try(Connection con = new Conexao().getConexao(); PreparedStatement pstm = con.prepareStatement(sql))
        {

            pstm.setDouble(1, c.getCombustivelAno());
            pstm.setString(2,c.getCombustivel());
            pstm.setDouble(3,c.getEnergiaMensal());
            pstm.setString(4, String.valueOf(c.getSolar()));
            pstm.setInt(5, c.getNumeroEntregas());
            pstm.setDouble(6,c.getPesoMedio());
            pstm.setInt(7,c.getRaioDistancia());
            pstm.setDouble(8,c.getTotalEmissao());
            pstm.setDouble(9, c.getTotalCreditos());
            pstm.setString(10, c.getCliente().getCpf());
            pstm.setString(11, c.getEmpresa().getCnpj());
            pstm.executeUpdate();
        }
        catch(Exception e)
        {
            e.printStackTrace();
            throw e;
        }
    }
}
