"use client";

import { useEffect, useState } from "react";
import { RespostaCarbono, RespostaLogin, RespostaLoginEmpresa, TipoCarbonoEmpresas } from "@/types/types";
import { useRouter } from "next/navigation";

export default function Carbono() {
  const router = useRouter();
  const [dados, setDados] = useState<RespostaCarbono | RespostaLogin | RespostaLoginEmpresa>();
  const [formData, setFormData] = useState<TipoCarbonoEmpresas>({
    combustivelAno: "",
    tipoCombustivel: 0,
    energiaMensal: 0.0,
    temSolar: false,
    cnpj: "",
    pesoMedio: 0.0,
    raioDistancia: 0,
    numeroEntregas: 0,
    cpf: "",
  });

  const [mensagemErro, setMensagemErro] = useState<string | null>(null);
  const [autenticado, setAutenticado] = useState(false); 
  const [cpf, setcpf] = useState<string>();
  const [cnpj, setcnpj] = useState<string>();
  
  useEffect(() => {
    const dadosArmazenados = localStorage.getItem("dadosLogin");
  
    if (dadosArmazenados) {
      const dadosParseados = JSON.parse(dadosArmazenados);
      let autenticadoLocal = false;
      let cpfLocal = "";
      let cnpjLocal = "";
  
      if ("Tabela" in dadosParseados) {
        setDados(dadosParseados as RespostaLoginEmpresa | RespostaLogin);
  
        if ((dadosParseados as RespostaLogin).CPF) {
          autenticadoLocal = true;
          cpfLocal = (dadosParseados as RespostaLogin).CPF;
        } else if ((dadosParseados as RespostaLoginEmpresa).CNPJ) {
          autenticadoLocal = true;
          cnpjLocal = (dadosParseados as RespostaLoginEmpresa).CNPJ;
        }
      } else {
        setDados(dadosParseados as RespostaCarbono);
      }
  
      if (autenticadoLocal) {
        setAutenticado(true);
        setcpf(cpfLocal);
        setcnpj(cnpjLocal);
        if(cpfLocal)
        {
          setFormData((prevData) => ({
            ...prevData,
            cpf: cpfLocal,
          }));
          
        }
        if(cnpjLocal)
        {
          setFormData((prevData) => ({
            ...prevData,
            cnpj: cnpjLocal,
          }));
          
        }
        
      } else {
        
        setMensagemErro("Você precisa estar logado para acessar esta página.");
        setTimeout(() => {
          router.push("/login");
        }, 2500);
      }
    } else {
      
      setMensagemErro("Você precisa estar logado para acessar esta página.");
      setTimeout(() => {
        router.push("/login");
      }, 2500);
    }
  }, [router]);
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resposta = await fetch("http://localhost:8080/apiJava/calculaCarbono", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (resposta.ok) {
        const dadosCapturados: RespostaCarbono = await resposta.json();
        setFormData({
          combustivelAno: "",
          tipoCombustivel: 0,
          energiaMensal: 0.0,
          temSolar: false,
          cnpj: "",
          pesoMedio: 0.0,
          raioDistancia: 0,
          numeroEntregas: 0,
          cpf: "",
        });

        setDados(dadosCapturados);
        setMensagemErro(null);
        
      } else {
        setMensagemErro("CPF OU CNPJ NÃO CAPTURADO");
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
    } catch (Erro) {
      setMensagemErro("ERRO CONEXÃO API");
      console.error(Erro);
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Calculadora de Carbono
        </h1>

        {autenticado ? (
          dados && "Tabela" in dados && dados.Tabela === "T_EMPRESA" ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block font-medium mb-1">Combustível Ano:</label>
                  <input
                    type="text"
                    name="combustivelAno"
                    value={formData.combustivelAno}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Tipo de Combustível:</label>
                  <select
                    name="tipoCombustivel"
                    value={formData.tipoCombustivel}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  >
                    <option value={0}>Selecione</option>
                    <option value={1}>Diesel</option>
                    <option value={2}>Gasolina</option>
                    <option value={3}>Etanol</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Energia Mensal:</label>
                  <input
                    type="text"
                    name="energiaMensal"
                    value={formData.energiaMensal}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Tem Solar?</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="temSolar"
                        value="sim"
                        checked={formData.temSolar === true}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Sim
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="temSolar"
                        value="nao"
                        checked={formData.temSolar === false}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Não
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-1">Peso Médio:</label>
                  <input
                    type="number"
                    name="pesoMedio"
                    value={formData.pesoMedio}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Raio de Distância:</label>
                  <select
                    name="raioDistancia"
                    value={formData.raioDistancia}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  >
                    <option value={50}>Até 50km</option>
                    <option value={300}>Até 300km</option>
                    <option value={1000}>Até 1000km</option>
                    <option value={2000}>Até 2000km</option>
                  </select>
                </div>
                <div className="col-span-2 text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600"
                  >
                    Enviar
                  </button>
                </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Combustível Ano:</label>
          <input
            type="text"
            name="combustivelAno"
            value={formData.combustivelAno}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Tipo de Combustível:</label>
          <select
            name="tipoCombustivel"
            value={formData.tipoCombustivel}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm"
          >
            <option value={0}>Selecione</option>
            <option value={1}>Diesel</option>
            <option value={2}>Gasolina</option>
            <option value={3}>Etanol</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Energia Mensal:</label>
          <input
            type="number"
            name="energiaMensal"
            value={formData.energiaMensal}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Tem Solar?</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="temSolar"
                value="sim"
                checked={formData.temSolar === true}
                onChange={handleChange}
                className="mr-2"
              />
              Sim
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="temSolar"
                value="nao"
                checked={formData.temSolar === false}
                onChange={handleChange}
                className="mr-2"
              />
              Não
            </label>
          </div>
        </div>
        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>
        {dados && (dados as RespostaCarbono).totalCreditos !== undefined && (dados as RespostaCarbono).totalEmissao !== undefined && (
        <h1 className="text-lg font-medium text-gray-700 mt-4">
          Total de Créditos: {(dados as RespostaCarbono).totalCreditos.toFixed(2)} | Emissão de Carbono:{" "}T CO²
          {(dados as RespostaCarbono).totalEmissao.toFixed(2)}
        </h1>
        )}
        {mensagemErro && (
        <p className="text-red-500 font-medium mt-4">{mensagemErro}</p>
        )}
      </form>)
          ) : (
            <p className="text-red-500 font-medium text-center">{mensagemErro}</p>
          )}
        </div>
    </div>
  );
}
