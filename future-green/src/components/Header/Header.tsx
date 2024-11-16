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
      <Link href='/carbono'><p>Carbono</p></Link>
      <Link href='/integrantes'><p>Integrantes</p></Link>
      <Link href='/'><p>Sobre Nós</p></Link>
      </nav>
      <div className='loginHeader'>
        <button className='botao'>
        <Link href='/cadastro'><p>Abra sua conta</p></Link>
        </button>
        <Link href={"/login"}><MdAccountCircle className='Icon-User'/></Link>
      </div>
    </header>
  )
}
