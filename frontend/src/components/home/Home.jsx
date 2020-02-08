import React from 'react';
import Main from '../template/Main';

export default props =>
  <Main
    icon="home" //referenciando o tipo de icone que quero
    title="Início"
    subtitle="Projeto CRUD em React.">
    <div className='display-4'>Bem Vindo!</div>
    <hr></hr>
    <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React!</p>
  </Main>