import Link from 'next/link'
import React from 'react'
import logo from '@/../public/Logo.png'
import Image from 'next/image'
import { MdAccountCircle } from "react-icons/md";

export default function Header() {
  return (
    <header className='header'>
      <div className='caixa-logo'> 
        {/* Arruma o tamanho da logo depois fiquei empacado nisso @ruaanls (pqp empacar em uma imagem e desanimador pqp) */}
        {/* se pa e o tamanho dela mais slc tem q ver isso dps dx assim por enquanto */}
        <Link href='/'>
            <Image src={logo} alt='Logo' className='logo' />
        </Link>
      </div>
      <nav className='menu'>
        <p>Carbono</p>
        <p>Integrantes</p>
        <p>Sobre Nós</p>
      </nav>
      <div className='loginHeader'>
        <button className='botao'>
          <p>Abra sua conta</p>
        </button>
                    {/* arrumar rota do Link */}
        <Link href={"/future-green/src/app/login/page.tsx"}><MdAccountCircle className='Icon-User'/></Link>
      </div>
    </header>
  )
}
