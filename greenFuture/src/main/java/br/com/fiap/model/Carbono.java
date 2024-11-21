package br.com.fiap.model;

public class Carbono
{
    private long id;
    private double combustivelAno;
    private int tipoCombustivel;
    private double energiaMensal;
    private boolean temSolar;
    private int numeroEntregas;
    private double pesoMedio;
    private int raioDistancia;
    private double totalEmissao;
    private double totalCreditos;
    private Cliente cliente;
    private Empresa empresa;
    private char solar;
    private String combustivel;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getCombustivelAno() {
        return combustivelAno;
    }

    public void setCombustivelAno(double combustivelAno) {
        this.combustivelAno = combustivelAno;
    }

    public int getTipoCombustivel() {
        return tipoCombustivel;
    }

    public void setTipoCombustivel(int tipoCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
    }

    public double getEnergiaMensal() {
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

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public void setEnergiaMensal(double energiaMensal) {
        this.energiaMensal = energiaMensal;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
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

    public char getSolar() {
        return solar;
    }

    public void setSolar(char solar) {
        this.solar = solar;
    }

    public String getCombustivel() {
        return combustivel;
    }

    public void setCombustivel(String combustivel) {
        this.combustivel = combustivel;
    }

    public double calculaCarbono(float combustivelAno, int tipoCombustivel, double energiaMensal, boolean temSolar, Cliente cliente, Empresa empresa)
    {
        /* Combustível */
        double multiplicador = 0;
        switch(tipoCombustivel)
        {
            case 1:
                multiplicador = 0.0042;
                combustivel = "Dissel";
                break;
            case 2:
                multiplicador = 0.003504;
                combustivel = "Gasolina";
                break;
            case 3:
                multiplicador = 0.000024;
                combustivel = "Etanol";
                break;
        }
        double resultadoCombustivel = combustivelAno * multiplicador;
        double resultadoEnergia = 1;
        /* Energia*/
        if(empresa.getTemEmpresa() != null)
        {
            multiplicador = 0.002424;
            if(temSolar)
            {
                multiplicador = 0.000936;
            }

        }
        else{
            multiplicador = 0.000816;
            if(temSolar) {
                multiplicador = 0.002136;
            }
        }
        resultadoEnergia = energiaMensal * multiplicador;

        if(temSolar)
        {
            solar = 'T';
        }
        else
        {
            solar = 'F';
        }
        /* Entregas EXCLUSIVO PESSOA JURIDICA*/
        if(empresa.getTemEmpresa() !=null)
        {
            int qtdEntregas = numeroEntregas;
            double peso = pesoMedio;
            int distanciaEntregas = raioDistancia;
            double carbonoKm = 0.00432;
            double carbonoKg = 0;
            switch (distanciaEntregas)
            {
                case 50:
                    carbonoKg = 0.000171;
                    break;


                case 300:
                    carbonoKg = 0.000432;
                    break;

                case 1000:
                    carbonoKg = 0.00156;
                    break;
                case 2000:
                    carbonoKg = 0.0036;
                    break;
            }
            carbonoKm = 0.00432 * qtdEntregas;
            carbonoKg = carbonoKm * qtdEntregas;
            double resultadoEntregas = carbonoKg + carbonoKm;
            double resultadoFinal = resultadoCombustivel + resultadoEnergia + resultadoEntregas;
            totalEmissao = resultadoFinal;
            return resultadoFinal;
        }
        else
        {
            double resultadoFinal = resultadoCombustivel + resultadoEnergia;
            totalEmissao = resultadoFinal;
            return resultadoFinal;
        }


    }

    public double calculaCreditos(double carbonoTotal)
    {
        totalCreditos = carbonoTotal * 66.37;
        return totalCreditos;

    }


}
