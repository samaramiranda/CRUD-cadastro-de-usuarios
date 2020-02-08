import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//importando os componentes para renderizar na página
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Routes from './Routes';
import Footer from '../components/template/Footer';

export default props => 
  <BrowserRouter>
    <div className="app">
      {/*renderizando os componentes na página*/}
      <Logo></Logo>
      <Nav></Nav>
      <Routes></Routes>
      <Footer></Footer>
    </div>
  </BrowserRouter>
