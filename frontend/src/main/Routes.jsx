import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

export default props =>
  <Switch>
    <Route exact path='/' component={Home}></Route> {/*quando o usuário navegar para o / é renderizada a página home*/}
    <Route path='/users' component={UserCrud}></Route>
    <Redirect from='*' to ='/'></Redirect> {/*quando uma URL diferente for digitada ele redireciona para o home*/}
  </Switch>