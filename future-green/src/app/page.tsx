

"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import sobrenos from "../../public/sobrenos.jpg"
import emissaoCo2 from "../../public/emissaoCarbono.webp"
import solar from "../../public/solar.jpg"
import sisEletrico from "../../public/sisEletrico.jpg"
import agroSus from "../../public/agroSus.jpg"
import { RespostaLogin, RespostaLoginEmpresa } from '@/types/types'
import Link from 'next/link'


export default function page() {

  const [dados, setDados] = useState<RespostaLogin | RespostaLoginEmpresa | null>(null);

  useEffect(() => {
    const dadosArmazenados = localStorage.getItem("dadosLogin");
    if (dadosArmazenados) {
      const dadosParseados = JSON.parse(dadosArmazenados);

      // Verificar qual tipo foi recebido
      if ("CPF" in dadosParseados) {
        setDados(dadosParseados as RespostaLogin);
      } else if ("CNPJ" in dadosParseados) {
        setDados(dadosParseados as RespostaLoginEmpresa);
      }
      
    }
    

  }, []);
  
  return (
    <main className='pginicial-container'>
      <div className="container-inicio " style={{ backgroundImage: "url('../../banner-energiarenov.jpg')" }}>
        <div className='txt-inicial'>
          <h2>Utilize a  <span>tecnologia</span> para garantir um futuro mais <span>sustentável. </span>
          </h2>
          <p className='texto-home'>
            Entenda como a tecnologia pode ajudar na implantação de novas fontes de energias renováveis e o que você pode fazer em relação a isso.
          </p>

          <button className='botao-home hover:animate-jump animate-duration-450 '>
            <h2>Saiba Mais</h2>
          </button>
        </div>
      </div>
      <div className='container-sobre'>
        
        <div className='txt-sobre'>
          <h2>Somos a <span>Eco Energy</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates ipsa autem! Praesentium deleniti obcaecati delectus nobis eum, minus, reiciendis sapiente officia natus quis porro qui voluptatum at! Dicta, eos?</p>
          <button><Link href={"/integrantes"} ><h1>Ir para Integrantes</h1></Link></button>
        </div>
        <div className="img-sobre">
          <Image src={sobrenos} alt='pessoas no celular' className='Image-Sobre'></Image>
        </div>
      </div>


      
      <div className='energias-container '>
        <div className='txt-energias'>
          <h2>Quais são as <span>energias renováveis?</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum quia voluptates doloremque! Nulla minus rem corrupti quo doloremque consequuntur inventore consectetur natus ex. Distinctio est temporibus minus adipisci vel.</p>
        </div>
        
        <div className='card-energias bg-no-repeat' style={{ backgroundImage: "url('../../energiaSolar.jpg')" }}>
          <h2 className='numero'>1.</h2>
          <h2 className='titulo'>Energia lorem</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='card-energias bg-no-repeat' style={{ backgroundImage: "url('../../energiaEolica.jpg')" }} >
          <h2 className='numero'>2.</h2>
          <h2 className='titulo'>Energia lorem</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
      </div>

      <div className='carbono-container'>
        
        <div className='txt-carbono'>
          
          <div className='w-[50%]'>
              <Image src={emissaoCo2} alt='fabricas com fumaça saindo delas' className='img-cal'></Image>
          </div>
          <div className='detalhes-carbono pb-[2rem] ' >
            <h2 className='title-calculo '>Calcule a sua <br /><span>pegada de carbono</span>.</h2>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eos eaque dolorum delectus
              eveniet, illo incidunt, placeat accusantium perferendis nostrum sequi facilis hic quam.</p>
            <button className='botao-carbono' ><Link href={"/carbono"} ><h1>Calcular minha pegada</h1></Link></button>
          </div>
          
          
        </div>
        
      </div>


      
      <div className="areas-container-geral">
  <h2 className="title-areas">Áreas <span>impactadas</span></h2>
  <p className="subTitle-areas">Conheça os setores beneficiados pelo uso de energias renováveis</p>
  <div className="container-areas">
    {[
      {
        title: "Energia Solar",
        description: "A energia solar utiliza a luz do sol para gerar eletricidade limpa, sustentável e acessível. Essa tecnologia inovadora é uma das alternativas mais promissoras para enfrentar as mudanças climáticas, reduzindo nossa dependência de combustíveis fósseis e promovendo um futuro mais sustentável.",
        image: solar,
        alt: "Sistemas de energia solar em áreas agrícolas"
      },
      {
        title: "Agronegócio",
        description: "O agronegócio está se transformando com o uso de fontes de energia renováveis, como a solar e a eólica. Essas tecnologias ajudam a reduzir custos, aumentar a eficiência e minimizar o impacto ambiental, garantindo práticas agrícolas mais sustentáveis e responsáveis.",
        image: agroSus,
        alt: "Plantas solares em áreas industriais"
      },
      {
        title: "Sistema",
        description: "Os sistemas elétricos modernos integram fontes renováveis, como a energia hídrica, solar e eólica, para oferecer uma eletricidade mais limpa e confiável. Essa evolução é essencial para criar redes elétricas sustentáveis que atendam às demandas do presente sem comprometer os recursos futuros.",
        image: sisEletrico,
        alt: "Usos diversificados de energia hídrica"
      }
    ].map((area, index) => (
      <div key={index} className="card-areas">
        <Image src={area.image} alt={area.alt} className="img-card" />
        <div className="txt-card-areas">
          <h2>{area.title}</h2>
          <p>{area.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      
    </main>
  )
}
