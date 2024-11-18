"use client";

import { useEffect, useState } from "react";
import { RespostaLogin, RespostaLoginEmpresa} from "@/types/types";
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
    <div>
      <h1>Formulário de Dados</h1>

      {/* Verificar se os dados têm TABELA como T_EMPRESA */}
      {dados && 'Tabela' in dados && dados.Tabela === "T_EMPRESA" ? (
        // Formulário para T_EMPRESA
        <form onSubmit={handleSubmit}>
          <label>
            Combustível Ano:
            <input
              type="text"
              name="combustivelAno"
              value={formData.combustivelAno}
              onChange={handleChange}
            />
          </label>

          <label>
            Tipo de Combustível:
            <select
              name="tipoCombustivel"
              value={formData.tipoCombustivel}
              onChange={handleChange}
            >
              <option value={0}>Selecione</option>
              <option value={1}>Diesel</option>
              <option value={2}>Gasolina</option>
              <option value={3}>Etanol</option>
            </select>
          </label>

          <label>
            Energia Mensal:
            <input
              type="text" 
              name="energiaMensal"
              value={formData.energiaMensal}
              onChange={handleChange}
            />
          </label>

          <label>
            Tem Solar?
            <input
              type="radio"
              name="temSolar"
              value="sim"
              checked={formData.temSolar === true}
              onChange={handleChange}
            />
            Sim
            <input
              type="radio"
              name="temSolar"
              value="nao"
              checked={formData.temSolar === false}
              onChange={handleChange}
            />
            Não
          </label>

          <label>
            Peso Médio:
            <input
              type="number"
              name="pesoMedio"
              value={formData.pesoMedio}
              onChange={handleChange}
            />
          </label>

          <label>
            Raio de Distância:
            <select
              name="raioDistancia"
              value={formData.raioDistancia}
              onChange={handleChange}
            >
              <option value={50}>Até 50km</option>
              <option value={300}>Até 300km</option>
              <option value={1000}>Até 1000km</option>
              <option value={2000}>Até 2000km</option>
            </select>
          </label>

          <label>
            Número de Entregas:
            <select
              name="numeroEntregas"
              value={formData.numeroEntregas}
              onChange={handleChange}
            >
              <option value={200}>Até 200 entregas</option>
              <option value={500}>Até 500 entregas</option>
              <option value={1000}>Até 1000 entregas</option>
              <option value={2000}>Até 2000 entregas</option>
            </select>
          </label>


          <button type="submit">Enviar</button>
        </form>
      ) : (
        // Formulário para outros tipos (não T_EMPRESA)
        <form onSubmit={handleSubmit}>
          <label>
            Combustível Ano:
            <input
              type="text"
              name="combustivelAno"
              value={formData.combustivelAno}
              onChange={handleChange}
            />
          </label>

          <label>
            Tipo de Combustível:
            <select
              name="tipoCombustivel"
              value={formData.tipoCombustivel}
              onChange={handleChange}
            >
              <option value={0}>Selecione</option>
              <option value={1}>Diesel</option>
              <option value={2}>Gasolina</option>
              <option value={3}>Etanol</option>
            </select>
          </label>

          <label>
            Energia Mensal:
            <input
              type="number"
              name="energiaMensal"
              value={formData.energiaMensal}
              onChange={handleChange}
            />
          </label>

          <label>
            Tem Solar?
            <input
              type="radio"
              name="temSolar"
              value="sim"
              checked={formData.temSolar === true}
              onChange={handleChange}
            />
            Sim
            <input
              type="radio"
              name="temSolar"
              value="nao"
              checked={formData.temSolar === false}
              onChange={handleChange}
            />
            Não
          </label>

          <button type="submit">Enviar</button>
        </form>
      )}

      {/* Verificar se os dados possuem a propriedade totalCreditos e totalEmissao */}
      {dados && (dados as RespostaCarbono).totalCreditos !== undefined && (dados as RespostaCarbono).totalEmissao !== undefined && (
        <h1>
          Total de Créditos: {(dados as RespostaCarbono).totalCreditos.toFixed(2)} | Emissão de Carbono: {(dados as RespostaCarbono).totalEmissao.toFixed(2)}
        </h1>
      )}

      {mensagemErro && <p style={{ color: "red" }}>{mensagemErro}</p>}
    </div>
  );
}




export type TipoCarbono = {
  combustivelAno: string;
  tipoCombustivel: number;
  energiaMensal: number;
  temSolar: boolean;
  cpf: string;
};

export type TipoCarbonoEmpresas = {
  cpf: string;
  combustivelAno: string;
  tipoCombustivel: number;
  energiaMensal: number;
  temSolar: boolean;
  cnpj: string;
  pesoMedio: number;
  raioDistancia: number;
  numeroEntregas: number;
};

export type RespostaCarbono = {
  cpf: string;
  combustivelAno: string;
  tipoCombustivel: number;
  energiaMensal: number;
  temSolar: boolean;
  cnpj: string;
  pesoMedio: number;
  raioDistancia: number;
  numeroEntregas: number;
  totalEmissao: number;
  totalCreditos: number;
};
