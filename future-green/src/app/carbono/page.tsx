"use client";

import { useEffect, useState } from "react";
import { RespostaCarbono, RespostaLogin, RespostaLoginEmpresa, TipoCarbonoEmpresas} from "@/types/types";
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

  useEffect(() => {
    const dadosArmazenados = localStorage.getItem("dadosLogin");

    if (dadosArmazenados) {
      const dadosParseados = JSON.parse(dadosArmazenados);

      // Verificar se o objeto possui a propriedade 'Tabela'
      if ('Tabela' in dadosParseados) {
        setDados(dadosParseados as RespostaLoginEmpresa | RespostaLogin); // Tipo correto quando existe a propriedade 'Tabela'
      } else {
        setDados(dadosParseados as RespostaCarbono); // Caso contrário, é um RespostaCarbono
      }

      // Verificar e obter cpf/cnpj do localStorage e adicionar ao formData
      const cpf = localStorage.getItem("cpf");
      const cnpj = localStorage.getItem("cnpj");

      if (cpf) {
        setFormData((prevData) => ({
          ...prevData,
          cpf: cpf, // Atribuindo o CPF ao formData
        }));
      }

      if (cnpj) {
        setFormData((prevData) => ({
          ...prevData,
          cnpj: cnpj, // Atribuindo o CNPJ ao formData
        }));
      }
    }
  }, []);

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
      const resposta = await fetch("http://localhost:8080/apiJava/cadastroEmpresa", {
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

        setDados(dadosCapturados); // Atualizando os dados com a resposta
        setMensagemErro(null);
        router.push("/login");
      } else {
        setMensagemErro("CNPJ JÁ CADASTRADO");
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
      Formulário de Dados
    </h1>

    {dados && "Tabela" in dados && dados.Tabela === "T_EMPRESA" ? (
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
      </form>
    )}

    {dados && (dados as RespostaCarbono).totalCreditos !== undefined && (dados as RespostaCarbono).totalEmissao !== undefined && (
      <h1 className="text-lg font-medium text-gray-700 mt-4">
        Total de Créditos: {(dados as RespostaCarbono).totalCreditos.toFixed(2)} | Emissão de Carbono:{" "}
        {(dados as RespostaCarbono).totalEmissao.toFixed(2)}
      </h1>
    )}

    {mensagemErro && (
      <p className="text-red-500 font-medium mt-4">{mensagemErro}</p>
    )}
  </div>
</div>

  );
}





