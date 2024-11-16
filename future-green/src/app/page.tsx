import Image from 'next/image'
import React from 'react'

import sobrenos from "../../public/sobrenos.jpg"
import emissaoCo2 from "../../public/emissaoCarbono.webp"
import agroSolar from "../../public/solarAgro.webp"


export default function page() {
  return (
    <main className='pginicial-container'>
      <div className="container-inicio " style={{ backgroundImage: "url('../../banner-energiarenov.jpg')" }}>
        <div className='txt-inicial'>
          <p>EcoGreen</p>
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
          <h2>Quem somos nós?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates ipsa autem! Praesentium deleniti obcaecati delectus nobis eum, minus, reiciendis sapiente officia natus quis porro qui voluptatum at! Dicta, eos?</p>
          <button>Integrantes</button>
        </div>
        <div className="img-sobre">
          <Image src={sobrenos} alt='pessoas no celular' className='Image-Sobre'></Image>
        </div>
      </div>


      
      <div className='energias-container '>
        <div className='txt-energias'>
          <h2 className=''>Quais são as energias renováveis?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum quia voluptates doloremque! Nulla minus rem corrupti quo doloremque consequuntur inventore consectetur natus ex. Distinctio est temporibus minus adipisci vel.</p>
        </div>
        
        <div className='card-energias ' style={{ backgroundImage: "url('../../energiaSolar.jpg')" }}>
          <h2>1.</h2>
          <h2>Energia lorem</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='card-energias' style={{ backgroundImage: "url('../../energiaEolica.jpg')" }} >
          <h2>2.</h2>
          <h2>Energia lorem</h2>
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
            <button className='botao-carbono'>Calcular minha pegada</button>
          </div>
          
          
        </div>
        
      </div>


      
      <div className='areas-container-geral'>
        <h2 className='title-areas'>Áreas <span>impactadas</span></h2>
        <p className='subTitle-areas'>Entenda quais as áreas que essas energias impactam</p>
        <div className='container-areas'>
          <div className='card-areas'>
            <Image src={agroSolar} alt='' className='img-card'></Image>
            <div className='txt-card-areas'>
              <h2>Area1</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
          </div>
          <div className='card-areas'>
            <Image src={agroSolar} alt='' className='img-card'></Image>
            <div className='txt-card-areas'>
              <h2>Area2</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
          </div>
          <div className='card-areas'>
          <Image src={agroSolar} alt='' className='img-card'></Image>
            <div className='txt-card-areas'>
              <h2>Area3</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
          </div>
          
        </div>
        
      </div>

      
    </main>
  )
}
