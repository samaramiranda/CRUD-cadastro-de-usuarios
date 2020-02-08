import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

//criando o menu lateral
export default props =>
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/"> {/*propriedade do react-router para navegar a determinado elemento*/}
        <i className="fa fa-home"></i> Início
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i> Usuários
      </Link>
    </nav>
  </aside>