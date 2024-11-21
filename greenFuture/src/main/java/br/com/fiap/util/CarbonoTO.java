package br.com.fiap.util;

import br.com.fiap.model.Carbono;
import br.com.fiap.model.Cliente;
import br.com.fiap.model.Empresa;

public class CarbonoTO
{

    private float combustivelAno;
    private int tipoCombustivel;
    private float energiaMensal;
    private boolean temSolar;
    private int numeroEntregas;
    private double pesoMedio;
    private int raioDistancia;
    private double totalEmissao;
    private double totalCreditos;
    private String cpf;
    private String cnpj;
    public Carbono toCarbono()
    {
        Carbono c = new Carbono();
        Cliente cliente = new Cliente();
        Empresa empresa = new Empresa();

        c.setCombustivelAno(combustivelAno);

        c.setTipoCombustivel(tipoCombustivel);
        c.setEnergiaMensal(energiaMensal);
        c.setTemSolar(temSolar);
        c.setNumeroEntregas(numeroEntregas);
        c.setPesoMedio(pesoMedio);
        c.setRaioDistancia(raioDistancia);


        if(cpf == null && cnpj != null)
        {
            empresa.setTemEmpresa(true);
            empresa.setCnpj(cnpj);
            c.setEmpresa(empresa);
            c.setCliente(cliente);

        }
        else
        {
            cliente.setCpf(cpf);
            c.setCliente(cliente);
            c.setEmpresa(empresa);
            System.out.println("CPF É: "+ cpf);
        }
        double totalEmitido = c.calculaCarbono(combustivelAno, tipoCombustivel, energiaMensal, temSolar, cliente, empresa);
        double Creditos = c.calculaCreditos(totalEmitido);
        this.totalEmissao = totalEmitido;
        this.totalCreditos = Creditos;
        c.setTotalEmissao(totalEmissao);
        c.setTotalCreditos(totalCreditos);
        return c;



    }



    public float getCombustivelAno() {
        return combustivelAno;
    }

    public void setCombustivelAno(float combustivelAno) {
        this.combustivelAno = combustivelAno;
    }

    public int getTipoCombustivel() {
        return tipoCombustivel;
    }

    public void setTipoCombustivel(int tipoCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
    }

    public float getEnergiaMensal() {
        return energiaMensal;
    }

    public void setEnergiaMensal(float energiaMensal) {
        this.energiaMensal = energiaMensal;
    }

    public boolean isTemSolar() {
        return temSolar;
    }

    public void setTemSolar(boolean temSolar) {
        this.temSolar = temSolar;
    }

    public int getNumeroEntregas() {
        return numeroEntregas;
    }

    public void setNumeroEntregas(int numeroEntregas) {
        this.numeroEntregas = numeroEntregas;
    }

    public double getPesoMedio() {
        return pesoMedio;
    }

    public void setPesoMedio(double pesoMedio) {
        this.pesoMedio = pesoMedio;
    }

    public int getRaioDistancia() {
        return raioDistancia;
    }

    public void setRaioDistancia(int raioDistancia) {
        this.raioDistancia = raioDistancia;
    }



    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public double getTotalEmissao() {
        return totalEmissao;
    }

    public void setTotalEmissao(double totalEmissao) {
        this.totalEmissao = totalEmissao;
    }

    public double getTotalCreditos() {
        return totalCreditos;
    }

    public void setTotalCreditos(double totalCreditos) {
        this.totalCreditos = totalCreditos;
    }
}
