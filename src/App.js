import React from 'react'
import { GlobalStyle } from './GlobalStyle';
import Cursos from './Objects/Cursos';
import Preco from './Objects/Preco';
import Header from './Objects/Header'
import Intro from './Objects/Intro'
import Vantagens from './Objects/Vantagens';
import Aplicativo from './Objects/Aplicativo';
import Depoimentos from './Objects/Depoimentos';
import Footer from './Objects/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Intro />
      <Cursos />
      <Preco />
      <Vantagens />
      <Aplicativo />
      <Depoimentos />
      <Footer />
    </>
  )
}

export default App
