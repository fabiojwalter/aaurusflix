import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';

dotenv.config();

const Pagina404 = () => (
  <div>
    Pagina 404
    <a href="/">Home</a>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
