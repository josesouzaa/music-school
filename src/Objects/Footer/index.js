import React from 'react'
import { FooterBackground, FooterWrapper } from './style'
import { BsFacebook, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <FooterBackground>
      <div className="container">
        <FooterWrapper>
          <div>
            <h2>Music School</h2>
            <ul>
              <li>Music School</li>
              <li>CNPJ 00.000.000/0000-00</li>
              <li>Rua Vergueiro - São Paulo/SP</li>
              <li>Telefone (11) 9999-9999</li>
            </ul>
            <div>
              <a href="#cursos" className="animeup"><BsFacebook /></a>
              <a href="#cursos" className="animeup"><BsYoutube /></a>
            </div>
          </div>
          <div>
            <h2>Cursos da Music School</h2>
            <ul>
              <li><a href="#cursos">Cursos de Teclado e Piano</a></li>
              <li><a href="#cursos">Cursos de Violão e Guitarra</a></li>
              <li><a href="#cursos">Cursos de Canto</a></li>
              <li><a href="#cursos">Cursos de Baixo</a></li>
              <li><a href="#cursos">Cursos de Bateria</a></li>
              <li><a href="#cursos">Cursos de Sopro</a></li>
            </ul>
          </div>
          <div>
            <h2>Receba novidades e lançamentos</h2>
            <div>
              <input type="email" placeholder="email" />
              <button>OK</button>
            </div>
          </div>
        </FooterWrapper>
      </div>
    </FooterBackground>
  )
}

export default Footer
