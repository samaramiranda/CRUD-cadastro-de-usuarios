import './Logo.css';
import logo from '../../assets/imgs/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
  <aside className="logo">
    <Link to="/" className="logo"> {/*importando a imagem do logo. Se clicar no logo volta para a página inicial*/}
      <img src={logo} alt="logo"></img> {/*referenciando*/}
    </Link>
  </aside>
