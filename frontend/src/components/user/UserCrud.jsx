import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main';

const headerProps = { //propriedades do cabeçalho
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
};

const baseURL = 'http://localhost:3001/users'
const initialState = { //para inicializar o formulario com valores vazios
  user: { name: '', email: '' },
  list: []
};

export default class UserCrud extends Component { //componente de classe
  
  state = { ...initialState}; //estado é inicializado com todos os valores do estado inicial
  
  componentWillMount() { //função é chamanda quando o componente for ser exibido na tela
    axios(baseURL).then(resp => {
      this.setState({ list: resp.data }) //a resposta da requisição é salva dentro da lista
    })
  }

  clear() { //quando o usuário cancelar o formulário os campos serem limpos
    this.setState({ user: initialState.user });
  };

  save() { //para salvar ou alterar o usuário
    const user = this.state.user;
    const method = user.id ? 'put' : 'post'; //se o user.id for true faço put (alterar) senão faço post (salvar)
    //se for um put é passado também o ID do usuário na URL. Se existir ID a URL terá a baseURL e o ID, senão terá só a baseURL
    const url = user.id ? `${baseURL}/${user.id}` : baseURL;
    axios[method](url, user) //axios executa a função method
      .then(resp => {
        const list = this.getUpdateList(resp.data);//atualizando a lista com o usuário que peguei do backend
        this.setState({ user: initialState.user, list }); //limpa o formulário sempre que salvar ou alterar um usuário e atualiza a lista
      });
  };

  getUpdateList(user, add = true) { //se o add true for verdadeiro eu adiciono elemento a lista
    const list = this.state.list.filter(u => u.id !== user.id); //cria nova lista com users que tem o id diferente do que passe no paramentro (removendo ele da lista)
    if(add) list.unshift(user); //colocando o user que removi na primeira posiçao do array
    return list;
  };

  updateField(event) {
    const user = { ...this.state.user }; //clonando o usuário com os dados do state
    user[event.target.name] = event.target.value; //pegando o valor digitado no input e passando para o name
    this.setState({ user }); //setando o estado e alterando o user
  };

  renderForm() { //renderizando o formulário
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input 
                type="text" 
                className="form-control" 
                name="name"
                value={this.state.user.name} //tem como value o nome do usuario que está no state*/
                onChange={e => this.updateField(e)} //chama a função de atualizar*/
                placeholder="Digite o nome..."/>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input 
                type="text" 
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={e => this.updateField(e)}
                placeholder="Digite o e-mail..."/>
            </div>
          </div>
        </div>

        <hr/>
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <button className="btn btn-primary" onClick={e => this.save(e)}>
                Salvar {/*chama a função save*/}
              </button>

              <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                Cancelar {/*chama a função clear*/}
              </button>
            </div>
          </div>
      </div>
    );
  };

  load(user) {
    this.setState({ user }); //atualizando o estado do objeto
  };

  remove(user) {
    axios.delete(`${baseURL}/${user.id}`).then(resp => {
      const list = this.getUpdateList(user, false)//procurando o usuário na lista, e false para não adicionar a lista
      this.setState({ list })
    });
  };

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()} {/*função para renderizar as linhas*/}
        </tbody>
      </table>
    );
  };

  renderRows() {
    return this.state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button 
              className="btn btn-warning"
              onClick={() => this.load(user)}> {/*quando clicar no botão irá carregar os users*/}
              <i className="fa fa-pencil"></i>
            </button>
            <button 
              className="btn btn-danger mt-0.5"
              onClick={() => this.remove(user)}> {/*quando clicar no botão irá remover o user*/}
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  render () {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  };
};